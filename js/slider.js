$(document).ready(function(){


    var swiper = new Swiper(".mainslide1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },

    });
    var swiper = new Swiper(".contentSlide01", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".contentSlide02", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    $('#loginBtn').click(function(){
      $('#login').addClass('active')
    });
    $('#login button').click(function(){
      $('#login').removeClass("active")
    });

  
});
