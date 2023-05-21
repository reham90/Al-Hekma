$(window).on('load',function () {
  $(".preloader").fadeOut();

});
$(document).ready(function () {
  new WOW().init();

  // phone size menu onclick
  if ($(window).width() <= 991) {
    $('#menu-id').click((e) => {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $('.navgition').toggleClass('reset-left');
      $('body').toggleClass('overflow');
      $('.menu-bars').toggleClass('open-bars');
    });
    $('.nav-head .close-btn').click(() => {
      $('.navgition').removeClass('reset-left');

      $('.menu-bars .times').toggleClass('hide');
      $('body').removeClass('overflow');
    });

    /// // search in mobile /////////
    $('.fixed-search').click((e) => {
      e.preventDefault();
      $('.overlay-box').fadeToggle(300);
      $('.search-section').toggleClass('search-open');
      $('.fixed-search .open-search').toggleClass('close-search');
      $('body').toggleClass('overflow');
    });

    // slide down menu
    $('.menu-name').click(function (e) {
      e.preventDefault();
      $(this).siblings('.cats-dispaly').slideToggle(400);
      $('.menu-name').not(this).siblings('.cats-dispaly').slideUp(400);
      if ($(window).width() <= 991) {
        $(this).toggleClass('active');
        $('.menu-name').not(this).removeClass('active');
      }
    });
  }

  // fixed nav
  $stickyNav = $('.top-header');
  $(window).on('scroll load', () => {
    const scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass('fixed-nav');
    } else {
      $stickyNav.removeClass('fixed-nav');
    }
    if (scroll == 0) {
      $stickyNav.removeClass('fixed-nav');
    }
  });
  const $stickyheader = $('header');
  lastScroll = 0;
  $(window).on('scroll load', () => {
    const scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass('fixed-header', {
        duration: 1000,
      });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass('fixed-header', {
        duration: 1000,
      });
    } else {
      $stickyheader.removeClass('fixed-header', {
        duration: 500,
      });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass('fixed-header', {
        duration: 500,
      });
    }
  });

  /// ////// ** main-slider** /////////
  const specials = new Swiper('.main-slider .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.main-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-slider .swiper-btn-next',
      prevEl: '.main-slider .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  /// /////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $('.nav-foot-header').addClass('footer-accordion');
    $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function () {
    const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
    $('.footer-accordion').not(this).removeClass('active');
    $(this).toggleClass('active');
    if ($(this).siblings().css('max-height') == '0px') {
      $(this).siblings().css('max-height', x);
      $(this).siblings('.nav-foot').css('padding-top', '15px');
    } else {
      $(this).siblings().css('max-height', '0');
      $(this).siblings('.nav-foot').css('padding-top', '0');
    }

    $('.footer-accordion').not(this).siblings().css('max-height', '0');
    $('.footer-accordion')
      .not(this)
      .siblings('.nav-foot')
      .css('padding-top', '0');
  });
  /// ///////** fixed arrow to top**//////////
  $('.arrow-top').click(() => {
    $('html,body').animate({
      scrollTop: 0,
    },
    1500);
  });
  $(this).scrollTop() >= 500
    ? $('.arrow-top').fadeIn(300)
    : $('.arrow-top').fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $('.arrow-top').fadeIn(300)
      : $('.arrow-top').fadeOut(300);
  });

  /// //////////////////////// ** video light box ** ////////////////////////////////////
  $('.video').magnificPopup({
    type: 'iframe',

    iframe: {
      markup: '<div class="mfp-iframe-scaler">'
              + '<div class="mfp-close"></div>'
              + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'
              + '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

      patterns: {
        youtube: {
          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

          id: 'v=', // String that splits URL in a two parts, second part should be %id%
          // Or null - full URL will be returned
          // Or a function that should return %id%, for example:
          // id: function(url) { return 'parsed id'; }

          src: 'https://www.youtube.com/embed/RGK3VKkyVxs', // URL that will be set as a source for iframe.
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: {
          index: '//maps.google.',
          src: '%id%&output=embed',
        },

        // you may add here more sources

      },

      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    },

  });

  /// ///////////////////////////////////////////////////////////////////////////////////

  /// ////// **new-arrivals-section** /////////
  var screen = new Swiper('.arrivals .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.arrivals .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.arrivals .swiper-btn-next',
      prevEl: '.arrivals .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **offers-slider** /////////
  var screen = new Swiper('.offers .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.offers .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.offers .swiper-btn-next',
      prevEl: '.offers .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **human-medicine-slider** /////////
  var screen = new Swiper('.human-medicine .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.human-medicine .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.human-medicine .swiper-btn-next',
      prevEl: '.human-medicine .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **animal-medicine-slider** /////////
  var screen = new Swiper('.animal-medicine .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.animal-medicine .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.animal-medicine .swiper-btn-next',
      prevEl: '.animal-medicine .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **plants-slider** /////////
  var screen = new Swiper('.plants .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.plants .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.plants .swiper-btn-next',
      prevEl: '.plants .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **testimonials-slider** /////////
  var screen = new Swiper('.testimonials .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.testimonials .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.testimonials .swiper-btn-next',
      prevEl: '.testimonials .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 28,
      },
    },
  });
});
