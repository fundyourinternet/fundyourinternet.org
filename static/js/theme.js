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
