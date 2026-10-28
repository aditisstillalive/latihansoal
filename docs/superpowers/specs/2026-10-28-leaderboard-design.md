# Leaderboard + Stopwatch — Design

Tanggal: 2026-10-28

## Tujuan

Beberapa pemain bisa "balapan" mengerjakan latihan soal dari perangkat masing-masing,
kapan saja (tanpa room, tanpa mulai serentak). Hasil masuk ke leaderboard bersama
per mata pelajaran. Ranking: jumlah benar terbanyak, lalu waktu pengerjaan tercepat.

## Keputusan yang sudah disepakati

- Tidak ada timer per soal; hanya stopwatch total pengerjaan.
- Tidak ada room / mulai serentak; leaderboard bersama, main kapan saja.
- Pilihan bab dihapus: setiap peserta mengerjakan **semua soal** mata pelajaran agar adil.
- Database: **Neon Postgres** (user sudah punya akun), diakses dari Vercel Function.
- Satu pemain boleh muncul berkali-kali di leaderboard (setiap percobaan = satu baris).
- Hosting: Vercel.

## Perubahan UI (`index.html`, `app.js`, `style.css`)

### Start screen
- Tambah input **Nama** (wajib, di-trim, 1–20 karakter). Disimpan di `localStorage`
  (dibungkus try/catch) supaya terisi otomatis lain kali.
- Hapus `bab-checklist-wrap` dan seluruh logika pemilihan bab (`renderBabChecklist`,
  `getSelectedBabQuestions` diganti fungsi yang mengambil semua soal semua bab).
- `info-grid` menampilkan jumlah soal per tipe dari seluruh soal (tidak lagi dibatasi `PER_TYPE`).
- Tambah tombol **🏆 Leaderboard** yang menampilkan top 10 mata pelajaran terpilih.
- Tombol "Mulai" menolak jika nama kosong (pesan error inline, bukan `alert`).

### Quiz screen
- Semua soal dipakai; urutan tetap dikelompokkan per tipe (PG → MC → B/S) seperti sekarang,
  diacak di dalam tiap tipe.
- Header menampilkan stopwatch `⏱ mm:ss` yang mulai saat klik "Mulai Latihan" dan
  berhenti saat soal terakhir dijawab (bukan saat klik "Soal Berikutnya" terakhir).
  Waktu dihitung dari `performance.now()`; tampilan di-update tiap detik.
- Waktu membaca penjelasan antar soal tetap dihitung (sederhana dan sama untuk semua).

### Result screen
- Tampilkan skor + waktu total.
- Otomatis `POST` hasil ke `/api/leaderboard`, lalu tampilkan top 10 dan peringkat pemain
  ("Peringkatmu: #7"). Baris milik pemain disorot.
- Jika request gagal: tampilkan pesan "Gagal menyimpan ke leaderboard" + tombol "Coba lagi";
  skor lokal tetap tampil.
- "Ulangi Latihan" memulai ulang dengan nama yang sama.

## Backend

### Tabel (Neon)

```sql
CREATE TABLE IF NOT EXISTS leaderboard (
  id          SERIAL PRIMARY KEY,
  subject     TEXT        NOT NULL,
  name        TEXT        NOT NULL,
  correct     INTEGER     NOT NULL,
  total       INTEGER     NOT NULL,
  duration_ms INTEGER     NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS leaderboard_rank_idx
  ON leaderboard (subject, correct DESC, duration_ms ASC);
```

Disimpan sebagai `db/schema.sql`; dijalankan sekali lewat `node db/migrate.js`
(menggunakan `DATABASE_URL`).

### Endpoint `api/leaderboard.js` (Vercel Function, Node, CommonJS)

Driver: `@neondatabase/serverless` (HTTP `neon()`), env var `DATABASE_URL`.

- `GET /api/leaderboard?subject=bindo` → `{ entries: [{ name, correct, total, durationMs, createdAt }] }`
  top 10, urut `correct DESC, duration_ms ASC, created_at ASC`.
- `POST /api/leaderboard` body `{ subject, name, correct, total, durationMs }`
  → insert, lalu balas `{ id, rank, entries }` (rank = 1 + jumlah baris dengan
  benar lebih banyak, atau benar sama dan waktu lebih cepat).
- Method lain → 405. Input tidak valid → 400 `{ error }`. Error DB → 500 `{ error }`
  (detail hanya di log server).

### Validasi (`api/_validate.js`, tidak menjadi route karena diawali `_`)

- `subject`: string `^[a-z0-9_-]{1,32}$`.
- `name`: string, di-trim, 1–20 karakter.
- `total`: integer 1–500; `correct`: integer 0..`total`.
- `durationMs`: integer 1000..86_400_000 (1 detik s.d. 24 jam).

Skor dihitung di browser, jadi skor palsu masih mungkin dikirim oleh orang yang paham teknis.
Ini diterima untuk leaderboard antar teman (tidak ada penilaian di server).

Nama ditampilkan dengan `textContent` (tidak pernah `innerHTML`) untuk mencegah XSS.

## Testing

- Unit test `api/_validate.js` dengan `node --test` (tanpa dependency tambahan);
  `npm test` diarahkan ke situ.
- Uji manual end-to-end dengan `vercel dev` + `DATABASE_URL` Neon: isi nama, kerjakan
  semua soal, cek hasil tersimpan, ranking dan sorotan baris benar, cek tampilan saat
  API dimatikan (pesan gagal + coba lagi).

## Setup yang perlu dilakukan user

1. Buat database (atau pakai yang ada) di Neon, salin connection string.
2. Set `DATABASE_URL` di Vercel project (Production + Preview) dan di `.env.local` untuk dev.
3. Jalankan `node db/migrate.js` sekali.

## Di luar cakupan

Room / mulai serentak, timer per soal, login, penilaian di server, anti-cheat,
pagination leaderboard, hapus/moderasi entri.
