
import VueRouter from 'vue-router'
import VueFire from 'vuefire'


import { routes } from './routes.js'
import { auth } from './firebase'
//import { storage } from './firebase'
import App from './App.vue'
import Vue from 'vue'


Vue.use(VueRouter);

const router = new VueRouter ({
	routes, 
	mode: 'history'
})

/*router.beforeEach((to, from, next)=>{
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

})*/

Vue.use(VueFire)
Vue.use(VueRouter)



var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App),
  ready() {
        // value = snapshot.val() | key = snapshot.key
        websitesRef.on('value', function(snapshot){
          console.log(snapshot.val())
          ;
          vm.websites =[];
          var objeto= snapshot.val();
          for (var propiedad in objeto){
            vm.websites.unshift({
              '.key': propiedad,
              
      countryOrigin: objeto[propiedad].countryOrigin,
      countryDestination: objeto[propiedad].countryDestination,
      travelDate: objeto[propiedad].travelDate,
      travelDate1:objeto[propiedad].travelDate1,
      sexSelected: objeto[propiedad].sexSelected,
      description: objeto[propiedad].description,
      cityOrigin: objeto[propiedad].cityOrigin,
      cityDestination: objeto[propiedad].cityDestination


      

            })
          }

         
          });
      
  }

});
