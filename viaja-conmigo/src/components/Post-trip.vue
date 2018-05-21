<template>
  <div>
<pp-Trip></pp-Trip>
  </div>


</template>

<script>




import NewTrip from '../components/NewTrip.vue'
import {db} from '../firebase'
import {storage} from '../firebase'
import {auth} from './../firebase'
let tripsRef=db.ref('trips')


export default{
  data(){
    return{
      trips:[],
     

    } 
    
    },
    firebase:{
      trips:{
        source:db.ref("trips")
      },

    },
    components:{
      ppTrip:NewTrip,
  
  },
  computed:{
      currentUserId: function(){

          if(auth.currentUser){
                    console.debug(auth.currentUser.uid);
              return auth.currentUser.uid;
        }else{
              return null;
        }
      }
    }
}
</script>

