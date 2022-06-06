<template>
  <div class="top-navigation">

<!--    <base-button @click.prevent="mainStore.loadNewImagesChunk"-->
<!--                 :disabled="!mainStore.showGallery">-->
<!--      Fetch new images-->
<!--    </base-button>-->

    <base-button @click.prevent="mainStore.toggleGalleryVisibility">
     {{ mainStore.showGallery ? 'Hide gallery' : 'Show gallery' }}
    </base-button>

  </div>

</template>

<script setup lang="ts">
import { useMainStore } from '@/stores/main'
import BaseButton from "@/components/BaseButton.vue";
const mainStore = useMainStore()

</script>

<style scoped lang="scss">
.top-navigation {
  margin-bottom: 1rem;

}

</style>