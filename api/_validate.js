// Input validation for leaderboard entries (files starting with _ are not Vercel routes)

const SUBJECT_RE = /^[a-z0-9_-]{1,32}$/;
const MAX_NAME = 20;
const MAX_TOTAL = 500;
const MIN_DURATION = 1000;
const MAX_DURATION = 24 * 60 * 60 * 1000;

function validateSubject(subject) {
  return typeof subject === 'string' && SUBJECT_RE.test(subject);
}

function isIntIn(n, min, max) {
  return Number.isInteger(n) && n >= min && n <= max;
}

function validateEntry(body) {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Body tidak valid' };
  const { subject, correct, total, durationMs } = body;
  const name = typeof body.name === 'string' ? body.name.trim() : '';

  if (!validateSubject(subject))                      return { ok: false, error: 'subject tidak valid' };
  if (name.length < 1 || name.length > MAX_NAME)      return { ok: false, error: `Nama harus 1–${MAX_NAME} karakter` };
  if (!isIntIn(total, 1, MAX_TOTAL))                  return { ok: false, error: 'total tidak valid' };
  if (!isIntIn(correct, 0, total))                    return { ok: false, error: 'correct tidak valid' };
  if (!isIntIn(durationMs, MIN_DURATION, MAX_DURATION)) return { ok: false, error: 'durationMs tidak valid' };

  return { ok: true, value: { subject, name, correct, total, durationMs } };
}

module.exports = { validateEntry, validateSubject, MAX_NAME };
