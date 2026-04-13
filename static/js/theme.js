// Theme toggle — progressive enhancement
// Without this script, the site uses OS-level prefers-color-scheme detection.
// With this script, a toggle button appears allowing manual override.

(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  var states = ['auto', 'light', 'dark'];
  var labels = { auto: 'Auto', light: 'Light', dark: 'Dark' };
  var saved = localStorage.getItem('theme');
  var current = states.indexOf(saved) > -1 ? saved : 'auto';

  function apply(theme) {
    if (theme === 'auto') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    toggle.setAttribute('aria-label', 'Colour scheme: ' + labels[theme]);
    toggle.querySelector('.theme-toggle-label').textContent = labels[theme];
  }

  // Reveal the toggle (hidden by default for no-JS)
  toggle.removeAttribute('hidden');
  apply(current);

  toggle.addEventListener('click', function () {
    var next = states[(states.indexOf(current) + 1) % states.length];
    current = next;
    localStorage.setItem('theme', next);
    apply(next);
  });
})();

// Nav menu — close on link click (mobile)
(function () {
  var toggle = document.getElementById('nav-toggle');
  if (!toggle) return;
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      toggle.checked = false;
    });
  }
})();
