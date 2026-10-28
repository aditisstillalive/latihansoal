#!/usr/bin/env node
// Create the leaderboard table in Neon.
// Run with: npm run migrate   (reads DATABASE_URL from .env.local)

const fs = require('fs');
const path = require('path');
const { neon } = require('@neondatabase/serverless');

async function main() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL belum di-set');
  const sql = neon(process.env.DATABASE_URL);
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  for (const stmt of schema.split(';').map(s => s.trim()).filter(Boolean)) {
    await sql.query(stmt);
  }
  console.log('Migrasi selesai.');
}

main().catch(err => {
  console.error('Migrasi gagal:', err.message);
  process.exit(1);
});
