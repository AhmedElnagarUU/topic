/**
 * Concept Lab — theme toggle (dark / light)
 */
(function () {
  const STORAGE_KEY = 'concept-lab-theme';

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    document.querySelectorAll('[data-theme-toggle]').forEach(updateToggle);
  }

  function updateToggle(btn) {
    const theme = getTheme();
    const icon = btn.querySelector('[data-theme-icon]');
    const label = btn.querySelector('[data-theme-label]');
    if (icon) icon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
    if (label) label.textContent = theme === 'light' ? 'Dark' : 'Light';
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  window.ConceptLabTheme = {
    get: getTheme,
    set(theme) {
      localStorage.setItem(STORAGE_KEY, theme);
      applyTheme(theme);
    },
    toggle() {
      window.ConceptLabTheme.set(getTheme() === 'dark' ? 'light' : 'dark');
    },
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => window.ConceptLabTheme.toggle());
    });
  });
})();
