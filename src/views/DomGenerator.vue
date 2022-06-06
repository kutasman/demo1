<template>
  <div class="dom-generator">
    <form action="#" @submit.prevent="handleSubmit">
      <div class="controls">
        <label for="itemsAmount">Items amount</label>
        <input id="itemsAmount" type="number" min="1" max="777" name="itemsAmount" v-model="formData.itemsAmount">

        <label for="width">Width(px)</label>
        <input id="width" type="number" min="1" max="1000" name="width" v-model="formData.width">

        <label for="height">Height(px)</label>
        <input id="height" type="number" min="1" max="1000" name="height" v-model="formData.height">

        <label for="borderRadius">Border Radius(px)</label>
        <input id="borderRadius" type="number" min="1" max="1000" name="borderRadius" v-model="formData.borderRadius">

        <label for="backgroundColor">Color</label>
        <input id="backgroundColor" type="text" min="1" max="1000" name="backgroundColor" v-model="formData.backgroundColor">

      </div>
      <base-button @click.prevent="handleSubmit">Generate</base-button>

    </form>

    <div class="items-wrapper" >
      <div v-if="mainStore.generatedItems?.length">

        <div class="item"
             v-for="(itemOptions, itemIndex) in mainStore.generatedItems"
             :key="itemIndex"
             v-bind="generateAttributes(itemOptions)">
        </div>

      </div>

      <div v-else>No items generated</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import {DomItemElement} from '@/composables/domElementsGenerator'
import { useMainStore } from '@/stores/main'
import BaseButton from "@/components/BaseButton.vue";
import { isValidColor } from '@/composables/cssColorValidator'

const mainStore = useMainStore()
const formData = reactive({
  itemsAmount: 10,
  width: 100,
  height: 100,
  backgroundColor: 'white',
  borderRadius: 5,
})

const generateAttributes = (item: DomItemElement) => {
  return {
    style: `width: ${item.width}; height: ${item.height}; background-color: ${item.backgroundColor}; border-radius: ${item.borderRadius}`
  }
}

const handleSubmit = () => {
  //some validation
  if(!isValidColor(formData.backgroundColor)){
   return alert('Seems like provided color is invalid... Try another!')
  }

  if (formData.itemsAmount > 777){
    if (!confirm('Looks like items number is huge. Are you sure?')) return
  }

  mainStore.generateItems(formData)
}
</script>

<style scoped lang="scss">
.dom-generator {
  form {
    .controls {
      margin: 2rem 0;
      label {
        padding: 0 .5rem ;
      }
      input {
        padding: .3rem;
        border-radius: 3px;
        border: 1px solid grey;
      }
    }
    button {
      margin-bottom: 2rem;
    }
  }
  .items-wrapper {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    width: 900px;
    justify-content: space-around;
    .item {
      display: inline-flex;
      justify-content: flex-end;
      margin: .5rem;
    }
  }
}
</style>