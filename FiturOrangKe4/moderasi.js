/* =========================================================
   fitur Panel Moderasi & Report
   - Antrean laporan dengan filter status, alasan, pencarian
   - Detail laporan + tindakan: abaikan, hapus konten,
     beri peringatan, blokir pengguna (dengan konfirmasi)
   - Log aktivitas moderator
   - Form lapor dari sisi anggota (simulasi laporan baru)
   State disimpan di localStorage (tanpa database)
   ========================================================= */
(function () {
  const ALASAN = ['Spam', 'Hoaks', 'Pelecehan', 'SARA', 'Konten dewasa', 'Lainnya'];
  const KEY_REPORTS = 'forum_reports';
  const KEY_LOG = 'forum_modlog';
  const STATUS_LABEL = { pending: 'Perlu ditinjau', ditindak: 'Ditindak', diabaikan: 'Diabaikan' };
  const STATUS_CHIP = { pending: 'warn', ditindak: 'ok', diabaikan: 'muted' };

  const $ = (sel) => document.querySelector(sel);

  /* State */
  function seed() {
    return DUMMY_REPORTS.map((r) => Object.assign({}, r, { ts: Date.now() - r.menit * 60000 }));
  }
  let reports = Store.get(KEY_REPORTS, null) || seed();
  let log = Store.get(KEY_LOG, []);
  let selectedId = null;
  const filters = { status: 'pending', alasan: 'semua', q: '' };

  function save() {
    Store.set(KEY_REPORTS, reports);
    Store.set(KEY_LOG, log);
  }

  /* Prioritas dihitung dari jumlah pelapor & jenis pelanggaran */
  function prioritas(r) {
    if (r.alasan === 'SARA' || r.alasan === 'Konten dewasa' || r.jumlah >= 5) return 'tinggi';
    if (r.jumlah >= 3) return 'sedang';
    return 'rendah';
  }
  const BOBOT = { tinggi: 3, sedang: 2, rendah: 1 };

  /* Statistik */
  function renderStats() {
    const pending = reports.filter((r) => r.status === 'pending');
    const urgent = pending.filter((r) => prioritas(r) === 'tinggi').length;
    const kartu = [
      { n: pending.length, l: 'Perlu ditinjau', cls: '' },
      { n: urgent, l: 'Prioritas tinggi', cls: urgent ? ' stat-card--alert' : '' },
      { n: reports.filter((r) => r.status === 'ditindak').length, l: 'Sudah ditindak', cls: '' },
      { n: reports.filter((r) => r.status === 'diabaikan').length, l: 'Diabaikan', cls: '' }
    ];
    $('#stats').innerHTML = kartu.map((k) =>
      '<div class="stat-card' + k.cls + '"><strong>' + k.n + '</strong><span>' + k.l + '</span></div>'
    ).join('');
  }

  /* Antrian */
  function terfilter() {
    const q = filters.q.trim().toLowerCase();
    return reports
      .filter((r) => filters.status === 'semua' || r.status === filters.status)
      .filter((r) => filters.alasan === 'semua' || r.alasan === filters.alasan)
      .filter((r) => !q || r.id.toLowerCase().includes(q) || r.terlapor.toLowerCase().includes(q) || r.pelapor.toLowerCase().includes(q))
      .sort((a, b) => {
        if ((a.status === 'pending') !== (b.status === 'pending')) return a.status === 'pending' ? -1 : 1;
        const p = BOBOT[prioritas(b)] - BOBOT[prioritas(a)];
        return p !== 0 ? p : b.ts - a.ts;
      });
  }

  function renderQueue() {
    const rows = terfilter();
    if (rows.length === 0) {
      $('#queue').innerHTML = '<li class="empty"><strong>Tidak ada laporan</strong>' +
        (filters.status === 'pending' ? 'Semua laporan sudah ditinjau. Kerja bagus!' : 'Coba ubah filter atau kata kunci pencarian.') + '</li>';
      return;
    }
    $('#queue').innerHTML = rows.map((r) => {
      const p = prioritas(r);
      return (
        '<li><button type="button" class="rp-row" data-id="' + r.id + '"' + (r.id === selectedId ? ' aria-current="true"' : '') + '>' +
          '<span class="rp-row__title"><span class="prio prio--' + p + '" title="Prioritas ' + p + '"></span>' +
            esc(r.tipe) + ' &middot; @' + esc(r.terlapor) + ' <span class="chip chip--muted">' + esc(r.alasan) + '</span></span>' +
          '<span class="rp-row__side"><span>' + timeAgo(r.ts) + '</span></span>' +
          '<span class="rp-row__sub">' + esc(r.id) + ' &middot; ' + r.jumlah + ' pelapor</span>' +
          '<span class="rp-row__side"><span class="chip chip--' + STATUS_CHIP[r.status] + '">' + STATUS_LABEL[r.status] + '</span></span>' +
        '</button></li>'
      );
    }).join('');
  }

  /* Detail */
  function renderDetail() {
    const r = reports.find((x) => x.id === selectedId);
    const $d = $('#detail');
    if (!r) {
      $d.innerHTML = '<div class="empty"><strong>Belum ada laporan dipilih</strong>Pilih laporan di daftar untuk melihat isi dan tindakannya.</div>';
      return;
    }
    const p = prioritas(r);
    const hasil = r.status === 'pending' ? '' :
      '<div class="result-box' + (r.status === 'diabaikan' ? ' result-box--muted' : '') + '"><strong>' + esc(r.hasil || STATUS_LABEL[r.status]) + '</strong>' +
      (r.catatan ? '<br>Catatan: ' + esc(r.catatan) : '') + '</div>';
    const aksi = r.status === 'pending'
      ? '<div class="field"><label for="catatan">Catatan moderator (opsional)</label>' +
          '<textarea id="catatan" placeholder="Tulis alasan keputusanmu"></textarea></div>' +
        '<div class="action-grid">' +
          '<button class="btn" type="button" data-act="abaikan">Abaikan laporan</button>' +
          '<button class="btn" type="button" data-act="peringatan">Beri peringatan</button>' +
          '<button class="btn" type="button" data-act="hapus">Hapus konten</button>' +
          '<button class="btn btn--danger" type="button" data-act="blokir">Blokir pengguna</button>' +
        '</div>'
      : '<button class="btn" type="button" data-act="buka">Buka kembali laporan</button>';

    $d.innerHTML =
      '<div class="panel__head"><h2>' + esc(r.id) + '</h2>' +
        '<span class="chip chip--' + STATUS_CHIP[r.status] + '">' + STATUS_LABEL[r.status] + '</span></div>' +
      '<div class="panel__body">' +
        '<div class="detail__chips">' +
          '<span class="chip chip--muted">' + esc(r.tipe) + '</span>' +
          '<span class="chip chip--danger">' + esc(r.alasan) + '</span>' +
          '<span class="chip chip--' + (p === 'tinggi' ? 'danger' : p === 'sedang' ? 'warn' : 'muted') + '">Prioritas ' + p + '</span>' +
        '</div>' +
        '<p class="handle" style="margin-top:8px">' + esc(r.lokasi) + '</p>' +
        '<blockquote class="detail__quote" style="margin-left:0;margin-right:0">' + esc(r.konten) + '</blockquote>' +
        '<dl class="detail__meta">' +
          '<div><dt>Dilaporkan</dt><dd>@' + esc(r.terlapor) + '</dd></div>' +
          '<div><dt>Pelapor pertama</dt><dd>@' + esc(r.pelapor) + '</dd></div>' +
          '<div><dt>Jumlah pelapor</dt><dd>' + r.jumlah + ' orang</dd></div>' +
          '<div><dt>Waktu laporan</dt><dd>' + timeAgo(r.ts) + '</dd></div>' +
        '</dl>' +
        hasil + aksi +
      '</div>';
  }

  /* Log */
  function renderLog() {
    if (log.length === 0) {
      $('#log').innerHTML = '<li><span>Belum ada aktivitas. Tindakan yang kamu ambil akan muncul di sini.</span></li>';
      return;
    }
    $('#log').innerHTML = log.slice(0, 8).map((l) =>
      '<li><span>' + esc(l.teks) + '</span><time>' + timeAgo(l.ts) + '</time></li>'
    ).join('');
  }

  function renderAll() {
    renderStats();
    renderQueue();
    renderDetail();
    renderLog();
  }

  /* Dialog konfirmasi */
  function konfirmasi(opsi) {
    const d = $('#confirm-dialog');
    $('#confirm-title').textContent = opsi.judul;
    $('#confirm-msg').textContent = opsi.pesan;
    const ok = $('#confirm-ok');
    ok.textContent = opsi.tombol;
    ok.className = 'btn ' + (opsi.bahaya ? 'btn--danger' : 'btn--primary');
    return new Promise((resolve) => {
      d.returnValue = '';
      d.addEventListener('close', () => resolve(d.returnValue === 'ok'), { once: true });
      d.showModal();
    });
  }

  /* Tindakan */
  async function lakukan(kind) {
    const r = reports.find((x) => x.id === selectedId);
    if (!r) return;

    if (kind === 'buka') {
      r.status = 'pending';
      delete r.hasil; delete r.catatan;
      log.unshift({ teks: r.id + ' dibuka kembali', ts: Date.now() });
      save(); renderAll();
      toast('Laporan dibuka kembali');
      return;
    }

    const catatanEl = $('#catatan');
    const catatan = catatanEl ? catatanEl.value.trim() : '';
    const AKSI = {
      abaikan:    { status: 'diabaikan', hasil: 'Laporan diabaikan',                    toast: 'Laporan diabaikan' },
      peringatan: { status: 'ditindak',  hasil: 'Peringatan dikirim ke @' + r.terlapor, toast: 'Peringatan terkirim' },
      hapus:      { status: 'ditindak',  hasil: 'Konten dihapus',                       toast: 'Konten dihapus' },
      blokir:     { status: 'ditindak',  hasil: '@' + r.terlapor + ' diblokir',         toast: 'Pengguna diblokir' }
    };
    const aksi = AKSI[kind];

    if (kind === 'hapus' || kind === 'blokir') {
      const ya = await konfirmasi(kind === 'hapus'
        ? { judul: 'Hapus konten ini?', pesan: 'Konten akan disembunyikan dari forum dan pemiliknya menerima pemberitahuan.', tombol: 'Hapus konten', bahaya: true }
        : { judul: 'Blokir @' + r.terlapor + '?', pesan: 'Pengguna tidak akan bisa login atau berpartisipasi sampai blokir dicabut.', tombol: 'Blokir pengguna', bahaya: true });
      if (!ya) return;
    }

    r.status = aksi.status;
    r.hasil = aksi.hasil;
    r.catatan = catatan;
    log.unshift({ teks: r.id + ': ' + aksi.hasil, ts: Date.now() });
    save(); renderAll();
    toast(aksi.toast);
  }

  /* Form lapor */
  const $form = $('#report-form');

  function setError(fieldId, pesan) {
    const f = $('#' + fieldId);
    f.classList.toggle('has-error', !!pesan);
    const el = f.querySelector('.field__error');
    if (el) el.textContent = pesan || '';
  }

  function bukaFormLapor() {
    $form.reset();
    ['fld-lokasi', 'fld-terlapor', 'fld-ket'].forEach((id) => setError(id, ''));
    $('#report-dialog').showModal();
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lokasi = $('#r-lokasi').value.trim();
    const terlapor = $('#r-terlapor').value.trim().replace(/^@/, '');
    const ket = $('#r-ket').value.trim();
    let valid = true;

    setError('fld-lokasi', lokasi ? '' : 'Isi judul thread atau tautan yang dilaporkan.');
    setError('fld-terlapor', terlapor ? '' : 'Isi username pengguna yang dilaporkan.');
    setError('fld-ket', ket.length >= 10 ? '' : 'Jelaskan minimal 10 karakter agar moderator paham masalahnya.');
    if (!lokasi || !terlapor || ket.length < 10) valid = false;
    if (!valid) return;

    const nomor = reports.reduce((m, r) => Math.max(m, parseInt(r.id.split('-')[1], 10)), 1000) + 1;
    const baru = {
      id: 'RPT-' + nomor, tipe: $('#r-tipe').value, alasan: $('#r-alasan').value,
      pelapor: CURRENT_USER.username, terlapor: terlapor, lokasi: lokasi, konten: ket,
      jumlah: 1, ts: Date.now(), status: 'pending'
    };
    reports.unshift(baru);
    selectedId = baru.id;
    filters.status = 'pending'; filters.alasan = 'semua'; filters.q = '';
    $('#f-status').value = 'pending'; $('#f-alasan').value = 'semua'; $('#f-q').value = '';
    log.unshift({ teks: 'Laporan baru ' + baru.id + ' dari @' + CURRENT_USER.username, ts: Date.now() });
    save(); renderAll();
    $('#report-dialog').close();
    toast('Laporan terkirim');
  });

  $('#report-cancel').addEventListener('click', () => $('#report-dialog').close());
  $('#btn-new-report').addEventListener('click', bukaFormLapor);

  /* Event lain */
  $('#queue').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-id]');
    if (!btn) return;
    selectedId = btn.dataset.id;
    renderQueue();
    renderDetail();
  });

  $('#detail').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act]');
    if (btn) lakukan(btn.dataset.act);
  });

  $('#f-status').addEventListener('change', (e) => { filters.status = e.target.value; renderQueue(); });
  $('#f-alasan').addEventListener('change', (e) => { filters.alasan = e.target.value; renderQueue(); });
  $('#f-q').addEventListener('input', (e) => { filters.q = e.target.value; renderQueue(); });

  $('#btn-reset').addEventListener('click', () => {
    Store.remove(KEY_REPORTS); Store.remove(KEY_LOG);
    reports = seed(); log = []; selectedId = null;
    save(); renderAll();
    toast('Data dummy dikembalikan');
  });

  /* Inisialisasi */
  $('#f-alasan').innerHTML = '<option value="semua">Semua alasan</option>' +
    ALASAN.map((a) => '<option value="' + a + '">' + a + '</option>').join('');
  $('#r-alasan').innerHTML = ALASAN.map((a) => '<option value="' + a + '">' + a + '</option>').join('');

  renderAll();
})();
