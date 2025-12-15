document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem("lastDate");

  // Daily reset
  if (lastDate !== today) {
    checkboxes.forEach(cb => {
      localStorage.removeItem(cb.id);
      cb.checked = false;
    });
    localStorage.setItem("lastDate", today);
  }

  // Restore state
  checkboxes.forEach(cb => {
    cb.checked = localStorage.getItem(cb.id) === "true";
    cb.addEventListener("change", () => {
      localStorage.setItem(cb.id, cb.checked);
    });
  });

  // Date text
  document.getElementById("today-date").textContent =
    "📅 " + today;

  // Dark mode
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  // Service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
