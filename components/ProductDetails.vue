<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">
        <div class="portfolio-details-carousel">
          <img :src="product.img2" class="img-fluid" alt="">
        </div>

        <div class="portfolio-info">
          <h3>Product Information</h3>
          <ul>
            <li><strong>Type</strong>: {{ TypeTitles[product.type] }}</li>
            <li><strong>Market Price</strong>: {{ product.price }}</li>
          </ul>
        </div>
      </div>

      <div class="portfolio-description">
        <h2>{{ product.title }}</h2>
        <p>
          {{ product.summary }}
        </p>

        <div class="row">
          <div class="col-md-4">
            <img :src="product.img1" class="img-fluid" alt="">
          </div>
          <div class="col-md-4">
            <img :src="product.img3" class="img-fluid" alt="">
          </div>
          <div class="col-md-4">
            <img :src="product.img4" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Portfolio Details Section -->
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {
          title: ''
        }
      }
    }
  },
  computed: {
    TypeTitles () {
      return this.$store.state.TypeTitles
    },
    StatusNames () {
      return this.$store.state.StatusNames
    }
  }
}
</script>
