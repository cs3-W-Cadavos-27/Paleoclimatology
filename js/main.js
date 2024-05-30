
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});


const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // /change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

const menu = document.querySelector("nav .nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});
