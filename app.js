const checkboxes = document.querySelectorAll("input[type=checkbox]");

checkboxes.forEach((box, index) => {
  box.checked = localStorage.getItem(index) === "true";

  box.addEventListener("change", () => {
    localStorage.setItem(index, box.checked);
  });
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
