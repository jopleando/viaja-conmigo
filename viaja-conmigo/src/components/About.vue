<template>
	<div class="container mt-4">
    <div class="row">
    
        <div class="col-md-12 col-md-offset-1">

            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6 mb-2">
                    <h3 class="panel-title "> En busca del compañero de viaje Perfecto </h3>
                  </div>
                  <!--<div class="col col-xs-6 text-right">
                    <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button>
                  </div>-->
                </div>
              </div>
              <div class="panel-body table-responsive">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th><em class="fa fa-cog"></em></th>
                        <th>Tu pais</th>
                        <th>Su pais</th>
                        <th>Destino</th>
                        <th>Sexo</th>
                        <th>Idioma</th>
                        <th>Presupuesto</th>
                        <th>Alojamiento</th>
                        <th>Fecha</th>
                    </tr> 
                  </thead>
                  <tbody id="myTable">
                
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                            <td class="hidden-xs">1</td>
                          <tr v-for="website in websites">
										            <td>{{website.cityOrigin}}</td>
										            <td>{{website.cityOriginPartner}}</td>
										            <td>{{website.sexSelected}}</td>
										            <td>{{website.language}}</td>
										            <td>{{website.dayMoney}}</td>
										            <td>{{website.hostDay}}</td>
										            <td>{{website.dayMoney}}</td>
										            <td>{{website.month1}}/{{website.year1}}</br>{{website.month2}}/{{website.year2}}</td>
                            
                          </tr>
                          <tr>
                            <td align="center">
                              <a class="btn btn-default"><em class="fa fa-pencil"></em></a>
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                            <td class="hidden-xs">2</td>
                            <td>myMp3</td>
                            <td>amart</td>
                            <td>am compo</td>
                            <td>ampub</td>
                            <td>amgen</td>
                            <td>ambit</td>
                            <td></td>
                           
                          </tr>
                        </tbody>
                </table>
            
              </div>
            </div>
		</div>
	</div>
</div>

</template>

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