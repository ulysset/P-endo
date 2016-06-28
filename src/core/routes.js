// Import vue router
import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

// Create routes
const router = new Router()
router.map({
  '/': {
    component: require('components/Hello.vue')
  },
  '/foo': {
    component: require('components/Foo.vue')
  },
  '/bar': {
    component: require('components/Bar.vue')
  }
  // '/country/:key': {
  //   component: require('components/country')
  // }
})
router.redirect({
  '*': '/'
})

export default router
