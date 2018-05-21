
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import {notif} from 'firebase'
import { routes } from './routes.js'
import { auth } from './firebase'
//import { storage } from './firebase'
import App from './App.vue'
import Vue from 'vue'


Vue.use(VueRouter);

const router = new VueRouter ({
	routes 
	
})

router.beforeEach((to, from, next)=>{
	let currentUser = auth.currentUser;
  let isLogin = to.matched.some( record => record.name=={name:"loginLink"})
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next({name:'loginLink'})
  }else if(currentUser && isLogin){
    next({name:'homeLink'})
  }else{
    next()
  }

})

Vue.use(VueFire)




var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
  

});
