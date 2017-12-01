import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import First from '@/first'

Vue.use(Router)

let routerConfig = new Router({
  routes: [
    { path: '/index', name: 'Hello', component: App },
    { path: '/first', name: 'First', component: First },
    { path: '/', redirect: '/index' },
  ]
})

export default routerConfig
