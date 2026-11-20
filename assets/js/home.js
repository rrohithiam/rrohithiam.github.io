(function () {
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    if (meta) meta.setAttribute("content", t === "dark" ? "#121212" : "#ffffff");
  }
  applyTheme(root.getAttribute("data-theme") || "light");

  // Theme toggle (stored under the same "theme" key the old site used).
  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Follow the system setting until the visitor picks a theme themselves.
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  var onSystemChange = function (e) {
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (err) {}
    if (saved !== "dark" && saved !== "light") applyTheme(e.matches ? "dark" : "light");
  };
  if (mq.addEventListener) mq.addEventListener("change", onSystemChange);
  else if (mq.addListener) mq.addListener(onSystemChange);

  // Highlight the tab of the section currently in view.
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tabs a[data-tab]"));
  var sections = tabs.map(function (a) { return document.getElementById(a.dataset.tab); });
  var ticking = false;

  function updateActive() {
    ticking = false;
    var current = 0;
    // A section counts as current once its top passes just below the sticky bar.
    var line = Math.min(window.innerHeight * 0.3, 160);
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].getBoundingClientRect().top <= line) current = i;
    }
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) current = sections.length - 1;
    tabs.forEach(function (a, i) {
      a.classList.toggle("active", i === current);
      if (i === current) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updateActive); }
  }, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();

  // BibTeX show/hide and copy.
  document.querySelectorAll(".bib-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = document.getElementById(btn.getAttribute("aria-controls"));
      if (!box) return;
      box.hidden = !box.hidden;
      btn.setAttribute("aria-expanded", String(!box.hidden));
    });
  });
  document.querySelectorAll(".bib-copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = btn.parentNode.querySelector("pre");
      if (!pre || !navigator.clipboard) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        btn.textContent = "copied";
        setTimeout(function () { btn.textContent = "copy"; }, 1500);
      });
    });
  });
})();
