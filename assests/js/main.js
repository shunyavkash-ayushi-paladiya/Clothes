// document.addEventListener('DOMContentLoaded', function () {
//     var mainSlider = new Splide('#main-slider', {
//         type: 'fade',
//         heightRatio: 0.5,   
//         pagination: false,
//         arrows: true,
//         cover: true,
//     }).mount();
    








// var splide = new Splide( '.splide', {
//   direction: 'ttb',
//   height   : '10rem',
//   wheel    : true,
// } );

// splide.mount();
// });

// Product Slider------------------------------------------
if (document.querySelector(".product-img-slider")) {
    var main = new Splide(".product-img-slider", {
        type: "fade",
        perPage: 1,
        perMove: 1,
        arrows: false,
    });

    var thumbnails = new Splide(".product-images-thumbnail-slider", {
        direction: "ttb",
        height: "100%",
        gap: 12,
        // focus: "center",
        isNavigation: true,
        arrows: false,
        pagination: false,
        perMove: 1,
        perPage: 3,
        breakpoints: {
            639: {
                direction: "ltr",
                height: "auto",
                gap: 8,
            },
        },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}