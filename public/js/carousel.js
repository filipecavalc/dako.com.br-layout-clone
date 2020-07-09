new Glide(".glide", {
  autoplay: 4000,
}).mount();

new Glide(".glide-product-section", {
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

new Glide(".glide-banners-mobile", {
  autoplay: 4000,
}).mount();


new Glide(".glide-blog", {
  bound: true,
  perView: 2,
  breakpoints: {
    767: { perView: 1 }
  },
  peek: {
    before: 45,
    after: 10
  }
}).mount();