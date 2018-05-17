<template>

<nav class="navbar navbar-light bg-light static-top row">

  <div class="container-fluid">
      <a href="/" class="title navbar-brand"><img src="src/assets/logo1.png" class="img-fluid" alt="Responsive image" height="50px" width="50px"> Viaja-Conmigo</a>
     <div class="user-tools form-group mt-1 ml-5">
			<ul class="nav ml-4">
				<router-link :to="{name :'postLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Publicar viaje</a></router-link>
				<router-link :to="{name :'datesLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Datos practicos</a></router-link>
				<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Quienes somos</a></router-link>
			
			</ul>
		</div>
		<div class=" mt-1 ml-4 ">
			<ul class="nav ml-4">
				<router-link :to="{name :'loginLink'}" tag="li" class="nav-item  mr-3"><a class="btn btn-primary" href="#">Inicia sesión </a></router-link>
				<router-link :to="{name :'registerLink'}" tag="li" class="nav-item mr-3"><a class="btn btn-primary" href="#"> Registrate </a></router-link>
				<router-link :to="{name :'profileLink'}" tag="li" class="nav-item mr-3"><a class="btn btn-primary" href="#"> Nombre usuario </a> </a></router-link>
			</ul>
		</div>
       
   </div>

</nav>


	<!--<div class="row header-top align-items-center ">
			<nav class="col-md-2">
				<a href="/" class="title navbar-brand"><img src="src/assets/logo1.png" class="img-fluid" alt="Responsive image" height="50px" width="50px"></a>
				
			</nav>
		<div class="col-md-5 user-tools form-group mt-1">
				<ul class="nav">
						<router-link :to="{name :'postLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Publicar viaje</a></router-link>
						<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Quienes somos</a></router-link>
						<router-link :to="{name :'datesLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Datos practicos</a></router-link>
					</ul>
		</div>
		<div class="col-md-5 mt-1">
				<ul class="nav">
						<router-link :to="{name :'loginLink'}" tag="li" class="nav-item"><a class="nav-link" href=""> Inicia sesión </a></router-link>
						<router-link :to="{name :'registerLink'}" tag="li" class="nav-item"><a class="nav-link" href=""> Registrarse </a></router-link>
						<router-link :to="{name :'profileLink'}" tag="li" class="nav-item"><a class="nav-link" href=""> Nombre del usuario </a></router-link>
					</ul>
		</div>
	</div>-->
</template>

<script>



export default{
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

.navbar{
	    height: 67px;
	    border-bottom: 1px solid #e4e4e4
}

.title{
		font-family: 'Shadows Into Light', cursive;
		font-size: 23px;

}

.header-top{
	
}
a{
	color:black;

}

.img-fluid{
  position: relative;
  left: -1px;
  top: 5px;
}

</style>
