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

let mySwiperss = document.querySelectorAll(".shopping_swiper");
if(mySwiperss.length){
    var swiper = new Swiper('.shopping_swiper', {
        slidesPerView: 2.3,
        spaceBetween: 10,
        loop:true,
        breakpoints: {
            320: { 
                slidesPerView: 1,
            },
            375: { 
                slidesPerView: 1,
            },
            425: { 
                slidesPerView: 1,
            },
            575: { 
                slidesPerView: 2,
            },
            768: { 
                slidesPerView: 3,
            },
            1024: { 
                slidesPerView: 5,
            },
            1200: { 
                slidesPerView: 5,
            }
        },
});
}


