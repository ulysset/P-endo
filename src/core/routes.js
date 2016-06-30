// Import vue router
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// Create routes
const router = new Router()
router.map({
  '/': {
    component: require('components/Home.vue')
  },
  '/enfants': {
    component: require('components/Enfants.vue')
  },
  '/dommage': {
    component: require('components/Dommage.vue')
  },
  '/maladies': {
    component: require('components/Maladies.vue')
  }
  // '/country/:key': {
  //   component: require('components/country')
  // }
})
router.redirect({
  '*': '/'
})

export default router
