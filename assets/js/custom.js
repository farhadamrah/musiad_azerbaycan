(function ($) {
  'use strict';

  //===== 01. Main Menu
  function mainMenu() {
    // Variables
    var var_window = $(window),
      navContainer = $('.header-navigation'),
      navbarToggler = $('.navbar-toggler'),
      navMenu = $('.nav-menu'),
      navMenuLi = $('.nav-menu ul li ul li'),
      closeIcon = $('.navbar-close');
    // navbar toggler
    navbarToggler.on('click', function () {
      navbarToggler.toggleClass('active');
      navMenu.toggleClass('menu-on');
    });
    // close icon
    closeIcon.on('click', function () {
      navMenu.removeClass('menu-on');
      navbarToggler.removeClass('active');
    });
    // adds toggle button to li items that have children
    navMenu.find('li a').each(function () {
      if ($(this).next().length > 0) {
        $(this)
          .parent('li')
          .append(
            '<span class="dd-trigger"><i class="fas fa-angle-down"></i></span>'
          );
      }
    });
    // expands the dropdown menu on each click
    navMenu.find('li .dd-trigger').on('click', function (e) {
      e.preventDefault();
      $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
      $(this).parent('li').toggleClass('active');
    });
    // check browser width in real-time
    function breakpointCheck() {
      var windoWidth = window.innerWidth;
      if (windoWidth <= 1199) {
        navContainer.addClass('breakpoint-on');
      } else {
        navContainer.removeClass('breakpoint-on');
      }
    }
    breakpointCheck();
    var_window.on('resize', function () {
      breakpointCheck();
    });
  }

  // Document Ready
  $(document).ready(function () {
    mainMenu();
  });
  // Panel Widget
  var panelIcon = $('.off-menu'),
    panelClose = $('.panel-close'),
    panelWrap = $('.offcanvas-panel');
  panelIcon.on('click', function (e) {
    panelWrap.toggleClass('panel-on');
    e.preventDefault();
  });
  panelClose.on('click', function (e) {
    panelWrap.removeClass('panel-on');
    e.preventDefault();
  });
  //===== Prealoder
  $(window).on('load', function (event) {
    $('.preloader').delay(500).fadeOut('500');
  });

  //===== Sticky
  $(window).on('scroll', function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
      $('.header-navigation').removeClass('sticky');
    } else {
      $('.header-navigation').addClass('sticky');
    }
  });

  //===== Back to top
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200);
    } else {
      $('.back-to-top').fadeOut(200);
    }
  });

  $('.testimonial-slider-one').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
    nextArrow:
      '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.testimonial-slider-two').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
    nextArrow:
      '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  $('.case-slider-one').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    prevArrow: '<div class="prev"><i class="fal fa-long-arrow-left"></i></div>',
    nextArrow:
      '<div class="next"><i class="fal fa-long-arrow-right"></i></div>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  //   counter js
  $('.counter').counterUp({
    delay: 80,
    time: 2000,
  });

  $('.case-masonry-grid').imagesLoaded(function () {
    // items on button click
    $('.portfolios-list').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });
    // menu active class
    $('.portfolios-list li').on('click', function (e) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
    var $grid = $('.masonry-row').isotope({
      itemSelector: '.case-column',
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });
  });

  //===== nice-select
  $('select').niceSelect();

  $('a.page_scroll').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      scrollToPosition(hash);
    }
  });

  function scrollToPosition(hash) {
    //Initialize Active Class
    $('body,html').animate(
      {
        start: function () {},
        scrollTop: $(hash).offset().top,
      },
      1000,
      function () {
        window.location.hash = hash;
      }
    );
  }

  // Wow js
  new WOW().init();
})(window.jQuery);

function myFunction() {
  var dots = document.getElementById('dots');
  var moreText = document.getElementById('more');
  var btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Daha çox';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Daha az';
    moreText.style.display = 'inline';
  }
}

function myFunction2() {
  var dots2 = document.getElementById('dots2');
  var moreText2 = document.getElementById('more2');
  var btnText2 = document.getElementById('myBtn2');

  if (dots2.style.display === 'none') {
    dots2.style.display = 'inline';
    btnText2.innerHTML = 'Daha çox';
    moreText2.style.display = 'none';
  } else {
    dots2.style.display = 'none';
    btnText2.innerHTML = 'Daha az';
    moreText2.style.display = 'inline';
  }
}

function myFunction3() {
  var dots3 = document.getElementById('dots3');
  var moreText3 = document.getElementById('more3');
  var btnText3 = document.getElementById('myBtn3');

  if (dots3.style.display === 'none') {
    dots3.style.display = 'inline';
    btnText3.innerHTML = 'Daha çox';
    moreText3.style.display = 'none';
  } else {
    dots3.style.display = 'none';
    btnText3.innerHTML = 'Daha az';
    moreText3.style.display = 'inline';
  }
}

function myFunction4() {
  var dots4 = document.getElementById('dots4');
  var moreText4 = document.getElementById('more4');
  var btnText4 = document.getElementById('myBtn4');

  if (dots4.style.display === 'none') {
    dots4.style.display = 'inline';
    btnText4.innerHTML = 'Daha çox';
    moreText4.style.display = 'none';
  } else {
    dots4.style.display = 'none';
    btnText4.innerHTML = 'Daha az';
    moreText4.style.display = 'inline';
  }
}

function myFunction5() {
  var dots5 = document.getElementById('dots5');
  var moreText5 = document.getElementById('more5');
  var btnText5 = document.getElementById('myBtn5');

  if (dots5.style.display === 'none') {
    dots5.style.display = 'inline';
    btnText5.innerHTML = 'Daha çox';
    moreText5.style.display = 'none';
  } else {
    dots5.style.display = 'none';
    btnText5.innerHTML = 'Daha az';
    moreText5.style.display = 'inline';
  }
}

function myFunction6() {
  var dots6 = document.getElementById('dots6');
  var moreText6 = document.getElementById('more6');
  var btnText6 = document.getElementById('myBtn6');

  if (dots6.style.display === 'none') {
    dots6.style.display = 'inline';
    btnText6.innerHTML = 'Daha çox';
    moreText6.style.display = 'none';
  } else {
    dots6.style.display = 'none';
    btnText6.innerHTML = 'Daha az';
    moreText6.style.display = 'inline';
  }
}

function myFunction7() {
  var dots7 = document.getElementById('dots7');
  var moreText7 = document.getElementById('more7');
  var btnText7 = document.getElementById('myBtn7');

  if (dots7.style.display === 'none') {
    dots7.style.display = 'inline';
    btnText7.innerHTML = 'Daha çox';
    moreText7.style.display = 'none';
  } else {
    dots7.style.display = 'none';
    btnText7.innerHTML = 'Daha az';
    moreText7.style.display = 'inline';
  }
}

function myFunction8() {
  var dots8 = document.getElementById('dots8');
  var moreText8 = document.getElementById('more8');
  var btnText8 = document.getElementById('myBtn8');

  if (dots8.style.display === 'none') {
    dots8.style.display = 'inline';
    btnText8.innerHTML = 'Daha çox';
    moreText8.style.display = 'none';
  } else {
    dots8.style.display = 'none';
    btnText8.innerHTML = 'Daha az';
    moreText8.style.display = 'inline';
  }
}

function myFunction9() {
  var dots9 = document.getElementById('dots9');
  var moreText9 = document.getElementById('more9');
  var btnText9 = document.getElementById('myBtn9');

  if (dots9.style.display === 'none') {
    dots9.style.display = 'inline';
    btnText9.innerHTML = 'Daha çox';
    moreText9.style.display = 'none';
  } else {
    dots9.style.display = 'none';
    btnText9.innerHTML = 'Daha az';
    moreText9.style.display = 'inline';
  }
}

// function filterText() {
//   var val = $('#filterText').val();
//   if (val === '') return;
//   if (val === 'all') clearFilter();
//   else
//     $('.gender').each(function () {
//       $(this)
//         .parent()
//         .toggle($(this).text() === val);
//     });
// }

// function clearFilter() {
//   $('.filterText').val('');
//   $('.row').show();
// }

function filterTextTerm() {
  var val = $('#filterTextTerm').val();
  if (val === '') return;
  if (val === 'Hamısı') clearFilterTerm();
  else
    $('.term').each(function () {
      $(this)
        .parent()
        .toggle($(this).text() === val);
    });
}

function clearFilterTerm() {
  $('.filterTextTerm').val('');
  $('.tr').show();
}

/******************************* */

$('#carousel-example-1').on('slide.bs.carousel', function (e) {
  /*
      CC 2.0 License Iatek LLC 2018 - Attribution required
  */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $('#carousel-example-1 .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == 'left') {
        $('#carousel-example-1 .carousel-item')
          .eq(i)
          .appendTo('#carousel-example-1 .carousel-inner');
      } else {
        $('#carousel-example-1 .carousel-item')
          .eq(0)
          .appendTo('#carousel-example-1 .carousel-inner');
      }
    }
  }
});
