jQuery(document).ready(function( $ ) {
  var iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  var clobj = "click";
  if(iOS != null) clobj = "touchstart";

  $("body").on(clobj, '[href*="#"]', function(e){
    var fixed_offset = 77;
    if ($(window).width() >= 1200) {
      fixed_offset = 44;
    }
    var target_offset = $(this.hash).offset().top;
    if (this.hash === 'main') {
      target_offset = 0;
      fixed_offset = 0;
    }
    $('html,body').stop().animate({ scrollTop: target_offset - fixed_offset }, 1000);
    e.preventDefault();
  });

  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.germetic-land__top__col').toggleClass("open");    
  });

  $('[data-js=burgerClose]').click(function () {
    $('.burger').removeClass('burger-open');
    $('body').removeClass("body-open");
    $('.germetic-land__top__col').removeClass("open");
  });

  $('.germetic-land-product__sl').slick({
    infinite: true,    
    slidesToShow: 3,
    speed: 200,
    slidesToScroll: 1,
    autoplay: false,
    touchThreshold: 10,
    autoplaySpeed: 4000,
    cssEase: 'ease-out',
    dots: false,    
    responsive: [

      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      },

    ]
  });


  $('.germetic-land-product__slide').on('click', function () {
    let index = $(this).data('control');
    $('.germetic-land-product__slide').removeClass('active');
    $(this).addClass('active');
    // Активный слайд
    

    // Первый список
    $('.germetic-land-product__content > li')
    .removeClass('active')
    .eq(index)
    .addClass('active');

    // Второй список
    $('.germetic-land-product__lg > li')
    .removeClass('active')
    .eq(index)
    .addClass('active');
  });



  var $topBlock = $('.germetic-land__top');
    var offset = 20; // отступ от верха в пикселях
    
    // Функция для проверки позиции скролла
    function checkScroll() {
      var scrollTop = $(window).scrollTop();

      if (scrollTop > offset) {
        $topBlock.addClass('fixed');
      } else {
        $topBlock.removeClass('fixed');
      }
    }
    
    // Проверяем при загрузке страницы
    checkScroll();
    
    // Проверяем при скролле
    $(window).on('scroll', function() {
      checkScroll();
    });


}); //ready

$(document).ready(function () {
  AOS.init();

  const accordions = document.querySelectorAll(".accordion");

  const openAccordion = (accordion) => {
    let headerHeight = 0;
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.add("accordion__active");
    var accordionActiveHeaight = $(".accordion__active .accordion__content").height();
    if (typeof (accordionActiveHeaight) === "undefined") {
      accordionActiveHeaight = 0;
    }
    content.style.maxHeight = content.scrollHeight + "px";
    $('html, body').stop().animate({ scrollTop: $(accordion).offset().top - accordionActiveHeaight - headerHeight }, 300);
  };

  const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion__content");
    accordion.classList.remove("accordion__active");
    content.style.maxHeight = null;
  };

  accordions.forEach((accordion) => {
    const intro = accordion.querySelector(".accordion__intro");
    const content = accordion.querySelector(".accordion__content");

    intro.onclick = () => {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
        $(accordions).not($(accordion)).each(function () {
          closeAccordion($(this)[0]);
        });
      }
    };
  });
});
