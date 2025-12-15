document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    const id = checkbox.id;

    if (localStorage.getItem(id) === "true") {
      checkbox.checked = true;
    }

    checkbox.addEventListener("change", () => {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});
