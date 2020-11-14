<template>
  <main id="main">
    <Breadcrumbs :title="product.title" parent="Products" />
    <ProductDetails :product="product" />
  </main>
</template>

<script>
export default {
  async asyncData ({ params, store }) {
    const getProductDetails = () => {
      return store.state.partsItems.items.filter((i) => {
        return i.fields.path === params.slug
      })
    }

    const productData = await getProductDetails()

    return {
      product: productData[0].fields
    }
  },
  head () {
    return {
      title: this.product.title
    }
  }
}
</script>

<style>

</style>
