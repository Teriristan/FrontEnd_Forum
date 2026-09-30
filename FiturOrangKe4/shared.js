/* =========================================================
   helper yang dipakai ketiga fitur
   - Store      : simpan state di localStorage (pengganti database)
   - NotifStore : data notifikasi + hitungan belum dibaca
   - esc, fmt, timeAgo, avatarHTML, toast
   - renderHeader : header sederhana (GANTI dengan header
                    kelompok kalau sudah ada)
   ========================================================= */

const Store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* abaikan */ }
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch (e) { /* abaikan */ }
  }
};

/* Escape HTML agar teks dari data aman dimasukkan ke innerHTML */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

/* Format angka gaya Indonesia: 48210 -> 48.210 */
const fmt = (n) => Number(n).toLocaleString('id-ID');

function timeAgo(ts) {
  const menit = Math.floor((Date.now() - ts) / 60000);
  if (menit < 1) return 'baru saja';
  if (menit < 60) return menit + ' menit lalu';
  const jam = Math.floor(menit / 60);
  if (jam < 24) return jam + ' jam lalu';
  const hari = Math.floor(jam / 24);
  return hari + ' hari lalu';
}

/* Avatar inisial dengan warna konsisten per nama */
const AVATAR_COLORS = ['#0E4D64', '#7A3E65', '#8A5A12', '#2A7548', '#2B66A8', '#8F3B2E', '#54507F'];
function avatarHTML(nama, size) {
  let h = 0;
  for (const ch of nama) h = (h * 31 + ch.charCodeAt(0)) % AVATAR_COLORS.length;
  const inisial = nama.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  return '<span class="avatar avatar--' + (size || 'md') + '" style="background:' +
    AVATAR_COLORS[h] + '" aria-hidden="true">' + esc(inisial) + '</span>';
}

/* Toast kecil di pojok bawah */
let toastTimer;
function toast(pesan) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = pesan;
  el.classList.add('is-show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-show'), 2400);
}

/* Data notifikasi (dipakai halaman notifikasi & lonceng header) */
const NotifStore = {
  KEY: 'forum_notifs',
  load() {
    let list = Store.get(this.KEY, null);
    if (!list) {
      list = DUMMY_NOTIFS.map((n) => Object.assign({}, n, { ts: Date.now() - n.menit * 60000 }));
      this.save(list);
    }
    return list;
  },
  save(list) { Store.set(this.KEY, list); },
  reset() { Store.remove(this.KEY); return this.load(); },
  unread() { return this.load().filter((n) => !n.read).length; }
};

/* Header */
const NAV_ITEMS = [
  { key: 'beranda',     label: 'Beranda',     href: '#' },
  { key: 'notifikasi',  label: 'Notifikasi',  href: 'notifikasi.html' },
  { key: 'leaderboard', label: 'Leaderboard', href: 'leaderboard.html' },
  { key: 'moderasi',    label: 'Moderasi',    href: 'moderasi.html' }
];

function renderHeader(active) {
  const host = document.getElementById('site-header');
  if (!host) return;
  const links = NAV_ITEMS.map((n) =>
    '<a href="' + n.href + '"' + (n.key === active ? ' aria-current="page"' : '') + '>' + n.label + '</a>'
  ).join('');
  host.className = 'site-header';
  host.innerHTML =
    '<div class="site-header__inner">' +
      '<a class="site-header__logo" href="#">Forumku</a>' +
      '<nav class="site-header__nav" aria-label="Navigasi utama">' + links + '</nav>' +
      '<a class="bell" href="notifikasi.html" aria-label="Notifikasi">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>' +
        '<span class="bell__badge" id="bell-badge" hidden></span>' +
      '</a>' +
      avatarHTML(CURRENT_USER.nama, 'sm') +
    '</div>';
  updateBell();
}

function updateBell() {
  const badge = document.getElementById('bell-badge');
  if (!badge) return;
  const n = NotifStore.unread();
  badge.hidden = n === 0;
  badge.textContent = n > 9 ? '9+' : n;
}

document.addEventListener('DOMContentLoaded', () => {
  const host = document.getElementById('site-header');
  if (host) renderHeader(host.dataset.active);
});
