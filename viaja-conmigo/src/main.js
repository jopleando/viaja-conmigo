import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueFire from 'vuefire'
import { routes } from './routes.js'
import { auth } from './firebase'
//import { storage } from './firebase'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter ({
	routes, 
	mode: 'history'
})

router.beforeEach((to, from, next)=>{
	let currentUser = auth.currentUser
  let isLogin = to.matched.some( record => record.name=="login")
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next("login")
  }else if(currentUser && isLogin){
    next("profile")
  }else{
    next()
  }

})

//Vue.use(VueFire)
Vue.use(VueRouter)

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
