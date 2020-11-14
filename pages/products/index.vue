<template>
  <main id="main">
    <Breadcrumbs title="Products" />
    <Products :parts-items="partsItems" :search="true" />
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
      title: 'Products'
    }
  }
}
</script>

<style>

</style>
