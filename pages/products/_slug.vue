<template>
  <main id="main">
    <Breadcrumbs :title="`${TypeTitles[this.$route.params.slug]}`" parent="Products" />
    <Products :parts-items="partsItems" :menu="false" />
  </main>
</template>

<script>
export default {
  computed: {
    partsItems () {
      return this.$store.state.partsItems.items.filter((item) => {
        return item.fields.category.fields.slug === this.$route.params.slug
      })
    },
    TypeTitles () {
      return this.$store.state.TypeTitles
    }
  },
  head () {
    return {
      title: 'Products'
    }
  }
}
</script>

<style>

</style>
