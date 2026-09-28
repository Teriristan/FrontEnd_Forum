// ===== DUMMY DATA (tanpa database) =====
const kategoriData = [
  { id: "teknologi", icon: "💻", nama: "Teknologi & Gadget", desc: "Diskusi HP, laptop, software, dan dunia IT.", thread: 482, member: "3.1k" },
  { id: "gaming", icon: "🎮", nama: "Gaming Zone", desc: "Review game, tim mabar, sampai drama esport.", thread: 915, member: "5.4k" },
  { id: "jualbeli", icon: "🛒", nama: "Lapak Jual Beli", desc: "Barang preloved, jasa, dan promo member.", thread: 1204, member: "7.8k" },
  { id: "otomotif", icon: "🚗", nama: "Otomotif", desc: "Modifikasi, tips servis, dan berita otomotif.", thread: 356, member: "2.2k" },
  { id: "kuliner", icon: "🍜", nama: "Kuliner", desc: "Rekomendasi tempat makan & resep rumahan.", thread: 610, member: "4.0k" },
  { id: "curhat", icon: "💬", nama: "Curhat & Diskusi Bebas", desc: "Obrolan santai, unek-unek, dan cerita random.", thread: 1580, member: "9.2k" },
];

const threadData = [
  { id: 1, kategori: "teknologi", judul: "Laptop 8 jutaan yang worth it buat kuliah SI, ada rekomendasi?", snippet: "Butuh laptop buat coding sama desain ringan, budget mepet nih gaes...", author: "rafif_dev", waktu: "12 menit lalu", reply: 34, view: 891, vote: 128, pinned: true },
  { id: 2, kategori: "gaming", judul: "Server mabar Valorant rank Immortal, gas malam ini?", snippet: "Nyari 2 slot lagi buat push rank, komuk santai ya...", author: "tristan.a", waktu: "40 menit lalu", reply: 19, view: 430, vote: 76, pinned: false },
  { id: 3, kategori: "jualbeli", judul: "[WTS] Keyboard mechanical 2nd, kondisi 95%, harga nego", snippet: "Jual karena ganti unit baru, komplit box dan kabel...", author: "chris.reinner", waktu: "1 jam lalu", reply: 8, view: 220, vote: 22, pinned: false },
  { id: 4, kategori: "curhat", judul: "Anak SI tapi struggling banget di mata kuliah basis data, normal?", snippet: "Ada yang ngerasa ERD tuh susah dipahami di awal ga sih...", author: "kaya.nrs", waktu: "2 jam lalu", reply: 61, view: 1502, vote: 245, pinned: true },
  { id: 5, kategori: "otomotif", judul: "Tips servis motor harian biar irit BBM ala anak kos", snippet: "Sharing pengalaman servis rutin yang murah tapi efektif...", author: "laode_r", waktu: "3 jam lalu", reply: 14, view: 310, vote: 40, pinned: false },
  { id: 6, kategori: "kuliner", judul: "Rekomendasi warteg legend di sekitar kampus Untar", snippet: "Buat yang kere di akhir bulan, wajib coba ini...", author: "rafif_dev", waktu: "5 jam lalu", reply: 27, view: 640, vote: 88, pinned: false },
  { id: 7, kategori: "teknologi", judul: "Framework CSS vs vanilla CSS, kalian tim mana?", snippet: "Lagi kerjain tugas UTS pakai vanilla doang, capek tapi puas...", author: "tristan.a", waktu: "6 jam lalu", reply: 45, view: 980, vote: 150, pinned: false },
  { id: 8, kategori: "gaming", judul: "Review singkat game indie lokal yang underrated banget", snippet: "Baru tamatin, ceritanya related banget sama kehidupan kita...", author: "kaya.nrs", waktu: "8 jam lalu", reply: 9, view: 205, vote: 33, pinned: false },
];

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
function renderThreadList(container, data, sortBy) {
  let sorted = [...data];
  if (sortBy === "terbaru") sorted.sort((a, b) => a.id - b.id).reverse();
  if (sortBy === "terpopuler") sorted.sort((a, b) => b.view - a.view);
  if (sortBy === "teratas") sorted.sort((a, b) => b.vote - a.vote);

  if (sorted.length === 0) {
    container.innerHTML = `<p style="color:var(--text-dim);padding:20px;">Belum ada thread di kategori ini.</p>`;
    return;
  }

  container.innerHTML = sorted.map(t => `
    <div class="card thread-row">
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
    </div>
  `).join("");
}

// ===== SEARCH bar (filter sederhana) =====
function initSearch(inputEl, onSearch) {
  if (!inputEl) return;
  inputEl.addEventListener("input", (e) => onSearch(e.target.value.toLowerCase().trim()));
}

document.addEventListener("DOMContentLoaded", initNavbar);