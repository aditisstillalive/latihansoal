let currentIndex = 0;
let score = 0;
let scores = { pg: 0, mc: 0, bs: 0 };
let selectedOptions = [];
let answered = false;
let activeQuestions = [];
let subjectsManifest = {};
let currentSubjectData = null;
let playerName = '';
let startTime = 0;
let elapsedMs = 0;
let stopwatchTimer = null;
let lastResult = null;

const COLORS = ['c0', 'c1', 'c2', 'c3'];
const LETTERS = ['A', 'B', 'C', 'D'];
const NAME_KEY = 'latihansoal.playerName';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns a copy of q with options in random order and answer indices remapped.
// True/false questions keep their fixed Benar/Salah buttons.
function shuffleOptions(q) {
  if (q.type === 'truefalse') return q;
  const order = shuffle(q.options.map((_, i) => i));
  const newIndex = oldIdx => order.indexOf(oldIdx);
  return {
    ...q,
    options: order.map(i => q.options[i]),
    answer: Array.isArray(q.answer) ? q.answer.map(newIndex) : newIndex(q.answer)
  };
}

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function currentSubjectKey() {
  return document.getElementById('subject-select').value;
}

async function loadSubjectsManifest() {
  try {
    const response = await fetch('subjects.json');
    subjectsManifest = await response.json();
    populateSubjectSelect();
    const firstKey = Object.keys(subjectsManifest)[0];
    await loadSubjectData(firstKey);
    updateQuestionCounts();
  } catch (err) {
    console.error('Failed to load subjects manifest:', err);
    document.getElementById('subject-subtitle').textContent = 'Gagal memuat daftar mata pelajaran';
  }
}

function populateSubjectSelect() {
  const select = document.getElementById('subject-select');
  select.innerHTML = '';
  Object.entries(subjectsManifest).forEach(([key, subject]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = subject.name;
    select.appendChild(opt);
  });
  select.addEventListener('change', async (e) => {
    await loadSubjectData(e.target.value);
    updateQuestionCounts();
  });
}

async function loadSubjectData(subjectKey) {
  const manifestEntry = subjectsManifest[subjectKey];
  if (!manifestEntry || !manifestEntry.questionFile) {
    console.error('No question file for subject:', subjectKey);
    currentSubjectData = { bab: [{ id: 1, name: 'Default', questions: [] }] };
    return;
  }
  try {
    const response = await fetch(manifestEntry.questionFile);
    const source = await response.text();
    // Evaluate in its own scope so each file's `const subjects` doesn't collide
    const subjects = new Function(`${source}\nreturn subjects;`)();
    currentSubjectData = subjects[subjectKey];
  } catch (err) {
    console.error('Failed to load subject data:', err);
    currentSubjectData = { bab: [{ id: 1, name: 'Default', questions: [] }] };
  }
}

function getAllQuestions() {
  return currentSubjectData?.bab.flatMap(bab => bab.questions) || [];
}

function updateQuestionCounts() {
  const questions = getAllQuestions();
  const countOf = type => questions.filter(q => q.type === type).length;
  document.getElementById('pg-count').textContent = countOf('single');
  document.getElementById('mc-count').textContent = countOf('multiple');
  document.getElementById('bs-count').textContent = countOf('truefalse');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function readPlayerName() {
  const input = document.getElementById('player-name');
  const name = input.value.trim();
  const valid = name.length > 0;
  input.classList.toggle('invalid', !valid);
  document.getElementById('name-error').style.display = valid ? 'none' : 'block';
  if (!valid) { input.focus(); return null; }
  try { localStorage.setItem(NAME_KEY, name); } catch { /* storage unavailable */ }
  return name;
}

function startQuiz() {
  const name = readPlayerName();
  if (!name) { showScreen('start-screen'); return; }
  playerName = name;

  currentIndex = 0;
  score = 0;
  scores = { pg: 0, mc: 0, bs: 0 };

  const pool = { single: [], multiple: [], truefalse: [] };
  getAllQuestions().forEach(q => pool[q.type].push(q));
  activeQuestions = [
    ...shuffle(pool.single),
    ...shuffle(pool.multiple),
    ...shuffle(pool.truefalse)
  ].map(shuffleOptions);

  if (activeQuestions.length === 0) {
    alert('Tidak ada soal tersedia untuk mata pelajaran ini. Silakan pilih mata pelajaran lain.');
    return;
  }

  showScreen('quiz-screen');
  renderQuestion();
  startStopwatch();
}

function startStopwatch() {
  clearInterval(stopwatchTimer);
  startTime = performance.now();
  elapsedMs = 0;
  const el = document.getElementById('stopwatch');
  el.textContent = '⏱ 00:00';
  stopwatchTimer = setInterval(() => {
    el.textContent = `⏱ ${formatTime(performance.now() - startTime)}`;
  }, 250);
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
  elapsedMs = Math.round(performance.now() - startTime);
  document.getElementById('stopwatch').textContent = `⏱ ${formatTime(elapsedMs)}`;
}

function renderQuestion() {
  answered = false;
  selectedOptions = [];

  const q = activeQuestions[currentIndex];
  const total = activeQuestions.length;

  document.getElementById('question-counter').textContent = `Soal ${currentIndex + 1} / ${total}`;
  document.getElementById('question-type-badge').textContent =
    q.type === 'single'   ? 'Pilihan Ganda' :
    q.type === 'multiple' ? 'Multiple Choice' : 'Benar / Salah';

  document.getElementById('score-val').textContent = score;
  document.getElementById('progress-bar').style.width = `${(currentIndex / total) * 100}%`;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('multiple-hint').style.display = q.type === 'multiple' ? 'block' : 'none';

  const fb = document.getElementById('feedback-box');
  fb.style.display = 'none';
  fb.className = 'feedback-box';

  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('submit-btn').style.display = q.type === 'multiple' ? 'inline-block' : 'none';

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  if (q.type === 'truefalse') {
    [['✓ Benar', true, 3], ['✗ Salah', false, 0]].forEach(([label, val, ci]) => {
      const btn = document.createElement('button');
      btn.className = `option-btn ${COLORS[ci]}`;
      btn.innerHTML = `<span class="ltr">${val ? '✓' : '✗'}</span>${label}`;
      btn.addEventListener('click', () => handleTrueFalse(btn, val, q));
      container.appendChild(btn);
    });
  } else if (q.type === 'single') {
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = `option-btn ${COLORS[i]}`;
      btn.innerHTML = `<span class="ltr">${LETTERS[i]}</span>${opt}`;
      btn.addEventListener('click', () => handleSingle(btn, i, q));
      container.appendChild(btn);
    });
  } else {
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn cb';
      btn.dataset.idx = i;
      btn.innerHTML = `<span class="ltr">${LETTERS[i]}</span>${opt}`;
      btn.addEventListener('click', () => toggleMultiple(btn, i));
      container.appendChild(btn);
    });
  }
}

function allButtons() {
  return document.querySelectorAll('#options-container .option-btn');
}

function disableAll() {
  allButtons().forEach(b => b.disabled = true);
}

function handleSingle(btn, index, q) {
  if (answered) return;
  answered = true;
  disableAll();

  const correct = index === q.answer;
  btn.classList.add(correct ? 'ok' : 'bad');
  if (!correct) allButtons()[q.answer].classList.add('show-ok');

  onAnswered(q, correct);
}

function handleTrueFalse(btn, value, q) {
  if (answered) return;
  answered = true;
  disableAll();

  const correct = value === q.answer;
  btn.classList.add(correct ? 'ok' : 'bad');
  if (!correct) {
    const btns = allButtons();
    (q.answer === true ? btns[0] : btns[1]).classList.add('show-ok');
  }

  onAnswered(q, correct);
}

function toggleMultiple(btn, index) {
  if (answered) return;
  const i = selectedOptions.indexOf(index);
  if (i === -1) { selectedOptions.push(index); btn.classList.add('sel'); }
  else          { selectedOptions.splice(i, 1);  btn.classList.remove('sel'); }
}

function submitMultiple() {
  if (answered) return;
  answered = true;
  disableAll();

  const q = activeQuestions[currentIndex];
  const correctSet = new Set(q.answer);
  const selectedSet = new Set(selectedOptions);
  const isCorrect = q.answer.length === selectedOptions.length &&
                    q.answer.every(a => selectedSet.has(a));

  allButtons().forEach((btn, i) => {
    if (correctSet.has(i) && selectedSet.has(i))       btn.classList.add('ok');
    else if (!correctSet.has(i) && selectedSet.has(i)) btn.classList.add('bad');
    else if (correctSet.has(i) && !selectedSet.has(i)) btn.classList.add('show-ok');
  });

  document.getElementById('submit-btn').style.display = 'none';
  onAnswered(q, isCorrect);
}

function onAnswered(q, correct) {
  const isLast = currentIndex === activeQuestions.length - 1;
  if (isLast) stopStopwatch();
  recordScore(q.type, correct);
  showFeedback(correct, q.explanation);
  const next = document.getElementById('next-btn');
  next.textContent = isLast ? 'Lihat Hasil 🏁' : 'Soal Berikutnya →';
  next.style.display = 'inline-block';
}

function recordScore(type, correct) {
  if (!correct) return;
  score++;
  if (type === 'single')        scores.pg++;
  else if (type === 'multiple') scores.mc++;
  else                          scores.bs++;
  document.getElementById('score-val').textContent = score;
}

function showFeedback(correct, explanation) {
  const fb = document.getElementById('feedback-box');
  fb.style.display = 'block';
  fb.className = `feedback-box ${correct ? 'fb-ok' : 'fb-bad'}`;
  document.getElementById('feedback-icon').textContent = correct ? '✅' : '❌';
  const ft = document.getElementById('feedback-text');
  ft.textContent = correct ? 'Benar!' : 'Salah!';
  ft.style.color = correct ? '#2ecc71' : '#e74c3c';
  document.getElementById('explanation-text').textContent = explanation;
  fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= activeQuestions.length) showResults();
  else renderQuestion();
}

function showResults() {
  showScreen('result-screen');
  document.getElementById('progress-bar').style.width = '100%';
  document.getElementById('final-score').textContent = score;
  document.getElementById('score-total').textContent = `/ ${activeQuestions.length}`;
  const pct = Math.round((score / activeQuestions.length) * 100);
  document.getElementById('score-pct').textContent = `${pct}% Jawaban Benar`;
  document.getElementById('final-time').textContent = formatTime(elapsedMs);
  const countOf = type => activeQuestions.filter(q => q.type === type).length;
  document.getElementById('pg-score').textContent = `${scores.pg} / ${countOf('single')}`;
  document.getElementById('mc-score').textContent = `${scores.mc} / ${countOf('multiple')}`;
  document.getElementById('bs-score').textContent = `${scores.bs} / ${countOf('truefalse')}`;

  const msgs = [
    [90, '🏆', 'Luar biasa! Kamu menguasai materi ini dengan sangat baik!'],
    [75, '🎉', 'Bagus sekali! Sedikit lagi sempurna!'],
    [60, '👍', 'Cukup baik! Pelajari lagi bagian yang belum dikuasai.'],
    [40, '📚', 'Terus belajar! Ulangi materi dan coba lagi.'],
    [ 0, '💪', 'Jangan menyerah! Baca materi lebih teliti dan coba lagi ya!']
  ];

  const [, emoji, msg] = msgs.find(([min]) => pct >= min);
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-msg').textContent = msg;

  lastResult = {
    subject: currentSubjectKey(),
    name: playerName,
    correct: score,
    total: activeQuestions.length,
    durationMs: Math.max(elapsedMs, 1000)
  };
  submitResult();
}

// ── LEADERBOARD ──

async function submitResult() {
  const rankEl = document.getElementById('my-rank');
  const board = document.getElementById('result-board');
  const retryBtn = document.getElementById('retry-submit-btn');
  retryBtn.style.display = 'none';
  rankEl.textContent = 'Menyimpan hasil...';
  board.innerHTML = '';

  try {
    const res = await fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lastResult)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    rankEl.textContent = `Peringkatmu: #${data.rank}`;
    renderBoard(board, data.entries, data.id);
  } catch (err) {
    console.error('Failed to submit result:', err);
    rankEl.textContent = 'Gagal menyimpan ke leaderboard.';
    retryBtn.style.display = 'inline-block';
  }
}

async function showLeaderboard() {
  const subjectKey = currentSubjectKey();
  document.getElementById('lb-subject').textContent = subjectsManifest[subjectKey]?.name || '';
  const board = document.getElementById('lb-board');
  board.innerHTML = '<p class="lb-empty">Memuat...</p>';
  showScreen('leaderboard-screen');

  try {
    const res = await fetch(`/api/leaderboard?subject=${encodeURIComponent(subjectKey)}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
    renderBoard(board, data.entries, null);
  } catch (err) {
    console.error('Failed to load leaderboard:', err);
    board.innerHTML = '<p class="lb-empty">Gagal memuat leaderboard. Coba lagi nanti.</p>';
  }
}

function renderBoard(container, entries, myId) {
  container.innerHTML = '';
  if (!entries.length) {
    container.innerHTML = '<p class="lb-empty">Belum ada yang main. Jadilah yang pertama!</p>';
    return;
  }

  const table = document.createElement('table');
  table.className = 'lb-table';
  const head = table.createTHead().insertRow();
  ['#', 'Nama', 'Benar', 'Waktu'].forEach(h => {
    const th = document.createElement('th');
    th.textContent = h;
    head.appendChild(th);
  });

  const body = table.createTBody();
  const medals = ['🥇', '🥈', '🥉'];
  entries.forEach((e, i) => {
    const row = body.insertRow();
    if (e.id === myId) row.className = 'me';
    [medals[i] || i + 1, e.name, `${e.correct}/${e.total}`, formatTime(e.durationMs)]
      .forEach(text => { row.insertCell().textContent = text; });
  });
  container.appendChild(table);
}

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', startQuiz);
document.getElementById('submit-btn').addEventListener('click', submitMultiple);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('leaderboard-btn').addEventListener('click', showLeaderboard);
document.getElementById('lb-back-btn').addEventListener('click', () => showScreen('start-screen'));
document.getElementById('home-btn').addEventListener('click', () => showScreen('start-screen'));
document.getElementById('retry-submit-btn').addEventListener('click', submitResult);
document.getElementById('player-name').addEventListener('input', e => {
  if (e.target.value.trim()) {
    e.target.classList.remove('invalid');
    document.getElementById('name-error').style.display = 'none';
  }
});

try { document.getElementById('player-name').value = localStorage.getItem(NAME_KEY) || ''; }
catch { /* storage unavailable */ }

loadSubjectsManifest();