const today = new Date().toDateString();
document.getElementById("todayDate").innerText = today;

// ---- DAILY RESET LOGIC ----
const savedDate = localStorage.getItem("lastDate");
if (savedDate !== today) {
  localStorage.clear();
  localStorage.setItem("lastDate", today);
}

// ---- CHECKBOX STORAGE ----
document.querySelectorAll("input[type='checkbox']").forEach((cb) => {
  const key = `${today}-${cb.dataset.key}`;
  cb.checked = localStorage.getItem(key) === "true";

  cb.addEventListener("change", () => {
    localStorage.setItem(key, cb.checked);
  });
});

// ---- THEME TOGGLE ----
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme") || "dark";
document.body.className = currentTheme;

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.className === "dark" ? "light" : "dark";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme);
});
