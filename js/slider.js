$(document).ready(function(){

  // 메인 상단 슬라이드
    var swiper = new Swiper(".mainSlide01", {
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

    // 메뉴 스크롤 했을 때 배경
    $(document).on('scroll',function(){
      if($(window).scrollTop()){
        $('.whiteBg ').addClass('active');
      }else{
        $('.whiteBg ').removeClass('active');
      }

    });


  
// 알아보기 드롭다운 case01
    // $('.dropTitle').click(function(){
    //   $(this).next().slideToggle(300);
    //   $('dropTitle').not(this).next().slideUP(300);

    // });

    // 드롭다운
    $('.dropTitle').click(function(){
      $(this).next(".dropInner").stop().slideToggle(300);
      $(this).toggleClass('active').siblings().removeClass('active');
      $(this).next('.dropInner').siblings('.dropInner').slideUp(300);
  });
    
  // page01  파트너 스와이프
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
  
    // page01 탭버튼 (협력기관 , 자문위원)case01
    // $(".partnerArea > li > button").click(function(){
    //   $(this).parent().addClass("active") 
    //     .siblings() 
    //     .removeClass("active")
    //   return false;
    // });


    // page01 탭버튼 (협력기관 , 자문위원)type2
    $('.tabMenu > li ').click(function(){
      $('.tabMenu > li ').removeClass('active')
      $(this).addClass('active')
      $('.tabInner > li').removeClass("active")
      $('.tabInner > li').eq($(this).index()).addClass('active')

    });

    //page02 AI & DATA 페이지  
    var swiper = new Swiper(".boxSlide", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.boxNext ",
        prevEl: ".swiper-button-prev.boxPrev",
      },

    });


    // 클로바 슬라이드 
    var swiper = new Swiper(".clovaSlide", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.clovaNext ",
        prevEl: ".swiper-button-prev.clovaPrev",
      },

    });
    // 네이버 랩스 슬라이드
    var swiper = new Swiper(".labsSlide", {
      slidesPerView: 'auto',
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next.labsNext ",
        prevEl: ".swiper-button-prev.labsPrev",
      },

    });
    // FAQ 
      $('.infoTab > li').click(function(){
        $('.infoTab > li').removeClass('active');
        $(this).addClass('active');
  
        $('.infoInner06 > li').removeClass('active');
        $('.infoInner06 > li').eq($(this).index()).addClass('active');
    });

    // page05 아카이브 탭 
    $(".clovaArea > li > button").click(function(){
      $(this).parent().addClass("active") 
        .siblings() 
        .removeClass("active")
      return false;
    });


    //width1200 nav메뉴 버튼
    $('.mobileNavMenu').click(function(){
      $('.mobileNavMenu').toggleClass('active')
 

      
    });
    if($('.mobileNavMenu').hasClass('active')){
      $(this).parents().css({"overflow" : "hidden"})
    }
    // if($('header > div > div').hasClass( "active" )){
    //   $(this).parents().css('overflow','hidden')
      
    // }
    
    
    // if($('.navMenu.active')){
    //   $(this).parent().css({"overflow":"hidden"})
    // };
    // var tagName = $('span').closest('div').prop('tagName');

  

   




  

  

});
