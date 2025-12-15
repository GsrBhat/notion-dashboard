document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem("lastDate");

  // 🔁 Daily reset
  if (lastDate !== today) {
    checkboxes.forEach(cb => {
      localStorage.removeItem(cb.id);
      cb.checked = false;
    });
    localStorage.setItem("lastDate", today);
  }

  // 🔄 Restore state
  checkboxes.forEach(cb => {
    cb.checked = localStorage.getItem(cb.id) === "true";

    cb.addEventListener("change", () => {
      localStorage.setItem(cb.id, cb.checked);
    });
  });

  // 📅 Show date
  document.getElementById("today-date").textContent =
    "📅 Today: " + today;

  // 🧩 Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
