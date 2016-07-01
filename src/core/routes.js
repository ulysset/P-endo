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
    name: 'dommage',
    component: require('components/Dommage.vue')
  },
  '/maladies': {
    component: require('components/Maladies.vue')
  },
  '/video_intro': {
    component: require('components/video_intro.vue')
  },
  '/chiffres_chimique': {
    component: require('components/chiffres_chimique.vue')
  },
  '/PE': {
    component: require('components/PE.vue')
  },
  '/video_constats': {
    component: require('components/video_constats.vue')
  },
  '/video_experiment': {
    component: require('components/video_experiment.vue')
  },
  '/constats': {
    component: require('components/constats.vue')
  },
  '/societe': {
    component: require('components/societe.vue')
  },
  '/conclusion': {
    component: require('components/conclusion.vue')
  }
})
router.redirect({
  '*': '/',
  'temp': '/dommage'
})

export default router
