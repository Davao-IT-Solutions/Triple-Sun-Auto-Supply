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
      return this.$store.state.partsItems.filter((i) => {
        return i.attributes.status === 'new'
      })
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
