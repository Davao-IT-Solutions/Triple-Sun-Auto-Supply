<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted () {
    const $ = window.$
    // Mobile Navigation
    if ($('.nav-menu').length) {
      const $mobileNav = $('.nav-menu')
        .clone()
        .prop({
          class: 'mobile-nav d-lg-none'
        })
      $('body').append($mobileNav)
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
  }
}
</script>
<style>

</style>
