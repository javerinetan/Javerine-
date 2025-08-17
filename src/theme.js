export function preferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  localStorage.setItem('theme', theme);
  // Optional: keep browser chrome in sync (Android address bar etc.)
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f7fb' : '#0e0b16');
}

export function initTheme() {
  applyTheme(preferredTheme());
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute('data-bs-theme') || preferredTheme();
  applyTheme(current === 'light' ? 'dark' : 'light');
}