import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import CoursePage from '@/components/CoursePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, 
    {
      path: '/course/:id',
      name: 'Course',
      component : CoursePage 
    }
  ],
})
