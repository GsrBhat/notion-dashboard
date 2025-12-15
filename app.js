document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach((checkbox) => {
    const id = checkbox.id;

    // Restore saved state
    if (localStorage.getItem(id) === "true") {
      checkbox.checked = true;
    }

    // Save state on change
    checkbox.addEventListener("change", () => {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});

