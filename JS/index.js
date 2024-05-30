const header = document.querySelector("header");
const logo = document.querySelector("header .logo img");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    header.classList.remove("lg:shadow-none");
    header.classList.add("!bg-white", "shadow-xl");
    nav.classList.add("text-black");
    logo.src = "images/bakery-color.png";
  } else {
    header.classList.remove("!bg-white", "shadow-xl");
    header.classList.add("lg:shadow-none");
    nav.classList.remove("text-black");
    logo.src = "images/bakery-light-1.png";
  }
});

// scroll to section second
const second = document.querySelector(".scroll-second .second");
const sectionTwo = document.querySelector("section.who-we");

second.addEventListener("click", () => {
  sectionTwo.scrollIntoView();
});
