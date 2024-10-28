document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.main-swiper', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.icon-arrow-right',
        prevEl: '.icon-arrow-left',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  
    swiper.on('slideChange', function () {
      const activeSlide = document.querySelector('.swiper-slide-active');
      const newDescription = activeSlide.getAttribute('data-description');
      document.getElementById('goku-description').textContent = newDescription;
    });
  });
  