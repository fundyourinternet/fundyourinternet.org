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
  var card = document.querySelector('.action-card--share');
  if (!card) return;
  var label = card.querySelector('.copy-btn-label');
  if (label) label.hidden = false;
  card.style.cursor = 'pointer';
  card.addEventListener('click', function () {
    navigator.clipboard.writeText(card.dataset.url).then(function () {
      label.textContent = 'Copied';
      setTimeout(function () { label.textContent = 'Copy link'; }, 2000);
    });
  });
})();
