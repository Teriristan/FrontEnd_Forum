/* =========================================================
   fitur Notifikasi
   - Filter berdasarkan jenis / belum dibaca
   - Tandai dibaca (satu / semua), hapus, hapus yang sudah dibaca
   - Simulasi notifikasi baru
   State disimpan di localStorage lewat NotifStore (shared.js)
   ========================================================= */
(function () {
  const FILTERS = [
    { k: 'semua',    l: 'Semua' },
    { k: 'belum',    l: 'Belum dibaca' },
    { k: 'balasan',  l: 'Balasan' },
    { k: 'mention',  l: 'Mention' },
    { k: 'upvote',   l: 'Upvote' },
    { k: 'trending', l: 'Trending' },
    { k: 'sistem',   l: 'Sistem' }
  ];
  const TYPE_LABEL = { balasan: 'Balasan', mention: 'Mention', upvote: 'Upvote', trending: 'Trending', sistem: 'Sistem' };

  let list = NotifStore.load();
  let filter = 'semua';

  const $tabs = document.getElementById('notif-tabs');
  const $list = document.getElementById('notif-list');

  /* Teks notifikasi sesuai jenisnya.
     Saat digabung ke halaman thread, ganti <span class="notif__thread">
     dengan <a href="thread.html?id=...">. */
  function pesan(n) {
    const a = '<strong>' + esc(n.actor) + '</strong>';
    const t = '<span class="notif__thread">' + esc(n.thread || '') + '</span>';
    switch (n.type) {
      case 'balasan':  return a + ' membalas thread ' + t;
      case 'mention':  return a + ' menyebut kamu di ' + t;
      case 'upvote':   return a + ' memberi upvote pada thread ' + t;
      case 'trending': return 'Thread ' + t + ' sedang trending di <strong>#' + esc(n.tag) + '</strong>';
      default:         return esc(n.pesan);
    }
  }

  function avatarFor(n) {
    if (n.actor) return avatarHTML(n.actor, 'md');
    const simbol = n.type === 'trending' ? '#' : 'i';
    return '<span class="avatar avatar--md avatar--sys" aria-hidden="true">' + simbol + '</span>';
  }

  function cocok(n) {
    if (filter === 'semua') return true;
    if (filter === 'belum') return !n.read;
    return n.type === filter;
  }

  function hitung(k) {
    if (k === 'semua') return list.length;
    if (k === 'belum') return list.filter((n) => !n.read).length;
    return list.filter((n) => n.type === k).length;
  }

  function renderTabs() {
    $tabs.innerHTML = FILTERS.map((f) =>
      '<button type="button" class="tab" data-filter="' + f.k + '" aria-pressed="' + (f.k === filter) + '">' +
        f.l + '<span class="tab__count">' + hitung(f.k) + '</span></button>'
    ).join('');
  }

  function itemHTML(n) {
    return (
      '<li class="notif' + (n.read ? '' : ' is-unread') + '" data-id="' + n.id + '">' +
        avatarFor(n) +
        '<button type="button" class="notif__open" data-action="open">' +
          '<span class="notif__text">' + pesan(n) + '</span>' +
          (n.preview ? '<span class="notif__preview">' + esc(n.preview) + '</span>' : '') +
          '<span class="notif__meta">' +
            '<span class="chip chip--' + n.type + '">' + TYPE_LABEL[n.type] + '</span>' +
            '<time>' + timeAgo(n.ts) + '</time>' +
          '</span>' +
        '</button>' +
        '<div class="notif__actions">' +
          '<button type="button" class="btn btn--ghost btn--sm" data-action="toggle">' +
            (n.read ? 'Tandai belum dibaca' : 'Tandai dibaca') + '</button>' +
          '<button type="button" class="btn btn--ghost btn--sm" data-action="hapus" aria-label="Hapus notifikasi">Hapus</button>' +
        '</div>' +
      '</li>'
    );
  }

  function renderList() {
    const tampil = list.filter(cocok).sort((a, b) => b.ts - a.ts);
    if (tampil.length === 0) {
      const pesanKosong = filter === 'belum'
        ? 'Semua notifikasi sudah kamu baca.'
        : 'Belum ada notifikasi di kategori ini. Balas atau buat thread untuk mulai berinteraksi.';
      $list.innerHTML = '<div class="empty panel"><strong>Tidak ada notifikasi</strong>' + esc(pesanKosong) + '</div>';
      return;
    }
    const DAY = 24 * 60 * 60 * 1000;
    const hariIni = tampil.filter((n) => Date.now() - n.ts < DAY);
    const lama = tampil.filter((n) => Date.now() - n.ts >= DAY);
    let html = '';
    if (hariIni.length) html += '<h2 class="group-label">Hari ini</h2><ul class="notif-list">' + hariIni.map(itemHTML).join('') + '</ul>';
    if (lama.length) html += '<h2 class="group-label">Sebelumnya</h2><ul class="notif-list">' + lama.map(itemHTML).join('') + '</ul>';
    $list.innerHTML = html;
  }

  function render() {
    renderTabs();
    renderList();
    updateBell();
  }

  function simpan() {
    NotifStore.save(list);
    render();
  }

  /* ---------- Event ---------- */
  $tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    filter = btn.dataset.filter;
    render();
  });

  $list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    const li = e.target.closest('.notif');
    if (!btn || !li) return;
    const n = list.find((x) => x.id === Number(li.dataset.id));
    if (!n) return;

    if (btn.dataset.action === 'open') {
      n.read = true;
      simpan();
      toast('Membuka thread... (simulasi)');
    } else if (btn.dataset.action === 'toggle') {
      n.read = !n.read;
      simpan();
    } else if (btn.dataset.action === 'hapus') {
      list = list.filter((x) => x.id !== n.id);
      simpan();
      toast('Notifikasi dihapus');
    }
  });

  document.getElementById('btn-read-all').addEventListener('click', () => {
    if (!list.some((n) => !n.read)) { toast('Semua notifikasi sudah dibaca'); return; }
    list.forEach((n) => { n.read = true; });
    simpan();
    toast('Semua notifikasi ditandai dibaca');
  });

  document.getElementById('btn-clear-read').addEventListener('click', () => {
    const sebelum = list.length;
    list = list.filter((n) => !n.read);
    if (list.length === sebelum) { toast('Tidak ada notifikasi yang sudah dibaca'); return; }
    simpan();
    toast('Notifikasi yang sudah dibaca dihapus');
  });

  /* ---------- Alat demo ---------- */
  const CONTOH = [
    { type: 'balasan', actor: 'Kevin Tanoto', thread: 'Diskusi: React atau Vue untuk pemula?', preview: 'Kalau mau cepat dapat kerja, React lebih banyak lowongannya.' },
    { type: 'upvote',  actor: 'Lia Anggraini', thread: 'Tips belajar Flexbox dan Grid dari nol', preview: '' },
    { type: 'mention', actor: 'Nadia Putri', thread: 'Kenapa CSS Grid tidak menumpuk item?', preview: '@rinam boleh minta contoh kodenya?' },
    { type: 'sistem',  actor: '', pesan: 'Kamu mendapat +25 poin karena jawabanmu dipilih sebagai jawaban terbaik.' }
  ];

  document.getElementById('btn-sim').addEventListener('click', () => {
    const contoh = CONTOH[Math.floor(Math.random() * CONTOH.length)];
    const idBaru = list.reduce((m, n) => Math.max(m, n.id), 0) + 1;
    list.unshift(Object.assign({}, contoh, { id: idBaru, ts: Date.now(), read: false }));
    simpan();
    toast('Notifikasi baru masuk');
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    list = NotifStore.reset();
    filter = 'semua';
    render();
    toast('Data dummy dikembalikan');
  });

  render();
})();
