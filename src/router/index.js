import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const FirstArticle = () => import('@/components/articles/FirstArticle')
const Quasar = () => import('@/components/articles/Quasar')
const Webpack = () => import('@/components/articles/Webpack')
const Cordova = () => import('@/components/articles/Cordova')
const VueComponent = () => import('@/components/articles/Vue')
const Express = () => import('@/components/articles/Express')
const NodeComponent = () => import('@/components/articles/Node')
const Ubuntu = () => import('@/components/articles/Ubuntu')
const Ubuntuhands = () => import('@/components/articles/UbuntuHands')
const Mongodb = () => import('@/components/articles/Mongodb')
const Mongoose = () => import('@/components/articles/Mongoose')
const Building = () => import('@/components/articles/Building')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/firstarticle',
      name: 'first article',
      component: FirstArticle
    },
    {
      path: '/quasar',
      name: 'quasar',
      component: Quasar
    },
    {
      path: '/webpack',
      name: 'webpack',
      component: Webpack
    },
    {
      path: '/cordova',
      name: 'cordova',
      component: Cordova
    },
    {
      path: '/vue',
      name: 'vue',
      component: VueComponent
    },
    {
      path: '/express',
      name: 'express',
      component: Express
    },
    {
      path: '/node',
      name: 'node',
      component: NodeComponent
    },
    {
      path: '/ubuntu',
      name: 'ubuntu',
      component: Ubuntu
    },
    {
      path: '/ubuntuhands',
      name: 'ubuntuhands',
      component: Ubuntuhands
    },
    {
      path: '/mongodb',
      name: 'mongodb',
      component: Mongodb
    },
    {
      path: '/mongoose',
      name: 'mongoose',
      component: Mongoose
    },
    {
      path: '/building',
      name: 'building',
      component: Building
    }
  ]
})
