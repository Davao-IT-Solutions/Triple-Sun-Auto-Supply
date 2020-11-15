<template>
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="portfolio-details-container" data-aos="fade-up" data-aos-delay="100">
        <div class="portfolio-details-carousel">
          <img :src="getCoverImage.url" class="cover-image img-fluid" :alt="getCoverImage.title">
        </div>

        <div class="portfolio-info">
          <h3>Product Information</h3>
          <ul>
            <li><strong>Type</strong>: {{ getProductCategory.title }}</li>
            <li><strong>Status</strong>: {{ getProductStatus }}</li>
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
          <GalleryItem v-for="(item,index) in getGallery" :key="index" :item="item" />
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
          title: '',
          summary: '',
          gallery: [],
          price: '',
          status: [],
          category: {}
        }
      }
    }
  },
  data () {
    return {
      priceLine: this.product.price !== '' && this.product.price !== null && this.product.price !== undefined
    }
  },
  computed: {
    getProductCategory () {
      return this.product.category.fields
    },
    getProductStatus () {
      const status = this.product.status.map((item) => {
        return this.StatusNames[item]
      })
      return status.join(',')
    },
    getCoverImage () {
      return this.$store.state.coverImage
    },
    getGallery () {
      return this.product.gallery.map((item) => {
        return {
          url: item.fields.file.url,
          title: item.fields.title
        }
      })
    },
    TypeTitles () {
      return this.$store.state.TypeTitles
    },
    StatusNames () {
      return this.$store.state.StatusNames
    },
    FilteredImages () {
      return this.images.filter((i) => {
        return !!this.product[i]
      })
    }
  },
  mounted () {
    this.$store.commit('setCoverImage', {
      url: this.product.gallery[0].fields.file.url,
      title: this.product.gallery[0].fields.title
    })
  },
  methods: {
    imageDetails (item) {
      return {
        title: item.fields.title,
        url: item.fields.file.url
      }
    },
    changeCover (img) {
      this.coverImage = img
      window.scrollTo(0, 0)
    },
    notEmpty (i) {
      return !!this.product[i]
    }
  }
}
</script>

<style scoped>
.img-active .img-thumbnail {
  background-color:#213e80!important;
}
.cover-image {
  width: 100%;
}
</style>
