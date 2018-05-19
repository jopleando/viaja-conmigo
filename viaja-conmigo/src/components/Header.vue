<template>

<nav class="navbar navbar-light  static-top row">

  <div class="container-fluid">
      <a href="/" class="title navbar-brand"><img src="src/assets/logo1.png" class="img-fluid" alt="Responsive image" height="50px" width="50px"></a>
      <h2 class="first-title">Viaja-conmigo</h2>
     <div class="user-tools form-group mt-1 ml-5">
			<ul class="nav ml-4">
				<router-link :to="{name :'postLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Publicar viaje</a></router-link>
				<router-link :to="{name :'shareLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Compartir</a></router-link>
				<router-link :to="{name :'datesLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Datos practicos</a></router-link>
				<router-link :to="{name :'aboutLink'}" tag="li" class="nav-item"><a class="nav-link" href="">Quienes somos</a></router-link>
			
			</ul>
		</div>
		<div class=" mt-1 ml-4 ">
			<ul class="nav ml-4">
				<router-link :to="{name :'loginLink'}" tag="li" class="nav-item  mr-3"><a class="btn btn-1" href="#">Inicia sesión </a></router-link>
				<router-link :to="{name :'registerLink'}" tag="li" class="nav-item mr-3"><a class="btn btn-1" href="#"> Registrate </a></router-link>
				<router-link :to="{name :'panelLink'}" tag="li" class="nav-item mr-3"><a class="btn  btn-1 " href="#"> Perfil </a> </a></router-link>
			</ul>
		</div>   
   </div>
</nav>


	
</template>

<script>



export default{
	}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

*{
	font-family:Circular,"Helvetica Neue",Helvetica,Arial;
}
.navbar{
	  height: 57px;
    border-bottom: 1px solid #e4e4e4;
    background-color: #fff;
    background: rgba(255, 255, 255, 0.51);
    min-height: 60px;
    position: relative;
    box-shadow: inset 0 -1px 0 0 #ffffff0d, 0 1px 6px rgba(0,0,0,.1);
}

.first-title{
		font-family: 'Shadows Into Light', cursive;
    font-size: 26px;
    position: relative;
    left: -43px;
    top: 3px;
    color: black;


}

.user-tools{
	    position: relative;
    top: 7px;
    left: -25px;
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


.btn {
    flex: 1 1 auto;
    /* margin: 10px; */
    /* padding: 30px; */
    text-align: center;
    /* text-transform: uppercase; */
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
 }

/* Demo Stuff End -> */

/* <- Magic Stuff Start */

.btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
}



/* Magic Stuff End -> */

</style>
