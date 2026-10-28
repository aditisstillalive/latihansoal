#!/usr/bin/env node
// Auto-generate subjects.json from materi/ directory structure
// Run with: node generate-manifest.js

const fs = require('fs');
const path = require('path');

const MATERI_DIR = path.join(__dirname, 'materi');
const OUTPUT_FILE = path.join(__dirname, 'subjects.json');

const SUBJECT_LABELS = {
  bindo: 'Bahasa Indonesia — Kelas IV',
  ips: 'IPS — Sejarah Kerajaan Hindu-Buddha',
  ppkn: 'PPKN — Pancasila dan Kewarganegaraan',
  matematika: 'Matematika',
  ipa: 'IPA',
  pjok: 'PJOK',
  seni: 'Seni Budaya',
  binggris: 'Bahasa Inggris',
  jawi: 'Bahasa Jawa',
  tik: 'TIK / Informatika'
};

function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function generateManifest() {
  if (!fs.existsSync(MATERI_DIR)) {
    console.error('materi/ directory not found');
    process.exit(1);
  }

  const entries = fs.readdirSync(MATERI_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name.toLowerCase());

  const manifest = {};

  entries.forEach(dirName => {
    const key = dirName.toLowerCase();
    const label = SUBJECT_LABELS[key] || toTitleCase(key.replace(/-/g, ' '));
    const questionFile = `questions_${key}.js`;

    manifest[key] = {
      name: label,
      questionFile: questionFile
    };
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
  console.log('Generated subjects.json:');
  console.log(JSON.stringify(manifest, null, 2));
  console.log('\nNote: Create question files (questions_<key>.js) for each subject.');
}

generateManifest();