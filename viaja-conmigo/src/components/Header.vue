<template>
	<div class="row header-top align-items-center">
			<nav class="col-md-2">
				<a href="/" class="title navbar-brand"><img src="src/assets/logo1.png" class="img-fluid" alt="Responsive image" height="50px" width="50px"></a>
				
			</nav>
		<div class="col-md-6 user-tools form-group mt-1">
				<ul class="nav">
						<router-link :to="{name :'postLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Publicar viaje</a></router-link>
						<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Quienes somos</a></router-link>
						<router-link :to="{name :'datesLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Datos practicos</a></router-link>
					</ul>
		</div>
		<div class="col-md-4 user-tools form-group mt-1">
				<ul class="nav">
						<router-link :to="{name :'loginLink'}" tag="li" class="nav-item"><a class="nav-link" href=""> Inicia sesión </a></router-link>
						<router-link :to="{name :'registerLink'}" tag="li" class="nav-item"><a class="nav-link" href=""> Registrarse </a></router-link>
					</ul>
		</div>
	</div>
</template>
<style>

.header-top{
	background-color: #05b2af;
}
a{
	color:black;
}

.img-fluid{
  position: relative;
  left: -5px;
  top: 5px;
}

</style>
