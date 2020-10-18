<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div v-if="showTitle" class="section-title aos-init aos-animate" data-aos="fade-left">
        <h2>Products</h2>
      </div>

      <div v-if="search" class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <input v-model="filterText" type="email" class="form-control col-md-6 mb-3 text-center" placeholder="Search Products" @input="searchProducts">
        </div>
      </div>

      <div v-if="categoriesNav" class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-filters">
            <li class="product-category filter-active" data-category="">
              All
            </li>
            <li v-for="type in allTypes" :key="type" class="product-category" :data-category="`${type}`">
              {{ TypeTitles[type] }}
            </li>
          </ul>
          <ul id="portfolio-filters">
            <li class="product-status filter-active" data-status="new">
              New
            </li>
            <li class="product-status" data-status="surplus">
              Surplus
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div v-for="item in partsItems" :key="item.slug" class="col-lg-4 col-md-6 portfolio-item" :class="`filter-${item.attributes.type} filter-${item.attributes.type}-${item.attributes.status} filter-${item.attributes.status}`">
          <div class="portfolio-wrap">
            <img :src="item.attributes.img_link" class="img-fluid" :alt="item.attributes.title">
            <div class="portfolio-info">
              <h4 class="title">
                {{ item.attributes.title }}
              </h4>
              <p>{{ TypeTitles[item.attributes.type] }} &middot; {{ StatusNames[item.attributes.status] }}</p>
              <div class="portfolio-links">
                <nuxt-link :to="`/product/${item.slug}`" :title="`${item.attributes.title} Details`">
                  <i class="bx bx-link" />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- End Portfolio Section -->
</template>

<script>
import allTypes from '../content/allTypes.json'

export default {
  props: {
    partsItems: {
      type: Array,
      default () {
        return []
      }
    },
    categoriesNav: {
      type: Boolean,
      default: true
    },
    statusNav: {
      type: Boolean,
      default: true
    },
    search: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      allTypes,
      filterText: ''
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
  mounted () {
    setTimeout(function () {
      window.portfolioIsotope = window.$('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
      })

      window.filtersCategory = null
      window.filtersStatus = 'new'

      window.$('.product-category').on('click', function () {
        window.$('.product-category').removeClass('filter-active')
        window.$(this).addClass('filter-active')
        window.filtersCategory = (window.$(this).data('category') !== '') ? window.$(this).data('category') : null

        const filters = [window.filtersCategory, window.filtersStatus]
        const filter2 = filters.filter((i) => {
          return i != null
        })

        const filter3 = '.filter-'.concat(filter2.join('-'))

        window.portfolioIsotope.isotope({
          filter: filter3
        })
      })

      window.$('.product-status').on('click', function () {
        window.$('.product-status').removeClass('filter-active')
        window.$(this).addClass('filter-active')
        window.filtersStatus = window.$(this).data('status')
        window.filtersStatus = (window.$(this).data('status') !== '') ? window.$(this).data('status') : null
        const filters = [window.filtersCategory, window.filtersStatus]
        const filter2 = filters.filter((i) => {
          return i != null
        })

        const filter3 = '.filter-'.concat(filter2.join('-'))

        window.portfolioIsotope.isotope({
          filter: filter3
        })
      })
    }, 2000)
  },
  methods: {
    searchProducts () {
      if (this.filterText.length >= 3) {
        window.$('.portfolio-item').removeClass('searched')
        window.portfolioIsotope[0].children.forEach((i) => {
          const title = window.$(i).find('.title').text()
          if (title.toLowerCase().includes(this.filterText)) {
            window.$(i).addClass('searched')
          }
        })
        window.portfolioIsotope.isotope({
          filter: '.searched'
        })
      } else {
        window.portfolioIsotope.isotope({
          filter: '*'
        })
      }
    }
  }
}
</script>
<style>

</style>
