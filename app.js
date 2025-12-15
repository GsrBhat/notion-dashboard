document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  const today = new Date();
  const todayString = today.toDateString();
  const lastDate = localStorage.getItem("lastDate");

  // DAILY RESET
  if (lastDate !== todayString) {
    checkboxes.forEach((checkbox) => {
      localStorage.setItem(checkbox.id, false);
      checkbox.checked = false;
    });
    localStorage.setItem("lastDate", todayString);
  }

  // RESTORE CHECKBOX STATE
  checkboxes.forEach((checkbox) => {
    if (localStorage.getItem(checkbox.id) === "true") {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(checkbox.id, checkbox.checked);
    });
  });

  // SHOW TODAY'S DATE (FIXED)
  const dateBanner = document.createElement("div");
  dateBanner.textContent = "📅 Today: " + todayString;
  dateBanner.style.fontWeight = "600";
  dateBanner.style.margin = "15px 0";

  const title = document.querySelector("h1");
  title.insertAdjacentElement("afterend", dateBanner);
});
