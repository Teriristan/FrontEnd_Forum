/* =========================================================
   Data dummy
   ========================================================= */

/* Simulasi pengguna login */
const CURRENT_USER = { id: 8, nama: 'Rina Maharani', username: 'rinam' };

/* Leaderboard / Reputasi */
const DUMMY_USERS = [
  { id: 1,  nama: 'Budi Santoso',    username: 'budisan',  poin: { minggu: 1240, bulan: 5320, semua: 48210 }, thread: 214, komentar: 3120, upvote: 8890, gabung: 2016 },
  { id: 2,  nama: 'Siti Nurhaliza',  username: 'sitinur',  poin: { minggu: 1410, bulan: 4980, semua: 41730 }, thread: 180, komentar: 2875, upvote: 7410, gabung: 2017 },
  { id: 3,  nama: 'Agus Prasetyo',   username: 'gusprass', poin: { minggu: 980,  bulan: 5710, semua: 36540 }, thread: 96,  komentar: 4210, upvote: 6120, gabung: 2015 },
  { id: 4,  nama: 'Dewi Lestari',    username: 'dewil',    poin: { minggu: 870,  bulan: 3890, semua: 29880 }, thread: 141, komentar: 2260, upvote: 5330, gabung: 2018 },
  { id: 5,  nama: 'Fajar Ramadhan',  username: 'fajarrmd', poin: { minggu: 1320, bulan: 4210, semua: 24150 }, thread: 77,  komentar: 1980, upvote: 4470, gabung: 2019 },
  { id: 6,  nama: 'Made Wirawan',    username: 'madewira', poin: { minggu: 640,  bulan: 3120, semua: 19420 }, thread: 63,  komentar: 1745, upvote: 3860, gabung: 2018 },
  { id: 7,  nama: 'Nadia Putri',     username: 'nadiaptr', poin: { minggu: 720,  bulan: 2870, semua: 15990 }, thread: 88,  komentar: 1390, upvote: 3120, gabung: 2020 },
  { id: 9,  nama: 'Kevin Tanoto',    username: 'kevintn',  poin: { minggu: 530,  bulan: 2240, semua: 12780 }, thread: 54,  komentar: 1102, upvote: 2540, gabung: 2019 },
  { id: 10, nama: 'Lia Anggraini',   username: 'liaang',   poin: { minggu: 610,  bulan: 1980, semua: 9870 },  thread: 40,  komentar: 960,  upvote: 1980, gabung: 2021 },
  { id: 8,  nama: 'Rina Maharani',   username: 'rinam',    poin: { minggu: 410,  bulan: 1560, semua: 6240 },  thread: 31,  komentar: 842,  upvote: 1210, gabung: 2022 },
  { id: 11, nama: 'Yoga Pratama',    username: 'yogapra',  poin: { minggu: 380,  bulan: 1420, semua: 5130 },  thread: 22,  komentar: 655,  upvote: 980,  gabung: 2022 },
  { id: 12, nama: 'Hana Salsabila',  username: 'hanasal',  poin: { minggu: 450,  bulan: 1150, semua: 3480 },  thread: 19,  komentar: 410,  upvote: 720,  gabung: 2023 },
  { id: 13, nama: 'Dimas Aditya',    username: 'dimasadt', poin: { minggu: 290,  bulan: 870,  semua: 1960 },  thread: 11,  komentar: 302,  upvote: 410,  gabung: 2023 },
  { id: 14, nama: 'Putri Ayu',       username: 'ayuputri', poin: { minggu: 210,  bulan: 640,  semua: 820 },   thread: 6,   komentar: 144,  upvote: 190,  gabung: 2024 }
];

/* ---------- Notifikasi ---------- */
/* type: balasan | mention | upvote | trending | sistem
   menit: berapa menit yang lalu notifikasi dibuat */
const DUMMY_NOTIFS = [
  { id: 1,  type: 'balasan',  actor: 'Siti Nurhaliza', thread: 'Rekomendasi laptop kuliah budget 8 jutaan', preview: 'Coba cek Lenovo LOQ, sudah RTX 3050 dan harganya masih masuk.', menit: 4,    read: false },
  { id: 2,  type: 'mention',  actor: 'Budi Santoso',   thread: 'Tips belajar Flexbox dan Grid dari nol',   preview: '@rinam contoh kamu di halaman 2 paling jelas, sangat membantu!', menit: 22,   read: false },
  { id: 3,  type: 'upvote',   actor: 'Agus Prasetyo',  thread: 'Cara deploy website statis gratis',        preview: '',                                                                menit: 47,   read: false },
  { id: 4,  type: 'trending', actor: '',               thread: 'Cara deploy website statis gratis', tag: 'webdev', preview: '',                                          menit: 130,  read: false },
  { id: 5,  type: 'sistem',   actor: '',               pesan: 'Reputasimu naik ke level Aktif. Kamu sekarang bisa membuat polling di thread.',                                 menit: 300,  read: true  },
  { id: 6,  type: 'balasan',  actor: 'Dewi Lestari',   thread: 'Kenapa CSS Grid tidak menumpuk item?',     preview: 'Kemungkinan kamu belum set grid-auto-flow. Coba tambahkan dense.', menit: 900,  read: true  },
  { id: 7,  type: 'upvote',   actor: 'Fajar Ramadhan', thread: 'Kumpulan sumber belajar JavaScript gratis', preview: '',                                                               menit: 1500, read: true  },
  { id: 8,  type: 'mention',  actor: 'Made Wirawan',   thread: 'Diskusi: React atau Vue untuk pemula?',    preview: '@rinam menurut kamu gimana, Kak?',                                 menit: 3000, read: true  },
  { id: 9,  type: 'sistem',   actor: '',               pesan: 'Laporanmu untuk komentar di thread "Promo abal-abal" sudah ditinjau moderator. Terima kasih sudah menjaga komunitas.', menit: 4300, read: true },
  { id: 10, type: 'trending', actor: '',               thread: 'Rekomendasi laptop kuliah budget 8 jutaan', tag: 'laptop', preview: '',                                        menit: 5800, read: true  }
];

/* ---------- Moderasi / Report ---------- */
/* status: pending | ditindak | diabaikan */
const DUMMY_REPORTS = [
  { id: 'RPT-1048', tipe: 'Komentar', alasan: 'Pelecehan',    pelapor: 'nadiaptr', terlapor: 'trollmaster99',  lokasi: 'Komentar di thread "Rekomendasi laptop kuliah budget 8 jutaan"', konten: 'Otak lu kemana sih? Udah jelas salah masih ngeyel, dasar bodoh.', jumlah: 4, menit: 12,   status: 'pending' },
  { id: 'RPT-1047', tipe: 'Thread',   alasan: 'Spam',         pelapor: 'budisan',  terlapor: 'promo_murah88',  lokasi: 'Thread "JUAL FOLLOWER MURAH - CEK BIO"', konten: 'Follower 10rb cuma 25rb! Hubungi WA di bio, garansi refill seumur hidup. Buruan sebelum kehabisan!!!', jumlah: 9, menit: 35,   status: 'pending' },
  { id: 'RPT-1046', tipe: 'Thread',   alasan: 'Hoaks',        pelapor: 'sitinur',  terlapor: 'infopanas_id',   lokasi: 'Thread "BREAKING: Minum air garam cegah semua penyakit"', konten: 'Dokter tidak mau kamu tahu ini: air garam setiap pagi terbukti menyembuhkan diabetes dan darah tinggi. Sebarkan sebelum dihapus!', jumlah: 6, menit: 90,   status: 'pending' },
  { id: 'RPT-1045', tipe: 'Komentar', alasan: 'SARA',         pelapor: 'gusprass', terlapor: 'akun_anon_31',   lokasi: 'Komentar di thread "Pilkada 2026: siapa jagoanmu?"', konten: '[Ujaran kebencian terhadap kelompok tertentu - disamarkan untuk demo]', jumlah: 7, menit: 180,  status: 'pending' },
  { id: 'RPT-1044', tipe: 'User',     alasan: 'Lainnya',      pelapor: 'fajarrmd', terlapor: 'kevinn_official', lokasi: 'Profil pengguna @kevinn_official', konten: 'Diduga akun kloning yang meniru @kevintn dan mengirim pesan pribadi berisi tautan mencurigakan.', jumlah: 2, menit: 300,  status: 'pending' },
  { id: 'RPT-1043', tipe: 'Thread',   alasan: 'Konten dewasa', pelapor: 'dewil',   terlapor: 'user_baru_204',  lokasi: 'Thread "Koleksi pribadi (bukan untuk anak-anak)"', konten: '[Deskripsi konten dewasa - disamarkan untuk demo]', jumlah: 5, menit: 600,  status: 'ditindak',  hasil: 'Konten dihapus',      catatan: 'Melanggar aturan kategori.' },
  { id: 'RPT-1042', tipe: 'Komentar', alasan: 'Spam',         pelapor: 'liaang',   terlapor: 'olshop_kilat',   lokasi: 'Komentar di thread "Cara deploy website statis gratis"', konten: 'Kunjungi toko kami untuk diskon 90%, klik link di profil.', jumlah: 1, menit: 1500, status: 'diabaikan', hasil: 'Laporan diabaikan',   catatan: 'Bukan spam, pengguna hanya menyebut tool.' },
  { id: 'RPT-1041', tipe: 'Thread',   alasan: 'Lainnya',      pelapor: 'yogapra',  terlapor: 'hanasal',        lokasi: 'Thread "Tanya: cara install Node di Windows"', konten: 'Thread ini salah kategori, seharusnya di Teknologi > Pemrograman.', jumlah: 1, menit: 2000, status: 'pending' }
];
