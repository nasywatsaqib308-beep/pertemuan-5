document.addEventListener("DOMContentLoaded", function () {
  const tombolBuka = document.getElementById("buka-modal");
  const tombolTutup = document.getElementById("tutup-modal");
  const overlay = document.getElementById("overlay");

  tombolBuka.addEventListener("click", function () {
    overlay.classList.add("open");
  });

  tombolTutup.addEventListener("click", function () {
    overlay.classList.remove("open");
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.classList.remove("open");
    }
  });
});