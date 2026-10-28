const test = require('node:test');
const assert = require('node:assert');
const { validateEntry, validateSubject } = require('./_validate');

const valid = { subject: 'bindo', name: '  Budi  ', correct: 25, total: 30, durationMs: 300000 };

test('accepts a valid entry and trims the name', () => {
  const r = validateEntry(valid);
  assert.deepStrictEqual(r, { ok: true, value: { subject: 'bindo', name: 'Budi', correct: 25, total: 30, durationMs: 300000 } });
});

test('rejects missing body', () => {
  assert.strictEqual(validateEntry(null).ok, false);
  assert.strictEqual(validateEntry('x').ok, false);
});

test('rejects bad subject', () => {
  for (const subject of ['', 'BINDO', 'a b', 'x'.repeat(33), 5, undefined]) {
    assert.strictEqual(validateEntry({ ...valid, subject }).ok, false, `subject ${subject}`);
  }
});

test('rejects bad name', () => {
  for (const name of ['', '   ', 'x'.repeat(21), 7, undefined]) {
    assert.strictEqual(validateEntry({ ...valid, name }).ok, false, `name ${name}`);
  }
  assert.strictEqual(validateEntry({ ...valid, name: 'x'.repeat(20) }).ok, true);
});

test('rejects bad total/correct', () => {
  assert.strictEqual(validateEntry({ ...valid, total: 0 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, total: 501 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, total: 30.5 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, correct: -1 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, correct: 31 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, correct: '25' }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, correct: 0 }).ok, true);
  assert.strictEqual(validateEntry({ ...valid, correct: 30 }).ok, true);
});

test('rejects bad durationMs', () => {
  assert.strictEqual(validateEntry({ ...valid, durationMs: 999 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, durationMs: 86400001 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, durationMs: 1500.5 }).ok, false);
  assert.strictEqual(validateEntry({ ...valid, durationMs: 1000 }).ok, true);
});

test('validateSubject', () => {
  assert.strictEqual(validateSubject('bindo'), true);
  assert.strictEqual(validateSubject('Bindo'), false);
  assert.strictEqual(validateSubject(undefined), false);
});
