/* =========================================================
   fitur Leaderboard & Reputasi
   - Peringkat per periode (minggu / bulan / sepanjang masa)
   - Top 3, tabel peringkat, pencarian
   - Level anggota berdasarkan total poin sepanjang masa
   - Kartu "Posisimu" + progres ke level berikutnya
   ========================================================= */
(function () {
  const PERIODS = [
    { k: 'minggu', l: 'Minggu ini' },
    { k: 'bulan',  l: 'Bulan ini' },
    { k: 'semua',  l: 'Sepanjang masa' }
  ];
  const LEVELS = [
    { min: 0,     nama: 'Newbie' },
    { min: 500,   nama: 'Anggota' },
    { min: 2000,  nama: 'Aktif' },
    { min: 8000,  nama: 'Senior' },
    { min: 20000, nama: 'Sesepuh' },
    { min: 40000, nama: 'Legenda' }
  ];
  const RULES = [
    ['Membuat thread', 10],
    ['Menulis komentar', 2],
    ['Menerima upvote', 5],
    ['Jawaban terbaik', 25],
    ['Laporan yang valid', 3],
    ['Konten dihapus moderator', -20]
  ];

  let period = 'minggu';
  let query = '';

  const $tabs = document.getElementById('period-tabs');
  const $podium = document.getElementById('podium');
  const $table = document.getElementById('lb-table');
  const $title = document.getElementById('lb-title');
  const $search = document.getElementById('lb-search');
  const $me = document.getElementById('me-card');

  /* Hitung level dari total poin sepanjang masa */
  function levelOf(total) {
    let idx = 0;
    LEVELS.forEach((l, i) => { if (total >= l.min) idx = i; });
    const cur = LEVELS[idx];
    const next = LEVELS[idx + 1] || null;
    const progress = next ? Math.round(((total - cur.min) / (next.min - cur.min)) * 100) : 100;
    return { idx: idx, cur: cur, next: next, progress: progress };
  }

  function levelBadge(user) {
    const lv = levelOf(user.poin.semua);
    return '<span class="level level--' + lv.idx + '">' + lv.cur.nama + '</span>';
  }

  /* Urutkan pengguna sesuai periode, beri nomor peringkat */
  function ranked() {
    return DUMMY_USERS.slice()
      .sort((a, b) => b.poin[period] - a.poin[period])
      .map((u, i) => Object.assign({}, u, { rank: i + 1 }));
  }

  function renderTabs() {
    $tabs.innerHTML = PERIODS.map((p) =>
      '<button type="button" class="tab" data-period="' + p.k + '" aria-pressed="' + (p.k === period) + '">' + p.l + '</button>'
    ).join('');
  }

  function renderPodium(data) {
    if (query) { $podium.hidden = true; return; }
    $podium.hidden = false;
    /* urutan tampil: juara 2, juara 1, juara 3 */
    const urutan = [data[1], data[0], data[2]];
    $podium.innerHTML = urutan.map((u) =>
      '<li class="podium__item podium__item--' + u.rank + '">' +
        '<span class="podium__rank" aria-label="Peringkat ' + u.rank + '">' + u.rank + '</span>' +
        avatarHTML(u.nama, 'lg') +
        '<span class="podium__name">' + esc(u.nama) + '</span>' +
        '<span class="handle">@' + esc(u.username) + '</span>' +
        levelBadge(u) +
        '<span class="podium__pts">' + fmt(u.poin[period]) + ' poin</span>' +
      '</li>'
    ).join('');
  }

  function rowHTML(u) {
    const saya = u.id === CURRENT_USER.id;
    return (
      '<div class="lb-row' + (saya ? ' is-me' : '') + '" role="row">' +
        '<span class="lb-rank" role="cell">' + u.rank + '</span>' +
        '<span class="lb-user" role="cell">' + avatarHTML(u.nama, 'md') +
          '<span><span class="lb-user__name">' + esc(u.nama) + (saya ? ' <span class="chip chip--me">Kamu</span>' : '') + '</span>' +
          '<span class="handle">@' + esc(u.username) + ' &middot; ' + fmt(u.thread) + ' thread</span></span>' +
        '</span>' +
        '<span class="lb-level" role="cell">' + levelBadge(u) + '</span>' +
        '<span class="lb-pts" role="cell">' + fmt(u.poin[period]) + '</span>' +
      '</div>'
    );
  }

  function renderTable(data) {
    const q = query.trim().toLowerCase();
    let rows;
    if (q) {
      rows = data.filter((u) => u.nama.toLowerCase().includes(q) || u.username.toLowerCase().includes(q));
      $title.textContent = 'Hasil pencarian';
    } else {
      rows = data.slice(3);
      $title.textContent = 'Peringkat lengkap';
    }
    const head =
      '<div class="lb-row lb-row--head" role="row">' +
        '<span role="columnheader" style="text-align:center">#</span>' +
        '<span role="columnheader">Anggota</span>' +
        '<span class="lb-level" role="columnheader">Level</span>' +
        '<span role="columnheader" style="text-align:right">Poin</span>' +
      '</div>';
    if (rows.length === 0) {
      $table.innerHTML = '<div class="empty"><strong>Anggota tidak ditemukan</strong>Coba kata kunci lain, misalnya nama depan atau username.</div>';
      return;
    }
    $table.setAttribute('role', 'table');
    $table.innerHTML = head + rows.map(rowHTML).join('');
  }

  function renderMe(data) {
    const me = data.find((u) => u.id === CURRENT_USER.id);
    const lv = levelOf(me.poin.semua);
    const sisa = lv.next ? lv.next.min - me.poin.semua : 0;
    const periodeLabel = PERIODS.find((p) => p.k === period).l.toLowerCase();
    $me.innerHTML =
      '<div class="panel__head"><h2>Posisimu</h2></div>' +
      '<div class="panel__body">' +
        '<div class="me-card__row">' + avatarHTML(me.nama, 'md') +
          '<div><strong>' + esc(me.nama) + '</strong><div class="handle">@' + esc(me.username) + '</div></div></div>' +
        '<div class="me-card__rank">#' + me.rank + '</div>' +
        '<div class="handle">dengan ' + fmt(me.poin[period]) + ' poin ' + periodeLabel + '</div>' +
        '<div style="margin-top:16px;display:flex;justify-content:space-between;align-items:center">' +
          '<span class="level level--' + lv.idx + '">' + lv.cur.nama + '</span>' +
          '<span class="handle">' + (lv.next ? 'Berikutnya: ' + lv.next.nama : 'Level tertinggi') + '</span>' +
        '</div>' +
        '<div class="bar" style="margin-top:8px" role="progressbar" aria-valuenow="' + lv.progress + '" aria-valuemin="0" aria-valuemax="100" aria-label="Progres ke level berikutnya">' +
          '<span style="width:' + lv.progress + '%"></span></div>' +
        '<p class="me-card__hint">' + (lv.next
          ? 'Butuh ' + fmt(sisa) + ' poin lagi untuk naik ke ' + lv.next.nama + '.'
          : 'Kamu sudah di level tertinggi.') + '</p>' +
        '<div class="stat-grid">' +
          '<div><strong>' + fmt(me.thread) + '</strong><span>Thread</span></div>' +
          '<div><strong>' + fmt(me.komentar) + '</strong><span>Komentar</span></div>' +
          '<div><strong>' + fmt(me.upvote) + '</strong><span>Upvote</span></div>' +
        '</div>' +
      '</div>';
  }

  function renderInfo() {
    document.getElementById('rules').innerHTML = RULES.map((r) =>
      '<li><span>' + r[0] + '</span><span class="' + (r[1] > 0 ? 'plus' : 'minus') + '">' + (r[1] > 0 ? '+' : '') + r[1] + '</span></li>'
    ).join('');
    document.getElementById('levels').innerHTML = LEVELS.map((l, i) =>
      '<li><span class="level level--' + i + '">' + l.nama + '</span><span>' + fmt(l.min) + '+ poin</span></li>'
    ).join('');
  }

  function render() {
    const data = ranked();
    renderTabs();
    renderPodium(data);
    renderTable(data);
    renderMe(data);
  }

  $tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-period]');
    if (!btn) return;
    period = btn.dataset.period;
    render();
  });

  $search.addEventListener('input', () => {
    query = $search.value;
    render();
  });

  renderInfo();
  render();
})();
