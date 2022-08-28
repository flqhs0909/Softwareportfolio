$(document).ready(function(){

  // 메인 상단 슬라이드
    var swiper = new Swiper(".mainSlide1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },

    });
    // 메인 교육영역 슬라이드 버튼
    var swiper = new Swiper(".contentSlide01 ", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.eduNext", 
        prevEl: ".swiper-button-prev.eduPrev",
      },
    });
    // 메인 뉴스&스토리 슬라이드 버튼
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

    // 메뉴 스크롤 했을 때 배경이미지 
    $(document).on('scroll',function(){
      if($(window).scrollTop()){
        $('.whiteBg').addClass('active');
      }else{
        $('.whiteBg').removeClass('active');
      }

    });


  
// 알아보기 드롭다운 
    // $('.dropTitle').click(function(){
    //   $(this).next().slideToggle(300);
    //   $('dropTitle').not(this).next().slideUP(300);

    // });

    // 드롭다운
    $('.dropTitle').click(function(){
      $(this).next(".dropInner").stop().slideToggle(300);
      $(this).toggleClass('acvive').siblings().removeClass('active');
      $(this).next('.dropInner').siblings('.dropInner').slideUp(300);
  });
    
  // 알아보기 파트너 
  var swiper = new Swiper(".partnerSlide", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next.partnerNext ",
      prevEl: ".swiper-button-prev.partnerPrev",
    },
  });
  var swiper = new Swiper(".adviceSlide", {
    slidesPerView: 'auto',
    spaceBetween: 60,
    navigation: {
      nextEl: ".swiper-button-next.adviceNext ",
      prevEl: ".swiper-button-prev.advicePrev",
    },
  });
    // learn페이지 탭버튼 (협력기관 , 자문위원)
    $(".partnerArea > li > button").click(function(){
      $(this).parent().addClass("active") 
        .siblings() 
        .removeClass("active")
      return false;
    });

    //AI & DATA 페이지  
    var swiper = new Swiper(".boxSlide", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.boxNext ",
        prevEl: ".swiper-button-prev.boxPrev",
      },

    });

});
