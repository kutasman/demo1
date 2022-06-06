import { defineStore } from 'pinia'
import { configKeys } from '@/constants'
import domElementsGenerator, { DomItemElement, DomElementsGeneratorOptions } from '@/composables/domElementsGenerator'
declare interface MainSate {
  galleryChunkNumber: number,
  showGallery: boolean,
  items: DomItemElement[],
}

export const useMainStore = defineStore('main', {
  state: (): MainSate => ({
    galleryChunkNumber: 1,
    showGallery: true,
    items: [],
  }),
  getters: {
    generatedItems(state): DomItemElement[]{
      return state.items
    }
  },
  actions: {
    toggleGalleryVisibility(){
      localStorage.setItem(configKeys.CONFIG_SHOW_GALLERY, this.showGallery ? 'false' : 'true')
      this.showGallery = !this.showGallery
    },
    init(){
      const showGallery = localStorage.getItem(configKeys.CONFIG_SHOW_GALLERY)
      this.showGallery = showGallery ? showGallery  === 'true' : true
      this.items = JSON.parse(localStorage.getItem(configKeys.CONFIG_ITEMS) ?? '[]')
    },
    loadNewImagesChunk(){
      this.galleryChunkNumber++
    },
    generateItems(options: DomElementsGeneratorOptions){
      this.items = domElementsGenerator(options)
      localStorage.setItem(configKeys.CONFIG_ITEMS, JSON.stringify(this.items));
    }
  },
})
