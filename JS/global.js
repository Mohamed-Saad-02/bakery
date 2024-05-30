// Header Section mobile
const nav = document.querySelector("nav");
const bar = document.querySelector(".icon i");

bar.addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    nav.classList =
      "active absolute left-0 top-[56px] h-[365px] w-full overflow-hidden border-t bg-white opacity-100 transition-all lg:flex lg:w-fit lg:overflow-auto lg:border-none lg:opacity-100";
    bar.className = "fa-solid fa-xmark cursor-pointer text-xl";
  } else {
    nav.className =
      "w-0 overflow-hidden opacity-0 transition-all lg:flex lg:w-fit lg:overflow-auto lg:opacity-100 h-0 lg:h-fit";
    bar.className = "fa-solid fa-bars cursor-pointer text-xl";
  }
});

// Scroll top
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 200) {
    scrollTop.classList.remove("opacity-0");
    scrollTop.classList.add("opacity-50");
  } else {
    scrollTop.classList.remove("opacity-50");
    scrollTop.classList.add("opacity-0");
  }
});

// Scroll to Top
scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Setting

const setting = document.querySelector(".setting");
const iconGear = document.querySelector(".setting .icon i");

iconGear.addEventListener("click", () => {
  if (!setting.classList.contains("active")) {
    setting.classList.remove("translate-x-72");
    setting.classList.add("active", "translate-x-0");
    iconGear.classList = "fa-solid fa-xmark cursor-pointer px-2 py-2";
  } else {
    setting.classList.remove("active", "translate-x-0");
    setting.classList.add("translate-x-72");
    iconGear.classList = "fa-solid fa-gear cursor-pointer px-2 py-2";
  }
});

// Switch colors
const colors = document.querySelectorAll(".colors .colors-list li");

colors.forEach((el) => {
  el.addEventListener("click", (e) => {
    colors.forEach((el) => {
      el.classList.remove("opacity-100", "border-2");
      el.classList.add("opacity-50");
    });

    e.target.classList.remove("opacity-50");
    e.target.classList.add("border-2", "opacity-100");

    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color,
    );
  });
});
