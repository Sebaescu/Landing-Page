
const heroesSwiper = new Swiper('.heroes-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: { 
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: { 
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

const gallerySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: { 
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: { 
            slidesPerView: 3,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});
