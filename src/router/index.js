import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./../views/Dashboard')
  },
  {
    path: '/students',
    name: 'student-page',
    component: () => import('./../views/pages/StudentPage')
  },
  {
    path: '/teachers',
    name: 'teacher-page',
    component: () => import('./../views/pages/TeacherPage')
  },
  {
    path: '/schools',
    name: 'school-page',
    component: () => import('./../views/pages/SchoolPage')
  },
  {
    path: '/centers',
    name: 'center-page',
    component: () => import('./../views/pages/CenterPage')
  },
  {
    path: '/grades',
    name: 'grade-page',
    component: () => import('./../views/pages/GradePage')
  },
  {
    path: '/inquiries',
    name: 'inquiry-page',
    component: () => import('./../views/pages/admin/Inquiries')
  },
  {
    path: '/departments',
    name: 'department-page',
    component: () => import('./../views/pages/admin/Departments')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
