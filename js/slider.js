$(document).ready(function(){


    var swiper = new Swiper(".mainSlide1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },

    });
    var swiper = new Swiper(".contentSlide01 ", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.eduNext", 
        prevEl: ".swiper-button-prev.eduPrev",
      },
    });

    var swiper = new Swiper(".contentSlide02", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.storyNext ",
        prevEl: ".swiper-button-prev.storyPrev",
      },
    });

      // 로그인 버튼 
    $('.loginBtn').click(function(){
      $('.login').addClass('active')
    });
    $('.login button').click(function(){
      $('.login').removeClass("active")
    });

    // 
    $(document).on('scroll',function(){
      if($(window).scrollTop()){
        $('.scroll').addClass('active');
      }else{
        $('.scroll').removeClass('active');
      }

    });
    // $(document).scroll(function(){
    //   console.log($(window).scrollTop());
    //   $

    // })


});
