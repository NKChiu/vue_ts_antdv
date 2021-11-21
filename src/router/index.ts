import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from "@/pages/MainPage.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/", name: 'MainPage', component: MainPage, meta: {title: "mainPage", icon: ""}, redirect: 'menu1/Page1',
    children:[
      {path: 'menu1/page1', name: 'Page1', component: () => import('@/pages/menu1/Page1.vue'), meta: { title: 'page1', icon: 'tool'} },
      {path: 'menu1/page2', name: 'Page2', component: () => import('@/pages/menu1/Page2.vue'), meta: { title: 'page2', icon: 'tool'} },
      {path: 'menu2/page3', name: 'Page3', component: () => import('@/pages/menu2/Page3.vue'), meta: { title: 'page3', icon: 'tool'} },
      {path: 'menu2/page4', name: 'Page4', component: () => import('@/pages/menu2/Page4.vue'), meta: { title: 'page4', icon: 'tool'} },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
