/**
 * Template Name: Bethany - v2.0.0
 * Template URL: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  'use strict'

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      e.preventDefault()
      const target = $(this.hash)
      if (target.length) {
        let scrollto = target.offset().top
        const scrolled = 20

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled
          }
        }

        if ($(this).attr('href') == '#header') {
          scrollto = 0
        }

        $('html, body').animate(
          {
            scrollTop: scrollto
          },
          1500,
          'easeInOutExpo'
        )

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active')
          $(this)
            .closest('li')
            .addClass('active')
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active')
          $('.mobile-nav-toggle i').toggleClass(
            'icofont-navigation-menu icofont-close'
          )
          $('.mobile-nav-overly').fadeOut()
        }
        return false
      }
    }
  })

  // Mobile Navigation
  if ($('.nav-menu').length) {
    const $mobile_nav = $('.nav-menu')
      .clone()
      .prop({
        class: 'mobile-nav d-lg-none'
      })
    $('body').append($mobile_nav)
    $('body').prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    )
    $('body').append('<div class="mobile-nav-overly"></div>')

    $(document).on('click', '.mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active')
      $('.mobile-nav-toggle i').toggleClass(
        'icofont-navigation-menu icofont-close'
      )
      $('.mobile-nav-overly').toggle()
    })

    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      e.preventDefault()
      $(this)
        .next()
        .slideToggle(300)
      $(this)
        .parent()
        .toggleClass('active')
    })

    $(document).click(function (e) {
      const container = $('.mobile-nav, .mobile-nav-toggle')
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active')
          $('.mobile-nav-toggle i').toggleClass(
            'icofont-navigation-menu icofont-close'
          )
          $('.mobile-nav-overly').fadeOut()
        }
      }
    })
  } else if ($('.mobile-nav, .mobile-nav-toggle').length) {
    $('.mobile-nav, .mobile-nav-toggle').hide()
  }

  // Navigation active state on scroll
  const nav_sections = $('section')
  const main_nav = $('.nav-menu, .mobile-nav')

  $(window).on('scroll', function () {
    const cur_pos = $(this).scrollTop() + 70

    nav_sections.each(function () {
      const top = $(this).offset().top
      const bottom = top + $(this).outerHeight()

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active')
        }
        main_nav
          .find('a[href="#' + $(this).attr('id') + '"]')
          .parent('li')
          .addClass('active')
      }
      if (cur_pos < 300) {
        $(
          '.nav-menu ul:first li:first, .mobile-menu ul:first li:first'
        ).addClass('active')
      }
    })
  })

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled')
    } else {
      $('#header').removeClass('header-scrolled')
    }
  })

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled')
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow')
    } else {
      $('.back-to-top').fadeOut('slow')
    }
  })

  $('.back-to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      1500,
      'easeInOutExpo'
    )
    return false
  })

  // Porfolio isotope and filter
  $(window).on('load', function () {
    const portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    })

    $('#portfolio-flters li').on('click', function () {
      $('#portfolio-flters li').removeClass('filter-active')
      $(this).addClass('filter-active')

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      })
    })
  })

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox()
  })

  // Testimonials carousel (uses the Owl Carousel library)
  $('.testimonials-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      }
    }
  })

  // Portfolio details carousel
  $('.portfolio-details-carousel').owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  })
})(jQuery)
