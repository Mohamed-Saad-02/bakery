// Gallery
const photos = document.querySelectorAll(".gallery-content .photo div");

const parent = document.createElement("div");
const child = document.createElement("div");
const img = document.createElement("img");

const closeIcon = document.createElement("i");

parent.className =
  "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:h-full before:w-full before:bg-black/75 w-full h-full z-30";

child.className =
  "z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-fit md:w-[700px] w-full px-10 md:p-0";

img.className = "w-full object-cover bg-cover rounded-lg z-50";

closeIcon.className =
  "fa-solid fa-xmark absolute -top-3 right-8 md:-right-2 text-[20px] z-50 bg-[#eee] rounded-full w-5 h-5 !flex items-center justify-center cursor-pointer";

photos.forEach((el) => {
  el.addEventListener("click", (e) => {
    const imgSrc = e.target.parentElement.firstElementChild.src;

    img.src = imgSrc;
    closeIcon.classList.add("absolute", "-top-3", "-right-2", "cursor-pointer");

    child.appendChild(img);
    child.appendChild(closeIcon);
    parent.appendChild(child);
    document.body.appendChild(parent);
  });
});

closeIcon.onclick = () => {
  parent.remove();
};
