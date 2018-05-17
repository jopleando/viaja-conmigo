<template>
  <div>
<pp-Trip></pp-Trip>
  </div>


</template>

<script>




import NewTrip from '../components/NewTrip.vue'
import {db} from '../firebase'
import {storage} from '../firebase'
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
  
  }
}
</script>

