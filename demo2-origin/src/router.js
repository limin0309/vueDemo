import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Info from './views/Info.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/info',
      name: 'info',
      component: Info
    }, {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'list',
          name:'list',
          component:()=>import(/* webpackChunkName: "list" */ './views/List.vue')
        },
        {
          path:'user',
          name:'user',
          component:()=>import(/* webpackChunkName: "user" */ './views/User.vue')
        }
      ]

    }, {
      path: '/add',
      name: 'add',
      component:()=>import(/* webpackChunkName: "user" */ './views/Add.vue')
    }
  
  ]
})
