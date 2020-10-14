<template>
  <!-- ======= Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div v-if="menu" class="row" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
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
              <h4>{{ item.attributes.title }}</h4>
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
    }
  },
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
    }
  },
  mounted () {
    setTimeout(function () {
      window.portfolioIsotope = window.$('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry'
      })

      window.$('#portfolio-flters li').on('click', function () {
        window.$('#portfolio-flters li').removeClass('filter-active')
        window.$(this).addClass('filter-active')

        window.portfolioIsotope.isotope({
          filter: window.$(this).data('filter')
        })
      })
    }, 2000)
  }
}
</script>
<style>

</style>
