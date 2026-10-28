const subjects = {
  ips: {
    name: "IPS — Sejarah Kerajaan Hindu-Buddha",
    bab: [
      {
        id: 1,
        name: "Kerajaan Hindu-Buddha di Indonesia",
        questions: [
  // ══════════════════════════════════════════════════════════════════════
  // PILIHAN GANDA — pool 20 soal
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 1, type: "single",
    question: "Kerajaan Hindu tertua di Indonesia adalah...",
    options: ["Tarumanegara", "Kutai", "Mataram Kuno", "Sriwijaya"],
    answer: 1,
    explanation: "Kutai diperkirakan berkembang pada abad ke-4 M, menjadikannya kerajaan Hindu tertua di Indonesia. Buktinya adalah 7 yupa prasasti di tepi sungai Mahakam, Kalimantan Timur."
  },
  {
    id: 2, type: "single",
    question: "Raja terkenal dari Kerajaan Tarumanegara adalah...",
    options: ["Mulawarman", "Purnawarman", "Jayabaya", "Airlangga"],
    answer: 1,
    explanation: "Purnawarman adalah raja Tarumanegara. Namanya tercantum dalam Prasasti Ciaruteun (telapak kaki) dan Prasasti Tugu (pembangunan saluran air Gomati/Chandrabhaga)."
  },
  {
    id: 3, type: "single",
    question: "Kerajaan Kutai terletak di...",
    options: ["Tepi sungai Citarum, Jawa Barat", "Jambi/Palembang, Sumatera Selatan", "Tepi sungai Mahakam, Kalimantan Timur", "Jawa Tengah"],
    answer: 2,
    explanation: "Kutai terletak di tepi sungai Mahakam, Kalimantan Timur. Di sinilah 7 yupa prasasti ditemukan sebagai sumber utama sejarah kerajaan ini."
  },
  {
    id: 4, type: "single",
    question: "Kerajaan Tarumanegara menganut agama...",
    options: ["Hindu Syiwa", "Buddha Mahayana", "Hindu aliran Wisnu (Waisnawa)", "Hindu aliran Brahma"],
    answer: 2,
    explanation: "Tarumanegara menganut agama Hindu aliran Wisnu (Waisnawa). Raja Purnawarman dikenal sebagai pemuja Dewa Wisnu."
  },
  {
    id: 5, type: "single",
    question: "Siapa yang mengucapkan Sumpah Palapa?",
    options: ["Hayam Wuruk", "Raden Wijaya", "Gajah Mada", "Jayanegara"],
    answer: 2,
    explanation: "Sumpah Palapa diucapkan oleh Gajah Mada saat dilantik menjadi Patih Majapahit di masa Tribhuwana Tunggadewi. Sumpah ini terwujud di masa pemerintahan Hayam Wuruk."
  },
  {
    id: 6, type: "single",
    question: "Raja terbesar sekaligus terakhir Singasari adalah...",
    options: ["Ken Arok", "Anusapati", "Ranggawuni", "Kertanegara"],
    answer: 3,
    explanation: "Kertanegara adalah raja terbesar sekaligus terakhir Singasari. Ia melakukan Ekspedisi Pamalayu dan menjalin persahabatan dengan Campa untuk membendung serangan Kublai Khan."
  },
  {
    id: 7, type: "single",
    question: "Candi Borobudur merupakan candi agama...",
    options: ["Hindu Syiwa", "Buddha Mahayana", "Hindu Wisnu", "Buddha Hinayana"],
    answer: 1,
    explanation: "Candi Borobudur adalah candi agama Buddha Mahayana, peninggalan Kerajaan Mataram Kuno dari Dinasti Syailendra."
  },
  {
    id: 8, type: "single",
    question: "Kerajaan Sriwijaya berpusat di daerah...",
    options: ["Jawa Timur", "Kalimantan Timur", "Jambi/Palembang, Sumatera Selatan", "Jawa Barat"],
    answer: 2,
    explanation: "Sriwijaya berpusat di Jambi/Palembang, Sumatera Selatan. Kerajaan ini menjadi pusat penyebaran agama Buddha terbesar di Asia Tenggara."
  },
  {
    id: 9, type: "single",
    question: "Teori kedatangan Hindu-Buddha yang menyatakan golongan prajurit/bangsawan India datang dengan mengedepankan kekerasan adalah teori...",
    options: ["Brahmana", "Ksatria", "Waisya", "Penyuburan"],
    answer: 1,
    explanation: "Teori Ksatria menyatakan bahwa golongan bangsawan/prajurit dari India datang untuk melakukan penjajahan di Indonesia. Teori ini mengedepankan kekerasan."
  },
  {
    id: 10, type: "single",
    question: "Kitab Arjuna Wiwaha karya Mpu Kanwa merupakan hasil sastra dari kerajaan...",
    options: ["Mataram Kuno", "Singasari", "Kediri", "Medang Kamulan/Kahuripan"],
    answer: 3,
    explanation: "Kitab Arjuna Wiwaha adalah hasil sastra Kerajaan Medang Kamulan/Kahuripan karya Mpu Kanwa pada masa pemerintahan Airlangga."
  },
  {
    id: 11, type: "single",
    question: "Raja pertama Kerajaan Sriwijaya adalah...",
    options: ["Balaputradewa", "Dapunta Hyang", "I-Tsing", "Samaratungga"],
    answer: 1,
    explanation: "Dapunta Hyang adalah raja pertama Sriwijaya. Ini tercatat dalam Prasasti Kedukan Bukit yang menceritakan perjalanan Dapunta Hyang beserta pasukannya."
  },
  {
    id: 12, type: "single",
    question: "Kerajaan Kediri mengalami keruntuhan karena...",
    options: ["Letusan Gunung Merapi", "Serangan bangsa Mongol", "Diserang Ken Arok dari Singasari dalam Perang Ganter", "Bencana banjir besar"],
    answer: 2,
    explanation: "Kediri runtuh akibat diserang Ken Arok dari Singasari dalam Perang Ganter. Ken Arok mendapat bantuan para Brahmana yang melarikan diri dari Kediri."
  },
  {
    id: 13, type: "single",
    question: "Prasasti Ciaruteun dari Tarumanegara memuat gambar...",
    options: ["Kaki gajah Airlangga", "Telapak kaki Raja Purnawarman", "Wajah Raja Purnawarman", "Kaki gajah Mulawarman"],
    answer: 1,
    explanation: "Prasasti Ciaruteun memuat gambar telapak kaki Raja Purnawarman, yang disamakan dengan telapak kaki Dewa Wisnu."
  },
  {
    id: 14, type: "single",
    question: "Ekspedisi Pamalayu (penaklukan Melayu) dilakukan pada masa pemerintahan raja...",
    options: ["Ken Arok", "Anusapati", "Ranggawuni", "Kertanegara"],
    answer: 3,
    explanation: "Ekspedisi Pamalayu dilakukan di masa Kertanegara, raja terbesar Singasari. Ekspedisi ini bertujuan memperluas wilayah kekuasaan ke Melayu."
  },
  {
    id: 15, type: "single",
    question: "Teori Waisya menyatakan bahwa penyebar agama Hindu-Buddha adalah...",
    options: ["Para pendeta Brahmana dari India", "Para prajurit dan bangsawan India", "Golongan pedagang yang banyak berinteraksi dengan penduduk pribumi", "Para pelajar Indonesia yang belajar ke India"],
    answer: 2,
    explanation: "Teori Waisya menyatakan golongan pedagang berperan aktif menyebarkan agama Hindu-Buddha karena banyak berinteraksi dengan penduduk pribumi saat berdagang."
  },
  {
    id: 16, type: "single",
    question: "Kerajaan Majapahit didirikan oleh...",
    options: ["Kertanegara", "Gajah Mada", "Raden Wijaya", "Hayam Wuruk"],
    answer: 2,
    explanation: "Majapahit didirikan oleh Raden Wijaya (bergelar Kertarajasa Jayawardhana), menantu raja terakhir Singasari, Kertanegara."
  },
  {
    id: 17, type: "single",
    question: "Kitab Negarakertagama ditulis oleh...",
    options: ["Mpu Tantular", "Mpu Prapanca", "Mpu Kanwa", "Mpu Sedah"],
    answer: 1,
    explanation: "Kitab Negarakertagama ditulis oleh Mpu Prapanca pada masa kejayaan Majapahit di bawah Hayam Wuruk. Kitab ini berisi tentang perjalanan raja dan keadaan kerajaan."
  },
  {
    id: 18, type: "single",
    question: "Pengaruh Hindu-Buddha di bidang pendidikan ditandai dengan munculnya...",
    options: ["Sistem kasta dalam masyarakat", "Kerajaan bercorak Hindu-Buddha", "Perguruan/padepokan untuk mempelajari agama", "Seni tari dan pertunjukkan"],
    answer: 2,
    explanation: "Di bidang pendidikan, pengaruh Hindu-Buddha melahirkan perguruan/padepokan yang sebagian besar mempelajari tentang agama, contohnya perguruan Buddha di Sriwijaya."
  },
  {
    id: 19, type: "single",
    question: "Sumber sejarah utama Kerajaan Kutai berupa...",
    options: ["5 prasasti batu", "7 yupa prasasti", "Catatan biksu I-Tsing", "Prasasti Ciaruteun"],
    answer: 1,
    explanation: "Sumber utama Kerajaan Kutai adalah 7 yupa prasasti, yaitu tiang batu yang digunakan dalam upacara kurban dan bertuliskan huruf Pallawa berbahasa Sansekerta."
  },
  {
    id: 20, type: "single",
    question: "Dinasti Syailendra di Mataram Kuno menganut agama...",
    options: ["Hindu Syiwa", "Hindu Wisnu", "Buddha Mahayana", "Buddha Hinayana"],
    answer: 2,
    explanation: "Dinasti Syailendra menganut agama Buddha Mahayana dan membangun Candi Borobudur. Sementara Dinasti Sanjaya menganut Hindu Syiwa dan membangun Candi Prambanan."
  },

  // ══════════════════════════════════════════════════════════════════════
  // MULTIPLE CHOICE — pool 20 soal
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 21, type: "multiple",
    question: "Manakah yang merupakan candi Buddha peninggalan Kerajaan Mataram Kuno?",
    options: ["Candi Borobudur", "Candi Prambanan", "Candi Mendut", "Candi Sewu"],
    answer: [0, 2, 3],
    explanation: "Candi Buddha di Mataram Kuno: Borobudur, Pawon, Mendut, Sewu, Plaosan, Sari, Kalasan, Ngawen. Candi Prambanan adalah candi Hindu (bukan Buddha)."
  },
  {
    id: 22, type: "multiple",
    question: "Pengaruh Hindu-Buddha dalam bidang seni di Indonesia meliputi...",
    options: ["Pendirian candi dan keraton", "Ragam hias relief", "Munculnya sistem kasta", "Kitab sastra seperti Arjunawiwaha dan Sutasoma"],
    answer: [0, 1, 3],
    explanation: "Pengaruh bidang seni: pendirian candi dan keraton, ragam hias relief, kitab sastra (Arjunawiwaha, Sutasoma), seni tari dan pertunjukkan. Sistem kasta adalah pengaruh bidang sosial budaya."
  },
  {
    id: 23, type: "multiple",
    question: "Manakah yang merupakan sumber prasasti Kerajaan Tarumanegara?",
    options: ["Prasasti Ciaruteun", "Prasasti Yupa", "Prasasti Kebon Kopi", "Prasasti Tugu"],
    answer: [0, 2, 3],
    explanation: "Sumber prasasti Tarumanegara: Ciaruteun, Kebon Kopi, Tugu, Jambu, Pasir Awi, Muara Cianten, Lebak. Prasasti Yupa adalah sumber dari Kerajaan Kutai."
  },
  {
    id: 24, type: "multiple",
    question: "Raja-raja yang pernah memerintah Kerajaan Majapahit adalah...",
    options: ["Raden Wijaya", "Hayam Wuruk", "Kertanegara", "Tribhuwana Tunggadewi"],
    answer: [0, 1, 3],
    explanation: "Raja Majapahit: Raden Wijaya/Kertarajasa, Jayanegara, Tribhuwana Tunggadewi, Hayam Wuruk. Kertanegara adalah raja Singasari, bukan Majapahit."
  },
  {
    id: 25, type: "multiple",
    question: "Sumber prasasti Kerajaan Sriwijaya adalah...",
    options: ["Prasasti Talang Tuo", "Prasasti Kedukan Bukit", "Prasasti Canggal", "Prasasti Karang Berahi"],
    answer: [0, 1, 3],
    explanation: "Sumber prasasti Sriwijaya: Talang Tuo, Kedukan Bukit, Palas Pasemah, Karang Berahi. Prasasti Canggal adalah sumber prasasti Kerajaan Mataram Kuno."
  },
  {
    id: 26, type: "multiple",
    question: "Teori-teori tentang kedatangan Hindu-Buddha di Indonesia adalah...",
    options: ["Teori Brahmana", "Teori Ksatria", "Teori Waisya", "Teori Penyuburan/Ulang-alik"],
    answer: [0, 1, 2, 3],
    explanation: "Ada 4 teori: Brahmana (pendeta menyebarkan agama), Ksatria (prajurit/penjajah), Waisya (pedagang aktif), dan Penyuburan/Ulang-alik (bangsa Indonesia aktif ke India untuk belajar)."
  },
  {
    id: 27, type: "multiple",
    question: "Penyebab kemunduran Kerajaan Majapahit adalah...",
    options: ["Tidak ada pemimpin yang kuat dan berwibawa", "Letusan Gunung Merapi", "Perang saudara Paregreg", "Munculnya Kerajaan Islam Demak"],
    answer: [0, 2, 3],
    explanation: "Kemunduran Majapahit: tidak ada pemimpin kuat, merosotnya maritim, perang saudara Paregreg antara keturunan Hayam Wuruk, munculnya Kerajaan Islam Demak. Letusan Merapi adalah penyebab runtuhnya Mataram Kuno."
  },
  {
    id: 28, type: "multiple",
    question: "Hasil sastra yang dihasilkan pada masa Kerajaan Kediri adalah...",
    options: ["Kitab Bharatayudha", "Kitab Negarakertagama", "Kitab Kresnayana", "Kitab Smaradhana"],
    answer: [0, 2, 3],
    explanation: "Hasil sastra Kediri: Kresnayana (Mpu Triguna), Smaradhana (Mpu Dharmaja), Bharatayudha (Mpu Sedah & Mpu Panuluh), Lubdhaka (Mpu Tanakung). Negarakertagama adalah karya Mpu Prapanca dari masa Majapahit."
  },
  {
    id: 29, type: "multiple",
    question: "Jenis-jenis peninggalan Hindu-Buddha di Indonesia meliputi...",
    options: ["Candi, patirtan, dan gapura", "Kitab sastra", "Arca (batu dan logam)", "Artefak (peralatan, senjata, perhiasan)"],
    answer: [0, 1, 2, 3],
    explanation: "Peninggalan Hindu-Buddha: bangunan (candi, patirtan, gapura), kitab sastra (Negarakertagama, Sutasoma, Pararaton), arca batu dan logam, serta artefak berupa peralatan, senjata, dan perhiasan."
  },
  {
    id: 30, type: "multiple",
    question: "Dinasti yang pernah berkuasa di Kerajaan Mataram Kuno adalah...",
    options: ["Dinasti Sanjaya", "Dinasti Rajasa", "Dinasti Syailendra", "Dinasti Isyana"],
    answer: [0, 2],
    explanation: "Mataram Kuno dikuasai oleh Dinasti Sanjaya (Hindu Syiwa) dan Dinasti Syailendra (Buddha Mahayana). Dinasti Rajasa berkuasa di Singasari-Majapahit."
  },
  {
    id: 31, type: "multiple",
    question: "Raja-raja yang pernah memerintah Kerajaan Singasari adalah...",
    options: ["Ken Arok", "Jayabaya", "Anusapati", "Kertanegara"],
    answer: [0, 2, 3],
    explanation: "Raja Singasari: Ken Arok, Anusapati, Panji Tohjaya, Ranggawuni/Wisnuwardhana, Kertanegara. Jayabaya adalah raja Kediri, bukan Singasari."
  },
  {
    id: 32, type: "multiple",
    question: "Sumber asing (luar negeri) Kerajaan Sriwijaya antara lain...",
    options: ["Catatan biksu I-Tsing", "Catatan Dinasti Tang", "Prasasti Nalanda", "Prasasti Kedukan Bukit"],
    answer: [0, 1, 2],
    explanation: "Sumber asing Sriwijaya: catatan biksu I-Tsing, Catatan Dinasti Tang, dan Prasasti Nalanda. Prasasti Kedukan Bukit adalah sumber prasasti dalam negeri Sriwijaya."
  },
  {
    id: 33, type: "multiple",
    question: "Peninggalan bangunan Kerajaan Majapahit antara lain...",
    options: ["Candi Panataran", "Candi Bajang Ratu", "Candi Borobudur", "Candi/Patirtan Tikus"],
    answer: [0, 1, 3],
    explanation: "Peninggalan bangunan Majapahit: Candi Panataran, Candi Bajang Ratu, Candi/Patirtan Tikus, Candi Waringin Lawang. Candi Borobudur adalah peninggalan Mataram Kuno."
  },
  {
    id: 34, type: "multiple",
    question: "Kehidupan ekonomi Kerajaan Kutai meliputi...",
    options: ["Peternakan", "Pertanian", "Perdagangan", "Pelayaran antarnegara"],
    answer: [0, 1, 2],
    explanation: "Kehidupan Kutai: peternakan, pertanian, dan perdagangan. Pelayaran antarnegara yang maju adalah ciri khas Sriwijaya, bukan Kutai."
  },
  {
    id: 35, type: "multiple",
    question: "Candi Hindu peninggalan Kerajaan Mataram Kuno antara lain...",
    options: ["Candi Prambanan", "Candi Sambisari", "Candi Borobudur", "Candi Barong"],
    answer: [0, 1, 3],
    explanation: "Candi Hindu Mataram Kuno: Prambanan, Sambisari, komplek Dieng, Gedongsanga, Ijo, Barong, Pringapus, Selogriya. Candi Borobudur adalah candi Buddha."
  },
  {
    id: 36, type: "multiple",
    question: "Raja-raja yang pernah memerintah Kerajaan Kediri adalah...",
    options: ["Jayabaya", "Ken Arok", "Kertajaya", "Sarweswara"],
    answer: [0, 2, 3],
    explanation: "Raja Kediri: Airlangga, Jayabaya, Sarweswara, Aryeswara, Sri Gandra, Kameswara, Kertajaya. Ken Arok adalah pendiri Singasari yang mengalahkan Kediri."
  },
  {
    id: 37, type: "multiple",
    question: "Pengaruh Hindu-Buddha di Indonesia mencakup bidang...",
    options: ["Politik (munculnya kerajaan dan golongan bangsawan)", "Sosial budaya (sistem kasta dan akulturasi)", "Pendidikan (munculnya perguruan/padepokan)", "Seni (candi, relief, kitab sastra)"],
    answer: [0, 1, 2, 3],
    explanation: "Pengaruh Hindu-Buddha meliputi: bidang politik (kerajaan dan bangsawan), sosial budaya (kasta dan akulturasi budaya), pendidikan (perguruan/padepokan), serta seni (candi, relief, kitab sastra, pertunjukkan)."
  },
  {
    id: 38, type: "multiple",
    question: "Sumber bangunan Kerajaan Singasari antara lain...",
    options: ["Candi Jago", "Candi Borobudur", "Candi Jawi", "Candi Kidal"],
    answer: [0, 2, 3],
    explanation: "Sumber bangunan Singasari: Candi Jago/Singasari, Candi Jawi, Candi Kidal, Arca Joko Dolog, Arca Prajna Paramitha, Candi Kagenengan. Candi Borobudur adalah peninggalan Mataram Kuno."
  },
  {
    id: 39, type: "multiple",
    question: "Raja-raja Kerajaan Medang Kamulan/Kahuripan adalah...",
    options: ["Mpu Sindok", "Dharmawangsa Tguh", "Airlangga", "Kertajaya"],
    answer: [0, 1, 2],
    explanation: "Raja Medang Kamulan/Kahuripan: Mpu Sindok, Dharmawangsa Tguh, dan Airlangga. Kertajaya adalah raja Kediri yang dikalahkan Ken Arok."
  },
  {
    id: 40, type: "multiple",
    question: "Hasil sastra Kerajaan Majapahit antara lain...",
    options: ["Kidung Harsawijaya", "Pararaton", "Arjuna Wiwaha", "Negarakertagama"],
    answer: [0, 1, 3],
    explanation: "Hasil sastra Majapahit: Kidung Harsawijaya, Kidung Panji Wijaykrama, Pararaton, Negarakertagama. Arjuna Wiwaha karya Mpu Kanwa adalah hasil sastra Medang Kamulan/Kahuripan."
  },

  // ══════════════════════════════════════════════════════════════════════
  // BENAR / SALAH — pool 20 soal
  // ══════════════════════════════════════════════════════════════════════
  {
    id: 41, type: "truefalse",
    question: "Kerajaan Kutai diperkirakan berkembang pada abad ke-5 Masehi.",
    answer: false,
    explanation: "SALAH. Kutai diperkirakan berkembang pada abad ke-4 M (bukan abad ke-5). Ini menjadikannya kerajaan Hindu tertua di Indonesia."
  },
  {
    id: 42, type: "truefalse",
    question: "Sriwijaya merupakan pusat penyebaran agama Buddha terbesar di Asia Tenggara.",
    answer: true,
    explanation: "BENAR. Sriwijaya memang dikenal sebagai pusat penyebaran agama Buddha terbesar di Asia Tenggara, didukung catatan biksu I-Tsing dan Prasasti Nalanda."
  },
  {
    id: 43, type: "truefalse",
    question: "Kerajaan Singasari didirikan oleh Ken Arok setelah mengalahkan Kertajaya dari Kadiri di Perang Ganter tahun 1222.",
    answer: true,
    explanation: "BENAR. Ken Arok mengalahkan Kertajaya dari Kadiri di desa Ganter pada tahun 1222, kemudian mendirikan Kerajaan Singasari."
  },
  {
    id: 44, type: "truefalse",
    question: "Candi Prambanan adalah candi agama Buddha.",
    answer: false,
    explanation: "SALAH. Candi Prambanan adalah candi agama Hindu Syiwa, bukan Buddha. Prambanan merupakan peninggalan Mataram Kuno dari Dinasti Sanjaya."
  },
  {
    id: 45, type: "truefalse",
    question: "Raja Purnawarman berasal dari Kerajaan Tarumanegara yang terletak di Jawa Barat.",
    answer: true,
    explanation: "BENAR. Purnawarman adalah raja Kerajaan Tarumanegara yang berkembang di abad ke-5 M, terletak di tepi sungai Citarum, Bogor/Bekasi, Jawa Barat."
  },
  {
    id: 46, type: "truefalse",
    question: "Dinasti Sanjaya di Mataram Kuno menganut agama Buddha Mahayana.",
    answer: false,
    explanation: "SALAH. Dinasti Sanjaya menganut agama Hindu Syiwa. Justru Dinasti Syailendra yang menganut agama Buddha Mahayana dan membangun Candi Borobudur."
  },
  {
    id: 47, type: "truefalse",
    question: "Kerajaan Majapahit didirikan oleh Hayam Wuruk.",
    answer: false,
    explanation: "SALAH. Majapahit didirikan oleh Raden Wijaya (bergelar Kertarajasa Jayawardhana). Hayam Wuruk adalah raja keempat Majapahit di masa kejayaannya."
  },
  {
    id: 48, type: "truefalse",
    question: "Sumpah Palapa berhasil diwujudkan pada masa pemerintahan Hayam Wuruk.",
    answer: true,
    explanation: "BENAR. Sumpah Palapa yang diucapkan Gajah Mada terwujud di masa Hayam Wuruk, ketika Majapahit mencapai puncak kejayaan dan berhasil menyatukan Nusantara."
  },
  {
    id: 49, type: "truefalse",
    question: "Mpu Sindok memindahkan pusat kerajaan dari Jawa Tengah ke Jawa Timur, mendirikan Kerajaan Medang Kamulan.",
    answer: true,
    explanation: "BENAR. Mpu Sindok memindahkan pusat kerajaan dari Jawa Tengah ke Jawa Timur dan mendirikan Kerajaan Medang Kamulan (Mataram Hindu Jawa Timur/Kahuripan)."
  },
  {
    id: 50, type: "truefalse",
    question: "Keruntuhan Kerajaan Mataram Kuno disebabkan oleh serangan Kerajaan Sriwijaya.",
    answer: false,
    explanation: "SALAH. Keruntuhan Mataram Kuno disebabkan oleh bencana alam berupa letusan Gunung Merapi, bukan serangan Sriwijaya."
  },
  {
    id: 51, type: "truefalse",
    question: "Dapunta Hyang adalah raja pertama Kerajaan Sriwijaya.",
    answer: true,
    explanation: "BENAR. Dapunta Hyang adalah raja pertama Sriwijaya. Namanya tercantum dalam Prasasti Kedukan Bukit yang menceritakan ekspedisi militernya."
  },
  {
    id: 52, type: "truefalse",
    question: "Kerajaan Kediri menganut agama Buddha.",
    answer: false,
    explanation: "SALAH. Kerajaan Kediri menganut agama Hindu, bukan Buddha. Kediri merupakan kelanjutan dari Kerajaan Medang Kamulan (Panjalu)."
  },
  {
    id: 53, type: "truefalse",
    question: "Gajah Mada diangkat menjadi Patih Majapahit oleh Tribhuwana Tunggadewi.",
    answer: true,
    explanation: "BENAR. Gajah Mada diangkat menjadi Patih Majapahit oleh Tribhuwana Tunggadewi karena jasanya. Saat pelantikan itulah ia mengucapkan Sumpah Palapa."
  },
  {
    id: 54, type: "truefalse",
    question: "Prasasti Kebon Kopi dari Tarumanegara memuat gambar telapak kaki gajah Purnawarman.",
    answer: true,
    explanation: "BENAR. Prasasti Kebon Kopi memuat gambar tapak kaki gajah yang diidentifikasi sebagai gajah tunggangan Raja Purnawarman."
  },
  {
    id: 55, type: "truefalse",
    question: "Candi Muara Takus adalah peninggalan Kerajaan Singasari.",
    answer: false,
    explanation: "SALAH. Candi Muara Takus adalah peninggalan Kerajaan Sriwijaya, bukan Singasari. Candi ini terletak di Riau, Sumatera."
  },
  {
    id: 56, type: "truefalse",
    question: "Raja Jayabaya berasal dari Kerajaan Singasari.",
    answer: false,
    explanation: "SALAH. Jayabaya adalah raja dari Kerajaan Kediri, bukan Singasari. Jayabaya berhasil mengalahkan Jenggala dan menyatukan kembali Jawa di bawah Kediri."
  },
  {
    id: 57, type: "truefalse",
    question: "Airlangga membagi kerajaannya menjadi Panjalu dan Jenggala untuk keturunannya.",
    answer: true,
    explanation: "BENAR. Airlangga membagi kerajaannya menjadi dua: Panjalu (kemudian menjadi Kediri) dan Jenggala, untuk dua orang keturunannya agar tidak terjadi perang saudara."
  },
  {
    id: 58, type: "truefalse",
    question: "Kerajaan Kutai menganut agama Buddha.",
    answer: false,
    explanation: "SALAH. Kerajaan Kutai menganut agama Hindu Syiwa, bukan Buddha. Buktinya adalah pendirian Waprakecwara dan upacara kurban keagamaan Hindu yang dilakukan rajanya."
  },
  {
    id: 59, type: "truefalse",
    question: "Kitab Pararaton merupakan sumber sastra untuk Kerajaan Singasari dan Majapahit.",
    answer: true,
    explanation: "BENAR. Kitab Pararaton (Kitab Para Raja) adalah sumber sastra yang memuat sejarah Singasari dan Majapahit, termasuk kisah Ken Arok dan Gajah Mada."
  },
  {
    id: 60, type: "truefalse",
    question: "Prasasti Talang Tuo merupakan sumber prasasti Kerajaan Mataram Kuno.",
    answer: false,
    explanation: "SALAH. Prasasti Talang Tuo adalah sumber prasasti Kerajaan Sriwijaya, bukan Mataram Kuno. Sumber prasasti Mataram Kuno antara lain Prasasti Canggal dan Prasasti Balitung."
  }
        ]
      }
    ]
  },
  ppkn: {
    name: "PPKN",
    bab: [
      { id: 1, name: "Sejarah Kelahiran Pancasila", questions: [
  {
    id: 101, type: "single",
    question: "BPUPK dibentuk pada tanggal...",
    options: ["29 April 1945", "1 Juni 1945", "22 Juni 1945", "17 Agustus 1945"],
    answer: 0,
    explanation: "BPUPK (Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan) dibentuk pada 29 April 1945, beranggotakan 69 orang, diketuai oleh Dr. Radjiman Wedyodiningrat."
  },
  {
    id: 102, type: "single",
    question: "Siapakah ketua BPUPK?",
    options: ["Ir. Soekarno", "Drs. Moh. Hatta", "Dr. Radjiman Wedyodiningrat", "Mr. Soepomo"],
    answer: 2,
    explanation: "BPUPK diketuai oleh Dr. Radjiman Wedyodiningrat, beranggotakan 69 orang."
  },
  {
    id: 103, type: "single",
    question: "Pidato yang berisi usulan rumusan dasar negara dengan nama 'Pancasila' disampaikan oleh Ir. Soekarno pada tanggal...",
    options: ["29 Mei 1945", "31 Mei 1945", "1 Juni 1945", "22 Juni 1945"],
    answer: 2,
    explanation: "Pada 1 Juni 1945, Ir. Soekarno berpidato mengusulkan dasar negara yang dinamakannya Pancasila. Tanggal ini diperingati sebagai Hari Lahir Pancasila."
  },
  {
    id: 104, type: "single",
    question: "Tanggal 1 Juni diperingati sebagai...",
    options: ["Hari Kebangkitan Nasional", "Hari Lahir Pancasila", "Hari Sumpah Pemuda", "Hari Konstitusi"],
    answer: 1,
    explanation: "1 Juni diperingati sebagai Hari Lahir Pancasila, mengacu pada pidato Ir. Soekarno dalam sidang pertama BPUPK tahun 1945 yang mengusulkan nama dan rumusan Pancasila."
  },
  {
    id: 105, type: "single",
    question: "Panitia kecil yang dibentuk untuk merumuskan dasar negara dan beranggotakan 9 orang disebut...",
    options: ["Panitia Sembilan", "Panitia Persiapan", "Panitia Dasar Hukum", "Panitia Kecil BPUPK"],
    answer: 0,
    explanation: "Panitia Sembilan beranggotakan 9 orang yang diketuai Ir. Soekarno, bertugas merumuskan dasar negara dan menghasilkan rumusan yang disebut Piagam Jakarta pada 22 Juni 1945."
  },
  {
    id: 106, type: "single",
    question: "Ketua Panitia Sembilan adalah...",
    options: ["Drs. Moh. Hatta", "Ir. Soekarno", "Mr. Ahmad Soebardjo", "Mr. Mohammad Yamin"],
    answer: 1,
    explanation: "Panitia Sembilan diketuai oleh Ir. Soekarno dengan Drs. Moh. Hatta sebagai wakil ketua."
  },
  {
    id: 107, type: "single",
    question: "Rumusan dasar negara hasil kerja Panitia Sembilan pada 22 Juni 1945 dikenal dengan nama...",
    options: ["Dekrit Presiden", "Piagam Jakarta", "Maklumat Pemerintah", "Sumpah Pemuda"],
    answer: 1,
    explanation: "Piagam Jakarta (Jakarta Charter) adalah rumusan dasar negara hasil kerja Panitia Sembilan yang selesai pada 22 Juni 1945."
  },
  {
    id: 108, type: "single",
    question: "Bunyi sila pertama dalam Piagam Jakarta sebelum diubah adalah...",
    options: ["Ketuhanan Yang Maha Esa", "Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya", "Ketuhanan yang berkebudayaan", "Ketuhanan yang berkeadilan"],
    answer: 1,
    explanation: "Sila pertama dalam Piagam Jakarta semula berbunyi 'Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya', kemudian diubah menjadi 'Ketuhanan Yang Maha Esa' demi menjaga persatuan bangsa yang majemuk."
  },
  {
    id: 109, type: "single",
    question: "Tokoh yang dimintai pertimbangan oleh Moh. Hatta sehingga sila pertama diubah menjadi 'Ketuhanan Yang Maha Esa' adalah...",
    options: ["Ki Hajar Dewantara", "Ki Bagus Hadikusumo", "Wahid Hasyim", "Mr. Soepomo"],
    answer: 1,
    explanation: "Moh. Hatta berkonsultasi dengan Ki Bagus Hadikusumo, sehingga rumusan sila pertama diubah dari yang ada di Piagam Jakarta menjadi 'Ketuhanan Yang Maha Esa'."
  },
  {
    id: 110, type: "single",
    question: "Sidang pertama BPUPK berlangsung pada tanggal...",
    options: ["29 Mei – 1 Juni 1945", "10 – 17 Juli 1945", "18 Agustus 1945", "22 Juni 1945"],
    answer: 0,
    explanation: "Sidang pertama BPUPK berlangsung pada 29 Mei – 1 Juni 1945, membahas rumusan dasar negara, dengan usulan dari Mr. Moh. Yamin (29 Mei), Mr. Soepomo (31 Mei), dan Ir. Soekarno (1 Juni)."
  },
  {
    id: 111, type: "single",
    question: "Lembaga yang mengesahkan Pancasila dan UUD sebagai dasar negara pada 18 Agustus 1945 adalah...",
    options: ["BPUPK", "Panitia Sembilan", "PPKI", "KNIP"],
    answer: 2,
    explanation: "PPKI (Panitia Persiapan Kemerdekaan Indonesia) dalam sidangnya tanggal 18 Agustus 1945 mengesahkan Pancasila dan UUD sebagai dasar negara, sekaligus mengangkat Soekarno-Hatta sebagai Presiden dan Wakil Presiden."
  },
  {
    id: 112, type: "single",
    question: "Proklamasi Kemerdekaan Indonesia dikumandangkan pada tanggal...",
    options: ["1 Juni 1945", "22 Juni 1945", "17 Agustus 1945", "18 Agustus 1945"],
    answer: 2,
    explanation: "Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Soekarno didampingi Drs. Moh. Hatta pada 17 Agustus 1945."
  },
  {
    id: 113, type: "single",
    question: "Sidang kedua BPUPK membahas tentang...",
    options: ["Rumusan dasar negara", "Rancangan Undang-Undang Dasar", "Pembentukan Panitia Sembilan", "Pengesahan Pancasila"],
    answer: 1,
    explanation: "Sidang kedua BPUPK (10–17 Juli 1945) membahas rancangan Undang-Undang Dasar, termasuk wilayah negara dan bentuk negara."
  },
  {
    id: 114, type: "single",
    question: "Tokoh yang menyampaikan usulan dasar negara pada 29 Mei 1945 adalah...",
    options: ["Ir. Soekarno", "Mr. Soepomo", "Mr. Mohammad Yamin", "Drs. Moh. Hatta"],
    answer: 2,
    explanation: "Mr. Mohammad Yamin menyampaikan usulan dasar negara pada 29 Mei 1945, disusul Mr. Soepomo pada 31 Mei dan Ir. Soekarno pada 1 Juni 1945."
  },
  {
    id: 115, type: "single",
    question: "Anggota BPUPK berjumlah...",
    options: ["9 orang", "39 orang", "69 orang", "100 orang"],
    answer: 2,
    explanation: "BPUPK beranggotakan 69 orang yang diketuai oleh Dr. Radjiman Wedyodiningrat."
  },
  {
    id: 116, type: "single",
    question: "Kata 'Pancasila' pertama kali diusulkan sebagai nama dasar negara oleh...",
    options: ["Mr. Soepomo", "Ir. Soekarno", "Mr. Mohammad Yamin", "Drs. Moh. Hatta"],
    answer: 1,
    explanation: "Ir. Soekarno mengusulkan nama 'Pancasila' untuk dasar negara dalam pidatonya pada 1 Juni 1945, yang kemudian diperingati sebagai Hari Lahir Pancasila."
  },
  {
    id: 117, type: "single",
    question: "Lembaga yang dibentuk PPKI setelah proklamasi untuk membantu tugas presiden sebelum terbentuknya MPR/DPR adalah...",
    options: ["BPUPK", "KNIP", "Panitia Sembilan", "Volksraad"],
    answer: 1,
    explanation: "PPKI membentuk Komite Nasional Indonesia Pusat (KNIP) sebagai lembaga yang membantu tugas presiden sebelum MPR dan DPR terbentuk."
  },
  {
    id: 118, type: "single",
    question: "Pancasila sebagai dasar negara disahkan secara resmi dalam sidang...",
    options: ["BPUPK pertama", "BPUPK kedua", "Panitia Sembilan", "PPKI 18 Agustus 1945"],
    answer: 3,
    explanation: "Pancasila secara resmi disahkan sebagai dasar negara dalam sidang PPKI tanggal 18 Agustus 1945, bersamaan dengan pengesahan UUD dan pengangkatan Presiden-Wakil Presiden."
  },
  {
    id: 119, type: "single",
    question: "Berikut yang BUKAN anggota Panitia Sembilan adalah...",
    options: ["Ir. Soekarno", "Drs. Moh. Hatta", "Mr. Mohammad Yamin", "Dr. Radjiman Wedyodiningrat"],
    answer: 3,
    explanation: "Dr. Radjiman Wedyodiningrat adalah ketua BPUPK, bukan anggota Panitia Sembilan. Anggota Panitia Sembilan: Soekarno, Hatta, Yamin, Soebardjo, Maramis, Kahar Muzakir, Salim, Wachid Hasyim, dan Cokroaminoto/Wiranatakoesoema."
  },
  {
    id: 120, type: "single",
    question: "Usulan rumusan dasar negara oleh Mr. Soepomo disampaikan pada tanggal...",
    options: ["29 Mei 1945", "31 Mei 1945", "1 Juni 1945", "22 Juni 1945"],
    answer: 1,
    explanation: "Mr. Soepomo menyampaikan usulan rumusan dasar negara pada 31 Mei 1945, di antara usulan Mr. Mohammad Yamin (29 Mei) dan Ir. Soekarno (1 Juni)."
  },
  {
    id: 121, type: "multiple",
    question: "Tokoh-tokoh yang menyampaikan usulan rumusan dasar negara dalam sidang pertama BPUPK adalah...",
    options: ["Mr. Mohammad Yamin", "Mr. Soepomo", "Ir. Soekarno", "Drs. Moh. Hatta"],
    answer: [0, 1, 2],
    explanation: "Tiga tokoh yang menyampaikan usulan rumusan dasar negara dalam sidang pertama BPUPK: Mr. Mohammad Yamin (29 Mei), Mr. Soepomo (31 Mei), dan Ir. Soekarno (1 Juni 1945)."
  },
  {
    id: 122, type: "multiple",
    question: "Hal-hal yang terjadi dalam sidang PPKI tanggal 18 Agustus 1945 meliputi...",
    options: ["Mengesahkan Pancasila dan UUD sebagai dasar negara", "Mengangkat Soekarno-Hatta sebagai Presiden dan Wakil Presiden", "Membentuk KNIP", "Membentuk BPUPK"],
    answer: [0, 1, 2],
    explanation: "Sidang PPKI 18 Agustus 1945 mengesahkan Pancasila dan UUD, mengangkat Soekarno dan Hatta sebagai Presiden-Wakil Presiden, serta membentuk KNIP. BPUPK telah dibentuk jauh sebelumnya, 29 April 1945."
  },
  {
    id: 123, type: "multiple",
    question: "Anggota Panitia Sembilan antara lain...",
    options: ["Ir. Soekarno", "Drs. Moh. Hatta", "Mr. Mohammad Yamin", "Dr. Radjiman Wedyodiningrat"],
    answer: [0, 1, 2],
    explanation: "Anggota Panitia Sembilan: Soekarno (ketua), Hatta (wakil), Yamin, Soebardjo, Maramis, Kahar Muzakir, Salim, Cokroaminoto, dan Wachid Hasyim. Radjiman Wedyodiningrat adalah ketua BPUPK, bukan anggota Panitia Sembilan."
  },
  {
    id: 124, type: "multiple",
    question: "Peristiwa-peristiwa berikut terjadi pada bulan Juni 1945 adalah...",
    options: ["Pidato Soekarno mengusulkan Pancasila (1 Juni)", "Selesainya rumusan Piagam Jakarta (22 Juni)", "Sidang kedua BPUPK", "Proklamasi Kemerdekaan"],
    answer: [0, 1],
    explanation: "Pada Juni 1945 terjadi pidato Soekarno (1 Juni) dan selesainya Piagam Jakarta (22 Juni). Sidang kedua BPUPK berlangsung Juli 1945, dan Proklamasi pada Agustus 1945."
  },
  {
    id: 125, type: "multiple",
    question: "Manakah pernyataan yang benar tentang BPUPK?",
    options: ["Dibentuk pada 29 April 1945", "Diketuai oleh Dr. Radjiman Wedyodiningrat", "Beranggotakan 69 orang", "Bertugas mengesahkan Pancasila sebagai dasar negara"],
    answer: [0, 1, 2],
    explanation: "BPUPK dibentuk 29 April 1945, diketuai Radjiman Wedyodiningrat, beranggotakan 69 orang, dan bertugas menyelidiki serta merumuskan persiapan kemerdekaan — bukan mengesahkan Pancasila (itu tugas PPKI)."
  },
  {
    id: 126, type: "multiple",
    question: "Alasan sila pertama Piagam Jakarta diubah menjadi 'Ketuhanan Yang Maha Esa' antara lain karena...",
    options: ["Menjaga persatuan bangsa Indonesia yang majemuk", "Permintaan tokoh-tokoh dari kawasan timur Indonesia yang nonmuslim", "Hasil konsultasi Moh. Hatta dengan Ki Bagus Hadikusumo", "Perintah penjajah Jepang"],
    answer: [0, 1, 2],
    explanation: "Perubahan sila pertama dilatarbelakangi keinginan menjaga persatuan bangsa yang majemuk, keberatan tokoh-tokoh dari kawasan timur, dan hasil konsultasi Moh. Hatta dengan Ki Bagus Hadikusumo — bukan perintah Jepang."
  },
  {
    id: 127, type: "multiple",
    question: "Lembaga-lembaga yang berperan dalam proses persiapan kemerdekaan Indonesia adalah...",
    options: ["BPUPK", "Panitia Sembilan", "PPKI", "KNIP"],
    answer: [0, 1, 2, 3],
    explanation: "Keempatnya berperan: BPUPK menyelidiki persiapan kemerdekaan, Panitia Sembilan merumuskan dasar negara, PPKI mempersiapkan & mengesahkan kemerdekaan, KNIP membantu tugas presiden pascakemerdekaan."
  },
  {
    id: 128, type: "multiple",
    question: "Hal-hal yang dibahas dalam sidang kedua BPUPK (10–17 Juli 1945) meliputi...",
    options: ["Rancangan Undang-Undang Dasar", "Bentuk negara", "Wilayah negara", "Rumusan nama Pancasila"],
    answer: [0, 1, 2],
    explanation: "Sidang kedua BPUPK membahas rancangan UUD, termasuk bentuk negara dan wilayah negara. Rumusan nama Pancasila dibahas dalam sidang pertama (Mei-Juni 1945)."
  },
  {
    id: 129, type: "multiple",
    question: "Berikut yang merupakan hasil kerja Panitia Sembilan adalah...",
    options: ["Piagam Jakarta", "Rumusan dasar negara tertanggal 22 Juni 1945", "Rancangan pembukaan UUD", "Teks Proklamasi"],
    answer: [0, 1, 2],
    explanation: "Panitia Sembilan menghasilkan Piagam Jakarta (22 Juni 1945) yang memuat rumusan dasar negara dan menjadi rancangan pembukaan UUD. Teks Proklamasi disusun oleh Soekarno, Hatta, dan Soebardjo menjelang 17 Agustus 1945."
  },
  {
    id: 130, type: "multiple",
    question: "Tokoh yang memberikan usulan rumusan dasar negara berisi lima asas/sila adalah...",
    options: ["Mr. Mohammad Yamin", "Mr. Soepomo", "Ir. Soekarno", "Drs. Moh. Hatta"],
    answer: [0, 1, 2],
    explanation: "Ketiga tokoh (Yamin, Soepomo, Soekarno) sama-sama mengajukan rumusan dasar negara berisi lima asas/sila, meski dengan rumusan dan urutan berbeda-beda."
  },
  {
    id: 131, type: "truefalse",
    question: "BPUPK dibentuk pada tanggal 29 April 1945 dan diketuai oleh Dr. Radjiman Wedyodiningrat.",
    answer: true,
    explanation: "BENAR. BPUPK dibentuk 29 April 1945, beranggotakan 69 orang, diketuai oleh Dr. Radjiman Wedyodiningrat."
  },
  {
    id: 132, type: "truefalse",
    question: "Pidato Ir. Soekarno yang mengusulkan nama dan rumusan Pancasila disampaikan pada 17 Agustus 1945.",
    answer: false,
    explanation: "SALAH. Pidato Soekarno mengusulkan nama dan rumusan Pancasila disampaikan pada 1 Juni 1945, yang kemudian diperingati sebagai Hari Lahir Pancasila. 17 Agustus 1945 adalah tanggal Proklamasi Kemerdekaan."
  },
  {
    id: 133, type: "truefalse",
    question: "Piagam Jakarta merupakan hasil rumusan Panitia Sembilan yang selesai pada 22 Juni 1945.",
    answer: true,
    explanation: "BENAR. Piagam Jakarta selesai dirumuskan oleh Panitia Sembilan pada 22 Juni 1945 dan menjadi cikal bakal Pembukaan UUD."
  },
  {
    id: 134, type: "truefalse",
    question: "Sila pertama dalam Piagam Jakarta sejak awal berbunyi 'Ketuhanan Yang Maha Esa'.",
    answer: false,
    explanation: "SALAH. Sila pertama dalam Piagam Jakarta semula berbunyi 'Ketuhanan, dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya', baru kemudian diubah menjadi 'Ketuhanan Yang Maha Esa'."
  },
  {
    id: 135, type: "truefalse",
    question: "PPKI dibentuk untuk mempersiapkan kemerdekaan Indonesia dan mengesahkan Pancasila serta UUD pada 18 Agustus 1945.",
    answer: true,
    explanation: "BENAR. PPKI bersidang 18 Agustus 1945, mengesahkan Pancasila dan UUD sebagai dasar negara, mengangkat Soekarno-Hatta sebagai Presiden-Wapres, dan membentuk KNIP."
  },
  {
    id: 136, type: "truefalse",
    question: "Ketua Panitia Sembilan adalah Drs. Moh. Hatta.",
    answer: false,
    explanation: "SALAH. Ketua Panitia Sembilan adalah Ir. Soekarno, sedangkan Drs. Moh. Hatta menjabat sebagai wakil ketua."
  },
  {
    id: 137, type: "truefalse",
    question: "Mr. Mohammad Yamin menyampaikan usulan rumusan dasar negara pada tanggal 29 Mei 1945, mendahului Mr. Soepomo dan Ir. Soekarno.",
    answer: true,
    explanation: "BENAR. Urutan penyampaian usulan dasar negara dalam sidang pertama BPUPK: Mohammad Yamin (29 Mei), Soepomo (31 Mei), dan Soekarno (1 Juni 1945)."
  },
  {
    id: 138, type: "truefalse",
    question: "Perubahan sila pertama dari Piagam Jakarta dilakukan setelah Drs. Moh. Hatta berkonsultasi dengan Ki Bagus Hadikusumo.",
    answer: true,
    explanation: "BENAR. Atas pertimbangan menjaga persatuan bangsa, Moh. Hatta berkonsultasi dengan Ki Bagus Hadikusumo sehingga sila pertama diubah menjadi 'Ketuhanan Yang Maha Esa'."
  },
  {
    id: 139, type: "truefalse",
    question: "Sidang pertama BPUPK membahas rancangan Undang-Undang Dasar, sedangkan sidang kedua membahas rumusan dasar negara.",
    answer: false,
    explanation: "SALAH. Justru sebaliknya — sidang pertama BPUPK (29 Mei–1 Juni 1945) membahas rumusan dasar negara, sedangkan sidang kedua (10–17 Juli 1945) membahas rancangan Undang-Undang Dasar."
  },
  {
    id: 140, type: "truefalse",
    question: "KNIP dibentuk oleh PPKI untuk membantu tugas presiden sebelum MPR dan DPR terbentuk.",
    answer: true,
    explanation: "BENAR. Komite Nasional Indonesia Pusat (KNIP) dibentuk PPKI untuk membantu presiden menjalankan tugas pemerintahan sebelum lembaga MPR dan DPR resmi terbentuk."
  }
      ] },
      { id: 2, name: "Norma dan UUD NRI Tahun 1945", questions: [
  {
    id: 201, type: "single",
    question: "Aturan atau ketentuan yang mengikat warga kelompok dalam masyarakat dan dijadikan panduan, tatanan, dan kendali tingkah laku disebut...",
    options: ["Hukum", "Norma", "Adat", "Etika"],
    answer: 1,
    explanation: "Menurut KBBI, norma adalah aturan atau ketentuan yang mengikat warga kelompok dalam masyarakat, dipakai sebagai panduan, tatanan, dan pengendali tingkah laku yang sesuai dan berlaku."
  },
  {
    id: 202, type: "single",
    question: "Norma yang bersumber dari ajaran agama dan diyakini sebagai perintah Tuhan disebut norma...",
    options: ["Susila", "Sosial", "Hukum", "Agama"],
    answer: 3,
    explanation: "Norma agama bersumber dari ajaran agama/kepercayaan dan diyakini berasal dari Tuhan Yang Maha Esa, mengatur hubungan manusia dengan Tuhan dan sesama."
  },
  {
    id: 203, type: "single",
    question: "Norma yang bersumber dari hati nurani manusia tentang baik dan buruk disebut norma...",
    options: ["Agama", "Susila", "Hukum", "Adat"],
    answer: 1,
    explanation: "Norma susila bersumber dari hati nurani manusia mengenai baik dan buruknya suatu perbuatan, contohnya berkata jujur dan menghormati orang lain."
  },
  {
    id: 204, type: "single",
    question: "Norma yang dibuat oleh lembaga negara, bersifat tegas dan memaksa, serta memiliki sanksi yang jelas disebut norma...",
    options: ["Sosial", "Susila", "Hukum", "Agama"],
    answer: 2,
    explanation: "Norma hukum dibuat oleh lembaga negara yang berwenang, bersifat tegas dan memaksa, dengan sanksi yang jelas dan tegas bagi pelanggarnya."
  },
  {
    id: 205, type: "single",
    question: "Konsep Tri Hita Karana dalam masyarakat Bali secara harfiah berarti...",
    options: ["Tiga jalan kebenaran", "Tiga penyebab kebahagiaan", "Tiga sumber kehidupan", "Tiga aturan adat"],
    answer: 1,
    explanation: "Tri Hita Karana secara harfiah berarti 'tiga penyebab kebahagiaan', yaitu hubungan harmonis manusia dengan Tuhan, sesama manusia, dan alam lingkungan."
  },
  {
    id: 206, type: "single",
    question: "Undang-undang yang mengatur tentang Perlindungan dan Pengelolaan Lingkungan Hidup adalah...",
    options: ["UU No. 32 Tahun 2009", "UU No. 23 Tahun 2014", "UU No. 17 Tahun 2014", "UU No. 12 Tahun 2011"],
    answer: 0,
    explanation: "UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengatur hak dan kewajiban warga negara terhadap lingkungan hidup."
  },
  {
    id: 207, type: "single",
    question: "UUD NRI Tahun 1945 disahkan oleh PPKI pada tanggal...",
    options: ["17 Agustus 1945", "18 Agustus 1945", "19 Agustus 1945", "22 Juni 1945"],
    answer: 1,
    explanation: "UUD NRI Tahun 1945 disahkan oleh PPKI pada 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan, dan kemudian dikukuhkan KNIP pada 19 Agustus 1945."
  },
  {
    id: 208, type: "single",
    question: "Panitia yang merumuskan dasar hukum (UUD) dan diketuai oleh Ir. Soekarno beranggotakan...",
    options: ["9 orang", "16 orang", "19 orang", "69 orang"],
    answer: 2,
    explanation: "Panitia Dasar Hukum (Panitia Perancang UUD) beranggotakan 19 orang dan diketuai oleh Ir. Soekarno, menghasilkan rancangan UUD dalam sidang kedua BPUPK."
  },
  {
    id: 209, type: "single",
    question: "Hasil sidang kedua BPUPK menyepakati UUD yang terdiri atas...",
    options: ["10 bab dan 30 pasal", "16 bab, 37 pasal, 4 pasal aturan peralihan, 2 ayat aturan tambahan", "20 bab dan 50 pasal", "5 bab dan 20 pasal"],
    answer: 1,
    explanation: "Hasil sidang kedua BPUPK menyepakati rancangan UUD yang terdiri atas 16 bab, 37 pasal, 4 pasal aturan peralihan, dan 2 ayat aturan tambahan."
  },
  {
    id: 210, type: "single",
    question: "Lembaga yang berwenang melakukan amendemen (perubahan) UUD NRI Tahun 1945 adalah...",
    options: ["DPR", "MPR", "Mahkamah Konstitusi", "Presiden"],
    answer: 1,
    explanation: "MPR (Majelis Permusyawaratan Rakyat) adalah lembaga yang berwenang melakukan amendemen UUD NRI Tahun 1945, yang telah dilakukan sebanyak 4 tahap (1999-2002)."
  },
  {
    id: 211, type: "single",
    question: "Amendemen UUD NRI Tahun 1945 tahap pertama berisi pembatasan masa jabatan presiden maksimal...",
    options: ["1 kali masa jabatan", "2 kali masa jabatan, masing-masing 5 tahun", "3 kali masa jabatan", "Tidak dibatasi"],
    answer: 1,
    explanation: "Amendemen tahap I (14-19 Oktober 1999) mengubah 9 pasal, salah satunya membatasi masa jabatan presiden dan wakil presiden maksimal dua kali masa jabatan, masing-masing 5 tahun."
  },
  {
    id: 212, type: "single",
    question: "Amendemen UUD NRI Tahun 1945 tahap kedua menghasilkan perubahan penting berupa...",
    options: ["Pemilihan presiden secara langsung", "Pemilihan anggota DPR secara langsung oleh rakyat", "Anggaran pendidikan minimal 20%", "Pembatasan masa jabatan presiden"],
    answer: 1,
    explanation: "Amendemen tahap II (1-18 Agustus 2000) mengubah 25 pasal dalam 5 bab, salah satu hasil pentingnya adalah ketentuan pemilihan anggota DPR secara langsung oleh rakyat."
  },
  {
    id: 213, type: "single",
    question: "Ketentuan bahwa anggaran pendidikan minimal 20% dari APBN merupakan hasil amendemen UUD tahap ke...",
    options: ["I", "II", "III", "IV"],
    answer: 3,
    explanation: "Amendemen tahap IV (1-10 Agustus 2002) mengubah 13 pasal, salah satunya menetapkan anggaran pendidikan minimal 20% dari APBN dan APBD."
  },
  {
    id: 214, type: "single",
    question: "Ketentuan pemilihan presiden dan wakil presiden secara langsung oleh rakyat dihasilkan dari amendemen UUD tahap ke...",
    options: ["I", "II", "III", "IV"],
    answer: 2,
    explanation: "Amendemen tahap III (1-9 November 2001) mengubah 22 pasal, menghasilkan ketentuan pemilihan presiden dan wakil presiden secara langsung oleh rakyat."
  },
  {
    id: 215, type: "single",
    question: "Hak dan kewajiban dalam menjalankan norma di masyarakat termasuk bagian dari konsep...",
    options: ["Hak Asasi Manusia (HAM)", "Demokrasi", "Konstitusi", "Otonomi daerah"],
    answer: 0,
    explanation: "Hak dan kewajiban yang melekat pada setiap individu dalam menjalankan norma berkaitan erat dengan konsep Hak Asasi Manusia (HAM), yang harus dihormati, dilindungi, dan dipenuhi."
  },
  {
    id: 216, type: "single",
    question: "Norma sosial berfungsi mengatur hubungan...",
    options: ["Manusia dengan Tuhan", "Manusia dengan diri sendiri", "Manusia dengan sesama dalam pergaulan masyarakat", "Negara dengan warga negara"],
    answer: 2,
    explanation: "Norma sosial bersumber dari kebiasaan masyarakat dan berfungsi mengatur hubungan antarindividu dalam pergaulan bermasyarakat sehari-hari."
  },
  {
    id: 217, type: "single",
    question: "UUD NRI Tahun 1945 dikukuhkan oleh KNIP pada tanggal...",
    options: ["17 Agustus 1945", "18 Agustus 1945", "19 Agustus 1945", "22 Agustus 1945"],
    answer: 2,
    explanation: "Setelah disahkan PPKI pada 18 Agustus 1945, UUD NRI Tahun 1945 kemudian dikukuhkan oleh Komite Nasional Indonesia Pusat (KNIP) pada 19 Agustus 1945."
  },
  {
    id: 218, type: "single",
    question: "Pelanggaran norma agama akan mendapat sanksi berupa...",
    options: ["Denda berupa uang", "Hukuman penjara", "Dosa dan ganjaran di akhirat", "Dikucilkan masyarakat"],
    answer: 2,
    explanation: "Pelanggaran norma agama tidak memiliki sanksi fisik yang dijatuhkan manusia, melainkan berupa dosa dan ganjaran di akhirat menurut keyakinan agama masing-masing."
  },
  {
    id: 219, type: "single",
    question: "Amendemen UUD NRI Tahun 1945 dilakukan sebanyak...",
    options: ["1 tahap", "2 tahap", "3 tahap", "4 tahap"],
    answer: 3,
    explanation: "Amendemen UUD NRI Tahun 1945 dilakukan dalam 4 tahap: tahap I (1999), tahap II (2000), tahap III (2001), dan tahap IV (2002)."
  },
  {
    id: 220, type: "single",
    question: "Norma yang sanksinya berasal dari hukuman fisik atau denda yang ditetapkan oleh lembaga adat di suatu daerah disebut norma...",
    options: ["Hukum tertulis", "Adat/kebiasaan masyarakat setempat", "Agama", "Internasional"],
    answer: 1,
    explanation: "Norma adat/kebiasaan masyarakat setempat memiliki sanksi yang ditetapkan oleh lembaga adat, misalnya hukuman cambuk di Aceh atau denda berupa ternak di Kalimantan dan Papua."
  },
  {
    id: 221, type: "multiple",
    question: "Berikut yang merupakan jenis-jenis norma menurut sumbernya adalah...",
    options: ["Norma agama", "Norma susila", "Norma sosial", "Norma hukum"],
    answer: [0, 1, 2, 3],
    explanation: "Empat jenis norma berdasarkan sumber dan sifatnya: norma agama, norma susila, norma sosial (kesopanan), dan norma hukum."
  },
  {
    id: 222, type: "multiple",
    question: "Manakah pernyataan yang benar mengenai amendemen UUD NRI Tahun 1945?",
    options: ["Dilakukan oleh MPR", "Berlangsung dalam 4 tahap", "Tahap I berlangsung 14-19 Oktober 1999", "Dilakukan oleh PPKI"],
    answer: [0, 1, 2],
    explanation: "Amendemen UUD dilakukan oleh MPR dalam 4 tahap (1999-2002), tahap I berlangsung 14-19 Oktober 1999. PPKI hanya berperan mengesahkan UUD pada 1945, bukan melakukan amendemen."
  },
  {
    id: 223, type: "multiple",
    question: "Nilai-nilai penting yang terkandung dalam norma masyarakat antara lain...",
    options: ["Menciptakan ketertiban dan keteraturan", "Menjadi pedoman bertingkah laku", "Mewujudkan keadilan", "Membatasi kebebasan tanpa tujuan"],
    answer: [0, 1, 2],
    explanation: "Norma penting karena menciptakan ketertiban dan keteraturan, menjadi pedoman/panduan bertingkah laku, dan mewujudkan keadilan dalam kehidupan bermasyarakat — bukan untuk membatasi kebebasan tanpa tujuan."
  },
  {
    id: 224, type: "multiple",
    question: "Hasil sidang kedua BPUPK terkait rancangan UUD meliputi penetapan...",
    options: ["16 bab", "37 pasal", "4 pasal aturan peralihan", "9 pasal aturan tambahan"],
    answer: [0, 1, 2],
    explanation: "Hasil sidang kedua BPUPK menetapkan rancangan UUD terdiri atas 16 bab, 37 pasal, 4 pasal aturan peralihan, dan 2 ayat aturan tambahan (bukan 9 pasal)."
  },
  {
    id: 225, type: "multiple",
    question: "Hak-hak yang dijamin dalam UUD NRI Tahun 1945 dan terkait norma kehidupan bernegara antara lain...",
    options: ["Hak mendapat pendidikan", "Hak hidup", "Hak mendapat lingkungan hidup yang baik dan sehat", "Hak melanggar hukum tanpa sanksi"],
    answer: [0, 1, 2],
    explanation: "UUD NRI 1945 menjamin hak mendapat pendidikan, hak hidup, dan hak atas lingkungan hidup yang baik dan sehat (sesuai UU No. 32 Tahun 2009). Tidak ada hak untuk melanggar hukum tanpa sanksi."
  },
  {
    id: 226, type: "multiple",
    question: "Sanksi pelanggaran norma di berbagai daerah di Indonesia dapat berupa...",
    options: ["Hukuman cambuk di Aceh", "Denda berupa ternak di Kalimantan/Papua", "Dosa di akhirat", "Sanksi pidana penjara dari pengadilan internasional"],
    answer: [0, 1, 2],
    explanation: "Contoh sanksi pelanggaran norma: hukuman cambuk (Aceh, norma daerah berbasis syariat), denda ternak (Kalimantan/Papua, norma adat), dan dosa di akhirat (norma agama). Pengadilan internasional bukan bagian dari sanksi norma masyarakat."
  },
  {
    id: 227, type: "multiple",
    question: "Berikut yang merupakan hasil amendemen UUD NRI Tahun 1945 adalah...",
    options: ["Pembatasan masa jabatan presiden", "Pemilihan anggota DPR secara langsung", "Pemilihan presiden secara langsung", "Penghapusan Pancasila sebagai dasar negara"],
    answer: [0, 1, 2],
    explanation: "Amendemen menghasilkan pembatasan masa jabatan presiden (tahap I), pemilihan DPR langsung (tahap II), dan pemilihan presiden langsung (tahap III). Pancasila sebagai dasar negara tidak pernah diubah/dihapus."
  },
  {
    id: 228, type: "multiple",
    question: "Lembaga-lembaga yang berperan dalam proses perumusan dan pengesahan UUD NRI Tahun 1945 adalah...",
    options: ["BPUPK", "Panitia Dasar Hukum/Perancang UUD", "PPKI", "KNIP"],
    answer: [0, 1, 2, 3],
    explanation: "BPUPK merumuskan rancangan, Panitia Dasar Hukum (19 orang, diketuai Soekarno) menyusun naskah UUD, PPKI mengesahkan pada 18 Agustus 1945, dan KNIP mengukuhkannya pada 19 Agustus 1945."
  },
  {
    id: 229, type: "multiple",
    question: "Fungsi norma dalam kehidupan bermasyarakat antara lain untuk...",
    options: ["Mengatur tingkah laku manusia", "Menjaga ketertiban dan keharmonisan", "Memberi pedoman dalam bertindak", "Menghilangkan perbedaan pendapat di masyarakat"],
    answer: [0, 1, 2],
    explanation: "Norma berfungsi mengatur tingkah laku, menjaga ketertiban dan keharmonisan, serta memberi pedoman bertindak. Norma tidak bertujuan menghilangkan perbedaan pendapat, melainkan mengatur cara menyikapinya."
  },
  {
    id: 230, type: "multiple",
    question: "Konsep Tri Hita Karana mencakup hubungan harmonis antara...",
    options: ["Manusia dengan Tuhan", "Manusia dengan sesama manusia", "Manusia dengan alam lingkungan", "Manusia dengan teknologi"],
    answer: [0, 1, 2],
    explanation: "Tri Hita Karana terdiri dari tiga unsur hubungan harmonis: manusia dengan Tuhan (parahyangan), manusia dengan sesama manusia (pawongan), dan manusia dengan alam (palemahan)."
  },
  {
    id: 231, type: "truefalse",
    question: "Norma agama bersumber dari ajaran agama dan diyakini berasal dari Tuhan Yang Maha Esa.",
    answer: true,
    explanation: "BENAR. Norma agama bersumber dari ajaran/kepercayaan agama yang diyakini sebagai perintah/larangan dari Tuhan Yang Maha Esa."
  },
  {
    id: 232, type: "truefalse",
    question: "Norma hukum dibuat oleh masyarakat secara turun-temurun tanpa keterlibatan lembaga negara.",
    answer: false,
    explanation: "SALAH. Norma hukum justru dibuat oleh lembaga negara yang berwenang (seperti DPR bersama Pemerintah), bersifat tegas dan memaksa dengan sanksi yang jelas. Yang bersumber dari kebiasaan turun-temurun masyarakat adalah norma adat/sosial."
  },
  {
    id: 233, type: "truefalse",
    question: "UUD NRI Tahun 1945 disahkan oleh PPKI pada 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan.",
    answer: true,
    explanation: "BENAR. Sehari setelah Proklamasi (17 Agustus), PPKI mengesahkan UUD NRI Tahun 1945 pada 18 Agustus 1945, dan dikukuhkan KNIP keesokan harinya."
  },
  {
    id: 234, type: "truefalse",
    question: "Amendemen UUD NRI Tahun 1945 hanya dilakukan satu kali, yaitu pada tahun 1999.",
    answer: false,
    explanation: "SALAH. Amendemen UUD NRI Tahun 1945 dilakukan dalam 4 tahap, yaitu tahun 1999 (tahap I), 2000 (tahap II), 2001 (tahap III), dan 2002 (tahap IV)."
  },
  {
    id: 235, type: "truefalse",
    question: "Tri Hita Karana adalah konsep dari masyarakat Bali yang berarti 'tiga penyebab kebahagiaan'.",
    answer: true,
    explanation: "BENAR. Tri Hita Karana berasal dari masyarakat Bali dan secara harfiah berarti 'tiga penyebab kebahagiaan', mencakup hubungan manusia dengan Tuhan, sesama, dan alam."
  },
  {
    id: 236, type: "truefalse",
    question: "Panitia Dasar Hukum yang merumuskan UUD beranggotakan 9 orang dan diketuai oleh Drs. Moh. Hatta.",
    answer: false,
    explanation: "SALAH. Panitia Dasar Hukum (Panitia Perancang UUD) beranggotakan 19 orang dan diketuai oleh Ir. Soekarno, bukan 9 orang dan bukan diketuai Hatta (itu adalah ciri Panitia Sembilan yang merumuskan dasar negara)."
  },
  {
    id: 237, type: "truefalse",
    question: "Hasil amendemen UUD tahap II (2000) menetapkan anggaran pendidikan minimal 20% dari APBN.",
    answer: false,
    explanation: "SALAH. Ketentuan anggaran pendidikan minimal 20% adalah hasil amendemen tahap IV (2002). Amendemen tahap II (2000) menghasilkan antara lain pemilihan anggota DPR secara langsung."
  },
  {
    id: 238, type: "truefalse",
    question: "Norma sosial berkaitan dengan tata cara bersikap sopan dalam kehidupan bermasyarakat.",
    answer: true,
    explanation: "BENAR. Norma sosial (kesopanan) bersumber dari kebiasaan masyarakat dan mengatur cara bersikap dan bertingkah laku yang sopan dalam pergaulan sehari-hari."
  },
  {
    id: 239, type: "truefalse",
    question: "UU No. 32 Tahun 2009 mengatur tentang Perlindungan dan Pengelolaan Lingkungan Hidup.",
    answer: true,
    explanation: "BENAR. UU No. 32 Tahun 2009 tentang Perlindungan dan Pengelolaan Lingkungan Hidup mengatur hak setiap orang atas lingkungan hidup yang baik dan sehat sekaligus kewajiban menjaganya."
  },
  {
    id: 240, type: "truefalse",
    question: "Pemilihan presiden dan wakil presiden secara langsung oleh rakyat merupakan hasil amendemen UUD tahap I.",
    answer: false,
    explanation: "SALAH. Pemilihan presiden dan wakil presiden secara langsung adalah hasil amendemen tahap III (2001). Amendemen tahap I (1999) menghasilkan antara lain pembatasan masa jabatan presiden."
  }
      ] },
      { id: 3, name: "Kesatuan Indonesia dan Karakteristik Daerah", questions: [
  {
    id: 301, type: "single",
    question: "Sumpah yang berisi cita-cita untuk mempersatukan wilayah Nusantara, diucapkan oleh Patih Gajah Mada, dikenal dengan nama...",
    options: ["Sumpah Pemuda", "Sumpah Palapa", "Sumpah Setia", "Sumpah Amukti Palapa"],
    answer: 1,
    explanation: "Sumpah Palapa diucapkan oleh Gajah Mada saat dilantik menjadi Patih Amangkubhumi Majapahit, berisi cita-cita mempersatukan wilayah Nusantara di bawah Majapahit."
  },
  {
    id: 302, type: "single",
    question: "Wilayah Indonesia terletak pada koordinat...",
    options: ["6°LU – 11°LS dan 95°BT – 141°BT", "10°LU – 15°LS dan 90°BT – 130°BT", "0°LU – 20°LS dan 100°BT – 150°BT", "6°LU – 11°LS dan 90°BT – 130°BT"],
    answer: 0,
    explanation: "Wilayah Indonesia berada pada koordinat 6°LU – 11°LS dan 95°BT – 141°BT, menjadikannya negara kepulauan terbesar yang membentang di garis khatulistiwa."
  },
  {
    id: 303, type: "single",
    question: "Garis khayal yang memisahkan flora dan fauna Asia dengan flora dan fauna Australia di kawasan Indonesia disebut Garis...",
    options: ["Wallace", "Weber", "Lydekker", "Khatulistiwa"],
    answer: 0,
    explanation: "Garis Wallace dicetuskan oleh Alfred Russel Wallace (1823-1913), membentang dari Selat Lombok hingga Selat Makassar, memisahkan kawasan flora-fauna Asia (barat) dan Australia/peralihan (timur)."
  },
  {
    id: 304, type: "single",
    question: "Dalam sidang BPUPK mengenai wilayah negara, opsi yang akhirnya disepakati (hasil voting) adalah opsi yang meliputi...",
    options: ["Hindia Belanda saja", "Hindia Belanda, Malaya, Borneo Utara, Timor, dan Papua", "Hanya Pulau Jawa dan Sumatera", "Wilayah bekas jajahan Portugis"],
    answer: 1,
    explanation: "Dalam pemungutan suara BPUPK mengenai wilayah negara, opsi kedua (mencakup Hindia Belanda, Malaya, Borneo Utara, Timor, dan Papua) memenangkan voting dengan hasil 39 suara."
  },
  {
    id: 305, type: "single",
    question: "Salah satu ciri negara kesatuan adalah...",
    options: ["Memiliki banyak kepala negara", "Hanya ada satu pemerintahan pusat yang berdaulat", "Setiap daerah memiliki UUD sendiri", "Kekuasaan terbagi rata antarnegara bagian"],
    answer: 1,
    explanation: "Ciri negara kesatuan: hanya ada satu pemerintahan pusat, satu UUD, satu kepala negara dan kepala pemerintahan, serta satu badan perwakilan rakyat (MPR/DPR/DPD)."
  },
  {
    id: 306, type: "single",
    question: "Tokoh yang dalam sidang BPUPK mendukung bentuk negara federal (federasi) adalah...",
    options: ["Ir. Soekarno", "Mr. Soepomo", "Mr. Mohammad Yamin", "Drs. Moh. Hatta"],
    answer: 3,
    explanation: "Drs. Moh. Hatta merupakan tokoh yang mendukung bentuk negara federal/federasi, sedangkan Soepomo, Yamin, dan Soekarno mendukung bentuk negara kesatuan."
  },
  {
    id: 307, type: "single",
    question: "Pasal yang melarang perubahan bentuk Negara Kesatuan Republik Indonesia (hasil amendemen IV) adalah Pasal...",
    options: ["Pasal 1", "Pasal 18", "Pasal 33", "Pasal 37"],
    answer: 3,
    explanation: "Pasal 37 ayat (5) UUD NRI 1945 (hasil amendemen IV) menegaskan bahwa khusus mengenai bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan."
  },
  {
    id: 308, type: "single",
    question: "Indonesia pernah berbentuk negara federal dengan nama Republik Indonesia Serikat (RIS) yang dibentuk melalui...",
    options: ["Konferensi Meja Bundar", "Perjanjian Renville", "Perjanjian Linggarjati", "Sumpah Pemuda"],
    answer: 0,
    explanation: "RIS dibentuk melalui Konferensi Meja Bundar (23 Agustus – 2 November 1949), namun Indonesia kembali menjadi NKRI pada 17 Agustus 1950."
  },
  {
    id: 309, type: "single",
    question: "Indonesia kembali menjadi Negara Kesatuan Republik Indonesia setelah masa RIS pada tanggal...",
    options: ["17 Agustus 1949", "17 Agustus 1950", "2 November 1949", "1 Januari 1950"],
    answer: 1,
    explanation: "Setelah berbentuk RIS sejak Konferensi Meja Bundar, Indonesia kembali menjadi Negara Kesatuan Republik Indonesia pada 17 Agustus 1950."
  },
  {
    id: 310, type: "single",
    question: "Hari Kebangkitan Nasional diperingati setiap tanggal 20 Mei untuk mengenang berdirinya organisasi...",
    options: ["Sarekat Islam", "Budi Utomo", "Indische Partij", "Muhammadiyah"],
    answer: 1,
    explanation: "Hari Kebangkitan Nasional diperingati setiap 20 Mei untuk mengenang berdirinya Budi Utomo pada 20 Mei 1908, organisasi pergerakan modern pertama di Indonesia."
  },
  {
    id: 311, type: "single",
    question: "Sumpah Pemuda diikrarkan pada tanggal...",
    options: ["20 Mei 1908", "28 Oktober 1928", "17 Agustus 1945", "1 Juni 1945"],
    answer: 1,
    explanation: "Sumpah Pemuda diikrarkan pada 28 Oktober 1928 dalam Kongres Pemuda II, berisi tekad satu nusa, satu bangsa, dan satu bahasa: Indonesia."
  },
  {
    id: 312, type: "single",
    question: "Tokoh pendidikan yang mendirikan Perguruan Taman Siswa adalah...",
    options: ["Tengku M. Syafei", "Ki Hajar Dewantara", "Abdul Muis", "Mohammad Hatta"],
    answer: 1,
    explanation: "Ki Hajar Dewantara mendirikan Perguruan Taman Siswa, salah satu wadah perjuangan nonfisik melalui jalur pendidikan untuk membangun semangat persatuan dan kesatuan bangsa."
  },
  {
    id: 313, type: "single",
    question: "Tempat dibacakannya teks Proklamasi Kemerdekaan Indonesia adalah...",
    options: ["Istana Merdeka", "Jalan Pegangsaan Timur No. 56 Jakarta", "Gedung Merdeka Bandung", "Lapangan Ikada"],
    answer: 1,
    explanation: "Teks Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Soekarno di kediamannya, Jalan Pegangsaan Timur No. 56, Jakarta, pada 17 Agustus 1945."
  },
  {
    id: 314, type: "single",
    question: "Salah satu bentuk perjuangan nonfisik mempertahankan persatuan melalui jalur sastra dilakukan oleh...",
    options: ["Jenderal Sudirman", "Chairil Anwar", "Bung Tomo", "Cut Nyak Dien"],
    answer: 1,
    explanation: "Chairil Anwar adalah salah satu sastrawan yang berjuang secara nonfisik melalui karya sastra untuk membangkitkan semangat persatuan dan kebangsaan, selain Abdul Muis, Marah Rusli, dan Sutan Takdir Alisyahbana."
  },
  {
    id: 315, type: "single",
    question: "Berikut adalah salah satu ciri negara kesatuan, yaitu memiliki...",
    options: ["Beberapa kepala pemerintahan", "Satu Undang-Undang Dasar", "Beberapa konstitusi negara bagian", "Banyak badan perwakilan yang berdaulat penuh"],
    answer: 1,
    explanation: "Negara kesatuan hanya memiliki satu Undang-Undang Dasar (UUD) yang berlaku bagi seluruh wilayah negara, berbeda dengan negara federal yang tiap negara bagiannya bisa memiliki konstitusi sendiri."
  },
  {
    id: 316, type: "single",
    question: "Wilayah laut Indonesia memiliki batas Zona Ekonomi Eksklusif (ZEE) sejauh...",
    options: ["12 mil laut", "24 mil laut", "100 mil laut", "200 mil laut"],
    answer: 3,
    explanation: "Zona Ekonomi Eksklusif (ZEE) Indonesia membentang sejauh 200 mil laut diukur dari garis pangkal pulau-pulau terluar, memberi hak khusus untuk eksplorasi sumber daya laut."
  },
  {
    id: 317, type: "single",
    question: "Lembaga negara yang menjadi badan perwakilan rakyat dalam ciri negara kesatuan Indonesia meliputi...",
    options: ["MPR, DPR, dan DPD", "Mahkamah Agung dan Mahkamah Konstitusi", "BPK dan KPK", "TNI dan Polri"],
    answer: 0,
    explanation: "Sebagai ciri negara kesatuan, Indonesia memiliki satu sistem badan perwakilan rakyat yang terdiri dari MPR, DPR, dan DPD."
  },
  {
    id: 318, type: "single",
    question: "Garis Wallace membentang dari...",
    options: ["Selat Sunda hingga Selat Bali", "Selat Sulawesi hingga Selat Lombok", "Selat Malaka hingga Laut Jawa", "Selat Karimata hingga Laut Banda"],
    answer: 1,
    explanation: "Garis Wallace membentang dari Selat Sulawesi (Makassar) hingga Selat Lombok, memisahkan kawasan fauna Asiatis di barat dengan kawasan fauna Australis/peralihan di timur."
  },
  {
    id: 319, type: "single",
    question: "Hasil pemungutan suara BPUPK mengenai opsi pertama wilayah negara (hanya Hindia Belanda) memperoleh suara sebanyak...",
    options: ["6 suara", "19 suara", "39 suara", "69 suara"],
    answer: 1,
    explanation: "Dalam voting BPUPK mengenai wilayah negara, opsi pertama (hanya Hindia Belanda) memperoleh 19 suara, opsi kedua memperoleh 39 suara (menang), dan opsi ketiga 6 suara."
  },
  {
    id: 320, type: "single",
    question: "Perjuangan mempertahankan persatuan dan kesatuan bangsa melalui jalur pendidikan dipelopori antara lain oleh Tengku M. Syafei dengan mendirikan...",
    options: ["Taman Siswa", "INS Kayutanam", "Sarekat Islam", "Budi Utomo"],
    answer: 1,
    explanation: "Tengku M. Syafei mendirikan INS (Indonesisch Nederlandsche School) Kayutanam sebagai wadah perjuangan nonfisik melalui pendidikan untuk membentuk karakter dan semangat kebangsaan."
  },
  {
    id: 321, type: "multiple",
    question: "Berikut yang termasuk ciri-ciri negara kesatuan adalah...",
    options: ["Satu pemerintahan pusat", "Satu Undang-Undang Dasar", "Satu kepala negara dan kepala pemerintahan", "Setiap daerah memiliki konstitusi sendiri"],
    answer: [0, 1, 2],
    explanation: "Ciri negara kesatuan: satu pemerintahan pusat, satu UUD, satu kepala negara/pemerintahan, dan satu badan perwakilan (MPR/DPR/DPD). Konstitusi tersendiri tiap daerah adalah ciri negara federal."
  },
  {
    id: 322, type: "multiple",
    question: "Tokoh yang mendukung bentuk negara kesatuan dalam sidang BPUPK adalah...",
    options: ["Mr. Soepomo", "Mr. Mohammad Yamin", "Ir. Soekarno", "Drs. Moh. Hatta"],
    answer: [0, 1, 2],
    explanation: "Soepomo, Yamin, dan Soekarno mendukung bentuk negara kesatuan, sedangkan Moh. Hatta lebih condong mendukung bentuk negara federal/federasi."
  },
  {
    id: 323, type: "multiple",
    question: "Peristiwa-peristiwa berikut menjadi tonggak perjuangan persatuan dan kesatuan bangsa Indonesia...",
    options: ["Berdirinya Budi Utomo (1908)", "Sumpah Pemuda (1928)", "Proklamasi Kemerdekaan (1945)", "Konferensi Meja Bundar (1949)"],
    answer: [0, 1, 2],
    explanation: "Berdirinya Budi Utomo, Sumpah Pemuda, dan Proklamasi adalah tonggak penting perjuangan persatuan-kesatuan. KMB justru mengantar Indonesia ke bentuk RIS (federal) sebelum kembali ke NKRI."
  },
  {
    id: 324, type: "multiple",
    question: "Wilayah Indonesia memiliki karakteristik geografis berupa...",
    options: ["Negara kepulauan terbesar di dunia", "Terletak di garis khatulistiwa", "Dilalui oleh Garis Wallace dan Garis Weber", "Hanya terdiri dari satu pulau besar"],
    answer: [0, 1, 2],
    explanation: "Indonesia adalah negara kepulauan terbesar di dunia, terletak di garis khatulistiwa antara 6°LU-11°LS dan 95°BT-141°BT, serta dilalui Garis Wallace dan Garis Weber yang membagi kawasan flora-fauna."
  },
  {
    id: 325, type: "multiple",
    question: "Tokoh sastrawan yang berjuang mempertahankan persatuan bangsa melalui karya sastra antara lain...",
    options: ["Abdul Muis", "Marah Rusli", "Sutan Takdir Alisyahbana", "Ki Hajar Dewantara"],
    answer: [0, 1, 2],
    explanation: "Abdul Muis, Marah Rusli, Sutan Takdir Alisyahbana, dan Chairil Anwar adalah sastrawan yang membangkitkan semangat kebangsaan lewat karya sastra. Ki Hajar Dewantara berjuang melalui jalur pendidikan (Taman Siswa)."
  },
  {
    id: 326, type: "multiple",
    question: "Manakah pernyataan yang tepat mengenai sejarah bentuk negara Indonesia?",
    options: ["Pernah berbentuk Republik Indonesia Serikat (RIS)", "RIS terbentuk melalui Konferensi Meja Bundar", "Indonesia kembali menjadi NKRI pada 17 Agustus 1950", "Bentuk negara federal berlaku hingga sekarang"],
    answer: [0, 1, 2],
    explanation: "Indonesia pernah berbentuk RIS hasil Konferensi Meja Bundar (1949), lalu kembali ke NKRI pada 17 Agustus 1950. Sejak itu, Pasal 37 ayat (5) hasil amendemen melarang perubahan bentuk NKRI."
  },
  {
    id: 327, type: "multiple",
    question: "Garis-garis khayal yang membagi kawasan fauna di Indonesia adalah...",
    options: ["Garis Wallace", "Garis Weber", "Garis Khatulistiwa", "Garis Bujur Timur"],
    answer: [0, 1],
    explanation: "Garis Wallace dan Garis Weber adalah garis khayal yang membagi kawasan fauna Indonesia menjadi tipe Asiatis (barat), peralihan (tengah), dan Australis (timur)."
  },
  {
    id: 328, type: "multiple",
    question: "Bentuk perjuangan mempertahankan persatuan dan kesatuan dapat dilakukan secara...",
    options: ["Fisik melalui perlawanan bersenjata", "Nonfisik melalui pendidikan", "Nonfisik melalui karya sastra", "Hanya melalui jalur diplomasi internasional semata"],
    answer: [0, 1, 2],
    explanation: "Perjuangan mempertahankan persatuan dapat dilakukan secara fisik (perlawanan bersenjata) maupun nonfisik (pendidikan seperti Taman Siswa/INS Kayutanam, dan karya sastra)."
  },
  {
    id: 329, type: "multiple",
    question: "Hal-hal yang menjadi pertimbangan dalam menentukan luas wilayah negara Indonesia pada sidang BPUPK adalah...",
    options: ["Batas wilayah bekas Hindia Belanda", "Wilayah Malaya dan Borneo Utara", "Wilayah Timor dan Papua", "Wilayah benua Australia"],
    answer: [0, 1, 2],
    explanation: "Opsi wilayah yang dipertimbangkan dan akhirnya disepakati BPUPK mencakup bekas Hindia Belanda, Malaya, Borneo Utara, Timor, dan Papua. Australia tidak pernah menjadi opsi wilayah Indonesia."
  },
  {
    id: 330, type: "multiple",
    question: "Manakah yang merupakan upaya mempertahankan persatuan dan kesatuan Indonesia di era modern?",
    options: ["Menghormati keberagaman suku dan budaya", "Menjaga semangat gotong royong", "Mengikuti kegiatan kebangsaan seperti upacara bendera", "Memaksakan budaya daerah sendiri kepada daerah lain"],
    answer: [0, 1, 2],
    explanation: "Mempertahankan persatuan dilakukan dengan menghormati keberagaman, menjaga gotong royong, dan mengikuti kegiatan kebangsaan — bukan memaksakan budaya sendiri kepada orang/daerah lain."
  },
  {
    id: 331, type: "truefalse",
    question: "Sumpah Palapa diucapkan oleh Gajah Mada saat dilantik menjadi Patih Amangkubhumi Majapahit.",
    answer: true,
    explanation: "BENAR. Sumpah Palapa berisi cita-cita mempersatukan Nusantara, diucapkan Gajah Mada saat pelantikannya sebagai Patih Amangkubhumi Majapahit pada masa Tribhuwana Tunggadewi."
  },
  {
    id: 332, type: "truefalse",
    question: "Garis Wallace memisahkan kawasan fauna Asiatis dengan kawasan fauna peralihan/Australis di Indonesia.",
    answer: true,
    explanation: "BENAR. Garis Wallace yang dicetuskan Alfred Russel Wallace membentang dari Selat Sulawesi hingga Selat Lombok, memisahkan fauna tipe Asiatis di barat dengan tipe peralihan/Australis di timur."
  },
  {
    id: 333, type: "truefalse",
    question: "Drs. Moh. Hatta dalam sidang BPUPK mendukung bentuk negara federal/federasi.",
    answer: true,
    explanation: "BENAR. Berbeda dengan Soekarno, Soepomo, dan Yamin yang mendukung negara kesatuan, Moh. Hatta justru cenderung mendukung bentuk negara federal/federasi."
  },
  {
    id: 334, type: "truefalse",
    question: "Pasal 37 hasil amendemen UUD melarang perubahan bentuk Negara Kesatuan Republik Indonesia.",
    answer: true,
    explanation: "BENAR. Pasal 37 ayat (5) UUD NRI Tahun 1945 hasil amendemen menegaskan bahwa bentuk Negara Kesatuan Republik Indonesia tidak dapat diubah."
  },
  {
    id: 335, type: "truefalse",
    question: "Indonesia pernah berbentuk negara federal bernama Republik Indonesia Serikat dan tidak pernah kembali menjadi negara kesatuan.",
    answer: false,
    explanation: "SALAH. Indonesia memang pernah menjadi RIS (federal) hasil Konferensi Meja Bundar 1949, namun kembali menjadi Negara Kesatuan Republik Indonesia pada 17 Agustus 1950."
  },
  {
    id: 336, type: "truefalse",
    question: "Hari Kebangkitan Nasional diperingati setiap tanggal 28 Oktober untuk mengenang Sumpah Pemuda.",
    answer: false,
    explanation: "SALAH. Hari Kebangkitan Nasional diperingati 20 Mei (untuk mengenang berdirinya Budi Utomo, 1908). Tanggal 28 Oktober diperingati sebagai Hari Sumpah Pemuda."
  },
  {
    id: 337, type: "truefalse",
    question: "Proklamasi Kemerdekaan Indonesia dibacakan di Jalan Pegangsaan Timur No. 56, Jakarta.",
    answer: true,
    explanation: "BENAR. Soekarno membacakan teks Proklamasi Kemerdekaan di kediamannya, Jalan Pegangsaan Timur No. 56, Jakarta, pada 17 Agustus 1945."
  },
  {
    id: 338, type: "truefalse",
    question: "Wilayah Indonesia membentang dari 6°LU hingga 11°LS dan 95°BT hingga 141°BT.",
    answer: true,
    explanation: "BENAR. Wilayah Indonesia berada pada koordinat 6°LU – 11°LS dan 95°BT – 141°BT, mencakup ribuan pulau yang membentang dari Sabang hingga Merauke."
  },
  {
    id: 339, type: "truefalse",
    question: "Ki Hajar Dewantara berjuang mempertahankan persatuan bangsa melalui jalur sastra dengan mendirikan INS Kayutanam.",
    answer: false,
    explanation: "SALAH. Ki Hajar Dewantara berjuang melalui jalur pendidikan dengan mendirikan Perguruan Taman Siswa. INS Kayutanam didirikan oleh Tengku M. Syafei, juga melalui jalur pendidikan (bukan sastra)."
  },
  {
    id: 340, type: "truefalse",
    question: "Dalam pemungutan suara BPUPK, opsi wilayah negara yang mencakup Hindia Belanda, Malaya, Borneo Utara, Timor, dan Papua memperoleh suara terbanyak.",
    answer: true,
    explanation: "BENAR. Opsi tersebut memperoleh 39 suara, mengalahkan opsi pertama (hanya Hindia Belanda, 19 suara) dan opsi ketiga (6 suara), sehingga ditetapkan menjadi acuan wilayah Indonesia."
  }
      ] },
      { id: 4, name: "Kebinekaan Indonesia", questions: [
  {
    id: 401, type: "single",
    question: "Tokoh perempuan yang memperjuangkan kesetaraan gender dalam pendidikan dan menjadi inspirasi Hari Kartini adalah...",
    options: ["Cut Nyak Dien", "Dewi Sartika", "Raden Ajeng Kartini", "Maria Walanda Maramis"],
    answer: 2,
    explanation: "RA Kartini dikenal sebagai tokoh perjuangan kesetaraan gender, khususnya dalam hal pendidikan bagi perempuan, dan namanya diabadikan sebagai Hari Kartini setiap 21 April."
  },
  {
    id: 402, type: "single",
    question: "Kementerian yang menangani urusan pemberdayaan perempuan dan perlindungan anak di Indonesia, berdiri sejak 1983, adalah Kementerian...",
    options: ["Sosial", "Pendidikan dan Kebudayaan", "Pemberdayaan Perempuan dan Perlindungan Anak (PPPA)", "Dalam Negeri"],
    answer: 2,
    explanation: "Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (KemenPPPA) telah ada sejak 1983 dengan berbagai nama, bertugas mengurus kesetaraan gender dan perlindungan anak."
  },
  {
    id: 403, type: "single",
    question: "Berdasarkan survei Badan Pusat Statistik (BPS) tahun 2010, jumlah suku bangsa di Indonesia mencapai...",
    options: ["300 suku", "1.340 suku", "500 suku", "2.000 suku"],
    answer: 1,
    explanation: "Survei BPS tahun 2010 mencatat sekitar 1.340 suku bangsa di Indonesia, meskipun jika dilihat dari kesamaan bahasa dan budaya jumlahnya bisa lebih dari 300 kelompok besar."
  },
  {
    id: 404, type: "single",
    question: "Suku Asmat dan suku Dani berasal dari pulau...",
    options: ["Sulawesi", "Kalimantan", "Papua", "Sumatra"],
    answer: 2,
    explanation: "Suku Asmat dan Dani adalah suku-suku yang mendiami wilayah Papua, selain suku Mee dan Arfak."
  },
  {
    id: 405, type: "single",
    question: "Tarian Saman yang berasal dari Aceh pernah dipentaskan dalam pembukaan Asian Games 2018 dengan melibatkan ribuan penari, yaitu sekitar...",
    options: ["500 siswa", "800 siswa", "1.600 siswa SMA", "3.000 siswa"],
    answer: 2,
    explanation: "Tari Saman dari Aceh dipentaskan secara kolosal oleh sekitar 1.600 siswa SMA dalam upacara pembukaan Asian Games 2018 di Jakarta."
  },
  {
    id: 406, type: "single",
    question: "Upacara pembakaran jenazah yang merupakan tradisi masyarakat Hindu Bali disebut...",
    options: ["Ngaben", "Tiwah", "Rambu Solo", "Kesodo"],
    answer: 0,
    explanation: "Ngaben adalah upacara pembakaran/kremasi jenazah dalam tradisi masyarakat Hindu Bali, bertujuan menyucikan roh agar dapat kembali ke asalnya."
  },
  {
    id: 407, type: "single",
    question: "Upacara adat 'Rambu Solo' merupakan tradisi pemakaman dari suku...",
    options: ["Bali", "Toraja", "Dayak", "Madura"],
    answer: 1,
    explanation: "Rambu Solo adalah upacara pemakaman adat suku Toraja, Sulawesi Selatan, yang melibatkan rangkaian ritual besar dan pemotongan kerbau sebagai bentuk penghormatan kepada arwah."
  },
  {
    id: 408, type: "single",
    question: "Rumah adat 'Tongkonan' yang atapnya menyerupai tanduk kerbau berasal dari suku...",
    options: ["Toraja", "Minang", "Batak", "Dayak"],
    answer: 0,
    explanation: "Tongkonan adalah rumah adat suku Toraja dengan atap melengkung menyerupai tanduk kerbau, melambangkan status sosial dan kepercayaan masyarakat Toraja."
  },
  {
    id: 409, type: "single",
    question: "Agama yang masuk ke Indonesia pertama kali pada sekitar abad ke-13 dan kitab sucinya adalah Al-Qur'an adalah agama...",
    options: ["Hindu", "Buddha", "Islam", "Kristen"],
    answer: 2,
    explanation: "Agama Islam diperkirakan masuk ke Indonesia sekitar abad ke-13, dengan kitab suci Al-Qur'an, tempat ibadah masjid, dan pemuka agama disebut ulama."
  },
  {
    id: 410, type: "single",
    question: "Ras yang mendiami sebagian besar wilayah Indonesia bagian barat disebut ras...",
    options: ["Melanesoid", "Mongoloid Melayu", "Kaukasoid", "Weddoid"],
    answer: 1,
    explanation: "Ras Mongoloid Melayu mendominasi penduduk Indonesia bagian barat, sementara wilayah timur seperti Papua didominasi ras Melanesoid."
  },
  {
    id: 411, type: "single",
    question: "Suku yang memiliki ciri-ciri ras Weddoid (mirip penduduk Sri Lanka) di Indonesia antara lain suku...",
    options: ["Mentawai", "Jawa", "Bugis", "Aceh"],
    answer: 0,
    explanation: "Ras Weddoid memiliki ciri menyerupai penduduk Sri Lanka, dengan contoh suku Mentawai, Enggano, Kubu, Sakai, dan Tomuna di Indonesia."
  },
  {
    id: 412, type: "single",
    question: "Tarian Pendet yang anggun dan biasa digunakan untuk menyambut tamu berasal dari daerah...",
    options: ["Jawa", "Bali", "Sumatra", "Kalimantan"],
    answer: 1,
    explanation: "Tari Pendet berasal dari Bali, biasa ditampilkan sebagai tarian penyambutan tamu dengan gerakan yang anggun dan penuh makna religius."
  },
  {
    id: 413, type: "single",
    question: "Hari besar agama Buddha yang memperingati kelahiran, pencerahan, dan wafatnya Sang Buddha disebut...",
    options: ["Nyepi", "Waisak", "Galungan", "Asadha"],
    answer: 1,
    explanation: "Hari Raya Waisak adalah hari besar umat Buddha yang memperingati tiga peristiwa penting (Trisuci Waisak): kelahiran, pencapaian pencerahan (penerangan agung), dan wafatnya Sang Buddha."
  },
  {
    id: 414, type: "single",
    question: "Upacara adat Bau Nyale berasal dari daerah...",
    options: ["Sumba", "Lombok", "Flores", "Toraja"],
    answer: 1,
    explanation: "Bau Nyale adalah tradisi menangkap cacing laut (nyale) yang berasal dari masyarakat Lombok, Nusa Tenggara Barat, sebagai bagian dari legenda Putri Mandalika."
  },
  {
    id: 415, type: "single",
    question: "Persentase keterwakilan perempuan di lembaga legislatif (DPR) yang diperjuangkan dalam isu kesetaraan gender adalah minimal...",
    options: ["10%", "20%", "30%", "50%"],
    answer: 2,
    explanation: "Salah satu wujud upaya kesetaraan gender di Indonesia adalah ketentuan keterwakilan perempuan minimal 30% dalam pencalonan anggota legislatif (DPR)."
  },
  {
    id: 416, type: "single",
    question: "Kelompok kepercayaan yang diakui dalam kehidupan beragama di Indonesia di luar enam agama resmi disebut...",
    options: ["Ateis", "Sekuler", "Penghayat Kepercayaan terhadap Tuhan Yang Maha Esa", "Agnostik"],
    answer: 2,
    explanation: "Selain enam agama resmi (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu), Indonesia juga mengakui keberadaan Penghayat Kepercayaan terhadap Tuhan Yang Maha Esa."
  },
  {
    id: 417, type: "single",
    question: "Upacara adat 'Tiwah' yang berkaitan dengan pemakaman/penguburan kembali tulang leluhur berasal dari suku...",
    options: ["Toraja", "Dayak", "Bali", "Madura"],
    answer: 1,
    explanation: "Tiwah adalah upacara adat suku Dayak di Kalimantan yang berkaitan dengan pemindahan/penyucian tulang-belulang leluhur ke tempat peristirahatan terakhir."
  },
  {
    id: 418, type: "single",
    question: "Karapan sapi merupakan tradisi yang berasal dari pulau...",
    options: ["Bali", "Lombok", "Madura", "Sumbawa"],
    answer: 2,
    explanation: "Karapan sapi adalah tradisi balap sapi khas Pulau Madura, Jawa Timur, yang biasa diadakan menjelang akhir musim panen."
  },
  {
    id: 419, type: "single",
    question: "Pemuka agama Hindu yang memimpin upacara keagamaan disebut...",
    options: ["Pendeta", "Pandita/Pinandita", "Bikkhu", "Jiaosheng"],
    answer: 1,
    explanation: "Pemuka agama Hindu disebut Pandita atau Pinandita, yang memimpin berbagai upacara keagamaan umat Hindu di pura."
  },
  {
    id: 420, type: "single",
    question: "Lagu daerah 'Yamko Rambe Yamko' berasal dari provinsi...",
    options: ["Maluku", "Papua", "Nusa Tenggara Timur", "Sulawesi Utara"],
    answer: 1,
    explanation: "Yamko Rambe Yamko adalah lagu daerah yang berasal dari Papua, sering dinyanyikan untuk menggambarkan semangat masyarakatnya."
  },
  {
    id: 421, type: "multiple",
    question: "Berikut ini adalah bentuk keragaman yang ada di Indonesia adalah keragaman...",
    options: ["Gender", "Suku", "Budaya", "Wilayah negara"],
    answer: [0, 1, 2],
    explanation: "Bentuk-bentuk kebinekaan Indonesia meliputi keragaman gender, suku, budaya, agama, serta ras dan antargolongan. Wilayah negara bukan termasuk kategori 'keragaman' dalam bab Kebinekaan."
  },
  {
    id: 422, type: "multiple",
    question: "Manakah pasangan suku bangsa dan asal pulau yang tepat?",
    options: ["Suku Bugis dan Toraja dari Sulawesi", "Suku Dayak dan Banjar dari Kalimantan", "Suku Batak dan Nias dari Sumatra", "Suku Asmat dan Dani dari Sulawesi"],
    answer: [0, 1, 2],
    explanation: "Bugis-Toraja dari Sulawesi, Dayak-Banjar dari Kalimantan, dan Batak-Nias dari Sumatra adalah pasangan yang tepat. Suku Asmat dan Dani justru berasal dari Papua, bukan Sulawesi."
  },
  {
    id: 423, type: "multiple",
    question: "Agama-agama yang diakui resmi di Indonesia meliputi...",
    options: ["Islam", "Kristen", "Khonghucu", "Animisme"],
    answer: [0, 1, 2],
    explanation: "Enam agama resmi di Indonesia: Islam, Kristen, Katolik, Hindu, Buddha, dan Khonghucu. Animisme bukan termasuk agama resmi yang diakui negara."
  },
  {
    id: 424, type: "multiple",
    question: "Tarian tradisional Indonesia yang terkenal hingga ke kancah internasional antara lain...",
    options: ["Tari Saman (Aceh)", "Tari Pendet (Bali)", "Tari Tor-tor (Batak)", "Tari Kecak (India)"],
    answer: [0, 1, 2],
    explanation: "Tari Saman, Pendet, dan Tor-tor adalah tarian tradisional Indonesia yang berasal dari Aceh, Bali, dan Batak. Tari Kecak berasal dari Bali, bukan India (opsi ini sengaja menyesatkan asal daerahnya)."
  },
  {
    id: 425, type: "multiple",
    question: "Upacara adat yang berkaitan dengan tradisi pemakaman di Indonesia antara lain...",
    options: ["Ngaben (Bali)", "Rambu Solo (Toraja)", "Tiwah (Dayak)", "Sekaten (Yogyakarta)"],
    answer: [0, 1, 2],
    explanation: "Ngaben, Rambu Solo, dan Tiwah berkaitan dengan tradisi pemakaman/penghormatan kepada arwah leluhur. Sekaten adalah perayaan keagamaan/budaya untuk memperingati Maulid Nabi di Yogyakarta-Solo, bukan tradisi pemakaman."
  },
  {
    id: 426, type: "multiple",
    question: "Upaya yang dapat dilakukan untuk menjaga nilai penting kebinekaan Indonesia adalah...",
    options: ["Saling menghormati antarsuku, agama, dan budaya", "Mengembangkan sikap toleransi", "Menghindari sikap primordialisme yang berlebihan", "Menganggap budaya sendiri paling unggul dari budaya lain"],
    answer: [0, 1, 2],
    explanation: "Menjaga kebinekaan dilakukan dengan saling menghormati, mengembangkan toleransi, dan menghindari sikap primordialisme berlebihan — bukan menganggap budaya sendiri paling unggul (etnosentrisme)."
  },
  {
    id: 427, type: "multiple",
    question: "Ras-ras yang ada di Indonesia menurut pembagiannya antara lain...",
    options: ["Mongoloid Melayu", "Melanesoid", "Weddoid", "Negroid Afrika"],
    answer: [0, 1, 2],
    explanation: "Ras yang ada di Indonesia meliputi Mongoloid Melayu, Melanesoid (Papua), Weddoid, Mongoloid Asiatik, dan Kaukasoid. Negroid Afrika bukan termasuk ras asli yang ada di Indonesia."
  },
  {
    id: 428, type: "multiple",
    question: "Rumah adat berikut berasal dari daerah yang sesuai, yaitu...",
    options: ["Honai dari Papua", "Joglo dari Jawa", "Gadang dari Minangkabau", "Tongkonan dari Bali"],
    answer: [0, 1, 2],
    explanation: "Honai (Papua), Joglo (Jawa), dan Gadang (Minangkabau) adalah pasangan rumah adat-daerah yang tepat. Tongkonan justru berasal dari Toraja (Sulawesi Selatan), bukan Bali."
  },
  {
    id: 429, type: "multiple",
    question: "Pengaruh positif kebinekaan bagi bangsa Indonesia antara lain...",
    options: ["Memperkaya khazanah budaya bangsa", "Menjadi daya tarik pariwisata", "Mempererat persatuan jika dikelola dengan baik", "Menimbulkan konflik antarsuku yang berkepanjangan"],
    answer: [0, 1, 2],
    explanation: "Kebinekaan memperkaya budaya, menarik wisatawan, dan mempererat persatuan jika dikelola dengan baik. Konflik berkepanjangan adalah dampak negatif jika kebinekaan tidak dikelola dengan bijak, bukan tujuan dari keberagaman itu sendiri."
  },
  {
    id: 430, type: "multiple",
    question: "Berikut ini termasuk upaya pemerintah dalam mewujudkan kesetaraan gender di Indonesia adalah...",
    options: ["Membentuk Kementerian PPPA", "Membentuk Komisi Nasional Perempuan", "Menetapkan kuota keterwakilan perempuan minimal 30% di DPR", "Melarang perempuan untuk bekerja di luar rumah"],
    answer: [0, 1, 2],
    explanation: "Pemerintah membentuk Kementerian PPPA dan Komnas Perempuan, serta menetapkan kuota 30% keterwakilan perempuan di DPR untuk mewujudkan kesetaraan gender — bukan melarang perempuan bekerja."
  },
  {
    id: 431, type: "truefalse",
    question: "Survei BPS tahun 2010 mencatat ada sekitar 1.340 suku bangsa di Indonesia.",
    answer: true,
    explanation: "BENAR. Berdasarkan survei BPS tahun 2010, terdapat sekitar 1.340 suku bangsa di Indonesia, walau jika dikelompokkan dari kesamaan bahasa/budaya jumlahnya menjadi sekitar 300-an kelompok besar."
  },
  {
    id: 432, type: "truefalse",
    question: "Suku Asmat dan suku Dani berasal dari Kalimantan.",
    answer: false,
    explanation: "SALAH. Suku Asmat dan Dani berasal dari Papua, bukan Kalimantan. Suku-suku dari Kalimantan antara lain Dayak dan Banjar."
  },
  {
    id: 433, type: "truefalse",
    question: "Tari Saman dari Aceh pernah dipentaskan secara kolosal pada pembukaan Asian Games 2018.",
    answer: true,
    explanation: "BENAR. Tari Saman dipentaskan secara kolosal oleh sekitar 1.600 siswa SMA dalam upacara pembukaan Asian Games 2018 di Jakarta."
  },
  {
    id: 434, type: "truefalse",
    question: "Upacara Ngaben merupakan tradisi pemakaman dari suku Toraja.",
    answer: false,
    explanation: "SALAH. Ngaben adalah tradisi pembakaran/kremasi jenazah masyarakat Hindu Bali, sedangkan tradisi pemakaman suku Toraja disebut Rambu Solo."
  },
  {
    id: 435, type: "truefalse",
    question: "Rumah adat Tongkonan memiliki atap yang menyerupai tanduk kerbau dan berasal dari suku Toraja.",
    answer: true,
    explanation: "BENAR. Tongkonan adalah rumah adat suku Toraja dengan ciri khas atap melengkung menyerupai tanduk kerbau, melambangkan status sosial pemiliknya."
  },
  {
    id: 436, type: "truefalse",
    question: "Agama Khonghucu memiliki kitab suci bernama Tripitaka.",
    answer: false,
    explanation: "SALAH. Kitab suci agama Khonghucu adalah Sishu dan Wujing, sementara Tripitaka adalah kitab suci agama Buddha."
  },
  {
    id: 437, type: "truefalse",
    question: "Ras Weddoid di Indonesia memiliki ciri yang menyerupai penduduk Sri Lanka, dengan contoh suku Mentawai dan Kubu.",
    answer: true,
    explanation: "BENAR. Ras Weddoid memiliki ciri menyerupai penduduk Sri Lanka, dengan contoh suku Mentawai, Enggano, Kubu, Sakai, dan Tomuna."
  },
  {
    id: 438, type: "truefalse",
    question: "Upacara Bau Nyale merupakan tradisi masyarakat Sumba.",
    answer: false,
    explanation: "SALAH. Bau Nyale adalah tradisi masyarakat Lombok (NTB) untuk menangkap cacing laut nyale, sedangkan tradisi adat khas Sumba di antaranya Pasola."
  },
  {
    id: 439, type: "truefalse",
    question: "Pemerintah Indonesia menetapkan kuota keterwakilan perempuan minimal 30% dalam pencalonan anggota DPR.",
    answer: true,
    explanation: "BENAR. Sebagai upaya mewujudkan kesetaraan gender, pemerintah menetapkan kuota keterwakilan perempuan minimal 30% dalam pencalonan anggota legislatif (DPR)."
  },
  {
    id: 440, type: "truefalse",
    question: "Penghayat Kepercayaan terhadap Tuhan Yang Maha Esa tidak diakui keberadaannya di Indonesia.",
    answer: false,
    explanation: "SALAH. Penghayat Kepercayaan terhadap Tuhan Yang Maha Esa diakui keberadaannya di Indonesia sebagai bagian dari kebinekaan dalam kehidupan beragama, di luar enam agama resmi."
  }
      ] },
      { id: 5, name: "Menghargai Lingkungan dan Budaya Lokal", questions: [
  {
    id: 501, type: "single",
    question: "Lingkungan tempat tinggal yang paling dekat dan pertama kali dikenal oleh seorang anak adalah lingkungan...",
    options: ["Sekolah", "Masyarakat", "Keluarga", "Bangsa dan negara"],
    answer: 2,
    explanation: "Lingkungan keluarga adalah lingkungan terdekat dan pertama yang dikenal anak, tempat ia pertama kali belajar nilai, norma, dan kebiasaan."
  },
  {
    id: 502, type: "single",
    question: "Sikap menghargai budaya lokal dapat ditunjukkan dengan cara...",
    options: ["Mempelajari dan melestarikan kesenian daerah", "Menganggap budaya sendiri lebih unggul dari budaya lain", "Meniru budaya asing tanpa seleksi", "Mengabaikan tradisi yang diwariskan leluhur"],
    answer: 0,
    explanation: "Menghargai budaya lokal ditunjukkan dengan mempelajari, mengembangkan, dan melestarikan kesenian serta tradisi daerah, bukan menganggapnya lebih unggul atau justru mengabaikannya."
  },
  {
    id: 503, type: "single",
    question: "Makanan tradisional yang merupakan kekayaan kuliner khas suatu daerah perlu dilestarikan karena...",
    options: ["Hanya bisa dikonsumsi oleh orang daerah tersebut", "Mencerminkan identitas dan kearifan lokal masyarakat", "Tidak memiliki nilai gizi yang baik", "Sudah digantikan oleh makanan modern"],
    answer: 1,
    explanation: "Makanan tradisional perlu dilestarikan karena mencerminkan identitas budaya dan kearifan lokal masyarakat suatu daerah, sekaligus menjadi kekayaan kuliner bangsa."
  },
  {
    id: 504, type: "single",
    question: "Berikut yang termasuk produk lokal hasil kerajinan tangan masyarakat daerah adalah...",
    options: ["Batik dan tenun", "Telepon genggam", "Mobil buatan pabrik", "Pesawat terbang"],
    answer: 0,
    explanation: "Batik dan tenun adalah contoh produk kerajinan lokal hasil karya masyarakat daerah yang sarat nilai budaya dan perlu dihargai serta dilestarikan."
  },
  {
    id: 505, type: "single",
    question: "Salah satu bentuk apresiasi terhadap lingkungan dan budaya lokal adalah dengan...",
    options: ["Aktif menggunakan dan mengonsumsi produk lokal", "Membeli barang impor sebanyak-banyaknya", "Tidak peduli dengan kondisi lingkungan sekitar", "Menjual aset budaya kepada pihak asing"],
    answer: 0,
    explanation: "Salah satu bentuk apresiasi adalah aktif menggunakan dan mengonsumsi produk-produk lokal, sehingga turut mendukung perekonomian dan eksistensi budaya daerah."
  },
  {
    id: 506, type: "single",
    question: "Jasa lokal yang dapat kita hargai dengan cara menggunakannya, misalnya...",
    options: ["Jasa transportasi online", "Jasa pemandu wisata lokal/daerah", "Jasa layanan internasional", "Jasa konsultan asing"],
    answer: 1,
    explanation: "Menggunakan jasa pemandu wisata lokal adalah bentuk konkret menghargai jasa lokal sekaligus mendukung perekonomian masyarakat sekitar."
  },
  {
    id: 507, type: "single",
    question: "Lingkungan yang berperan membentuk karakter seseorang melalui pendidikan formal adalah lingkungan...",
    options: ["Keluarga", "Sekolah", "Tempat kerja", "Tempat ibadah"],
    answer: 1,
    explanation: "Lingkungan sekolah berperan penting membentuk karakter melalui pendidikan formal, di samping fungsi keluarga sebagai pendidikan informal pertama."
  },
  {
    id: 508, type: "single",
    question: "Kearifan lokal adalah...",
    options: ["Aturan yang dibuat pemerintah pusat", "Pandangan hidup dan ilmu pengetahuan serta strategi kehidupan masyarakat lokal yang diwariskan turun-temurun", "Hukum internasional yang berlaku di suatu negara", "Kebijakan luar negeri suatu negara"],
    answer: 1,
    explanation: "Kearifan lokal adalah pandangan hidup, ilmu pengetahuan, dan berbagai strategi kehidupan masyarakat lokal dalam menjawab berbagai masalah, yang diwariskan secara turun-temurun."
  },
  {
    id: 509, type: "single",
    question: "Berikut yang merupakan bentuk apresiasi 'mengembangkan' lingkungan dan budaya lokal adalah...",
    options: ["Sekadar menonton pertunjukan budaya", "Mengikuti pelatihan/sanggar untuk meneruskan tradisi kesenian daerah", "Membiarkan kesenian daerah punah", "Hanya membeli produk dari luar negeri"],
    answer: 1,
    explanation: "Mengembangkan budaya lokal dapat dilakukan dengan mengikuti pelatihan atau sanggar seni agar tradisi kesenian daerah terus diwariskan ke generasi berikutnya."
  },
  {
    id: 510, type: "single",
    question: "Salah satu manfaat menghargai produk lokal bagi perekonomian daerah adalah...",
    options: ["Menambah pengangguran", "Meningkatkan kesejahteraan pengrajin dan pelaku usaha lokal", "Menurunkan kualitas produk daerah", "Mematikan usaha kecil setempat"],
    answer: 1,
    explanation: "Menggunakan dan menghargai produk lokal dapat meningkatkan kesejahteraan para pengrajin dan pelaku usaha kecil di daerah, sekaligus mendorong perekonomian setempat."
  },
  {
    id: 511, type: "single",
    question: "Lingkungan yang mencakup aturan, norma, dan interaksi yang lebih luas dibanding keluarga maupun sekolah adalah lingkungan...",
    options: ["Pribadi", "Sekolah", "Masyarakat", "Internasional"],
    answer: 2,
    explanation: "Lingkungan masyarakat mencakup interaksi yang lebih luas, dengan berbagai norma dan aturan sosial yang harus dipatuhi setiap anggotanya."
  },
  {
    id: 512, type: "single",
    question: "Sikap yang tepat ketika berkunjung ke daerah dengan adat-istiadat berbeda adalah...",
    options: ["Mengejek kebiasaan masyarakat setempat", "Menghormati dan menyesuaikan diri dengan adat setempat", "Memaksakan kebiasaan asal kita", "Menghindari interaksi sama sekali"],
    answer: 1,
    explanation: "Sikap yang tepat adalah menghormati dan menyesuaikan diri dengan adat-istiadat setempat, sebagai bentuk toleransi dan penghargaan terhadap budaya lokal."
  },
  {
    id: 513, type: "single",
    question: "Berikut yang merupakan bagian dari lingkungan alam yang perlu dijaga kelestariannya adalah...",
    options: ["Sungai, hutan, dan pantai", "Gedung perkantoran", "Pusat perbelanjaan", "Jalan tol"],
    answer: 0,
    explanation: "Sungai, hutan, dan pantai adalah bagian dari lingkungan alam yang menjadi sumber kehidupan dan perlu dijaga kelestariannya agar tetap bermanfaat bagi generasi mendatang."
  },
  {
    id: 514, type: "single",
    question: "Cara mengapresiasi lingkungan dengan terlibat aktif dalam kegiatan menjaga kebersihan dan kelestariannya disebut bentuk apresiasi...",
    options: ["Mengonsumsi", "Menggunakan", "Aktif melakukan", "Mengembangkan"],
    answer: 2,
    explanation: "Apresiasi 'aktif melakukan' diwujudkan misalnya dengan ikut serta dalam kegiatan kerja bakti, penghijauan, atau menjaga kebersihan lingkungan."
  },
  {
    id: 515, type: "single",
    question: "Manakah pernyataan yang tepat tentang hubungan antara lingkungan dan budaya lokal?",
    options: ["Lingkungan dan budaya lokal saling memengaruhi pembentukan kearifan lokal masyarakat", "Lingkungan dan budaya lokal tidak berkaitan satu sama lain", "Budaya lokal selalu bertentangan dengan kondisi lingkungan", "Lingkungan tidak berperan dalam membentuk tradisi masyarakat"],
    answer: 0,
    explanation: "Lingkungan dan budaya lokal saling memengaruhi; kondisi geografis dan sumber daya alam suatu daerah ikut membentuk kearifan lokal, tradisi, dan kebiasaan masyarakatnya."
  },
  {
    id: 516, type: "single",
    question: "Di antara berikut, yang termasuk kekayaan jasa lokal yang dapat kita banggakan adalah...",
    options: ["Jasa angkutan tradisional seperti delman dan becak", "Jasa penerbangan internasional", "Jasa keamanan luar negeri", "Jasa konsultan multinasional"],
    answer: 0,
    explanation: "Jasa angkutan tradisional seperti delman dan becak merupakan kekayaan jasa lokal khas daerah yang sekaligus menjadi daya tarik wisata budaya."
  },
  {
    id: 517, type: "single",
    question: "Lingkungan yang melibatkan rasa cinta tanah air dan semangat kebangsaan adalah lingkungan...",
    options: ["Keluarga", "Sekolah", "Masyarakat", "Bangsa dan negara"],
    answer: 3,
    explanation: "Lingkungan bangsa dan negara mencakup rasa cinta tanah air, semangat kebangsaan, serta tanggung jawab terhadap kemajuan dan kelestarian bangsa secara keseluruhan."
  },
  {
    id: 518, type: "single",
    question: "Mengonsumsi makanan tradisional khas daerah merupakan bentuk apresiasi terhadap...",
    options: ["Budaya asing", "Lingkungan dan budaya lokal", "Industri makanan cepat saji", "Globalisasi kuliner"],
    answer: 1,
    explanation: "Mengonsumsi makanan tradisional khas daerah adalah salah satu bentuk konkret apresiasi terhadap lingkungan dan budaya lokal, sekaligus melestarikan kekayaan kuliner bangsa."
  },
  {
    id: 519, type: "single",
    question: "Berikut yang BUKAN merupakan cara menghargai lingkungan sekitar adalah...",
    options: ["Membuang sampah pada tempatnya", "Menanam pohon di sekitar rumah", "Menebang hutan secara liar untuk keuntungan pribadi", "Menjaga kebersihan sungai"],
    answer: 2,
    explanation: "Menebang hutan secara liar adalah tindakan merusak lingkungan, bukan cara menghargainya. Cara menghargai lingkungan antara lain membuang sampah pada tempatnya, menanam pohon, dan menjaga kebersihan sungai."
  },
  {
    id: 520, type: "single",
    question: "Salah satu cara melestarikan kerajinan tangan tradisional suatu daerah adalah dengan...",
    options: ["Membiarkannya hilang seiring waktu", "Mempelajari dan mempraktikkan teknik pembuatannya", "Menggantinya sepenuhnya dengan barang produksi pabrik", "Melarang generasi muda untuk mempelajarinya"],
    answer: 1,
    explanation: "Melestarikan kerajinan tradisional dapat dilakukan dengan mempelajari dan mempraktikkan teknik pembuatannya, sehingga keterampilan tersebut tetap diwariskan ke generasi berikutnya."
  },
  {
    id: 521, type: "multiple",
    question: "Berikut yang termasuk lingkungan tempat seseorang bertumbuh dan berinteraksi adalah lingkungan...",
    options: ["Keluarga", "Sekolah", "Masyarakat", "Bangsa dan negara"],
    answer: [0, 1, 2, 3],
    explanation: "Empat lingkungan tempat seseorang bertumbuh dan belajar nilai-nilai kehidupan: keluarga, sekolah, masyarakat, serta bangsa dan negara."
  },
  {
    id: 522, type: "multiple",
    question: "Bentuk-bentuk apresiasi terhadap lingkungan dan budaya lokal meliputi...",
    options: ["Aktif melakukan", "Mengonsumsi", "Menggunakan", "Mengembangkan"],
    answer: [0, 1, 2, 3],
    explanation: "Empat bentuk apresiasi terhadap lingkungan dan budaya lokal: aktif melakukan (berpartisipasi langsung), mengonsumsi (produk lokal), menggunakan (jasa/produk lokal), dan mengembangkan (melestarikan dan menginovasi)."
  },
  {
    id: 523, type: "multiple",
    question: "Manakah yang termasuk produk lokal hasil kerajinan dan kreativitas masyarakat daerah?",
    options: ["Batik", "Tenun ikat", "Anyaman bambu", "Telepon pintar"],
    answer: [0, 1, 2],
    explanation: "Batik, tenun ikat, dan anyaman bambu adalah produk lokal hasil kerajinan masyarakat daerah yang sarat nilai budaya. Telepon pintar adalah produk teknologi modern, bukan kerajinan lokal tradisional."
  },
  {
    id: 524, type: "multiple",
    question: "Cara menghargai produk dan jasa lokal antara lain dengan...",
    options: ["Membeli dan menggunakan produk buatan daerah sendiri", "Mempromosikan produk lokal kepada orang lain", "Menggunakan jasa pelaku usaha lokal", "Hanya membeli produk dari luar negeri karena dianggap lebih bagus"],
    answer: [0, 1, 2],
    explanation: "Menghargai produk/jasa lokal dilakukan dengan membeli, menggunakan, dan mempromosikannya — bukan justru selalu mengutamakan produk luar negeri."
  },
  {
    id: 525, type: "multiple",
    question: "Manfaat melestarikan makanan tradisional bagi suatu daerah antara lain...",
    options: ["Menjaga identitas budaya daerah", "Mendorong sektor pariwisata kuliner", "Meningkatkan ekonomi pelaku usaha kuliner lokal", "Menghapus keberadaan makanan modern sepenuhnya"],
    answer: [0, 1, 2],
    explanation: "Melestarikan makanan tradisional menjaga identitas budaya, mendorong wisata kuliner, dan meningkatkan ekonomi lokal — bukan untuk menghapus makanan modern, melainkan agar keduanya berdampingan."
  },
  {
    id: 526, type: "multiple",
    question: "Lingkungan keluarga berperan penting dalam membentuk karakter seseorang karena...",
    options: ["Merupakan tempat pertama anak belajar nilai dan norma", "Menjadi tempat menanamkan kebiasaan baik sejak dini", "Memberi teladan langsung melalui interaksi sehari-hari", "Tidak memengaruhi perkembangan kepribadian anak"],
    answer: [0, 1, 2],
    explanation: "Lingkungan keluarga adalah tempat pertama anak belajar nilai, norma, kebiasaan baik, dan teladan—sangat berpengaruh dalam membentuk karakter dan kepribadian anak."
  },
  {
    id: 527, type: "multiple",
    question: "Berikut adalah contoh kearifan lokal yang dapat dijumpai di Indonesia...",
    options: ["Sistem subak di Bali untuk mengatur irigasi sawah", "Hukum adat dalam pengelolaan hutan oleh suku Dayak", "Tradisi gotong royong dalam membangun rumah", "Sistem pemerintahan negara modern"],
    answer: [0, 1, 2],
    explanation: "Subak (Bali), hukum adat pengelolaan hutan (Dayak), dan tradisi gotong royong adalah contoh kearifan lokal yang diwariskan turun-temurun. Sistem pemerintahan negara modern bukan termasuk kearifan lokal tradisional."
  },
  {
    id: 528, type: "multiple",
    question: "Sikap yang perlu dikembangkan dalam menghargai lingkungan dan budaya lokal antara lain...",
    options: ["Rasa cinta dan bangga terhadap budaya daerah sendiri", "Sikap terbuka mempelajari budaya daerah lain", "Tanggung jawab menjaga kelestarian lingkungan", "Sikap acuh tak acuh terhadap kondisi lingkungan sekitar"],
    answer: [0, 1, 2],
    explanation: "Sikap yang perlu dikembangkan: cinta dan bangga budaya sendiri, terbuka pada budaya lain, dan bertanggung jawab menjaga lingkungan — bukan bersikap acuh tak acuh."
  },
  {
    id: 529, type: "multiple",
    question: "Hal-hal berikut termasuk dalam lingkup 'lingkungan masyarakat' yang perlu dihargai adalah...",
    options: ["Norma dan adat istiadat setempat", "Tradisi dan kebiasaan gotong royong", "Lembaga dan organisasi sosial kemasyarakatan", "Hanya kepentingan pribadi semata"],
    answer: [0, 1, 2],
    explanation: "Lingkungan masyarakat mencakup norma, adat istiadat, tradisi gotong royong, dan lembaga sosial kemasyarakatan yang perlu dihormati dan dijaga bersama, bukan hanya mementingkan diri sendiri."
  },
  {
    id: 530, type: "multiple",
    question: "Tindakan yang mencerminkan sikap aktif mengembangkan budaya lokal adalah...",
    options: ["Mengikuti sanggar tari tradisional", "Belajar memainkan alat musik daerah", "Mengikuti lomba/festival kebudayaan daerah", "Hanya menonton tanpa pernah ikut berpartisipasi"],
    answer: [0, 1, 2],
    explanation: "Mengikuti sanggar, belajar alat musik daerah, dan ikut lomba/festival budaya adalah bentuk aktif mengembangkan budaya lokal — berbeda dengan sekadar menjadi penonton pasif."
  },
  {
    id: 531, type: "truefalse",
    question: "Lingkungan keluarga adalah lingkungan pertama dan terdekat yang membentuk karakter seseorang.",
    answer: true,
    explanation: "BENAR. Keluarga adalah lingkungan pertama tempat seseorang belajar nilai, norma, dan kebiasaan, sehingga sangat berperan dalam membentuk karakter sejak dini."
  },
  {
    id: 532, type: "truefalse",
    question: "Menggunakan produk dan jasa lokal merupakan salah satu bentuk apresiasi terhadap budaya lokal.",
    answer: true,
    explanation: "BENAR. Menggunakan produk dan jasa lokal adalah salah satu dari empat bentuk apresiasi (aktif melakukan, mengonsumsi, menggunakan, mengembangkan) terhadap lingkungan dan budaya lokal."
  },
  {
    id: 533, type: "truefalse",
    question: "Kearifan lokal adalah aturan yang dibuat oleh pemerintah pusat untuk seluruh wilayah Indonesia.",
    answer: false,
    explanation: "SALAH. Kearifan lokal adalah pandangan hidup, ilmu pengetahuan, dan strategi kehidupan masyarakat setempat yang diwariskan turun-temurun, bukan aturan yang dibuat oleh pemerintah pusat."
  },
  {
    id: 534, type: "truefalse",
    question: "Menebang hutan secara liar termasuk salah satu cara menghargai lingkungan.",
    answer: false,
    explanation: "SALAH. Menebang hutan secara liar justru merupakan tindakan merusak lingkungan. Cara menghargai lingkungan misalnya menjaga kebersihan, menanam pohon, dan tidak merusak ekosistem."
  },
  {
    id: 535, type: "truefalse",
    question: "Batik dan tenun adalah contoh produk lokal hasil kerajinan masyarakat daerah yang perlu dilestarikan.",
    answer: true,
    explanation: "BENAR. Batik dan tenun merupakan produk kerajinan lokal sarat nilai budaya yang menjadi kebanggaan dan perlu terus dilestarikan agar tidak punah."
  },
  {
    id: 536, type: "truefalse",
    question: "Mengonsumsi makanan tradisional khas daerah merupakan bentuk apresiasi terhadap budaya lokal.",
    answer: true,
    explanation: "BENAR. Mengonsumsi makanan tradisional adalah bentuk konkret apresiasi 'mengonsumsi' yang juga membantu melestarikan kekayaan kuliner daerah."
  },
  {
    id: 537, type: "truefalse",
    question: "Lingkungan masyarakat memiliki cakupan interaksi yang lebih sempit dibandingkan lingkungan keluarga.",
    answer: false,
    explanation: "SALAH. Lingkungan masyarakat justru memiliki cakupan interaksi yang lebih luas dibandingkan lingkungan keluarga, melibatkan lebih banyak norma, aturan, dan ragam individu."
  },
  {
    id: 538, type: "truefalse",
    question: "Mempelajari dan mempraktikkan teknik pembuatan kerajinan tradisional adalah salah satu cara melestarikan budaya lokal.",
    answer: true,
    explanation: "BENAR. Dengan mempelajari dan mempraktikkan teknik kerajinan tradisional, generasi muda dapat meneruskan dan melestarikan warisan budaya tersebut."
  },
  {
    id: 539, type: "truefalse",
    question: "Sikap menganggap budaya daerah sendiri lebih unggul dari budaya daerah lain merupakan sikap yang dianjurkan dalam menghargai kebinekaan.",
    answer: false,
    explanation: "SALAH. Menganggap budaya sendiri lebih unggul (etnosentrisme) bukan sikap yang dianjurkan. Yang dianjurkan adalah saling menghormati dan menghargai keragaman budaya tanpa merasa lebih unggul."
  },
  {
    id: 540, type: "truefalse",
    question: "Lingkungan bangsa dan negara berkaitan dengan rasa cinta tanah air dan tanggung jawab terhadap kemajuan bangsa.",
    answer: true,
    explanation: "BENAR. Lingkungan bangsa dan negara mencakup rasa cinta tanah air, semangat kebangsaan, dan tanggung jawab bersama menjaga kemajuan serta keutuhan bangsa."
  }
      ] },
      { id: 6, name: "Bekerja Sama dan Bergotong Royong", questions: [
  {
    id: 601, type: "single",
    question: "Menurut KBBI, kerja sama adalah...",
    options: ["Kegiatan atau usaha yang dilakukan oleh beberapa orang untuk mencapai tujuan bersama", "Kegiatan seseorang demi mengejar keuntungan pribadi", "Persaingan antarindividu untuk mencapai prestasi tertinggi", "Pekerjaan yang hanya bisa dilakukan sendirian"],
    answer: 0,
    explanation: "Menurut KBBI, kerja sama adalah kegiatan atau usaha yang dilakukan oleh beberapa orang (lembaga, pemerintah, dan sebagainya) untuk mencapai tujuan bersama."
  },
  {
    id: 602, type: "single",
    question: "Menurut KBBI, gotong royong berarti...",
    options: ["Bekerja sendiri-sendiri demi efisiensi", "Bekerja bersama-sama (saling membantu, tolong-menolong)", "Membayar orang lain untuk bekerja", "Berkompetisi demi hasil terbaik"],
    answer: 1,
    explanation: "Menurut KBBI, gotong royong adalah bekerja bersama-sama (tolong-menolong, bantu-membantu) untuk mencapai suatu hasil yang diinginkan bersama."
  },
  {
    id: 603, type: "single",
    question: "Istilah gotong royong di kalangan masyarakat Jawa yang berarti kegiatan kerja bakti membersihkan lingkungan secara bersama disebut...",
    options: ["Ngayah", "Marsiadapari", "Gugur Gunung/Sambatan", "Mapalus"],
    answer: 2,
    explanation: "Di kalangan masyarakat Jawa, istilah Gugur Gunung atau Sambatan digunakan untuk menyebut kegiatan gotong royong, misalnya kerja bakti membersihkan lingkungan atau membantu tetangga."
  },
  {
    id: 604, type: "single",
    question: "Istilah gotong royong dalam masyarakat Bali disebut...",
    options: ["Ngayah", "Mapalus", "Rereongan", "Marsiadapari"],
    answer: 0,
    explanation: "Masyarakat Bali menyebut kegiatan gotong royong dengan istilah Ngayah, biasanya dilakukan untuk kepentingan upacara adat atau keagamaan secara sukarela."
  },
  {
    id: 605, type: "single",
    question: "Istilah gotong royong dalam masyarakat Batak disebut...",
    options: ["Mapalus", "Marsiadapari", "Rereongan", "Ngayah"],
    answer: 1,
    explanation: "Masyarakat Batak menyebut kegiatan gotong royong dengan istilah Marsiadapari, biasanya dilakukan dalam kegiatan bertani atau membangun rumah secara bersama-sama."
  },
  {
    id: 606, type: "single",
    question: "Istilah gotong royong dalam masyarakat Minahasa disebut...",
    options: ["Mapalus", "Ngayah", "Sambatan", "Rereongan"],
    answer: 0,
    explanation: "Masyarakat Minahasa, Sulawesi Utara, menyebut tradisi gotong royong dengan istilah Mapalus, biasanya dilakukan dalam kegiatan pertanian dan kemasyarakatan."
  },
  {
    id: 607, type: "single",
    question: "Istilah gotong royong dalam masyarakat Sunda disebut...",
    options: ["Rereongan", "Ngayah", "Mapalus", "Marsiadapari"],
    answer: 0,
    explanation: "Masyarakat Sunda menyebut tradisi gotong royong dengan istilah Rereongan Sarupukan/Rereongan, sebagai bentuk kerja sama dan tolong-menolong dalam kehidupan sehari-hari."
  },
  {
    id: 608, type: "single",
    question: "Konsep '4 olah' dalam pembentukan karakter manusia seutuhnya menurut pemikiran Ki Hajar Dewantara meliputi olah hati, olah pikir, olah raga, dan...",
    options: ["Olah rasa dan karsa", "Olah jiwa dan raga", "Olah teknologi", "Olah ekonomi"],
    answer: 0,
    explanation: "Konsep 4 olah meliputi: Olah Hati (karakter), Olah Pikir (literasi/numerasi), Olah Raga (kesehatan/kebugaran), dan Olah Rasa serta Karsa (estetika/kreativitas)."
  },
  {
    id: 609, type: "single",
    question: "Istilah 'Revolusi Mental' pertama kali dikemukakan oleh Ir. Soekarno dalam pidato pada peringatan Hari Kemerdekaan tahun...",
    options: ["1945", "1956", "1965", "1998"],
    answer: 1,
    explanation: "Istilah Revolusi Mental pertama kali dicetuskan oleh Ir. Soekarno dalam pidatonya pada peringatan Hari Kemerdekaan 17 Agustus 1956."
  },
  {
    id: 610, type: "single",
    question: "Gerakan Revolusi Mental dihidupkan kembali oleh Presiden Joko Widodo melalui...",
    options: ["Undang-Undang No. 12 Tahun 2016", "Instruksi Presiden No. 12 Tahun 2016", "Keputusan Presiden No. 1 Tahun 2014", "Peraturan Pemerintah No. 5 Tahun 2015"],
    answer: 1,
    explanation: "Presiden Joko Widodo menghidupkan kembali Gerakan Revolusi Mental melalui Instruksi Presiden (Inpres) No. 12 Tahun 2016 tentang Gerakan Nasional Revolusi Mental."
  },
  {
    id: 611, type: "single",
    question: "Tiga elemen utama dalam Gerakan Revolusi Mental adalah integritas, etos kerja, dan...",
    options: ["Gotong royong", "Kemandirian", "Religiusitas", "Nasionalisme"],
    answer: 0,
    explanation: "Tiga elemen utama Revolusi Mental: integritas (terkait sila pertama), etos kerja (sila kedua dan ketiga), dan gotong royong (sila keempat dan kelima)."
  },
  {
    id: 612, type: "single",
    question: "Nilai 'integritas' dalam Gerakan Revolusi Mental berkaitan erat dengan sila Pancasila ke...",
    options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
    answer: 0,
    explanation: "Nilai integritas dalam Revolusi Mental dikaitkan dengan sila pertama Pancasila, yaitu Ketuhanan Yang Maha Esa, yang menekankan kejujuran dan tanggung jawab moral."
  },
  {
    id: 613, type: "single",
    question: "Sosok pendidik yang mengemukakan gagasan tentang pembentukan karakter manusia melalui konsep 'olah' adalah...",
    options: ["Ki Hajar Dewantara", "Tengku M. Syafei", "RA Kartini", "Mohammad Hatta"],
    answer: 0,
    explanation: "Ki Hajar Dewantara mengemukakan gagasan pembentukan karakter manusia seutuhnya melalui konsep olah hati, olah pikir, olah raga, serta olah rasa dan karsa."
  },
  {
    id: 614, type: "single",
    question: "Nilai penting kerja sama dan gotong royong yang mendorong sikap saling memahami perbedaan antarindividu disebut nilai...",
    options: ["Saling menghargai", "Saling memahami", "Saling membantu", "Saling menguatkan kebersamaan"],
    answer: 1,
    explanation: "Nilai saling memahami mendorong setiap individu memahami latar belakang dan perbedaan satu sama lain sebagai dasar terciptanya kerja sama yang baik."
  },
  {
    id: 615, type: "single",
    question: "Penerapan kerja sama dan gotong royong dalam lingkungan keluarga dapat diwujudkan dengan...",
    options: ["Membagi tugas pekerjaan rumah bersama anggota keluarga", "Membiarkan satu orang mengerjakan semua pekerjaan rumah", "Bersaing untuk menjadi yang terbaik di rumah", "Menolak membantu pekerjaan rumah tangga"],
    answer: 0,
    explanation: "Penerapan gotong royong di lingkungan keluarga dapat diwujudkan dengan membagi tugas dan saling membantu pekerjaan rumah tangga, sehingga tercipta keharmonisan keluarga."
  },
  {
    id: 616, type: "single",
    question: "Konsep 'Olah Pikir' dalam empat olah Ki Hajar Dewantara berkaitan erat dengan kemampuan...",
    options: ["Spiritual dan moral", "Literasi, numerasi, dan kemampuan berpikir kritis", "Kebugaran dan kesehatan jasmani", "Ekspresi seni dan kreativitas"],
    answer: 1,
    explanation: "Olah Pikir berkaitan dengan kemampuan literasi, numerasi, berpikir kritis, dan kreatif, mendukung pembentukan karakter intelektual seseorang."
  },
  {
    id: 617, type: "single",
    question: "Salah satu manfaat dari kerja sama dan gotong royong dalam masyarakat adalah...",
    options: ["Pekerjaan yang berat menjadi lebih ringan", "Memunculkan kesenjangan sosial", "Menumbuhkan sikap individualisme", "Memperlambat penyelesaian suatu pekerjaan"],
    answer: 0,
    explanation: "Salah satu manfaat utama gotong royong adalah pekerjaan yang berat menjadi lebih ringan karena dikerjakan bersama-sama, juga mempererat hubungan sosial antarwarga."
  },
  {
    id: 618, type: "single",
    question: "Penerapan kerja sama di lingkungan sekolah dapat diwujudkan dengan...",
    options: ["Mengerjakan tugas kelompok bersama teman sekelas", "Menyontek pekerjaan teman saat ujian", "Bersikap acuh terhadap kegiatan kelas", "Menolak bekerja sama dengan teman yang berbeda latar belakang"],
    answer: 0,
    explanation: "Mengerjakan tugas kelompok bersama dengan adil dan saling membantu adalah salah satu wujud penerapan kerja sama di lingkungan sekolah."
  },
  {
    id: 619, type: "single",
    question: "Landasan karakter kerja sama dan gotong royong erat kaitannya dengan pemikiran tokoh pendidikan nasional, yaitu...",
    options: ["Ki Hajar Dewantara", "Soepomo", "Moh. Yamin", "Wahid Hasyim"],
    answer: 0,
    explanation: "Landasan karakter kerja sama dan gotong royong dijelaskan melalui konsep '4 olah' dari pemikiran Ki Hajar Dewantara: olah hati, olah pikir, olah raga, serta olah rasa dan karsa."
  },
  {
    id: 620, type: "single",
    question: "Penerapan nilai kerja sama dan gotong royong dalam lingkup bangsa dan negara dapat diwujudkan melalui...",
    options: ["Gotong royong membangun fasilitas umum dan menjaga persatuan bangsa", "Mengutamakan kepentingan kelompok sendiri di atas kepentingan bangsa", "Menolak kerja sama dengan suku/daerah lain", "Hanya peduli pada daerah asal sendiri"],
    answer: 0,
    explanation: "Dalam lingkup bangsa dan negara, gotong royong dapat diwujudkan dengan kerja sama membangun fasilitas umum, menjaga persatuan, dan mengutamakan kepentingan bersama di atas kepentingan kelompok."
  },
  {
    id: 621, type: "multiple",
    question: "Berikut adalah istilah lokal/daerah untuk gotong royong di Indonesia...",
    options: ["Ngayah (Bali)", "Mapalus (Minahasa)", "Marsiadapari (Batak)", "Tongkonan (Toraja)"],
    answer: [0, 1, 2],
    explanation: "Ngayah, Mapalus, dan Marsiadapari adalah istilah lokal untuk gotong royong di Bali, Minahasa, dan Batak. Tongkonan adalah nama rumah adat suku Toraja, bukan istilah gotong royong."
  },
  {
    id: 622, type: "multiple",
    question: "Nilai-nilai penting yang terkandung dalam kerja sama dan gotong royong meliputi...",
    options: ["Saling memahami", "Saling menghargai", "Saling membantu", "Saling bersaing demi kepentingan pribadi"],
    answer: [0, 1, 2],
    explanation: "Lima nilai penting kerja sama dan gotong royong: saling memahami, saling menghargai, saling membantu, saling mengatasi kekurangan, dan saling menguatkan kebersamaan — bukan saling bersaing demi kepentingan pribadi."
  },
  {
    id: 623, type: "multiple",
    question: "Tiga elemen utama dalam Gerakan Revolusi Mental adalah...",
    options: ["Integritas", "Etos kerja", "Gotong royong", "Persaingan bebas"],
    answer: [0, 1, 2],
    explanation: "Tiga elemen utama Revolusi Mental: integritas (sila 1), etos kerja (sila 2 & 3), dan gotong royong (sila 4 & 5). Persaingan bebas bukan elemen Revolusi Mental."
  },
  {
    id: 624, type: "multiple",
    question: "Konsep '4 olah' Ki Hajar Dewantara untuk membentuk karakter manusia seutuhnya terdiri atas...",
    options: ["Olah Hati", "Olah Pikir", "Olah Raga", "Olah Rasa dan Karsa"],
    answer: [0, 1, 2, 3],
    explanation: "Empat olah dari pemikiran Ki Hajar Dewantara: Olah Hati (karakter/etika), Olah Pikir (literasi/numerasi), Olah Raga (kesehatan/kebugaran), dan Olah Rasa serta Karsa (estetika/kreativitas)."
  },
  {
    id: 625, type: "multiple",
    question: "Lingkup penerapan kerja sama dan gotong royong dalam kehidupan sehari-hari meliputi lingkungan...",
    options: ["Keluarga", "Sekolah", "Masyarakat", "Bangsa dan negara"],
    answer: [0, 1, 2, 3],
    explanation: "Penerapan kerja sama dan gotong royong dapat dilakukan dalam empat lingkup: keluarga, sekolah, masyarakat, serta bangsa dan negara."
  },
  {
    id: 626, type: "multiple",
    question: "Manakah pernyataan yang tepat mengenai istilah Revolusi Mental?",
    options: ["Pertama kali dikemukakan oleh Ir. Soekarno tahun 1956", "Dihidupkan kembali oleh Presiden Joko Widodo melalui Inpres No. 12 Tahun 2016", "Berisi tiga elemen yaitu integritas, etos kerja, dan gotong royong", "Diciptakan oleh Ki Hajar Dewantara"],
    answer: [0, 1, 2],
    explanation: "Revolusi Mental pertama dicetuskan Soekarno (1956), dihidupkan kembali Presiden Jokowi melalui Inpres No. 12/2016, dan terdiri dari tiga elemen utama: integritas, etos kerja, gotong royong. Bukan diciptakan oleh Ki Hajar Dewantara."
  },
  {
    id: 627, type: "multiple",
    question: "Manfaat kerja sama dan gotong royong dalam kehidupan bermasyarakat antara lain...",
    options: ["Pekerjaan menjadi lebih ringan dan cepat selesai", "Mempererat hubungan sosial dan persaudaraan", "Menumbuhkan rasa saling percaya antarwarga", "Menimbulkan perpecahan antarwarga"],
    answer: [0, 1, 2],
    explanation: "Gotong royong membuat pekerjaan lebih ringan, mempererat hubungan sosial, dan menumbuhkan rasa saling percaya — bukan menimbulkan perpecahan, melainkan justru mempererat persatuan."
  },
  {
    id: 628, type: "multiple",
    question: "Berikut adalah contoh penerapan kerja sama di lingkungan sekolah...",
    options: ["Piket kelas secara bergiliran", "Belajar kelompok untuk memahami materi pelajaran", "Mengikuti kegiatan ekstrakurikuler bersama", "Menjiplak tugas teman tanpa izin"],
    answer: [0, 1, 2],
    explanation: "Piket kelas, belajar kelompok, dan kegiatan ekstrakurikuler bersama adalah wujud kerja sama positif di sekolah. Menjiplak tugas teman bukan kerja sama, melainkan bentuk ketidakjujuran (plagiarisme)."
  },
  {
    id: 629, type: "multiple",
    question: "Sila-sila Pancasila yang dikaitkan dengan elemen 'gotong royong' dalam Revolusi Mental adalah sila ke...",
    options: ["Keempat", "Kelima", "Pertama", "Kedua"],
    answer: [0, 1],
    explanation: "Elemen gotong royong dalam Revolusi Mental dikaitkan dengan sila keempat (musyawarah/kerakyatan) dan sila kelima (keadilan sosial) Pancasila."
  },
  {
    id: 630, type: "multiple",
    question: "Berikut yang merupakan landasan/pemikiran yang mendasari pentingnya karakter kerja sama dan gotong royong adalah...",
    options: ["Konsep 4 olah dari Ki Hajar Dewantara", "Gerakan Revolusi Mental", "Nilai-nilai dalam Pancasila", "Sistem pemerintahan negara federal"],
    answer: [0, 1, 2],
    explanation: "Landasan karakter kerja sama dan gotong royong didasarkan pada konsep 4 olah Ki Hajar Dewantara, Gerakan Revolusi Mental, dan nilai-nilai Pancasila — bukan sistem pemerintahan federal."
  },
  {
    id: 631, type: "truefalse",
    question: "Menurut KBBI, kerja sama adalah kegiatan atau usaha yang dilakukan oleh beberapa orang untuk mencapai tujuan bersama.",
    answer: true,
    explanation: "BENAR. KBBI mendefinisikan kerja sama sebagai kegiatan/usaha yang dilakukan beberapa orang (lembaga, pemerintah, dan sebagainya) untuk mencapai tujuan bersama."
  },
  {
    id: 632, type: "truefalse",
    question: "Istilah gotong royong di kalangan masyarakat Bali disebut Mapalus.",
    answer: false,
    explanation: "SALAH. Istilah gotong royong di Bali disebut Ngayah. Mapalus adalah istilah gotong royong dari masyarakat Minahasa, Sulawesi Utara."
  },
  {
    id: 633, type: "truefalse",
    question: "Istilah Revolusi Mental pertama kali dikemukakan oleh Ir. Soekarno dalam pidato 17 Agustus 1956.",
    answer: true,
    explanation: "BENAR. Ir. Soekarno mengemukakan istilah Revolusi Mental pertama kali dalam pidato peringatan Hari Kemerdekaan 17 Agustus 1956."
  },
  {
    id: 634, type: "truefalse",
    question: "Presiden Joko Widodo menghidupkan kembali Gerakan Revolusi Mental melalui Instruksi Presiden No. 12 Tahun 2016.",
    answer: true,
    explanation: "BENAR. Presiden Joko Widodo menghidupkan kembali Gerakan Revolusi Mental melalui Inpres No. 12 Tahun 2016 tentang Gerakan Nasional Revolusi Mental."
  },
  {
    id: 635, type: "truefalse",
    question: "Konsep 4 olah dari Ki Hajar Dewantara terdiri atas olah hati, olah pikir, olah raga, dan olah ekonomi.",
    answer: false,
    explanation: "SALAH. Konsep 4 olah Ki Hajar Dewantara terdiri atas Olah Hati, Olah Pikir, Olah Raga, dan Olah Rasa serta Karsa — bukan olah ekonomi."
  },
  {
    id: 636, type: "truefalse",
    question: "Elemen 'integritas' dalam Revolusi Mental dikaitkan dengan sila pertama Pancasila.",
    answer: true,
    explanation: "BENAR. Integritas sebagai salah satu elemen utama Revolusi Mental dikaitkan dengan sila pertama Pancasila, Ketuhanan Yang Maha Esa."
  },
  {
    id: 637, type: "truefalse",
    question: "Marsiadapari adalah istilah gotong royong dari masyarakat Sunda.",
    answer: false,
    explanation: "SALAH. Marsiadapari adalah istilah gotong royong dari masyarakat Batak. Istilah gotong royong masyarakat Sunda adalah Rereongan."
  },
  {
    id: 638, type: "truefalse",
    question: "Kerja sama dan gotong royong hanya dapat diterapkan di lingkungan masyarakat, tidak di lingkungan keluarga maupun sekolah.",
    answer: false,
    explanation: "SALAH. Kerja sama dan gotong royong dapat dan perlu diterapkan di empat lingkup: keluarga, sekolah, masyarakat, serta bangsa dan negara — bukan hanya di masyarakat."
  },
  {
    id: 639, type: "truefalse",
    question: "Salah satu manfaat gotong royong adalah membuat pekerjaan yang berat menjadi lebih ringan karena dikerjakan bersama-sama.",
    answer: true,
    explanation: "BENAR. Salah satu manfaat utama gotong royong adalah meringankan pekerjaan berat karena dikerjakan secara bersama-sama, sekaligus mempererat hubungan sosial."
  },
  {
    id: 640, type: "truefalse",
    question: "Tiga elemen utama Revolusi Mental adalah integritas, etos kerja, dan persaingan bebas.",
    answer: false,
    explanation: "SALAH. Tiga elemen utama Revolusi Mental adalah integritas, etos kerja, dan gotong royong — bukan persaingan bebas, yang justru bertentangan dengan semangat gotong royong dalam Pancasila."
  }
      ] }
    ]
  }
};
