const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const nav = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  nav.style.transform = "translateX(0%)";
  cross.style.display = "block";
  hamburger.style.display = "none ";
});
cross.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
  cross.style.display = "none";
  hamburger.style.display = "block";
});
