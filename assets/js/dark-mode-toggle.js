(function () {
  var STORAGE_KEY = 'theme';
  var btn = document.getElementById('dark-mode-toggle');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateButton(theme);
  }

  function updateButton(theme) {
    if (!btn) return;
    btn.innerHTML = theme === 'dark' ? '&#9728;' : '&#9790;';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  // Restore saved preference (if any); default is light
  var saved = localStorage.getItem(STORAGE_KEY) || 'light';
  applyTheme(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }
})();
