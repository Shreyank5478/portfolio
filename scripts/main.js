// Scroll progress trace — fills the left-edge bar as the page is scrolled
(function () {
  const fill = document.getElementById('trace-fill');
  if (!fill) return;

  function updateTrace() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    fill.style.height = pct + '%';
  }

  window.addEventListener('scroll', updateTrace, { passive: true });
  window.addEventListener('resize', updateTrace);
  updateTrace();
})();
