const subjects = {
  "mtk": {
    "subjectKey": "mtk",
    "subjectName": "Matematika — Kelas IV",
    "bab": [
      {
        "id": 1,
        "name": "Pecahan (Sumatif Harian 3)",
        "questions": [
          {
            "id": 1,
            "type": "single",
            "question": "Sebuah lingkaran dibagi menjadi 8 bagian sama besar, dan 3 bagian diarsir. Pecahan bagian yang diarsir adalah...",
            "options": ["3/8", "5/8", "8/3", "3/5"],
            "answer": 0,
            "explanation": "Bagian yang diarsir (3) menjadi pembilang, dan seluruh bagian (8) menjadi penyebut, jadi 3/8."
          },
          {
            "id": 2,
            "type": "single",
            "question": "Penyebut dari pecahan 17/25 adalah...",
            "options": ["17", "25", "42", "8"],
            "answer": 1,
            "explanation": "Penyebut adalah bilangan di bawah garis pecahan. Pada 17/25, penyebutnya 25 dan pembilangnya 17."
          },
          {
            "id": 3,
            "type": "single",
            "question": "Pecahan yang senilai dengan 3/4 dan berpenyebut 12 adalah...",
            "options": ["6/12", "8/12", "9/12", "12/12"],
            "answer": 2,
            "explanation": "4 × 3 = 12, maka pembilang juga dikali 3: 3 × 3 = 9. Jadi 3/4 = 9/12."
          },
          {
            "id": 4,
            "type": "single",
            "question": "Bentuk pecahan campuran dari 22/7 adalah...",
            "options": ["2 1/7", "3 2/7", "4 1/7", "3 1/7"],
            "answer": 3,
            "explanation": "22 : 7 = 3 sisa 1. Hasil bagi menjadi bilangan bulat dan sisanya menjadi pembilang, jadi 3 1/7."
          },
          {
            "id": 5,
            "type": "single",
            "question": "Bentuk pecahan biasa dari 4 2/5 adalah...",
            "options": ["22/5", "42/5", "20/5", "8/5"],
            "answer": 0,
            "explanation": "(4 × 5) + 2 = 22, penyebut tetap 5. Jadi 4 2/5 = 22/5."
          },
          {
            "id": 6,
            "type": "single",
            "question": "Bentuk desimal dari 4/5 adalah...",
            "options": ["0,45", "0,8", "0,08", "4,5"],
            "answer": 1,
            "explanation": "Ubah penyebut menjadi 10: 4/5 = (4 × 2)/(5 × 2) = 8/10 = 0,8."
          },
          {
            "id": 7,
            "type": "single",
            "question": "Bilangan desimal 0,65 diubah ke pecahan biasa paling sederhana menjadi...",
            "options": ["65/10", "6/5", "13/20", "13/25"],
            "answer": 2,
            "explanation": "0,65 = 65/100. Pembilang dan penyebut dibagi 5: 65/100 = 13/20."
          },
          {
            "id": 8,
            "type": "single",
            "question": "Bentuk pecahan biasa paling sederhana dari 75% adalah...",
            "options": ["7/5", "3/5", "1/4", "3/4"],
            "answer": 3,
            "explanation": "75% = 75/100. Pembilang dan penyebut dibagi 25: 75/100 = 3/4."
          },
          {
            "id": 9,
            "type": "single",
            "question": "Hasil dari 1/2 + 1/3 adalah...",
            "options": ["2/5", "5/6", "2/6", "1/6"],
            "answer": 1,
            "explanation": "KPK dari 2 dan 3 adalah 6. 1/2 = 3/6 dan 1/3 = 2/6, sehingga 3/6 + 2/6 = 5/6."
          },
          {
            "id": 10,
            "type": "single",
            "question": "Hasil dari 5 4/9 − 2 1/9 adalah...",
            "options": ["3 1/3", "3 5/9", "7 5/9", "2 1/3"],
            "answer": 0,
            "explanation": "Bilangan bulat: 5 − 2 = 3. Pecahan: 4/9 − 1/9 = 3/9. Hasilnya 3 3/9, disederhanakan menjadi 3 1/3."
          },
          {
            "id": 11,
            "type": "multiple",
            "question": "Pilih semua pecahan yang senilai dengan 2/3!",
            "options": ["4/6", "6/9", "3/4", "8/12"],
            "answer": [0, 1, 3],
            "explanation": "2/3 dikali 2/2 = 4/6, dikali 3/3 = 6/9, dikali 4/4 = 8/12. Sedangkan 3/4 tidak senilai dengan 2/3."
          },
          {
            "id": 12,
            "type": "multiple",
            "question": "Pilih semua pecahan yang nilainya LEBIH BESAR dari 1/2!",
            "options": ["3/4", "2/5", "5/8", "1/3"],
            "answer": [0, 2],
            "explanation": "1/2 = 4/8. 3/4 = 6/8 dan 5/8 lebih besar dari 4/8. Sedangkan 2/5 = 0,4 dan 1/3 lebih kecil dari 1/2."
          },
          {
            "id": 13,
            "type": "multiple",
            "question": "Pilih semua bentuk yang nilainya sama dengan 3/4!",
            "options": ["0,75", "75%", "0,34", "6/8"],
            "answer": [0, 1, 3],
            "explanation": "3/4 = 75/100 = 0,75 = 75%, dan 3/4 = 6/8. Bilangan 0,34 tidak sama dengan 3/4."
          },
          {
            "id": 14,
            "type": "multiple",
            "question": "Pilih semua bentuk yang nilainya sama dengan 20%!",
            "options": ["1/5", "0,2", "2/100", "20/100"],
            "answer": [0, 1, 3],
            "explanation": "20% = 20/100 = 1/5 = 0,2. Sedangkan 2/100 = 2%."
          },
          {
            "id": 15,
            "type": "multiple",
            "question": "Pilih semua perbandingan pecahan yang BENAR!",
            "options": ["3/5 < 4/5", "3/4 > 2/3", "1/6 > 2/6", "5/8 > 3/4"],
            "answer": [0, 1],
            "explanation": "3/5 < 4/5 karena penyebutnya sama dan 3 < 4. 3/4 = 9/12 > 2/3 = 8/12. Sedangkan 1/6 < 2/6, dan 5/8 < 6/8 = 3/4."
          },
          {
            "id": 16,
            "type": "multiple",
            "question": "Pilih semua langkah yang benar untuk menjumlahkan pecahan yang penyebutnya berbeda!",
            "options": [
              "Samakan penyebut menggunakan KPK",
              "Jumlahkan pembilangnya setelah penyebut sama",
              "Jumlahkan penyebutnya juga",
              "Kalikan pembilang dengan penyebut"
            ],
            "answer": [0, 1],
            "explanation": "Samakan penyebut dengan KPK, lalu jumlahkan pembilangnya saja. Penyebut tidak ikut dijumlahkan."
          },
          {
            "id": 17,
            "type": "multiple",
            "question": "Pilih semua perubahan pecahan ke desimal yang BENAR!",
            "options": ["7/20 = 0,35", "13/50 = 0,26", "1/4 = 0,4", "1/2 = 0,2"],
            "answer": [0, 1],
            "explanation": "7/20 = 35/100 = 0,35 dan 13/50 = 26/100 = 0,26. Sedangkan 1/4 = 0,25 dan 1/2 = 0,5."
          },
          {
            "id": 18,
            "type": "multiple",
            "question": "Pilih semua yang nilainya sama dengan 3 1/2!",
            "options": ["7/2", "3 3/6", "6 5/6 − 3 2/6", "5/2"],
            "answer": [0, 1, 2],
            "explanation": "3 1/2 = 7/2 = 3 3/6. Hasil 6 5/6 − 3 2/6 = 3 3/6 = 3 1/2. Sedangkan 5/2 = 2 1/2."
          },
          {
            "id": 19,
            "type": "multiple",
            "question": "Pilih semua bentuk yang senilai dengan hasil 3/8 + 2/8!",
            "options": ["5/8", "10/16", "5/16", "1/8"],
            "answer": [0, 1],
            "explanation": "Penyebutnya sudah sama, jadi 3/8 + 2/8 = 5/8, dan 5/8 = 10/16. Penyebut tidak dijumlahkan, jadi 5/16 salah."
          },
          {
            "id": 20,
            "type": "multiple",
            "question": "Pilih semua pecahan yang LEBIH KECIL dari 5/8!",
            "options": ["1/2", "3/8", "3/4", "7/8"],
            "answer": [0, 1],
            "explanation": "Samakan penyebut menjadi 8: 1/2 = 4/8 dan 3/8 lebih kecil dari 5/8. Sedangkan 3/4 = 6/8 dan 7/8 lebih besar."
          },
          {
            "id": 21,
            "type": "truefalse",
            "question": "Untuk mencari pecahan senilai, pembilang dan penyebut dikalikan atau dibagi dengan angka yang sama.",
            "options": [],
            "answer": true,
            "explanation": "Benar. Contoh: 2/3 = (2 × 2)/(3 × 2) = 4/6."
          },
          {
            "id": 22,
            "type": "truefalse",
            "question": "Penyebut dari pecahan 17/25 adalah 17.",
            "options": [],
            "answer": false,
            "explanation": "Salah. 17 adalah pembilang. Penyebutnya adalah 25."
          },
          {
            "id": 23,
            "type": "truefalse",
            "question": "Pecahan 2/3 senilai dengan 4/6.",
            "options": [],
            "answer": true,
            "explanation": "Benar. Pembilang dan penyebut 2/3 dikali 2 menjadi 4/6."
          },
          {
            "id": 24,
            "type": "truefalse",
            "question": "Di kelas ada 40 siswa dan 10 siswa senang matematika. Persentase siswa yang senang matematika adalah 25%.",
            "options": [],
            "answer": true,
            "explanation": "Benar. 10/40 × 100% = 25%."
          },
          {
            "id": 25,
            "type": "truefalse",
            "question": "Bentuk persen dari pecahan 3/20 adalah 15%.",
            "options": [],
            "answer": true,
            "explanation": "Benar. 3/20 = (3 × 5)/(20 × 5) = 15/100 = 15%."
          },
          {
            "id": 26,
            "type": "truefalse",
            "question": "Urutan pecahan 2/6, 5/6, 1/6, 4/6 dari yang TERBESAR adalah 1/6, 2/6, 4/6, 5/6.",
            "options": [],
            "answer": false,
            "explanation": "Salah. Itu urutan dari yang terkecil. Dari yang terbesar: 5/6, 4/6, 2/6, 1/6."
          },
          {
            "id": 27,
            "type": "truefalse",
            "question": "1/2 + 1/3 = 2/5, karena pembilang dan penyebutnya dijumlahkan.",
            "options": [],
            "answer": false,
            "explanation": "Salah. Penyebut disamakan dulu: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
          },
          {
            "id": 28,
            "type": "truefalse",
            "question": "Tanah seluas 2/3 hektar lebih luas daripada tanah seluas 3/4 hektar.",
            "options": [],
            "answer": false,
            "explanation": "Salah. 3/4 = 9/12 dan 2/3 = 8/12, jadi tanah 3/4 hektar yang lebih luas."
          },
          {
            "id": 29,
            "type": "truefalse",
            "question": "50% sama dengan 1/2.",
            "options": [],
            "answer": true,
            "explanation": "Benar. 50% = 50/100, disederhanakan menjadi 1/2."
          },
          {
            "id": 30,
            "type": "truefalse",
            "question": "Pecahan yang senilai dengan 3/4 dan berpenyebut 12 adalah 6/12.",
            "options": [],
            "answer": false,
            "explanation": "Salah. 3/4 = (3 × 3)/(4 × 3) = 9/12. Sedangkan 6/12 = 1/2."
          }
        ]
      }
    ]
  }
};
