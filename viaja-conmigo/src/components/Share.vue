<template>
  <div class="container">
      <div class="row col-md-12 col-md-offset-2 custyle">
      <table class="table table-striped custab">
      <thead>
          <tr>
              <th>Pais salida</th>
              <th> Ciudad salida</th>
              <th>Pais destino</th>
              <th>Ciudad destino</th>
              <th>Sexo compañero</th>
              <th>Fechas</th>
          </tr>
      </thead>
          <tr v-for="website in websites">
            <td>{{website.cityOrigin}}</td>
            <td>{{website.countryOrigin}}</td>
            <td>{{website.cityDestination}}</td>
            <td>{{website.countryDestination}}</td>
            <td>{{website.sexSelected}}</td>
            <td> <strong>Del</strong> {{website.travelDate}} <strong>a</strong> {{website.travelDate1}}</td> 
          </tr>
            <td class="text-center">

                          <button class="btn btn-sm btn-outline-danger" 
                            type="button" 
                            @click="edit(website)"
                            > Editar </button>

                            <button class="btn btn-sm btn-outline-danger" 
                            type="button" 
                            @click="deleteFilter(website)"
                            > X </button>
            </td>
            <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
      </table>
    </div>
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


        


        
     }
 },
 firebase:{
  websites:{
    source:db.ref("websites")
  }
  

 }, 
 methods:{
  
  edit(){

  }
 },
 deleteFilter(website){
        this.websites.splice(this.websites.indexOf(website))
      } 

    }

    /*ready: function () {
    
    var _this = this
    websitesRef.on('value', function(snapshot){
      _this.postLink = snapshot.val()
    }
  */



</script>
