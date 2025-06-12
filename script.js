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
const images = document.querySelectorAll("img");
images.forEach((img) => {
  if (!img.hasAttribute("loading")) {
    img.setAttribute("loading", "lazy");
  }
});



  document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade-up");

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });

