<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <input v-model="filterText" type="email" class="form-control col-md-6 mb-3 text-center" placeholder="Search Products" @input="searchProducts">
        </div>
      </div>

      <div v-if="menu" class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-filters">
            <li data-filter="*" class="filter-active">
              All
            </li>
            <li v-for="type in allTypes" :key="type" :data-filter="`.filter-${type}`">
              {{ TypeTitles[type] }}
            </li>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <div v-for="item in partsItems" :key="item.slug" class="col-lg-4 col-md-6 portfolio-item" :class="`filter-${item.attributes.type}`">
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
    menu: {
      type: Boolean,
      default: true
    },
    search: {
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

      window.$('#portfolio-filters li').on('click', function () {
        window.$('#portfolio-filters li').removeClass('filter-active')
        window.$(this).addClass('filter-active')

        window.portfolioIsotope.isotope({
          filter: window.$(this).data('filter')
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
