<template>
  <div class="col-md-3">
    <a @click="changeCover()">
      <img class="img-fluid img-thumbnail" :src="item.url" :alt="item.title" :class="{ 'active' : (item.url===getCurrentImage) }">
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {
          url: '',
          title: ''
        }
      }
    }
  },
  computed: {
    getCurrentImage () {
      return this.$store.state.coverImage.url
    }
  },
  methods: {
    changeCover () {
      this.$store.commit('setCoverImage', this.item)
      window.scrollTo(200, 200)
    }
  }
}
</script>

<style scoped>
.img-thumbnail {
    margin-bottom: 10px;
    cursor:pointer;
}
.img-thumbnail.active {
  background-color:#213e80!important;
}
</style>
