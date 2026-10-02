// ORANG 1
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
    <a href="thread-detail.html?id=${t.id}" class="card thread-row" style="display:flex;text-decoration:none;">
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
  `).join("");
}

// ===== SEARCH bar (filter sederhana) =====
function initSearch(inputEl, onSearch) {
  if (!inputEl) return;
  inputEl.addEventListener("input", (e) => onSearch(e.target.value.toLowerCase().trim()));
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
  4: [
    { id: "c4", author: "chris.reinner", waktu: "1 jam lalu", isi: "Normal banget, aku juga dulu struggling di ERD. Coba latihan bikin ERD dari kasus sederhana dulu.", replies: [
      { id: "c4r1", author: "kaya.nrs", waktu: "50 menit lalu", isi: "Bener, lama-lama kebiasa kok. Semangat!" }
    ]},
    { id: "c5", author: "rafif_dev", waktu: "40 menit lalu", isi: "Basis data emang butuh jam terbang, jangan minder.", replies: [] }
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
        ${thread.isi ? thread.isi : thread.snippet + " Ini adalah isi lengkap dummy dari thread untuk keperluan tampilan, karena project ini tidak menggunakan database sehingga seluruh konten bersifat statis."}
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
  const filtered = data.filter(t => t.judul.toLowerCase().includes(keyword.toLowerCase()));
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
  { id: "kuliah", nama: "Kuliah", jumlah: 198 },
  { id: "kpop", nama: "K-Pop", jumlah: 176 },
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