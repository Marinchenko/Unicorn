$(document).ready(function(){
  

  $('.js-featured__slider').bxSlider({
    hideControlOnEnd: true,
    minSlides: 1,
    maxSlides: 3,
    slideWidth: 360,
    // ШИРИНА    
    slideMargin: 40,
    // MARGIN справа
    pager: false,
    // DOOTS внизу
    infiniteLoop: false,
    // БЕСКОНЕЧНАЯ ПРОКРУТКА  
    nextText: '',
    prevText: '',
    nextSelector: '.featured__slider-next',
    prevSelector: '.featured__slider-prev'    
    // ARROW
  });



  $('.sl-clients').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 3,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });


  $(".slide-two").owlCarousel({
    items: 3,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      1280: {
        items: 3
      }
    }
  });


  $(".slide-three").owlCarousel({
    items: 3,
    nav: true,
    navText : ['<img src="img/left.png" alt="#">',
              '<img src="img/right.png" alt="#">'],
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      1280: {
        items: 3
      }
    }
  });


});

