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

// Copy link — progressive enhancement
(function () {
  if (!navigator.clipboard) return;
  var btn = document.querySelector('.copy-btn');
  if (!btn) return;
  btn.hidden = false;
  btn.addEventListener('click', function () {
    var label = btn.querySelector('.copy-btn-label');
    navigator.clipboard.writeText(btn.dataset.url).then(function () {
      label.textContent = 'Copied';
      setTimeout(function () { label.textContent = 'Copy link'; }, 2000);
    });
  });
})();
