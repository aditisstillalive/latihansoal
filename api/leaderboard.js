// GET  /api/leaderboard?subject=bindo  → top 10
// POST /api/leaderboard {subject,name,correct,total,durationMs} → insert, return rank + top 10

const { neon } = require('@neondatabase/serverless');
const { validateEntry, validateSubject } = require('./_validate');

const TOP_N = 10;

async function topEntries(sql, subject) {
  const rows = await sql`
    SELECT id, name, correct, total, duration_ms, created_at
    FROM leaderboard
    WHERE subject = ${subject}
    ORDER BY correct DESC, duration_ms ASC, created_at ASC
    LIMIT ${TOP_N}`;
  return rows.map(r => ({
    id: r.id,
    name: r.name,
    correct: r.correct,
    total: r.total,
    durationMs: r.duration_ms,
    createdAt: r.created_at
  }));
}

module.exports = async function handler(req, res) {
  try {
    const sql = neon(process.env.DATABASE_URL);

    if (req.method === 'GET') {
      const subject = req.query.subject;
      if (!validateSubject(subject)) return res.status(400).json({ error: 'subject tidak valid' });
      return res.status(200).json({ entries: await topEntries(sql, subject) });
    }

    if (req.method === 'POST') {
      const v = validateEntry(req.body);
      if (!v.ok) return res.status(400).json({ error: v.error });
      const { subject, name, correct, total, durationMs } = v.value;

      const [{ id }] = await sql`
        INSERT INTO leaderboard (subject, name, correct, total, duration_ms)
        VALUES (${subject}, ${name}, ${correct}, ${total}, ${durationMs})
        RETURNING id`;
      const [{ ahead }] = await sql`
        SELECT count(*)::int AS ahead FROM leaderboard
        WHERE subject = ${subject}
          AND (correct > ${correct} OR (correct = ${correct} AND duration_ms < ${durationMs}))`;

      return res.status(200).json({ id, rank: ahead + 1, entries: await topEntries(sql, subject) });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('leaderboard error:', err);
    return res.status(500).json({ error: 'Gagal mengakses leaderboard' });
  }
};
