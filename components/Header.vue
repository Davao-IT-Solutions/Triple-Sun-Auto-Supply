<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container">
      <div class="header-container d-flex align-items-center">
        <div class="logo mr-auto">
          <h1 class="text-light">
            <nuxt-link to="/">
              <span>TRIPLE SUN AUTO SUPPLY</span>
            </nuxt-link>
          </h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li>
              <nuxt-link to="/">
                Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">
                About Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/products">
                Products
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact">
                Contact Us
              </nuxt-link>
            </li>

            <!--<li class="get-started">
              <a href="#about">Get Started</a>
            </li>-->
          </ul>
        </nav><!-- .nav-menu -->
      </div><!-- End Header Container -->
    </div>
  </header><!-- End Header -->
</template>

<style>

</style>
