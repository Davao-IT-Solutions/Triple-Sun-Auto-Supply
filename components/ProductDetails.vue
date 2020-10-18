<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">
        <div class="portfolio-details-carousel">
          <img :src="coverImage" class="img-fluid" alt="">
        </div>

        <div class="portfolio-info">
          <h3>Product Information</h3>
          <ul>
            <li><strong>Type</strong>: {{ TypeTitles[product.type] }}</li>
            <li v-if="priceLine">
              <strong>Market Price</strong>: {{ product.price }}
            </li>
          </ul>
        </div>
      </div>

      <div class="portfolio-description">
        <h2>{{ product.title }}</h2>
        <p>
          {{ product.summary }}
        </p>

        <div class="row">
          <div class="col-md-3">
            <a :class="{ 'img-active': coverImage===product.img2}" href="javascript:void(0);" @click="changeCover(product.img2)"><img :src="product.img2" class="img-fluid img-rounded img-thumbnail" alt=""></a>
          </div>
          <div class="col-md-3">
            <a :class="{ 'img-active': coverImage===product.img1}" href="javascript:void(0);" @click="changeCover(product.img1)"><img :src="product.img1" class="img-fluid img-rounded img-thumbnail" alt=""></a>
          </div>
          <div class="col-md-3">
            <a :class="{ 'img-active': coverImage===product.img3}" href="javascript:void(0);" @click="changeCover(product.img3)"><img :src="product.img3" class="img-fluid img-rounded img-thumbnail" alt=""></a>
          </div>
          <div class="col-md-3">
            <a :class="{ 'img-active': coverImage===product.img4}" href="javascript:void(0);" @click="changeCover(product.img4)"><img :src="product.img4" class="img-fluid img-rounded img-thumbnail" alt=""></a>
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
  data () {
    return {
      coverImage: this.product.img2,
      priceLine: this.product.price !== '' && this.product.price !== null && this.product.price !== undefined
    }
  },
  computed: {
    TypeTitles () {
      return this.$store.state.TypeTitles
    },
    StatusNames () {
      return this.$store.state.StatusNames
    }
  },
  methods: {
    changeCover (img) {
      this.coverImage = img
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style scoped>
.img-active .img-thumbnail {
  background-color:#213e80!important;
}
</style>
