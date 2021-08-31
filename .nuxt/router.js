import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6b89d37a = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _66f7e3ae = () => interopDefault(import('..\\pages\\admin\\contracts.vue' /* webpackChunkName: "pages/admin/contracts" */))
const _ed90aa1e = () => interopDefault(import('..\\pages\\admin\\media.vue' /* webpackChunkName: "pages/admin/media" */))
const _54740e36 = () => interopDefault(import('..\\pages\\admin\\property_info.vue' /* webpackChunkName: "pages/admin/property_info" */))
const _04054a61 = () => interopDefault(import('..\\pages\\admin\\room_details.vue' /* webpackChunkName: "pages/admin/room_details" */))
const _40f26cad = () => interopDefault(import('..\\pages\\properties\\_property_id\\index.vue' /* webpackChunkName: "pages/properties/_property_id/index" */))
const _ce687b74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _6b89d37a,
    name: "admin",
    children: [{
      path: "contracts",
      component: _66f7e3ae,
      name: "admin-contracts"
    }, {
      path: "media",
      component: _ed90aa1e,
      name: "admin-media"
    }, {
      path: "property_info",
      component: _54740e36,
      name: "admin-property_info"
    }, {
      path: "room_details",
      component: _04054a61,
      name: "admin-room_details"
    }]
  }, {
    path: "/properties/:property_id",
    component: _40f26cad,
    name: "properties-property_id"
  }, {
    path: "/",
    component: _ce687b74,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
