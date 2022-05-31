// change navbar sstyles on scroll

// window.addEventListener("scroll", () => {
//   const nav = document.querySelector("nav");
//   if (scrollY >= 80) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// });

// show/hide faq answer

/* const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //cahnge icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
}); */

/* open nav menu */

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

/* close nav menu */

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}; 

closeBtn.addEventListener('click', closeNav)

