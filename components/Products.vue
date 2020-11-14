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
            <li v-for="(category,index) in getCategories" :key="index" class="product-category" :data-category="`.filter-${category.slug}`">
              {{ category.title }}
            </li>
          </ul>
          <ul id="portfolio-filters">
            <nuxt-link to="/products/new" tag="li">
              New
            </nuxt-link>
            <nuxt-link to="/products/surplus" tag="li">
              Surplus
            </nuxt-link>
          </ul>
        </div>
      </div>

      <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        <ProductItem v-for="(item, index) in partsItems" :key="index" :item="item" />
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
    },
    TypeTitles () {
      return this.$store.state.TypeTitles
    },
    StatusNames () {
      return this.$store.state.StatusNames
    }
  },
  mounted () {
    // console.log(this.getCategories)
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
        window.portfolioIsotope.isotope({
          filter: window.$(this).data('category')
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
.portfolio #portfolio-filters li.nuxt-link-active {
  color: #fff;
  background: #213e80;
}
</style>
