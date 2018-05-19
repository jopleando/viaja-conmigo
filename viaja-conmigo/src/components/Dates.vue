<template>
  <div class="card row">
  <article class="card-group-item col-md-3">
    <header class="card-header"><h6 class="title">Pais salida</h6></header>
    <div class="filter-content">
      <div class="list-group list-group-flush" v-for="website in websites">
        <a href="#" class="list-group-item">{{website.cityOrigin}} <span class="float-right badge badge-light round">142</span> </a>
      </div>  <!-- list-group .// -->
    </div>
  </article> 
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
            <th class="text-center">Action</th>
        </tr>
    </thead>
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
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          <td clas="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
          
          <!--<tr v-for=>
                <td>Origen</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            </tr>
            <tr>
                <td>Ciudad Origen</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Editar</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> X </a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Blogs</td>
                <td>Parent Blogs</td>
                <td class="text-center"><a class='btn btn-info btn-xs' href="#"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" class="btn btn-danger btn-xs"><span class="glyphicon glyphicon-remove"></span> Del</a></td>
            </tr>-->
    </table>
    </div>
</div>
</div>
</template>