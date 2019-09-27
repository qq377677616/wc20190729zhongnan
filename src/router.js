import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  mode : 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('views/main.vue')
    },
    {
      path: '/index',
      name: 'index',
      component:  () => import('views/Index.vue'),
      children : [
        {
          path: '/index/about',
          name: 'about',
          component: () => import('views/About.vue'),
        },
        {
          path: '/index/vision',
          name: 'vision',
          component: () => import('views/Vision.vue')
        },
        {
          path: '/index/innovation',
          name: 'innovation',
          component: () => import('views/Innovation.vue')
        },
        {
          path: '/index/innovation/functions',
          name: 'functions',
          component: () => import('views/other/Functions.vue')
        },
        {
          path: '/index/innovation/space',
          name: 'space',
          component: () =>  import('views/other/Space.vue'),
        },
        {
          path: '/index/duty',
          name: 'duty',
          component: () => import('views/Duty.vue')
        },
        {
          path: '/index/strength',
          name: 'strength',
          component: () => import('views/Strength.vue')
        },
        {
          path: '/index/strength/commercail',
          name: 'commercail',
          component: () => import('views/other/Commercail.vue')
        },
        {
          path: '/index/strength/development',
          name: 'development',
          component: () => import('views/other/Development.vue')
        },
        {
          path: '/index/strength/operation',
          name: 'operation',
          component: () => import('views/other/Operation.vue')
        },
        {
          path: '/index/strength/resource',
          name: 'resource',
          component: () => import('views/other/Resource.vue')
        },
        {
          path: '/index/contact',
          name: 'contact',
          component: () => import('views/Contact.vue')
        }
      ],
      redirect : () => {
        var id = localStorage.getItem('selectIndex')
        if(id == 0) {
          return { name: 'about', query: null }
        }else if(id == 1) {
          return { name: 'innovation', query: null }
        }else if(id == 2) {
          return { name: 'strength', query: null }
        }else if(id == 3) {
          return { name: 'duty', query: null }
        }else if(id == 4){
          return { name: 'vision', query: null }
        }
      }
    }

  ]
})

