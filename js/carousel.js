new Glide('.glide', {
    autoplay: 4000
}).mount();

new Glide('.glide-2', {
    bound: true,
    perView: 4,
    breakpoints: {
        767: {perView: 2},
        1199: {perView: 3}
    }
}).mount();

new Glide('.commercial-appeals', {
    bound: true,
    perView: 3,
    dragThreshold: false,
    breakpoints: {
        519: {perView: 1},
        1023: {perView: 2},
    }
}).mount();