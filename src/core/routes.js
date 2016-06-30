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
  '/video_intro': {
    component: require('components/video_intro.vue')
  },
  '/chiffres_chimique': {
    component: require('components/chiffres_chimique.vue')
  }
  // '/country/:key': {
  //   component: require('components/country')
  // }
})
router.redirect({
  '*': '/'
})

export default router
