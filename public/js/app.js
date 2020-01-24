(() => {
  ScrollReveal().reveal("nav", { duration: 3000 });
  ScrollReveal().reveal(".main", {
    easing: "ease-in",
    scale: 0.98
  });
})();

(() => {
  let navbar = document.querySelector("nav");
  let navbar_replacement = document.querySelector(".nav-replacement");
  window.addEventListener("scroll", e => {
    let navbarHeight = window.innerHeight / 10;
    if (this.scrollY > navbarHeight) {
      navbar.style.position = "fixed";
      navbar.style.backgroundColor = `white`;
      navbar.style.boxShadow = `0px 4px 25px rgba(0, 0, 0, 0.25)`;
      navbar_replacement.style.height = `${navbarHeight}px`;
    } else if (this.scrollY < navbarHeight / 10) {
      navbar.style.position = "relative";
      navbar.style.backgroundColor = `none`;
      navbar.style.boxShadow = `none`;
      navbar_replacement.style.height = `0px`;
    }
  });
})();
