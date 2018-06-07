<template>
  
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12 col-md-offset-1">
            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6 mb-2">
                    <h3 class="panel-title "> En busca del Compañero de Viaje Perfecto </h3>
                  </div>
                </div>
              </div>
              <div class="panel-body table-responsive mt-3">
                <table class="table table-striped table-bordered table-list">
                 <thead>
                    <tr>
                        <th>Tu pais</th>
                        <th>Su pais</th>
                        <th>Destino</th>
                        <th>Genero</th>
                        <th>Idioma</th>
                        <th>Presupuesto</th>
                        <th>Alojamiento</th>
                        <th>Fecha</th>
                    </tr> 
                  </thead>
                  <tbody>
                      <tr v-for="website in websites"v-bind:key="website['.key']">
                        <td>{{website.cityOrigin}}</td>
                        <td>{{website.cityOriginPartner}}</td>
                        <td>{{website.cityDestination}}</td>
                        <td>{{website.sexSelected}}</td>
                        <td>{{website.language}}</td>
                        <td>{{website.dayMoney}}</td>
                        <td>{{website.hostDay}}</td>
                        <td>{{website.year1}}</br>{{website.year2}}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
  <div class="col-md-12 mb-5 mt-5">
    <button class="btn btn-1 btn-primary" @click="filterData">Muestra los usuarios </button>
  </div>

      <div class="container p-3" v-for="result in results ">
      
        <div class="row">
          <div class="user-1 col-md-4">
            <div class="user-profile col-md-10 ">
              <img class="image-1 img-fluid  img-rounded" src="http://nabeel.co.in/files/bootsnipp/team/1.jpg"/>
               <h2 class="name-1 text-center mb-3"> Pepa Flores</h2>
                <p> De: {{result.cityOriginPartner}}</p>
                <p> A : {{result.cityDestination}}</p>
                <p> Idioma : {{result.language}}</p>
                <p>Presupuesto :{{result.dayMoney}}</p>
                <p>Hospedaje: {{result.hostDay}}</p>
                <p> Fecha: {{result.year1}}</p>{{website.year2}}</p>
                <router-link :to="{name :'user1Link'}" class="nav-item d-flex align-content-center"><a class="btn  btn-1 " href="#"> Mira su perfil</a></router-link>
              </div>
            </div>
            <div class="user-1 col-md-4">
              <div class="user-profile col-md-10">
              <img class="image-1 img-fluid  img-rounded" src="http://nabeel.co.in/files/bootsnipp/team/4.jpg"/>
               <h2 class="name-1"> Ramon Jimenez</h2>
                <p> De: {{result.cityOriginPartner}}</p>
                <p> A : {{result.cityDestination}}</p>
                <p> Idioma : {{result.language}}</p>
                <p>Presupuesto :{{result.dayMoney}}</p>
                <p>Hospedaje: {{result.hostDay}}</p>
                <p> Fecha: {{result.year1}}</p>{{website.year2}}</p>
                <router-link :to="{name :'user2Link'}" class="nav-item d-flex align-content-center "><a class="btn  btn-1 " href="#"> Mira su perfil</a></router-link>
              </div>
            </div>
            <div class="user-1 col-md-4">
              <div class="user-profile col-md-10">
              <img class="image-1 img-fluid  img-rounded" src="http://nabeel.co.in/files/bootsnipp/team/3.jpg"/>
               <h2 class="name-1"> Rocio Zafra </h2>
                <p> De: {{result.cityOriginPartner}}</p>
                <p> A : {{result.cityDestination}}</p>
                <p> Idioma : {{result.language}}</p>
                <p>Presupuesto :{{result.dayMoney}}</p>
                <p>Hospedaje: {{result.hostDay}}</p>
                <p> Fecha: {{result.year1}}</p>{{website.year2}}</p>
               <router-link :to="{name :'user2Link'}" class="nav-item d-flex align-content-center "><a class="btn  btn-1 " href="#"> Mira su perfil</a></router-link>
              </div>
            </div>
            <div class="user-1 col-md-4">
              <div class="user-profile col-md-10">
              <img class="image-1 img-fluid  img-rounded" src="http://nabeel.co.in/files/bootsnipp/team/2.jpg"/>
               <h2 class="name-1"> Tania Marin</h2>
                <p> De: {{result.cityOriginPartner}}</p>
                <p> A : {{result.cityDestination}}</p>
                <p> Idioma : {{result.language}}</p>
                <p>Presupuesto :{{result.dayMoney}}</p>
                <p>Hospedaje: {{result.hostDay}}</p>
                <p> Fecha: {{result.year1}}</p>{{website.year2}}</p>
                <router-link :to="{name :'user1Link'}" class="nav-item d-flex align-content-center "><a class="btn  btn-1 " href="#"> Mira su perfil</a></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>

import {db} from '../firebase'
import {auth} from './../firebase'
import {storage} from '../firebase'
let websitesRef=db.ref('websites')



export default{
  
   
data(){
    return{
        sending:false,
        results:[],
        websites:[],
        website:{
          "cityDestination" : "Anguilla",
          "cityOriginPartner":'',

        }
        
     }
 
 },
  
 firebase:{
  websites:{
    source:db.ref("websites"),
    asObject:true,
  }
  

 }, 
 methods:{
  filterData:function() {
   
    
    //var long = this.websites
    //console.log(long)
    for(var item in this.websites){
      console.log(item)
      if (this.website.cityDestination = this.websites[item].cityDestination)
      {
        this.results.push(this.websites[item])
      }else{
        console.log('error')
      }

    }
  },
  deleteFilter(website){
    websitesRef.child(website['.key']).remove();
  }
  
 }
   
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

.name-1{
font-family: 'Shadows Into Light', cursive;
color:black;
border-bottom: 1px solid #000000;
}
p{
color:black;
}

.panel-title{
font-family: 'Shadows Into Light', cursive;
color:black;
}
.panel-table .panel-body{
padding:0;
background-color: #ffffff8f;
}


.panel-table .panel-body .table-bordered{
border-style: none;
margin:0;
color: black;
}

.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type {
text-align:center;
width: 100px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:last-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:last-of-type {
border-right: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr > th:first-of-type,
.panel-table .panel-body .table-bordered > tbody > tr > td:first-of-type {
border-left: 0px;
}

.panel-table .panel-body .table-bordered > tbody > tr:first-of-type > td{
border-bottom: 0px;
}

.panel-table .panel-body .table-bordered > thead > tr:first-of-type > th{
border-top: 0px;
}

.panel-table .panel-footer .pagination{
margin:0; 
}

/*
used to vertically center elements, may need modification if you're not using default sizes.
*/
.image-1{
background-color:rgba(255, 255, 255, 0.075);  
border-radius: 50%; margin: 20px auto; padding:10px; border: 1px solid #C7C7D0;
margin-top:50px;
}

.user-profile{
background-color: #ffffff8a;
/* padding: 4px; */
margin: 10px;
padding-right: 29px;
padding-left: 29px;
padding-bottom: 8px;
}
</style>
