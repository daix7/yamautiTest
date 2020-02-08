import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld'
import Main from '../components/Main'
import TimeTable from '../views/TimeTable'
import ClassDay from '../components/ClassDay'
import CheckUpCalendar from '../components/CheckUpCalendar'
import Menu from '../components/Menu'
import MypageToolbar from '../components/MypageToolbar'
import Calendar from '../components/Calendar'
// import VueGoodTablePlugin from "vue-good-table";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
      },
      {
        path: '/timetable',
        name: 'timetable',
        component: TimeTable
      },
    ]
  },
  
  {
    path: '/classday',
    name: 'classday',
    component: ClassDay
  },
  {
    path: '/CheckUpCalendar',
    name: 'CheckUpCalendar',
    component: CheckUpCalendar
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/MypageToolbar',
    name: 'MypageToolbar',
    component: MypageToolbar
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
