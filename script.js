const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const nav = document.querySelector(".mobile-nav");
hamburger.addEventListener("click", () => {
  nav.style.transform = "translateY(0%)";
  cross.style.display = "block";
  hamburger.style.display = "none ";
});
cross.addEventListener("click", () => {
  nav.style.transform = "translateY(-150%)";
  cross.style.display = "none";
  hamburger.style.display = "block";
});
