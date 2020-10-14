<template>
  <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
    <div v-for="item in partsItems" :key="item.slug" class="col-lg-4 col-md-6 portfolio-item" :class="`filter-${item.attributes.type}`">
      <div class="portfolio-wrap">
        <img :src="item.attributes.img_link" class="img-fluid" :alt="item.attributes.title">
        <div class="portfolio-info">
          <h4>{{ item.attributes.title }}</h4>
          <p>{{ item.attributes.type }} &middot; {{ item.attributes.status }}</p>
          <div class="portfolio-links">
            <a href="/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus" /></a>
            <a href="portfolio-details.html" title="More Details"><i class="bx bx-link" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    partsItems () {
      return this.$store.state.partsItems
    }
  }
}
</script>
