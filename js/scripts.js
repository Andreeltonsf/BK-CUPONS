var slide_combos = new Swiper(".slide-combos", {
  slidesPerview: 3,
  width: 384,
  spaceBetween: 32,
  speed: 800,
  pagination: {
    el: ".s-combos .ctrl .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".s-combos .area-slide .next",
    prevEl: ".s-combos .area-slide .prev",
  },
});
