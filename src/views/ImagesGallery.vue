<template>
  <div class="home">

  <gallery-toolbox />

    <div class="images-holder" :key="mainStore.galleryChunkNumber" v-show="mainStore.showGallery">
      <img v-for="imageNumber in [...Array(10).keys()]"
           :key="imageNumber"
           :alt="`image ${imageNumber}`"
           :src="`https://placeimg.com/150/150/any-${imageNumber}`">
    </div>

  </div>
</template>

<script setup lang="ts">
import GalleryToolbox from '@/components/TheGalleryToolbox.vue'
import { useMainStore } from '@/stores/main'

const mainStore = useMainStore()

</script>

<style scoped lang="scss">
.home {
  .images-holder{
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    max-width: 900px;
    justify-content: space-around;
    img {
      margin: 5px;
      filter: grayscale(100%);
      &:hover {
        box-shadow: 0 0 4px black;
        filter: none !important;
      }
    }
  }
}

</style>
