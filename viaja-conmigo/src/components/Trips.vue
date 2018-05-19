<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12 col-md-offset-1">

            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6 mb-2">
                    <h3 class="panel-title "> Tu viaje publicado </h3>
                  </div>
                </div>
              </div>
              <div class="panel-body table-responsive">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th><em class="fa fa-cog"></em></th>
                        <th>Tu pais</th>
                        <th>Destino</th>
                        <th>Género</th>
                        <th>Idioma</th>
                        <th>Presupuesto</th>
                        <th>Alojamiento</th>
                        <th>Fecha</th>
                    </tr> 
                  </thead>
                  <tbody id="myTable">
                
                          <tr v-for="trip in trips">
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                                <td>{{trip.cityOrigin}}</td>
                                <td>{{trip.cityDestination}}</td>
                                <td>{{trip.sexSelected}}</td>
                                <td>{{trip.language}}</td>
                                <td>{{trip.dayMoney}}</td>
                                <td>{{trip.hostDay}}</td>
                                <td>{{trip.month1}}/{{trip.year1}}</br
                                  > a </br>{{trip.month2}}/{{trip.year2}}</td>
                              
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
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
<style>
  @import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

.panel-title{
  font-family: 'Shadows Into Light', cursive;
  color:black;
}
  .panel-table .panel-body{
  padding:0;
}
.table-responsive {height:200px;}

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
.panel-table .panel-footer .col{
 line-height: 34px;
 height: 34px;
}

.panel-table .panel-heading .col h3{
 line-height: 30px;
 height: 30px;
}

.panel-table .panel-body .table-bordered > tbody > tr > td{
  line-height: 34px;
}
</style>