#!/usr/bin/env node
/**
 * Generate quiz questions from PDF files in materi/ directory
 * 
 * Usage:
 *   NEON_AI_GATEWAY_TOKEN=xxx NEON_AI_GATEWAY_BASE_URL=https://xxx node generate-questions-from-pdf.js
 * 
 * Or with OpenAI:
 *   OPENAI_API_KEY=xxx node generate-questions-from-pdf.js
 * 
 * Or with custom endpoint:
 *   LLM_API_KEY=xxx LLM_BASE_URL=https://xxx node generate-questions-from-pdf.js
 */

const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const OpenAI = require('openai');

const MATERI_DIR = path.join(__dirname, 'materi');
const OUTPUT_DIR = __dirname;

// LLM Configuration - supports Neon AI Gateway, OpenAI, OpenRouter, or any OpenAI-compatible endpoint
const llmConfig = {
  apiKey: process.env.NEON_AI_GATEWAY_TOKEN || process.env.OPENAI_API_KEY || process.env.OPENROUTER_API_KEY || process.env.LLM_API_KEY,
  baseURL: process.env.NEON_AI_GATEWAY_BASE_URL 
    ? `${process.env.NEON_AI_GATEWAY_BASE_URL}/v1`
    : (process.env.OPENROUTER_API_KEY ? 'https://openrouter.ai/api/v1' : (process.env.LLM_BASE_URL || 'https://api.openai.com/v1')),
  model: process.env.LLM_MODEL || 'nvidia/nemotron-3.5-super-vl:free'
};

if (!llmConfig.apiKey) {
  console.error('❌ No API key found. Set one of:');
  console.error('  NEON_AI_GATEWAY_TOKEN (for Neon AI Gateway)');
  console.error('  OPENAI_API_KEY (for OpenAI)');
  console.error('  OPENROUTER_API_KEY (for OpenRouter)');
  console.error('  LLM_API_KEY (for custom OpenAI-compatible endpoint)');
  console.error('\nAlso set LLM_BASE_URL and LLM_MODEL if using custom endpoint.');
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: llmConfig.apiKey,
  baseURL: llmConfig.baseURL
});

const SUBJECT_LABELS = {
  bindo: 'Bahasa Indonesia — Kelas IV',
  ips: 'IPS — Sejarah Kerajaan Hindu-Buddha',
  ppkn: 'PPKN — Pancasila dan Kewarganegaraan',
  matematika: 'Matematika',
  mtk: 'Matematika — Kelas IV',
  ipa: 'IPA',
  ipas: 'IPAS — Kelas IV',
  pjok: 'PJOK',
  seni: 'Seni Budaya',
  binggris: 'Bahasa Inggris',
  jawi: 'Bahasa Jawa',
  tik: 'TIK / Informatika'
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

async function extractTextFromPDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

function getPDFFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getPDFFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.pdf')) {
      files.push(fullPath);
    }
  }
  return files;
}

function getSubjectKeyFromPath(pdfPath) {
  const relativePath = path.relative(MATERI_DIR, pdfPath);
  const subjectDir = relativePath.split(path.sep)[0].toLowerCase();
  return subjectDir;
}

const QUESTION_GENERATION_PROMPT = `Anda adalah pembuat soal ujian untuk siswa sekolah dasar Indonesia.
Dari teks materi pelajaran berikut, buatlah soal-soal latihan dengan kriteria:

1. **Jumlah**: 10 soal Pilihan Ganda (single), 10 soal Multiple Choice (multiple), 10 soal Benar/Salah (truefalse) = total 30 soal
2. **Tingkat kesulitan**: Campuran mudah, sedang, sulit
3. **Format output**: HANYA JSON valid, tanpa markdown, tanpa penjelasan tambahan

Struktur JSON yang diharapkan:
{
  "subjectKey": "nama_subject",
  "subjectName": "Nama Mata Pelajaran",
  "bab": [
    {
      "id": 1,
      "name": "Nama Bab/Topik",
      "questions": [
        {
          "id": 1,
          "type": "single",
          "question": "Pertanyaan...",
          "options": ["A", "B", "C", "D"],
          "answer": 0,
          "explanation": "Penjelasan jawaban..."
        },
        {
          "id": 2,
          "type": "multiple",
          "question": "Pertanyaan...",
          "options": ["Opsi 1", "Opsi 2", "Opsi 3", "Opsi 4"],
          "answer": [0, 2],
          "explanation": "Penjelasan jawaban..."
        },
        {
          "id": 3,
          "type": "truefalse",
          "question": "Pernyataan...",
          "options": [],
          "answer": true,
          "explanation": "Penjelasan jawaban..."
        }
      ]
    }
  ]
}

Catatan penting:
- Untuk type "single": answer adalah index (0-3) dari opsi yang benar
- Untuk type "multiple": answer adalah array index (0-3) dari SEMUA opsi yang benar (minimal 2)
- Untuk type "truefalse": answer adalah boolean (true/false), options dikosongkan []
- Pastikan soal mencakup seluruh isi materi PDF
- Gunakan bahasa Indonesia yang baik dan baku
- Explanation harus jelas dan edukatif

MATERI:`;

async function generateQuestionsFromText(subjectKey, subjectName, text) {
  const prompt = QUESTION_GENERATION_PROMPT + '\n\n' + text.substring(0, 15000);
  
  console.log(`🤖 Generating questions for ${subjectName} using ${llmConfig.model}...`);
  
  try {
    const response = await openai.chat.completions.create({
      model: llmConfig.model,
      messages: [
        { role: 'system', content: 'Anda adalah asisten pembuat soal ujian yang mengeluarkan HANYA JSON valid.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 16000,
      response_format: { type: 'json_object' }
    });

    const content = response.choices[0].message.content;
    console.log('   Raw response:', content.substring(0, 500));
    const parsed = JSON.parse(content);
    
    // Validate structure
    if (!parsed.bab || !Array.isArray(parsed.bab)) {
      throw new Error('Invalid response structure: missing bab array');
    }
    
    return parsed;
  } catch (err) {
    console.error(`❌ Failed to generate questions for ${subjectName}:`, err.message);
    if (err.response) {
      console.error('Response:', err.response.data);
    }
    throw err;
  }
}

function writeQuestionFile(subjectKey, data) {
  const outputPath = path.join(OUTPUT_DIR, `questions_${subjectKey}.js`);
  const jsContent = `const subjects = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outputPath, jsContent);
  console.log(`✅ Written: ${outputPath}`);
}

function updateSubjectsManifest(subjectsData) {
  const manifestPath = path.join(OUTPUT_DIR, 'subjects.json');
  const manifest = {};
  
  for (const [key, data] of Object.entries(subjectsData)) {
    manifest[key] = {
      name: data.subjectName || SUBJECT_LABELS[key] || toTitleCase(key),
      questionFile: `questions_${key}.js`
    };
  }
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Updated: ${manifestPath}`);
}

async function main() {
  console.log('📚 PDF Question Generator');
  console.log('==========================\n');
  
  if (!fs.existsSync(MATERI_DIR)) {
    console.error(`❌ Materi directory not found: ${MATERI_DIR}`);
    process.exit(1);
  }

  const pdfFiles = getPDFFiles(MATERI_DIR);
  
  if (pdfFiles.length === 0) {
    console.log('⚠️  No PDF files found in materi/');
    process.exit(0);
  }

  console.log(`Found ${pdfFiles.length} PDF file(s):`);
  pdfFiles.forEach(f => console.log(`  - ${path.relative(MATERI_DIR, f)}`));
  console.log();

  const subjectsData = {};

  for (const pdfFile of pdfFiles) {
    const subjectKey = getSubjectKeyFromPath(pdfFile);
    const subjectName = SUBJECT_LABELS[subjectKey] || toTitleCase(subjectKey.replace(/-/g, ' '));
    
    console.log(`\n📄 Processing: ${path.relative(MATERI_DIR, pdfFile)}`);
    console.log(`   Subject: ${subjectName} (${subjectKey})`);
    
    try {
      const text = await extractTextFromPDF(pdfFile);
      console.log(`   Extracted ${text.length} characters`);
      
      if (text.trim().length < 100) {
        console.log('   ⚠️  Text too short, skipping...');
        continue;
      }
      
      const questionData = await generateQuestionsFromText(subjectKey, subjectName, text);
      questionData.subjectKey = subjectKey;
      questionData.subjectName = subjectName;
      
      writeQuestionFile(subjectKey, { [subjectKey]: questionData });
      subjectsData[subjectKey] = questionData;
      
    } catch (err) {
      console.error(`   ❌ Error: ${err.message}`);
    }
  }

  if (Object.keys(subjectsData).length > 0) {
    updateSubjectsManifest(subjectsData);
    console.log('\n🎉 Done! Restart your web server to load new questions.');
  } else {
    console.log('\n⚠️  No questions generated.');
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});