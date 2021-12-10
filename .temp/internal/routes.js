/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\xingkong\\lzx-vuepress\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-7b03c9bc",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7b03c9bc").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-62e832f2",
    path: "/bar/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-62e832f2").then(next)
    },
  },
  {
    path: "/bar/index.html",
    redirect: "/bar/"
  },
  {
    name: "v-2f1d48d8",
    path: "/bar/four.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-2f1d48d8").then(next)
    },
  },
  {
    name: "v-1fb5af2c",
    path: "/bar/three.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1fb5af2c").then(next)
    },
  },
  {
    name: "v-fa9274e8",
    path: "/foo/one.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-fa9274e8").then(next)
    },
  },
  {
    name: "v-e9468d68",
    path: "/foo/two.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e9468d68").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]