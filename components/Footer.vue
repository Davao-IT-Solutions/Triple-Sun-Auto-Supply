<template>
  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 footer-contact">
            <img src="/img/logo2.png" class="img-fluid logo">
            <p>
              Door 4, Peace Ave. Corner Orchid Street, <br>
              Km. 7, Bangkal, Davao City <br><br>
              <strong>Phone:</strong> +63 923 100 2525<br>
              <strong>Alt Phone:</strong> +63 997 220 0032<br>
              <strong>Email:</strong> triplesunautosupply@gmail.com<br>
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right" />
                <nuxt-link to="/">
                  Home
                </nuxt-link>
              </li><li>
                <i class="bx bx-chevron-right" />
                <nuxt-link to="/about">
                  About Us
                </nuxt-link>
              </li><li>
                <i class="bx bx-chevron-right" />
                <nuxt-link to="/products">
                  Products
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Categories</h4>
            <ul>
              <li v-for="(category,index) in getCategories" :key="index">
                <i class="bx bx-chevron-right" />
                <nuxt-link :to="`/products/${category.slug}`">
                  {{ category.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Receive regular updates on our products and services.</p>
            <form id="sib-form" method="POST" action="https://71bf28d0.sibforms.com/serve/MUIEABUtV-I1h4UTuj4FpxcN75KwQAeEbjdeZHaGMyVpyrx0ced-KB9TRGam__BZYKHwHKkHT1oSCfNDoRXVjeG2FRaiesJGdZ9a0VtFLKSfPgALASte5ap7h7gHZt7Cz4ZJumFI2OoFt3owvgoKI-5qNLmZ5l1Nu8ezdbmhjEnXs_fD65ROf0e6ngJuvAmTZGeVoPs5dTELjU_d">
              <input
                id="EMAIL"
                class="input"
                type="email"
                name="EMAIL"
                autocomplete="off"
                placeholder="EMAIL ADDRESS"
                data-required="true"
                required
              >
              <input type="submit" value="Subscribe">
              <input id="OPT_IN" type="hidden" class="input_replaced" value="1" name="OPT_IN">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">
      <div class="mr-md-auto text-center text-md-left">
        <div class="copyright">
          <strong><span>Triple Sun Auto Supply</span></strong> &copy; Copyright. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/bethany-free-onepage-bootstrap-theme/ -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> &middot; Developed by <a href="https://www.davao.me/">Davao IT Solutions</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a target="_blank" href="https://www.facebook.com/triplesunautosupply" class="facebook"><i class="bx bxl-facebook" /></a>
        <a target="_blank" href="https://www.instagram.com/triplesunautosupply/" class="instagram"><i class="bx bxl-instagram" /></a>
        <a target="_blank" href="https://twitter.com/triplesun_auto" class="twitter"><i class="bx bxl-twitter" /></a>
        <a target="_blank" href="https://goo.gl/maps/zn4DAto31qLQRjNC6" class="google-plus"><i class="bx bx-map" /></a>
        <a target="_blank" href="https://www.linkedin.com/company/triple-sun-auto-supply-of-davao-city/" class="linkedin"><i class="bx bxl-linkedin" /></a>
      </div>
    </div>
  </footer><!-- End Footer -->
</template>

<script>
import allTypes from '../content/allTypes.json'

export default {
  data () {
    return {
      allTypes
    }
  },
  computed: {
    TypeTitles () {
      return this.$store.state.TypeTitles
    },
    StatusNames () {
      return this.$store.state.StatusNames
    },
    getCategories () {
      const sortByTitle = (a, b) => {
        const textA = a.title.toUpperCase()
        const textB = b.title.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      }
      const categories = []
      this.$store.state.categories.items.forEach((item, index) => {
        categories.push({
          title: item.fields.title,
          slug: item.fields.slug
        })
      })
      categories.sort(sortByTitle)
      return categories
    }
  }
}
</script>

<style scoped>
.logo {
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
