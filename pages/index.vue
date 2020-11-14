<template>
  <main id="main">
    <Hero1 />
    <Products :status-nav="true" :categories-nav="false" :parts-items="partsItems" :show-title="true" />
  </main>
</template>

<script>
export default {
  computed: {
    partsItems () {
      return this.$store.state.partsItems.items
    }
  },
  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
