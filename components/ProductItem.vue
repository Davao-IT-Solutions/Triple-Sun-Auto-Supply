<template>
  <div class="col-lg-4 col-md-6 portfolio-item" :class="getFilterClass">
    <div class="portfolio-wrap">
      <img :src="getItemImage.url" class="img-fluid" :alt="getItemImage.title">
      <div class="portfolio-info">
        <h4>{{ getItemTitle }}</h4>
        <p>{{ getItemCategory }}</p>
        <div class="portfolio-links">
          <nuxt-link :to="`/product/${getItemPath}`" title="More Details">
            <i class="bx bx-link" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    getItemTitle () {
      return this.item.fields.title
    },
    getItemPath () {
      return this.item.fields.path
    },
    getItemSummary () {
      return this.item.fields.summary
    },
    getItemCategory () {
      return this.item.fields.category.fields.title
    },
    getFilterClass () {
      if (typeof this.item.fields.category !== 'undefined') {
        return `filter-${this.item.fields.category.fields.slug}`
      } else {
        return ''
      }
    },
    getItemImage () {
      return {
        title: this.item.fields.gallery[0].fields.title,
        url: this.item.fields.gallery[0].fields.file.url
      }
    }
  }
}
</script>
