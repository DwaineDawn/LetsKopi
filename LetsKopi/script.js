const navbarLinks = document.querySelectorAll(".nav-menu .nav-item");
const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-button");
const navMenu = document.querySelector(".nav-menu");

openMenuButton.addEventListener('click', () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle('show-mobile-menu');
});

navbarLinks.forEach(link => {
  // Close menu when a link is clicked
  link.addEventListener("click", () => {
    document.body.classList.remove('show-mobile-menu');
  });
});

// Close menu when the close button is clicked
closeMenuButton.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-menu');
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (document.body.classList.contains('show-mobile-menu') && !navMenu.contains(e.target) && e.target !== openMenuButton) {
    document.body.classList.remove('show-mobile-menu');
  }
});

/* Swiper JS */
let swiper = new Swiper('.slide-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  }
});