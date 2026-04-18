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
