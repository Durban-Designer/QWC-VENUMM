
export default [
  {path: '/', component: () => import('pages/Home')},
  {path: '/Login', component: () => import('pages/Login')},
  {path: '/Account', component: () => import('pages/Account')},
  {path: '/About', component: () => import('pages/About')},
  {path: '/Store', component: () => import('pages/Store')},
  {path: '/Basics', component: () => import('pages/articles/Basics')},
  {path: '/Quasar', component: () => import('pages/articles/Quasar')},
  {path: '/Webpack', component: () => import('pages/articles/Webpack')},
  {path: '/Cordova', component: () => import('pages/articles/Cordova')},
  {path: '/Vue', component: () => import('pages/articles/Vue')},
  {path: '/Express', component: () => import('pages/articles/Express')},
  {path: '/Node', component: () => import('pages/articles/Node')},
  {path: '/Ubuntu', component: () => import('pages/articles/Ubuntu')},
  {path: '/UbuntuHands', component: () => import('pages/articles/UbuntuHands')},
  {path: '/mongodb', component: () => import('pages/articles/Mongodb')},
  {path: '/mongoose', component: () => import('pages/articles/Mongoose')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
