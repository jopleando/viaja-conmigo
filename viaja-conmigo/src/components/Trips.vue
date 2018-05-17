<template>


	<div>
    
    <table class="table">
      <thead class="thead-default">
        <tr>
            <th>Pais origen</th>
            <th>Origen</th>
            <th> Destino </th>
            <th> Ciudad destino</th>
            <th> Fecha ida</th>
            <th> Vuelta</th>
            <th> Sexo</th>
           
        </tr>
       </thead>
       <tbody>
        <tr v-for="trip in trips">
          <td>{{trip.cityOrigin1}}</td>
          <td>{{trip.countryOrigin1}}</td>
          <td>{{trip.cityDestination1}}</td>
          <td>{{trip.countryDestination1}}</td>
          <td>{{trip.travelDate2}}</td>
          <td>{{trip.travelDate3}}</td>
          <td>{{trip.sexSelected1}}</td>
          <td>{{trip.description1}}</td> 
        </tr>    
       </tbody>
    </table>
   
</div>
   
</template>


<script>

import {db} from '../firebase'
import {storage} from '../firebase'
let tripsRef=db.ref('trips')



export default{
  
   
data(){
    return{
        sending:false,
        trips:[]
        


        
     }
 },
 firebase:{
  trips:{
    source:db.ref("trips")
  },
 }
}
    /*ready: function () {
    
    var _this = this
    websitesRef.on('value', function(snapshot){
      _this.postLink = snapshot.val()
    }
  */



</script>