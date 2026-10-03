// ORANG 1
// ===== DUMMY DATA (tanpa database) =====
const kategoriData = [
  { id: "teknologi", icon: "💻", nama: "Teknologi & Gadget", desc: "Diskusi HP, laptop, software, dan dunia IT.", thread: 482, member: "3.1k" },
  { id: "gaming", icon: "🎮", nama: "Gaming Zone", desc: "Review game, tim mabar, sampai drama esport.", thread: 915, member: "5.4k" },
  { id: "jualbeli", icon: "🛒", nama: "Lapak Jual Beli", desc: "Barang preloved, jasa, dan promo member.", thread: 1204, member: "7.8k" },
  { id: "otomotif", icon: "🚗", nama: "Otomotif", desc: "Modifikasi, tips servis, dan berita otomotif.", thread: 356, member: "2.2k" },
  { id: "kuliner", icon: "🍜", nama: "Kuliner", desc: "Rekomendasi tempat makan & resep rumahan.", thread: 610, member: "4.0k" },
  { id: "curhat", icon: "💬", nama: "Curhat & Diskusi Bebas", desc: "Obrolan santai, unek-unek, dan cerita random.", thread: 1580, member: "9.2k" },
  { id: "tvseries", icon: "📺", nama: "TV Series", desc: "Review, teori, dan diskusi serial favorit kalian.", thread: 328, member: "2.6k" },
];

const threadData = [
  { id: 1, kategori: "teknologi", judul: "Laptop 8 jutaan yang worth it buat kuliah SI, ada rekomendasi?", snippet: "Butuh laptop buat coding sama desain ringan, budget mepet nih gaes...", isi: "Lagi cari laptop buat kuliah SI yang kepake buat coding dan desain ringan kayak Figma. Budget maksimal sekitar 8 juta, jadi harus pinter-pinter milih. Prioritas saya RAM minimal 8GB, SSD, dan baterai yang awet buat dibawa ke kampus. Ada rekomendasi seri atau merek yang worth it, dan sebaiknya beli baru atau 2nd?", author: "rafif_dev", waktu: "12 menit lalu", reply: 34, view: 891, vote: 128, pinned: true },
  { id: 2, kategori: "gaming", judul: "Server mabar Valorant rank Immortal, gas malam ini?", snippet: "Nyari 2 slot lagi buat push rank, komuk santai ya...", isi: "Lagi nyari 2 orang lagi buat push rank Valorant malam ini sekitar jam 9. Rank Immortal ke atas lebih bagus, tapi yang penting komunikatif dan nggak toxic. Kita mainnya santai tapi serius pas clutch. Yang minat tinggal komen sama tulis ID dan role utama kalian.", author: "tristan.a", waktu: "40 menit lalu", reply: 19, view: 430, vote: 76, pinned: false },
  { id: 3, kategori: "jualbeli", judul: "[WTS] Keyboard mechanical 2nd, kondisi 95%, harga nego", snippet: "Jual karena ganti unit baru, komplit box dan kabel...", isi: "Jual keyboard mechanical bekas pakai setahun karena udah ganti ke unit baru. Kondisi sekitar 95%, semua keycap lengkap dan switch masih responsif. Dapat box asli dan kabel USB-nya. Harga masih bisa nego, prioritas yang COD di sekitar kampus. Foto dan video tes ketik bisa dikirim lewat chat.", author: "chris.reinner", waktu: "1 jam lalu", reply: 8, view: 220, vote: 22, pinned: false },
  { id: 4, kategori: "curhat", judul: "Anak SI tapi struggling banget di mata kuliah basis data, normal?", snippet: "Ada yang ngerasa ERD tuh susah dipahami di awal ga sih...", isi: "Semester ini aku mulai kewalahan di mata kuliah basis data, terutama bagian ERD dan normalisasi. Rasanya tiap dosen jelasin ngerti, tapi pas disuruh bikin sendiri langsung blank. Apa ini normal buat anak SI? Ada tips belajar atau latihan yang bantu kalian dulu?", author: "kaya.nrs", waktu: "2 jam lalu", reply: 61, view: 1502, vote: 245, pinned: true },
  { id: 5, kategori: "otomotif", judul: "Tips servis motor harian biar irit BBM ala anak kos", snippet: "Sharing pengalaman servis rutin yang murah tapi efektif...", isi: "Ini pengalaman pribadi sebagai anak kos yang pakai motor tiap hari. Ganti oli tepat waktu, bersihin filter udara, cek tekanan ban, dan rantai dilumasi itu murah tapi bikin bensin jauh lebih irit. Nggak perlu bengkel mahal asal rutin. Kalian punya trik lain yang murah tapi ngaruh?", author: "laode_r", waktu: "3 jam lalu", reply: 14, view: 310, vote: 40, pinned: false },
  { id: 6, kategori: "kuliner", judul: "Rekomendasi warteg legend di sekitar kampus Untar", snippet: "Buat yang kere di akhir bulan, wajib coba ini...", isi: "Akhir bulan dompet menipis, jadi aku keliling nyari warteg yang murah tapi porsinya jujur. Ada beberapa yang udah legend di sekitar kampus, harga mulai belasan ribu udah dapat nasi, lauk, dan sayur. Yang paling aku suka sambalnya dan tempenya. Kalian punya warteg favorit yang belum masuk daftar?", author: "rafif_dev", waktu: "5 jam lalu", reply: 27, view: 640, vote: 88, pinned: false },
  { id: 7, kategori: "teknologi", judul: "Framework CSS vs vanilla CSS, kalian tim mana?", snippet: "Lagi kerjain tugas UTS pakai vanilla doang, capek tapi puas...", isi: "Aku lagi ngerjain tugas UTS pakai vanilla CSS doang tanpa framework. Capek karena harus nulis semuanya dari nol, tapi puas karena jadi paham cara kerja layout dan responsive. Menurut kalian lebih baik mana buat belajar: framework dulu atau vanilla dulu? Tim mana nih?", author: "tristan.a", waktu: "6 jam lalu", reply: 45, view: 980, vote: 150, pinned: false },
  { id: 8, kategori: "gaming", judul: "Game indie lokal yang underrated banget, wajib masuk wishlist", snippet: "Baru tamatin, ceritanya related banget sama kehidupan kita...", isi: "Baru tamatin game indie lokal ini dan ceritanya related banget sama kehidupan kita. Gameplay-nya simpel tapi emosinya dapet, apalagi di bagian tengah. Grafisnya sederhana, tapi musiknya bikin suasana jadi hidup. Buat yang suka game naratif, ini layak dicoba. Kalian udah ada yang main juga?", author: "kaya.nrs", waktu: "8 jam lalu", reply: 9, view: 205, vote: 33, pinned: false },
  { id: 9, kategori: "teknologi", judul: "Roadmap belajar JavaScript dari nol buat anak SI, mulai dari mana?", snippet: "Udah ngerti HTML CSS dikit, tapi bingung lanjut ke JS tuh gimana...", isi: "Aku udah lumayan paham HTML dan CSS gara-gara tugas kuliah, tapi pas masuk JavaScript langsung mentok di DOM dan event. Sekarang lagi coba bikin to-do list sederhana sambil nonton tutorial. Ada yang punya urutan belajar yang enak diikutin? Terus sebaiknya langsung belajar framework atau nguatin dasar dulu?", author: "rafif_dev", waktu: "10 jam lalu", reply: 22, view: 540, vote: 71, pinned: false },
  { id: 10, kategori: "gaming", judul: "Game RPG dengan cerita sedalam anime, ada rekomendasi?", snippet: "Lagi cari game yang fokus ke cerita dan karakter, bukan cuma grinding...", isi: "Bosen sama game yang isinya grinding terus. Lagi nyari RPG yang ceritanya kuat dan karakternya berkesan, kayak nonton anime season panjang. Boleh PC atau HP, yang penting nggak butuh spek dewa. Kalian ada rekomendasi yang endingnya bikin nangis?", author: "tristan.a", waktu: "22 jam lalu", reply: 31, view: 720, vote: 94, pinned: false },
  { id: 11, kategori: "jualbeli", judul: "[WTB] Tablet 2nd buat nyatet kuliah, budget 2 jutaan", snippet: "Cari tablet bekas yang masih mulus, buat catatan dan baca PDF...", isi: "Lagi nyari tablet bekas buat nyatet kuliah dan baca jurnal PDF. Budget maksimal 2 jutaan, yang penting layar masih mulus, baterai awet, dan ada stylus kalau bisa. Lokasi Jakarta, bisa COD sekitar kampus. Boleh japri kalau ada yang mau lepas.", author: "chris.reinner", waktu: "13 jam lalu", reply: 6, view: 150, vote: 12, pinned: false },
  { id: 12, kategori: "otomotif", judul: "Matic 150cc vs 125cc buat harian ke kampus, mending mana?", snippet: "Jarak rumah ke kampus 15 km tiap hari, mau cari yang irit tapi nyaman...", isi: "Tiap hari bolak-balik rumah ke kampus sekitar 15 km, sering kena macet. Lagi galau antara matic 125cc yang irit atau 150cc yang tarikannya lebih enak. Pajak dan perawatan juga jadi pertimbangan karena uang saku terbatas. Menurut kalian yang paling masuk akal buat mahasiswa yang mana?", author: "laode_r", waktu: "18 jam lalu", reply: 38, view: 860, vote: 102, pinned: false },
  { id: 13, kategori: "kuliner", judul: "Resep nasi goreng anak kos, modal 10 ribu udah kenyang", snippet: "Cuma pakai bahan seadanya tapi rasanya nggak kalah sama abang-abang...", isi: "Resep andalan akhir bulan: panaskan sedikit minyak, tumis bawang putih dan cabai sampai harum, masukkan nasi dingin, lalu tambah kecap manis, garam, dan sedikit kaldu bubuk. Ujungnya kasih telur orak-arik dan kerupuk biar mewah. Modalnya sekitar 10 ribu dan bisa buat dua kali makan. Kalian punya trik tambahan?", author: "kaya.nrs", waktu: "11 jam lalu", reply: 25, view: 610, vote: 83, pinned: false },
  { id: 14, kategori: "curhat", judul: "Magang atau lanjut bikin startup bareng temen? Lagi galau banget", snippet: "Dapet tawaran magang, tapi temen ngajak serius ngerjain proyek sendiri...", isi: "Minggu ini dapat tawaran magang di perusahaan, tapi di saat yang sama temen ngajak serius ngembangin proyek startup kecil-kecilan. Dua-duanya makan waktu dan aku takut kuliah keteteran. Pernah ada yang di posisi serupa? Kalian dulu milih apa dan nyesel nggak?", author: "member_forum", waktu: "7 jam lalu", reply: 47, view: 1120, vote: 176, pinned: false },
  { id: 15, kategori: "otomotif", judul: "Aki motor cepat soak, ini 5 penyebab yang sering kelewat", snippet: "Sering mati pas pagi hari? Coba cek dulu beberapa hal sederhana ini...", isi: "Aki cepat soak biasanya bukan murni karena akinya jelek. Cek dulu kebiasaan nyalain lampu atau aksesori saat mesin mati, kondisi kiprok, kabel yang kendor atau berkarat, dan motor yang jarang dipakai lama. Kalau udah dicek semua baru pertimbangkan ganti aki. Ada yang punya pengalaman lain?", author: "laode_r", waktu: "2 hari lalu", reply: 16, view: 390, vote: 47, pinned: false },
  { id: 16, kategori: "curhat", judul: "Ada yang mau bikin komunitas K-Pop di kampus Untar?", snippet: "Banyak yang suka, tapi belum ada wadah buat kumpul dan nonton bareng...", isi: "Perasaan banyak banget mahasiswa sini yang suka K-Pop, tapi belum ada wadah buat kumpul. Idenya sederhana: nonton comeback bareng, tukar info konser, dan sesekali patungan nonton. Kalau ada yang tertarik, komen aja dulu, nanti kita bikin grup. Semua bias welcome!", author: "chris.reinner", waktu: "20 jam lalu", reply: 52, view: 1300, vote: 189, pinned: false },
  { id: 17, kategori: "gaming", judul: "Baru tamat Red Dead Redemption 2, pelan tapi bikin nagih", snippet: "Awalnya ngerasa lambat, tapi ujungnya malah susah move on...", isi: "Baru tamat Red Dead Redemption 2 setelah beberapa minggu main santai. Awalnya aku sempat ngerasa lambat karena banyak adegan jalan, berburu, dan ngobrol di kemah. Tapi justru di situ kekuatannya: dunianya kerasa hidup dan karakter di geng Arthur bikin kita peduli. Grafis dan musiknya luar biasa, apalagi pas naik kuda menjelang senja. Kekurangannya, kontrol agak kaku dan beberapa misi terlalu linear. Nilai dari aku 9/10, wajib coba buat yang suka game dengan cerita kuat.", author: "tristan.a", waktu: "12 jam lalu", reply: 28, view: 760, vote: 118, pinned: false },
  { id: 18, kategori: "tvseries", judul: "Maraton Breaking Bad sampai tamat, ternyata hype-nya masuk akal", snippet: "Premisnya sederhana, tapi perkembangan karakternya gila banget...", isi: "Akhirnya maraton Breaking Bad sampai tamat. Premisnya sederhana, seorang guru kimia yang kena kanker lalu nekat cari uang lewat jalan gelap, tapi perkembangan karakternya gila banget. Kita pelan-pelan lihat Walter berubah dari orang biasa jadi sosok yang benar-benar beda. Aktingnya, sinematografinya, sampai cara tiap episode ditutup bikin susah berhenti nonton. Ritmenya agak lambat di awal season pertama, tapi setelah itu langsung tancap gas. Nilai 9.5/10. Ada yang punya rekomendasi serial lain yang selevel?", author: "rafif_dev", waktu: "3 hari lalu", reply: 36, view: 940, vote: 142, pinned: false },
  { id: 19, kategori: "curhat", judul: "Rewatch Avatar: The Last Airbender, masih sebagus dulu nggak sih?", snippet: "Nonton ulang dan ternyata ceritanya makin kerasa dalam pas udah dewasa...", isi: "Rewatch Avatar: The Last Airbender dan ternyata masih sebagus dulu. Ceritanya ringan di permukaan tapi isinya dalam, soal perang, kehilangan, dan tanggung jawab. Karakternya berkembang dengan rapi, apalagi Zuko dan Iroh yang jadi favorit banyak orang. Dunia empat elemennya juga detail dan konsisten dari awal sampai akhir. Cocok ditonton ulang atau diajak adik. Nilai 9/10. Kalian tim bender air, api, tanah, atau udara nih?", author: "kaya.nrs", waktu: "4 hari lalu", reply: 41, view: 1010, vote: 160, pinned: false },
  { id: 20, kategori: "tvseries", judul: "Game of Thrones: season awal juara, tapi kenapa endingnya bikin debat?", snippet: "Dunianya luar biasa, tapi kenapa banyak yang kecewa di akhir?...", isi: "Nonton Game of Thrones dari awal sampai tamat dan kesanku campur aduk. Season awal sampai pertengahan benar-benar juara, intrik politiknya rapi, karakternya banyak tapi semuanya punya tujuan. Skala produksinya juga besar banget, apalagi adegan perang. Masalahnya muncul di season-season akhir, alurnya terasa dikebut dan beberapa keputusan karakter kurang meyakinkan. Meski begitu, sebagai tontonan masih worth it. Nilai 8.5/10. Kalian tim mana, puas atau kecewa sama endingnya?", author: "tristan.a", waktu: "9 jam lalu", reply: 58, view: 1450, vote: 201, pinned: false },
  { id: 21, kategori: "tvseries", judul: "Better Call Saul ternyata lebih dalam dari yang dikira, setuju nggak?", snippet: "Awalnya cuma spin-off, ternyata malah punya kekuatan sendiri...", isi: "Awalnya aku kira Better Call Saul cuma pelengkap Breaking Bad, ternyata punya identitas sendiri. Ritmenya lebih pelan dan fokus ke satu karakter yang pelan-pelan terjebak pilihannya sendiri. Aktingnya kuat, penulisannya rapi, dan banyak adegan kecil yang diam-diam menyentuh. Buat yang suka drama karakter, ini cocok banget. Kekurangannya, butuh kesabaran di awal karena tempo yang santai. Nilai 9/10. Kalian lebih suka yang mana, serial ini atau induknya?", author: "rafif_dev", waktu: "15 jam lalu", reply: 33, view: 880, vote: 127, pinned: false },
  { id: 22, kategori: "tvseries", judul: "The Sopranos, serial mafia yang ngubah standar drama TV", snippet: "Bukan cuma soal kekerasan, tapi juga soal keluarga dan mental...", isi: "Akhirnya nyoba The Sopranos yang katanya pelopor drama TV modern. Ternyata benar, ini bukan sekadar serial mafia. Setengah ceritanya soal kehidupan keluarga dan kondisi mental sang tokoh utama, lengkap dengan sesi terapi yang jadi ciri khasnya. Temponya lambat dan beberapa episode terasa seperti potongan kehidupan biasa, jadi mungkin kurang cocok buat yang suka aksi cepat. Tapi karakterisasinya luar biasa. Nilai 9/10. Ada yang udah tamat dan punya pendapat soal endingnya?", author: "kaya.nrs", waktu: "1 hari lalu", reply: 29, view: 790, vote: 109, pinned: false },
  { id: 23, kategori: "tvseries", judul: "Mr. Robot cocok banget buat anak SI, tapi jangan nonton sambil main HP", snippet: "Adegan keamanan sibernya terasa realistis, alurnya bikin mikir keras...", isi: "Mr. Robot cocok banget buat anak SI karena banyak adegan yang nyentuh dunia keamanan siber dan terasa realistis dibanding serial sejenis. Ceritanya ngikutin seorang engineer yang punya masalah mental dan terlibat aksi peretasan besar. Nuansa visualnya gelap dan unik, soundtrack-nya pas. Tapi alurnya cukup rumit, jadi harus fokus penuh pas nonton. Nilai 8.5/10. Ada yang nonton ini juga dan nemu teori favorit?", author: "chris.reinner", waktu: "4 jam lalu", reply: 37, view: 920, vote: 138, pinned: false },
];

// Thread buatan user disimpan di localStorage browser, lalu digabung ke threadData
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
try {
  JSON.parse(localStorage.getItem("userThreads") || "[]").forEach(t => threadData.push(t));
} catch (e) {}

const trendingNewsData = [
  { icon: "🔥", judul: "Heboh! Startup lokal berhasil raih pendanaan Rp50 Miliar minggu ini", sumber: "TechInsight", waktu: "3 jam lalu" },
  { icon: "⚽", judul: "Timnas Indonesia lolos ke babak berikutnya, netizen ramai kasih dukungan", sumber: "SportZone", waktu: "5 jam lalu" },
  { icon: "🎬", judul: "Film lokal tembus 2 juta penonton dalam seminggu, ini rahasianya", sumber: "LayarKita", waktu: "8 jam lalu" },
  { icon: "📱", judul: "Bocoran HP flagship terbaru bikin heboh forum teknologi", sumber: "GadgetDaily", waktu: "10 jam lalu" },
  { icon: "🎓", judul: "Tren mahasiswa switch career ke IT makin naik tahun ini, kenapa?", sumber: "KampusUpdate", waktu: "12 jam lalu" },
];

// ===== NAVBAR: mobile toggle =====
function initNavbar() {
  const btn = document.querySelector(".hamburger");
  const links = document.querySelector(".nav-links");
  if (!btn || !links) return;
  btn.addEventListener("click", () => {
    links.style.display = links.style.display === "flex" ? "none" : "flex";
    links.style.flexDirection = "column";
    links.style.position = "absolute";
    links.style.top = "60px";
    links.style.right = "20px";
    links.style.background = "var(--card)";
    links.style.border = "2px solid var(--border)";
    links.style.padding = "16px";
    links.style.borderRadius = "10px";
  });
}

// ===== RENDER: kartu kategori (index & kategori.html) =====
function renderKategoriCards(container, data) {
  container.innerHTML = data.map(k => `
    <a href="threads.html?kategori=${k.id}" class="card cat-card">
      <div class="cat-icon">${k.icon}</div>
      <h3>${k.nama}</h3>
      <p>${k.desc}</p>
      <div class="cat-meta">
        <span>${k.thread} thread</span>
        <span>${k.member} member</span>
      </div>
    </a>
  `).join("");
}

// ===== RENDER: trending thread preview (index.html) =====
function renderTrendingThreads(container, data) {
  const top = [...data].sort((a, b) => b.vote - a.vote).slice(0, 4);
  container.innerHTML = top.map(t => `
    <a href="threads.html?kategori=${t.kategori}" class="card thread-preview">
      <div class="vote-box">▲ ${t.vote}<small>vote</small></div>
      <div class="thread-info">
        <span class="tag">${kategoriData.find(k => k.id === t.kategori)?.nama || t.kategori}</span>
        <h4>${t.judul}</h4>
        <div class="thread-meta"><b>${t.author}</b> · ${t.waktu} · ${t.reply} balasan</div>
      </div>
    </a>
  `).join("");
}

// ===== RENDER: berita trending/viral (index.html) =====
function renderTrendingNews(container, data) {
  container.innerHTML = data.map(n => `
    <div class="card thread-preview">
      <div class="vote-box" style="font-size:22px;">${n.icon}</div>
      <div class="thread-info">
        <span class="tag">${n.sumber}</span>
        <h4>${n.judul}</h4>
        <div class="thread-meta">${n.waktu}</div>
      </div>
    </div>
  `).join("");
}


// ===== RENDER: list thread per kategori (threads.html) =====
// ORANG 2
function waktuKeMenit(w) {
  const teks = String(w);
  const angka = parseInt(teks, 10) || 0;
  if (teks.includes("menit")) return angka;
  if (teks.includes("jam")) return angka * 60;
  if (teks.includes("hari")) return angka * 1440;
  return 0;
}

function renderThreadList(container, data, sortBy) {
  let sorted = [...data];
  if (sortBy === "terbaru") sorted.sort((a, b) => waktuKeMenit(a.waktu) - waktuKeMenit(b.waktu) || b.id - a.id);
  if (sortBy === "terpopuler") sorted.sort((a, b) => b.view - a.view);
  if (sortBy === "teratas") sorted.sort((a, b) => b.vote - a.vote);

  if (sorted.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Belum ada thread di kategori ini.</p>`;
    return;
  }

  
  container.innerHTML = sorted.map((t, index) => `
    <div class="card thread-row" style="display:flex; justify-content:space-between; align-items:center; text-decoration:none;">
      <a href="thread-detail.html?id=${t.id}" style="display:flex; flex:1; text-decoration:none; color:inherit;">
        <div class="avatar"></div>
        <div style="flex:1">
          <h3>${t.pinned ? '<span class="pinned-badge">PINNED</span>' : ''}${t.judul}</h3>
          <p class="snippet">${t.snippet}</p>
          <div class="thread-stats">
            <span><b>${t.author}</b></span>
            <span>${t.waktu}</span>
            <span><b>${t.reply}</b> balasan</span>
            <span><b>${t.view}</b> dilihat</span>
            <span><b>${t.vote}</b> vote</span>
          </div>
        </div>
      </a>
      <button onclick="hapusThread(${index})" style="background: #ff4d4d; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; margin-left: 15px;">Hapus</button>
    </div>
  `).join("");
}


function hapusThread(index) {
  let savedThreads = JSON.parse(localStorage.getItem("userThreads")) || [];
  savedThreads.splice(index, 1);
  localStorage.setItem("userThreads", JSON.stringify(savedThreads));
  location.reload();
}

// ===== SEARCH bar (filter sederhana) =====
function initSearch(inputEl, onSearch) {
  if (!inputEl) return;
  inputEl.addEventListener("input", (e) => onSearch(e.target.value.toLowerCase().trim()));
}

function cocokPencarian(t, keyword) {
  const q = String(keyword).toLowerCase();
  const kat = kategoriData.find(k => k.id === t.kategori);
  const tags = (threadTagsData[t.id] || []).map(id => tagData.find(g => g.id === id)?.nama || id);
  return [t.judul, kat ? kat.nama : "", ...tags].some(teks => teks.toLowerCase().includes(q));
}

// ===== DUMMY DATA: komentar per thread (nested, tanpa database) =====
const commentsData = {
  1: [
    { id: "c1", author: "kaya.nrs", waktu: "10 menit lalu", isi: "Coba cek Lenovo IdeaPad Slim atau Asus Vivobook, biasanya spek segitu udah cukup buat coding ringan.", replies: [
      { id: "c1r1", author: "rafif_dev", waktu: "8 menit lalu", isi: "Setuju, aku pake Vivobook juga lancar buat VSCode + Figma." }
    ]},
    { id: "c2", author: "tristan.a", waktu: "5 menit lalu", isi: "Kalau budget bisa nambah dikit, ambil yang RAM 16GB biar gak lag pas buka banyak tab.", replies: [] }
  ],
  2: [
    { id: "c3", author: "laode_r", waktu: "20 menit lalu", isi: "Gas, aku ikutan. Rank berapa sekarang?", replies: [] }
  ],
  3: [
    { id: "c10", author: "tristan.a", waktu: "50 menit lalu", isi: "Boleh tau tipe switch-nya apa? Kalau yang berisik kayaknya kurang cocok buat anak kos.", replies: [
      { id: "c10r1", author: "chris.reinner", waktu: "45 menit lalu", isi: "Tipe brown, jadi aman dipakai malam hari kok." }
    ]},
    { id: "c11", author: "kaya.nrs", waktu: "30 menit lalu", isi: "Udah ada yang nego? Kalau masih ada nanti aku DM ya.", replies: [] }
  ],
  4: [
    { id: "c4", author: "chris.reinner", waktu: "1 jam lalu", isi: "Normal banget, aku juga dulu struggling di ERD. Coba latihan bikin ERD dari kasus sederhana dulu.", replies: [
      { id: "c4r1", author: "kaya.nrs", waktu: "50 menit lalu", isi: "Bener, lama-lama kebiasa kok. Semangat!" }
    ]},
    { id: "c5", author: "rafif_dev", waktu: "40 menit lalu", isi: "Basis data emang butuh jam terbang, jangan minder.", replies: [] }
  ],
  5: [
    { id: "c12", author: "rafif_dev", waktu: "2 jam lalu", isi: "Tambahan: jangan lupa cek busi, kalau udah kotor bensin jadi boros.", replies: [
      { id: "c12r1", author: "laode_r", waktu: "2 jam lalu", isi: "Betul, makasih masukannya, belum aku masukin nih." }
    ]},
    { id: "c13", author: "chris.reinner", waktu: "1 jam lalu", isi: "Oli murah tapi ganti rutin lebih baik daripada oli mahal tapi telat.", replies: [] }
  ],
  6: [
    { id: "c14", author: "kaya.nrs", waktu: "4 jam lalu", isi: "Warteg deket gerbang belakang juga enak, sambal terasinya juara.", replies: [
      { id: "c14r1", author: "rafif_dev", waktu: "4 jam lalu", isi: "Wah belum pernah coba, nanti siang aku mampir." }
    ]},
    { id: "c15", author: "member_forum", waktu: "3 jam lalu", isi: "Noted, anak kos wajib simpan thread ini.", replies: [] }
  ],
  7: [
    { id: "c16", author: "laode_r", waktu: "5 jam lalu", isi: "Vanilla dulu, biar paham dasarnya. Framework nanti jadi lebih gampang dipahami.", replies: [
      { id: "c16r1", author: "tristan.a", waktu: "5 jam lalu", isi: "Setuju, tapi kalau deadline mepet framework nolong banget sih." }
    ]},
    { id: "c17", author: "chris.reinner", waktu: "4 jam lalu", isi: "Tim vanilla, tapi sambil lirik Tailwind buat proyek berikutnya.", replies: [] }
  ],
  8: [
    { id: "c18", author: "tristan.a", waktu: "5 jam lalu", isi: "Judulnya apa bang? Penasaran, udah lama nyari game naratif lokal.", replies: [
      { id: "c18r1", author: "kaya.nrs", waktu: "4 jam lalu", isi: "Cek di itch.io, sering ada game lokal yang jarang kedengeran." }
    ]},
    { id: "c19", author: "laode_r", waktu: "3 jam lalu", isi: "Wah noted, weekend ini aku coba.", replies: [] }
  ],
  9: [
    { id: "c20", author: "kaya.nrs", waktu: "9 jam lalu", isi: "Mulai dari dasar: variabel, fungsi, array, baru DOM. Bikin proyek kecil biar nempel.", replies: [
      { id: "c20r1", author: "rafif_dev", waktu: "8 jam lalu", isi: "Oke, nanti coba bikin kalkulator dulu." }
    ]},
    { id: "c21", author: "tristan.a", waktu: "7 jam lalu", isi: "Jangan loncat ke framework dulu, nyesel nanti kalau dasarnya belum kuat.", replies: [] }
  ],
  10: [
    { id: "c22", author: "rafif_dev", waktu: "10 jam lalu", isi: "Coba cari RPG yang punya sistem pilihan dialog, biasanya ceritanya lebih hidup.", replies: [] },
    { id: "c23", author: "kaya.nrs", waktu: "9 jam lalu", isi: "Kalau mau yang ringan dimainkan di HP, banyak kok yang ceritanya bagus.", replies: [
      { id: "c23r1", author: "tristan.a", waktu: "9 jam lalu", isi: "Boleh sebut judulnya? Aku butuh yang gratis." }
    ]}
  ],
  11: [
    { id: "c24", author: "kaya.nrs", waktu: "12 jam lalu", isi: "Coba cek marketplace, biasanya banyak yang lepas tablet bekas pas awal semester.", replies: [] },
    { id: "c25", author: "laode_r", waktu: "11 jam lalu", isi: "Pastiin cek layar dan baterai pas COD ya.", replies: [] }
  ],
  12: [
    { id: "c26", author: "rafif_dev", waktu: "17 jam lalu", isi: "125cc cukup kalau jaraknya segitu, perawatannya juga lebih murah.", replies: [
      { id: "c26r1", author: "laode_r", waktu: "16 jam lalu", isi: "Masuk akal, aku jadi condong ke yang 125 deh." }
    ]},
    { id: "c27", author: "chris.reinner", waktu: "14 jam lalu", isi: "Kalau sering bawa boncengan, 150cc lebih enak narik.", replies: [] }
  ],
  13: [
    { id: "c28", author: "tristan.a", waktu: "10 jam lalu", isi: "Tambah irisan cabai rawit sama sedikit lada, rasanya naik kelas.", replies: [
      { id: "c28r1", author: "kaya.nrs", waktu: "9 jam lalu", isi: "Wah noted, besok malam aku coba." }
    ]},
    { id: "c29", author: "laode_r", waktu: "8 jam lalu", isi: "Telur dadar tipis di atasnya juga enak, tinggal modal 2 ribu.", replies: [] }
  ],
  14: [
    { id: "c30", author: "kaya.nrs", waktu: "6 jam lalu", isi: "Kalau bisa ambil magang dulu buat pengalaman, proyek bareng temen bisa dikerjain pelan-pelan.", replies: [
      { id: "c30r1", author: "member_forum", waktu: "5 jam lalu", isi: "Masuk akal, tapi takut temenku keburu jalan duluan." }
    ]},
    { id: "c31", author: "rafif_dev", waktu: "4 jam lalu", isi: "Coba obrolin dulu jadwalnya sama temen, mungkin bisa dibagi.", replies: [] }
  ],
  15: [
    { id: "c32", author: "chris.reinner", waktu: "1 hari lalu", isi: "Kiprok rusak itu sering banget jadi biang masalah, coba cek dulu.", replies: [] },
    { id: "c33", author: "tristan.a", waktu: "1 hari lalu", isi: "Aku juga pernah, ternyata terminal akinya karatan.", replies: [
      { id: "c33r1", author: "laode_r", waktu: "1 hari lalu", isi: "Nah itu, cek dan bersihin terminalnya dulu." }
    ]}
  ],
  16: [
    { id: "c34", author: "rafif_dev", waktu: "18 jam lalu", isi: "Ikutan! Kalau udah ada grup bilang ya.", replies: [] },
    { id: "c35", author: "kaya.nrs", waktu: "15 jam lalu", isi: "Bagus nih ide, nanti bisa kerja sama sama UKM juga.", replies: [
      { id: "c35r1", author: "chris.reinner", waktu: "12 jam lalu", isi: "Boleh, aku coba tanya senior yang pegang UKM." }
    ]}
  ],
  17: [
    { id: "c40", author: "rafif_dev", waktu: "11 jam lalu", isi: "Setuju banget, 10 jam pertama emang pelan tapi pas udah masuk ceritanya susah berhenti.", replies: [
      { id: "c40r1", author: "tristan.a", waktu: "10 jam lalu", isi: "Nah itu, makanya jangan nyerah di awal." }
    ]},
    { id: "c41", author: "laode_r", waktu: "6 jam lalu", isi: "Spek laptop standar kuat nggak buat jalanin ini? Penasaran pengen coba.", replies: [] }
  ],
  18: [
    { id: "c42", author: "kaya.nrs", waktu: "2 hari lalu", isi: "Season terakhirnya yang paling bikin deg-degan, jangan di-skip ya.", replies: [
      { id: "c42r1", author: "rafif_dev", waktu: "2 hari lalu", isi: "Udah tamat, endingnya memuaskan banget menurutku." }
    ]},
    { id: "c43", author: "chris.reinner", waktu: "1 hari lalu", isi: "Kalau suka ini, coba tonton serial spin-off-nya juga, kualitasnya nggak kalah.", replies: [] }
  ],
  19: [
    { id: "c44", author: "tristan.a", waktu: "3 hari lalu", isi: "Tim api, Zuko redemption arc-nya juara.", replies: [
      { id: "c44r1", author: "kaya.nrs", waktu: "3 hari lalu", isi: "Iroh itu karakter terbaik sih, quotes-nya adem semua." }
    ]},
    { id: "c45", author: "laode_r", waktu: "2 hari lalu", isi: "Wajib tonton ulang tiap beberapa tahun, selalu nemu hal baru.", replies: [] }
  ],
  20: [
    { id: "c50", author: "rafif_dev", waktu: "8 jam lalu", isi: "Season 1 sampai 4 itu kelas dunia, sayang banget sisanya terasa buru-buru.", replies: [
      { id: "c50r1", author: "tristan.a", waktu: "7 jam lalu", isi: "Betul, makanya aku bilang worth it ditonton walau ending-nya debat." }
    ]},
    { id: "c51", author: "laode_r", waktu: "5 jam lalu", isi: "Soundtrack-nya juga ikonik, langsung merinding dengar intro-nya.", replies: [] }
  ],
  21: [
    { id: "c52", author: "tristan.a", waktu: "14 jam lalu", isi: "Menurutku malah lebih rapi penulisannya dibanding induknya, tapi butuh sabar.", replies: [
      { id: "c52r1", author: "rafif_dev", waktu: "13 jam lalu", isi: "Setuju, tiap detail kecilnya ternyata nyambung ke belakang." }
    ]},
    { id: "c53", author: "kaya.nrs", waktu: "10 jam lalu", isi: "Tonton Breaking Bad dulu atau langsung ini nggak masalah?", replies: [
      { id: "c53r1", author: "rafif_dev", waktu: "9 jam lalu", isi: "Lebih seru kalau Breaking Bad dulu, banyak referensi yang kerasa." }
    ]}
  ],
  22: [
    { id: "c54", author: "rafif_dev", waktu: "20 jam lalu", isi: "Ending-nya jadi bahan debat sampai sekarang, tonton sendiri baru ngerti.", replies: [] },
    { id: "c55", author: "chris.reinner", waktu: "16 jam lalu", isi: "Banyak serial modern yang kelihatan banget terinspirasi dari sini.", replies: [
      { id: "c55r1", author: "kaya.nrs", waktu: "15 jam lalu", isi: "Betul, makanya disebut pelopor era golden age drama TV." }
    ]}
  ],
  23: [
    { id: "c56", author: "tristan.a", waktu: "3 jam lalu", isi: "Adegan peretasannya relatif realistis, nggak asal ngetik kayak di film biasa.", replies: [] },
    { id: "c57", author: "kaya.nrs", waktu: "2 jam lalu", isi: "Season pertama paling kuat menurutku, sisanya makin rumit.", replies: [
      { id: "c57r1", author: "chris.reinner", waktu: "1 jam lalu", isi: "Iya, tapi pas nyambung semua rasanya puas banget." }
    ]}
  ]
};

// Ambil komentar dummy generik kalau thread belum punya data komentar spesifik
function getComments(threadId) {
  return commentsData[threadId] || [
    { id: "gen1", author: "member_forum", waktu: "1 jam lalu", isi: "Thread menarik, ditunggu update selanjutnya!", replies: [] }
  ];
}

// ===== RENDER: halaman Detail Thread =====
function renderThreadDetail(container, thread, kategoriNama) {
  container.innerHTML = `
    <div class="card" style="padding:22px;margin-bottom:20px;">
      <span class="tag">${kategoriNama}</span>
      ${thread.pinned ? '<span class="pinned-badge">PINNED</span>' : ''}
      <h1 style="font-size:22px;margin:10px 0;">${thread.judul}</h1>
      <div class="thread-meta"><b>${thread.author}</b> · ${thread.waktu} · ${thread.view} dilihat</div>
      <p style="margin-top:16px;font-size:14px;color:var(--text-dim);line-height:1.7;">
        ${thread.isi ? thread.isi : thread.snippet}
      </p>
      <div class="thread-stats" style="margin-top:16px;">
        <span>▲ <b>${thread.vote}</b> vote</span>
        <span><b>${thread.reply}</b> balasan</span>
      </div>
    </div>
  `;
}

// ===== RENDER: komentar (nested, 1 level reply) =====
function renderComments(container, comments) {
  if (comments.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);font-size:13px;">Belum ada komentar.</p>`;
    return;
  }
  container.innerHTML = comments.map(c => `
    <div class="comment-item">
      <div class="avatar" style="width:32px;height:32px;"></div>
      <div style="flex:1">
        <div class="thread-meta"><b>${c.author}</b> · ${c.waktu}</div>
        <p style="font-size:13px;margin-top:4px;">${c.isi}</p>
        ${c.replies.length > 0 ? `
          <div class="comment-replies">
            ${c.replies.map(r => `
              <div class="comment-item">
                <div class="avatar" style="width:28px;height:28px;"></div>
                <div style="flex:1">
                  <div class="thread-meta"><b>${r.author}</b> · ${r.waktu}</div>
                  <p style="font-size:13px;margin-top:4px;">${r.isi}</p>
                </div>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
    </div>
  `).join("");
}

// Tambah komentar baru ke tampilan (dummy, tidak tersimpan permanen)
function addDummyComment(container, existingComments, isi) {
  existingComments.unshift({
    id: "new-" + Date.now(),
    author: "kamu",
    waktu: "baru saja",
    isi: escapeHtml(isi),
    replies: []
  });
  renderComments(container, existingComments);
}

// ===== RENDER: hasil pencarian (search.html) =====
function renderSearchResults(container, data, keyword) {
  if (!keyword) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Ketik kata kunci untuk mencari thread.</p>`;
    return;
  }
  const filtered = data.filter(t => cocokPencarian(t, keyword));
  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Tidak ada thread untuk "${escapeHtml(keyword)}". Coba kata kunci lain atau <a href="buat-thread.html" style="color:var(--accent-2);">buat thread baru</a>.</p>`;
    return;
  }
  renderThreadList(container, filtered, "terbaru");
}

document.addEventListener("DOMContentLoaded", initNavbar);

// ===== DUMMY DATA: tag & topik (tanpa database) ORANG 3 =====
const tagData = [
  { id: "coding", nama: "Coding", jumlah: 342 },
  { id: "esport", nama: "Esport", jumlah: 289 },
  { id: "startup", nama: "Startup", jumlah: 256 },
  { id: "game", nama: "Game", jumlah: 210 },
  { id: "kuliah", nama: "Kuliah", jumlah: 198 },
  { id: "kpop", nama: "K-Pop", jumlah: 176 },
  { id: "film", nama: "Film & Series", jumlah: 164 },
  { id: "resep", nama: "Resep", jumlah: 143 },
  { id: "motor", nama: "Motor", jumlah: 120 },
  { id: "anime", nama: "Anime", jumlah: 98 },
];

// Mapping thread -> tag (pakai id thread yang sudah ada di threadData)
const threadTagsData = {
  1: ["coding", "kuliah"],
  2: ["esport"],
  3: ["coding"],
  4: ["kuliah"],
  5: ["motor"],
  6: ["resep"],
  7: ["coding", "kuliah"],
  8: ["esport", "anime"],
  9: ["coding", "kuliah"],
  10: ["anime"],
  11: ["kuliah"],
  12: ["motor"],
  13: ["resep"],
  14: ["startup", "kuliah"],
  15: ["motor"],
  16: ["kpop", "kuliah"],
  17: ["game"],
  18: ["film"],
  19: ["film", "anime"],
  20: ["film"],
  21: ["film"],
  22: ["film"],
  23: ["film", "coding"],
};

// ===== RENDER: cloud tag populer (tag-populer.html) =====
function renderTagCloud(container, tags) {
  const sorted = [...tags].sort((a, b) => b.jumlah - a.jumlah);
  container.innerHTML = sorted.map(t => `
    <a href="thread-tag.html?tag=${t.id}" class="tag-pill">
      #${t.nama} <span>${t.jumlah}</span>
    </a>
  `).join("");
}

// ===== RENDER: thread berdasarkan tag tertentu (thread-tag.html) =====
function renderThreadsByTag(container, tagId) {
  const filteredIds = Object.keys(threadTagsData).filter(id =>
    threadTagsData[id].includes(tagId)
  ).map(Number);
  const filtered = threadData.filter(t => filteredIds.includes(t.id));
  renderThreadList(container, filtered, "terbaru");
}

// ===== RENDER: trending topics (trending-topics.html) =====
function renderTrendingTopics(container, tags) {
  const sorted = [...tags].sort((a, b) => b.jumlah - a.jumlah);
  const max = sorted[0].jumlah;
  container.innerHTML = sorted.map((t, i) => `
    <a href="thread-tag.html?tag=${t.id}" class="card trending-rank-item">
      <div class="rank-number">${i + 1}</div>
      <div style="flex:1">
        <h4>#${t.nama}</h4>
        <div class="rank-bar-track">
          <div class="rank-bar-fill" style="width:${(t.jumlah / max) * 100}%"></div>
        </div>
      </div>
      <div class="rank-count">${t.jumlah}<small>thread</small></div>
    </a>
  `).join("");
}

// ===== DUMMY DATA: notifikasi (tanpa database)  ORANG 4 =====
const notifikasiData = [
  { id: 1, tipe: "reply", icon: "💬", judul: "tristan.a membalas thread kamu", isi: '"Setuju, aku pake Vivobook juga lancar..."', waktu: "5 menit lalu", dibaca: false, link: "thread-detail.html?id=1" },
  { id: 2, tipe: "vote", icon: "⬆️", judul: "Thread kamu dapat 10 vote baru", isi: "Anak SI tapi struggling banget di mata kuliah basis data...", waktu: "30 menit lalu", dibaca: false, link: "thread-detail.html?id=4" },
  { id: 3, tipe: "mention", icon: "🔔", judul: "kaya.nrs menyebut kamu di komentar", isi: '"@rafif_dev setuju banget sama pendapat ini"', waktu: "1 jam lalu", dibaca: true, link: "thread-detail.html?id=4" },
  { id: 4, tipe: "reply", icon: "💬", judul: "laode_r membalas thread kamu", isi: '"Wajib coba ini kalau lewat situ!"', waktu: "3 jam lalu", dibaca: true, link: "thread-detail.html?id=6" },
  { id: 5, tipe: "sistem", icon: "🎉", judul: "Selamat! Reputasi kamu naik ke level Aktivis", isi: "Terus aktif buat naik ke level berikutnya.", waktu: "1 hari lalu", dibaca: true, link: "leaderboard.html" },
];

// ===== DUMMY DATA: leaderboard/reputasi (tanpa database) =====
const leaderboardData = [
  { rank: 1, username: "kaya.nrs", cendol: 1842, level: "Sesepuh Forum", thread: 156, badge: "🏆" },
  { rank: 2, username: "rafif_dev", cendol: 1590, level: "Aktivis", thread: 132, badge: "🥈" },
  { rank: 3, username: "tristan.a", cendol: 1344, level: "Aktivis", thread: 98, badge: "🥉" },
  { rank: 4, username: "chris.reinner", cendol: 980, level: "Kontributor", thread: 74, badge: "" },
  { rank: 5, username: "laode_r", cendol: 812, level: "Kontributor", thread: 61, badge: "" },
  { rank: 6, username: "member_forum", cendol: 430, level: "Newbie Aktif", thread: 22, badge: "" },
];

// ===== DUMMY DATA: laporan moderasi (tanpa database) =====
const laporanData = [
  { id: 1, threadJudul: "Laptop 8 jutaan yang worth it buat kuliah SI, ada rekomendasi?", pelapor: "member_forum", alasan: "Spam iklan di komentar", status: "pending", waktu: "10 menit lalu" },
  { id: 2, threadJudul: "[WTS] Keyboard mechanical 2nd, kondisi 95%, harga nego", pelapor: "kaya.nrs", alasan: "Konten menyinggung SARA", status: "pending", waktu: "1 jam lalu" },
  { id: 3, threadJudul: "Server mabar Valorant rank Immortal, gas malam ini?", pelapor: "tristan.a", alasan: "Ujaran kebencian ke pemain lain", status: "selesai", waktu: "5 jam lalu" },
  { id: 4, threadJudul: "Rekomendasi warteg legend di sekitar kampus Untar", pelapor: "laode_r", alasan: "Judul clickbait / menyesatkan", status: "ditolak", waktu: "1 hari lalu" },
];

// ===== RENDER: notifikasi (notifikasi.html) =====
function renderNotifikasi(container, data) {
  if (data.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Tidak ada notifikasi.</p>`;
    return;
  }
  container.innerHTML = data.map(n => `
    <a href="${n.link}" class="card notif-item ${n.dibaca ? '' : 'notif-unread'}">
      <div class="notif-icon">${n.icon}</div>
      <div style="flex:1">
        <h4>${n.judul}</h4>
        <p class="notif-snippet">${n.isi}</p>
        <div class="thread-meta">${n.waktu}</div>
      </div>
      ${!n.dibaca ? '<span class="notif-dot"></span>' : ''}
    </a>
  `).join("");
}

// Tandai semua notifikasi sudah dibaca (dummy, tidak tersimpan permanen)
function tandaiSemuaDibaca(data, container) {
  data.forEach(n => n.dibaca = true);
  renderNotifikasi(container, data);
}

// ===== RENDER: leaderboard/reputasi (leaderboard.html) =====
function renderLeaderboard(container, data) {
  container.innerHTML = data.map(u => `
    <div class="card leaderboard-row ${u.rank <= 3 ? 'leaderboard-top' : ''}">
      <div class="lb-rank">${u.badge || u.rank}</div>
      <div class="avatar" style="width:36px;height:36px;"></div>
      <div style="flex:1">
        <h4>${u.username}</h4>
        <span class="tag">${u.level}</span>
      </div>
      <div class="lb-stats">
        <div><b>${u.cendol}</b><small>cendol</small></div>
        <div><b>${u.thread}</b><small>thread</small></div>
      </div>
    </div>
  `).join("");
}

// ===== RENDER: panel moderasi/report (moderasi.html) =====
function renderLaporan(container, data, filterStatus) {
  const filtered = filterStatus === "semua" ? data : data.filter(l => l.status === filterStatus);
  if (filtered.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Tidak ada laporan di status ini.</p>`;
    return;
  }
  container.innerHTML = filtered.map(l => `
    <div class="card laporan-row" data-id="${l.id}">
      <div style="flex:1">
        <h4>${l.threadJudul}</h4>
        <div class="thread-meta">Dilaporkan oleh <b>${l.pelapor}</b> · ${l.waktu}</div>
        <p class="notif-snippet">Alasan: ${l.alasan}</p>
      </div>
      <div class="laporan-actions">
        <span class="status-badge status-${l.status}">${l.status}</span>
        ${l.status === "pending" ? `
          <button class="btn-mini btn-approve" onclick="prosesLaporan(${l.id}, 'selesai')">Setujui Hapus</button>
          <button class="btn-mini btn-reject" onclick="prosesLaporan(${l.id}, 'ditolak')">Tolak</button>
        ` : ""}
      </div>
    </div>
  `).join("");
}

// Proses laporan (dummy, ubah status di memori saja, tidak permanen)
let currentLaporanFilter = "semua";
function prosesLaporan(id, statusBaru) {
  const target = laporanData.find(l => l.id === id);
  if (target) target.status = statusBaru;
  renderLaporan(document.getElementById("laporanBox"), laporanData, currentLaporanFilter);
}