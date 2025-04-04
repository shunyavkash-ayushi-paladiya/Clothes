if (document.querySelector(".product-img-slider")) {
    var main = new Splide(".product-img-slider", {
        type: "fade",
        perPage: 1,
        perMove: 1,
        arrows: false,
        autoplay:true, 
        autoScroll:{
          speed:0.1,
        },
        autoWidth:"100%",
    });

    var thumbnails = new Splide(".product-images-thumbnail-slider", {
        direction: "ttb",
        height: "100%",
        gap: 12,
        focus: "center",
        autoplay:true, 
        autoScroll:{
          speed:0.1,
        },
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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });