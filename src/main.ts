import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useMainStore } from '@/stores/main'
import router from '@/router'

const pinia = createPinia()
const mainStore = useMainStore(pinia)
mainStore.init()

import BaseButton from '@/components/BaseButton.vue'

createApp(App)
    .use(pinia)
    .use(router)
    .component('base-button', BaseButton)
    .mount('#app')
