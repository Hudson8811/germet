jQuery(document).ready(function( $ ) {



  $('.burger').click(function () {
    $(this).toggleClass('burger-open');
    $('body').toggleClass("body-open");
    $('.germetic-land__top__col').toggleClass("open");    
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

