new Glide(".glide", {
  autoplay: 4000,
}).mount();

new Glide(".glide-2", {
  bound: true,
  perView: 4,
  breakpoints: {
    767: { perView: 2 },
    1199: { perView: 3 },
  },
}).mount();

new Glide(".commercial-appeals", {
  bound: true,
  perView: 3,
  dragThreshold: false,
  swipeThreshold: false,
  breakpoints: {
    519: {
      dragThreshold: true,
      swipeThreshold: true,
      perView: 1,
    },
    1023: {
      dragThreshold: true,
      swipeThreshold: true,
      perView: 2,
    },
  },
}).mount();
