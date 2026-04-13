// Section progress — progressive enhancement
// Without this script the progress bar stays hidden and the page outline
// serves as navigation. With this script a sticky bar appears showing
// reading position via IntersectionObserver scroll spy.

(function () {
  var bar = document.querySelector('.section-progress');
  if (!bar || !('IntersectionObserver' in window)) return;

  var steps = bar.querySelectorAll('.section-progress-step');
  var titleEl = bar.querySelector('.section-progress-title');
  var sections = [];

  steps.forEach(function (step) {
    var id = step.getAttribute('data-section');
    var el = document.getElementById(id);
    if (el) {
      sections.push({
        id: id,
        el: el,
        step: step,
        title: step.getAttribute('aria-label')
      });
    }
  });

  if (sections.length === 0) return;

  function setActive(id) {
    for (var i = 0; i < sections.length; i++) {
      var sec = sections[i];
      if (sec.id === id) {
        sec.step.classList.add('is-active');
        if (titleEl) titleEl.textContent = sec.title;
      } else {
        sec.step.classList.remove('is-active');
      }
    }
  }

  // Reveal the bar and set initial state
  bar.removeAttribute('hidden');
  setActive(sections[0].id);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, {
    rootMargin: '-10% 0px -70% 0px'
  });

  sections.forEach(function (sec) {
    observer.observe(sec.el);
  });
})();
