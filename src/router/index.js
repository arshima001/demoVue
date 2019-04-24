import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/components/IndexComponent'
import TestComponent from '@/components/TestComponent'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import DashboardPage from '@/pages/DashboardPage'
import TestValidations from '@/pages/TestValidations'
import TestValidations1 from '@/pages/TestValidations1'
import Guard from '../services/middleware'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'TestComponent',
      component: TestComponent
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/testValidations',
      name: 'TestValidations',
      component: TestValidations
    },
     {
      path: '/testValidations1',
      name: 'TestValidations1',
      component: TestValidations1
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      beforeEnter: Guard.auth
    }]
})
