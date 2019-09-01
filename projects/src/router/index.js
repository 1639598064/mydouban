import Vue from 'vue'
import Router from 'vue-router'
// import model from '@/components/model'
import register from '../pages/register'
import login from '../pages/login'
import details from '../pages/details'
import book from '../pages/book'
import broadcast from '../pages/broadcast'
import change from '../pages/change'
import group from '../pages/group'
import movies from '../pages/movies'
import index from '../pages/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/broadcast',
      name: 'broadcast',
      component: broadcast
    },
    {
      path: '/change',
      name: 'change',
      component: change
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }

  ]
})
