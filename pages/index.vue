<template>
  <main id="main">
    <Hero1 />
    <Products :parts-items="partsItems" />
  </main>
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

<style>

</style>
