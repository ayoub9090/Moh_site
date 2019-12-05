(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });





  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict

$(document).click(function (e) {
  var popup = $(".search_form");

  if (!$(e.target).parents('.search_form').length > 0 && e.target.className.indexOf('icon-search') < 0) {
    toggleSearch('off')
  }
});



$('#main_menu').on('show.bs.dropdown', function () {
  $(this).find('.js-mega-services').addClass('is-active');

})


$('#main_menu').on('hide.bs.dropdown', function () {
  $(this).find('.js-mega-services').removeClass('is-active');

})

window.onscroll = function () { stickyTop() };

// Get the navbar
var navbar = document.getElementById("topNav");

// Get the offset position of the navbar
var sticky = document.getElementById("mainNav").offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyTop() {
  if (window.pageYOffset > sticky + 12) {
    navbar.classList.add("sticky")
  } else if ($('.inner-body').length === 0) {
    navbar.classList.remove("sticky");
  }
}
//this var for demo use add/remove proiperity
if ($('.prop-list').length > 0) {
  var properity = $('.prop-list > .singleProp:first-child')[0].outerHTML;
}

$(document).ready(function () {


  setTimeout(function () {
    $('.any-questions-wrapper').addClass('any-questions-wrapper-open');
  }, 600);


  $('#quastion .box').matchHeight({ byrow: true });
  $('.aligned_box div').matchHeight({ byrow: true });
  $('.aligned_box h4').matchHeight({ byrow: true });
  $('.bordered-box div').matchHeight({ byrow: true });
  $('.bordered-box p').matchHeight({ byrow: true });
  $('.row-matched-items .item p:not(.learn-more)').matchHeight({ byrow: true });
  $('.row-matched-items .item h3').matchHeight({ byrow: true });


  $('.owl-carousel').on('changed.owl.carousel', function (event) {
    //$('.inner-content-data h3').matchHeight();

  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="icomoon icon-arrow-down flipLeft" aria-hidden="true"></i>',
      '<i class="icomoon icon-arrow-down flipRight" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })


  $('#footer h5').on('click', function () {
    if ($(window).width() < 768) {
      $(this).next('ul').fadeToggle(200);
    }
  });
});



function toggleSearch(option) {
  if ($(window).width() > 992) {
    var rt = ($(window).width() - ($('.search_link').offset().left + $('.search_link').outerWidth()));
    $('.search_form').css('right', rt - 1);
  }
  if (option === 'off') {
    $('.search_form').fadeOut(200);
  } else {
    $('.search_form').fadeToggle(200);
  }

}

var forceClose = false;
$(document).on('scroll', function () {
  if ($('#about').length > 0) {
    if ($(this).scrollTop() >= $('#about').position().top) {
      if (!$('.shortcuts').hasClass('shortcuts-open')) {
        setTimeout(function () {
          $('.shortcuts').addClass('shortcuts-open');
        }, 600);

      }
    }
  }
  if ($('.masthead').length > 0) {
    if ($(this).scrollTop() >= $('.masthead').height() - 250) {
      if (!forceClose) {
        setTimeout(function () {
          $('.rates-holder').addClass('rates-holder-open');
        }, 600);
      }
    }
  }

})

$('.navTabs li a').click(function () {
  $('.navTabs li a.active').removeClass('active');
  $(this).addClass('active');
});

function closeRate() {
  $('.rates-holder').removeClass('rates-holder-open');
  forceClose = true;
}

$('.rates-wrapper a').on('click', function () {
  $('.rates-holder').removeClass('rates-holder-open');
  forceClose = true;
});


function scrollTo(el) {
  $('html, body').animate({
    scrollTop: $(el).offset().top - 100
  }, 800);
}

function close(el) {
  $(el).fadeOut(200);
}

function addPropSearch() {
  $('.prop-list').append(properity);
}
function removePropSearch() {
  $('.prop-list > div.singleProp:last-child').remove();
}

function toggleQuickLinks() {
  $('.search_form .dropdown-box.quicklinks').toggleClass('closed');
}

function showMedia(el) {
  if (el !== 'all') {
    $('.media-section').hide();
    $(el).fadeIn(200);
  } else {
    $('.media-section').show();
  }
}

$('.navTabsMob').on('change', function () {
  var el = $(this).val();
  if (el !== 'all') {
    $('.media-section').hide();
    $(el).fadeIn(200);
  } else {
    $('.media-section').show();
  }

});


$('a.toggleLink').click(function () {
  $('a.toggleLink.active').removeClass('active');
  $(this).addClass('active');
});
function toggle(el) {
  $('.toggleParent > div').hide();
  $(el).fadeIn(200);
}