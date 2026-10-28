#!/usr/bin/env node
// Local dev server: serves static files and routes /api/<name> to api/<name>.js
// with a minimal Vercel-style req/res. Run with: npm run dev  (PORT=3000 by default)

try { process.loadEnvFile('.env.local'); } catch { /* optional */ }

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf', '.png': 'image/png', '.svg': 'image/svg+xml'
};

function withVercelHelpers(res) {
  res.status = code => { res.statusCode = code; return res; };
  res.json = obj => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(obj));
    return res;
  };
  return res;
}

async function handleApi(req, res, url) {
  const name = url.pathname.slice('/api/'.length);
  if (!/^[a-z0-9-]+$/.test(name)) return res.status(404).json({ error: 'Not found' });
  const file = path.join(ROOT, 'api', `${name}.js`);
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'Not found' });

  let raw = '';
  for await (const chunk of req) raw += chunk;
  req.query = Object.fromEntries(url.searchParams);
  try { req.body = raw ? JSON.parse(raw) : undefined; }
  catch { return res.status(400).json({ error: 'JSON tidak valid' }); }

  return require(file)(req, res);
}

function serveStatic(res, url) {
  const rel = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT + path.sep) || path.basename(file).startsWith('.')) {
    res.statusCode = 403; return res.end('Forbidden');
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.statusCode = 404; return res.end('Not found'); }
    res.setHeader('Content-Type', TYPES[path.extname(file)] || 'application/octet-stream');
    res.end(data);
  });
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  withVercelHelpers(res);
  if (url.pathname.startsWith('/api/')) {
    handleApi(req, res, url).catch(err => {
      console.error(err);
      if (!res.headersSent) res.status(500).json({ error: 'Server error' });
    });
  } else {
    serveStatic(res, url);
  }
}).listen(PORT, () => console.log(`Dev server: http://localhost:${PORT}`));
