<template>
  <main id="main">
    <Breadcrumbs :title="productData.attributes.title" parent="Products" />
    <ProductDetails :product="product" />
  </main>
</template>

<script>
export default {
  async asyncData ({ params, payload }) {
    // eslint-disable-next-line
    console.log(payload)
    if (payload) {
      return {
        productData: payload,
        product: {
          title: payload.attributes.title,
          summary: payload.attributes.summary,
          price: payload.attributes.price,
          type: payload.attributes.type,
          img1: payload.attributes.img_link,
          img2: payload.attributes.img_link2,
          img3: payload.attributes.img_link3,
          img4: payload.attributes.img_link4
        }
      }
    } else {
      const productData = await require(`~/content/parts/${params.slug}.md`)
      return {
        productData,
        product: {
          title: productData.attributes.title,
          summary: productData.attributes.summary,
          price: productData.attributes.price,
          type: productData.attributes.type,
          img1: productData.attributes.img_link,
          img2: productData.attributes.img_link2,
          img3: productData.attributes.img_link3,
          img4: productData.attributes.img_link4
        }
      }
    }
  },
  head () {
    return {
      title: `${this.productData.attributes.title} - Product Details`
    }
  }
}
</script>

<style>

</style>
