import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ImagesGallery from '../views/ImagesGallery.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'imagesGallery',
    component: ImagesGallery
  },
  {
    path: '/dom-elements-generator',
    name: 'domElementsGenerator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "domGenerator" */ '../views/DomGenerator.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
