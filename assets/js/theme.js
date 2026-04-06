(function () {
  var storageKey = "resume-theme";
  var root = document.documentElement;

  function getPreferredTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (e) {}

    if (saved === "dark" || saved === "light") {
      return saved;
    }

    return "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {}

    var label = document.querySelector("[data-theme-label]");
    if (label) {
      label.textContent = theme === "dark" ? "Day mode" : "Night mode";
    }

    // Force a repaint so browser compositing catches up immediately after a theme switch.
    window.requestAnimationFrame(function () {
      document.body.style.overflow = "hidden";
      void document.body.offsetHeight;
      document.body.style.overflow = "";
      window.dispatchEvent(new Event("resize"));
    });
  }

  function toggleTheme() {
    applyTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  }

  function downloadResume() {
    window.print();
  }

  applyTheme(getPreferredTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("[data-theme-toggle]");
    if (button) {
      button.addEventListener("click", toggleTheme);
    }
    var downloadButton = document.querySelector("[data-download-resume]");
    if (downloadButton) {
      downloadButton.addEventListener("click", downloadResume);
    }
    applyTheme(root.getAttribute("data-theme") || getPreferredTheme());
  });
})();
