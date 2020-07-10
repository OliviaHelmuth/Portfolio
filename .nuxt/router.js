import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b5e47fc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _012de562 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _458ceb4a = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _7b1622c1 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _5b5e47fc,
    name: "about"
  }, {
    path: "/contact",
    component: _012de562,
    name: "contact"
  }, {
    path: "/projects",
    component: _458ceb4a,
    name: "projects"
  }, {
    path: "/",
    component: _7b1622c1,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
