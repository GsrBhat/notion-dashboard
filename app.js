document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const today = new Date().toDateString();
  const lastDate = localStorage.getItem("lastDate");

  // Reset if new day
  if (lastDate !== today) {
    checkboxes.forEach((checkbox) => {
      localStorage.setItem(checkbox.id, false);
      checkbox.checked = false;
    });
    localStorage.setItem("lastDate", today);
  }

  // Restore saved state
  checkboxes.forEach((checkbox) => {
    if (localStorage.getItem(checkbox.id) === "true") {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });

  // Show today's date
  const dateElement = document.createElement("p");
  dateElement.style.marginBottom = "20px";
  dateElement.style.fontWeight = "600";
  dateElement.textContent = "📅 Today: " + today;
  document.body.insertBefore(dateElement, document.body.children[1]);
});
