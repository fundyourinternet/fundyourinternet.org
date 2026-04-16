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

// Web Share API — progressive enhancement for share link
(function () {
  var shareLink = document.querySelector('.js-share');
  if (!shareLink || !navigator.share) return;
  shareLink.textContent = 'Share this idea';
  shareLink.addEventListener('click', function (e) {
    e.preventDefault();
    navigator.share({
      title: 'Fund Your Internet',
      text: 'Pick one thing you value online. Fund it today.',
      url: 'https://fundyourinternet.org'
    });
  });
})();
