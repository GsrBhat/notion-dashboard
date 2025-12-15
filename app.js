document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  const today = new Date().toDateString();
  const lastDate = localStorage.getItem("lastDate");

  // 🔁 Daily reset if date changed
  if (lastDate !== today) {
    checkboxes.forEach((checkbox) => {
      const key = checkbox.dataset.id;
      localStorage.setItem(key, false);
      checkbox.checked = false;
    });
    localStorage.setItem("lastDate", today);
  }

  // 🔄 Restore saved state
  checkboxes.forEach((checkbox) => {
    const key = checkbox.dataset.id;

    if (localStorage.getItem(key) === "true") {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(key, checkbox.checked);
    });
  });

  // 📅 Show today's date
  const dateBanner = document.getElementById("today-date");
  if (dateBanner) {
    dateBanner.textContent = "📅 Today: " + today;
  }

  // 🧩 Register Service Worker (PWA)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
});
