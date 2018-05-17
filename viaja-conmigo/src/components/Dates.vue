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
        <tr v-for="website in websites">
          <td>{{website.cityOrigin}}</td>
          <td>{{website.countryOrigin}}</td>
          <td>{{website.cityDestination}}</td>
          <td>{{website.countryDestination}}</td>
          <td>{{website.travelDate}}</td>
          <td>{{website.travelDate1}}</td>
          <td>{{website.sexSelected}}</td>
          <td>{{website.description}}</td> 
        </tr>    
       </tbody>
    </table>
    <table class="table">
      <thead class="thead-default">
        <tr>
            <th>Origen</th>
        </tr>
       </thead>
       <tbody>
        <tr v-for="list in listCity">
          <td>{{list.menuSelected}}</td>
          <td>{{list.selecteduserCountry}}</td>
          <td>{{list.selecteduserCity}}</td>
        
        </tr>    
       </tbody>
    </table>
</div>
   
</template>


<script>

import {db} from '../firebase'
import {storage} from '../firebase'
let websitesRef=db.ref('websites')
let listRef= db.ref('listCity')


export default{
  
   
data(){
    return{
        sending:false,
        websites:[],
        listCity:[]


        
     }
 },
 firebase:{
  websites:{
    source:db.ref("websites")
  },
  listCity:{
    source:db.ref("listCity")
  }
 }
}
    /*ready: function () {
    
    var _this = this
    websitesRef.on('value', function(snapshot){
      _this.postLink = snapshot.val()
    }
  */



</script>

