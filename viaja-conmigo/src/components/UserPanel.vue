<template>
<div id="user1" class="col-12">
		
		<div class="container">
			<img class="image" src="https://templated.co/items/demos/visualize/images/avatar.jpg"/>
      <div class="row">
        <div class="col-6">
          <button class="btn btn-1 button-exit" @click="logout">Cerrar sesión </button>
        </div>

        <div class=" profile col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad" >
          <div class="panel panel-info">
            <div class="panel-heading">
              <h3 class="panel-title">Beatriz Alvarez </h3>
            </div>
            <div class="panel-body">
              <div class="row">               
                <div class=" col-md-9 col-lg-9 "> 
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>Apellidos</td>
                        <td>Alvarez Moreno</td>
                      </tr>
                      <tr>
                        <td>Fecha de nacimiento</td>
                        <td>06/23/2013</td>
                      </tr>
                      <tr>
                        <td>Date of Birth</td>
                        <td>01/24/1988</td>
                      </tr>
                   
                         <tr>
                             <tr>
                        <td>Genero</td>
                        <td>Femenino</td>
                      </tr>
                        <tr>
                        <td>Dirección</td>
                        <td>Kathmandu,Nepal</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td><a href="mailto:info@support.com">info@support.com</a></td>
                      </tr>
                        <td>Numero de telefono</td>
                        <td>123-4567-890(Landline)
                        </td>   
                      </tr>                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    </div>
	

	
<h5 class="photo-1"> Fotos de tus viajes </h5>
	<div class="tripple">
	<div class="boximg">
	<img src="http://25.media.tumblr.com/tumblr_m411ji0JVd1qib5bvo1_500.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>

	<div class="boximg">
	<img src="https://templated.co/items/demos/visualize/images/thumbs/05.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>

	</div>


	<div class="tripple">
	<div class="boximg">	
	<img src="https://templated.co/items/demos/visualize/images/thumbs/06.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>

	<div class="boximg">					
	<img src="https://templated.co/items/demos/visualize/images/thumbs/07.jpg"/>
	<p>Lorem ipsum dolor sit amet</p>
	</div>
	</div>

	<div class="tripple">
	<div class="boximg">
	<img src="https://templated.co/items/demos/visualize/images/thumbs/03.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>

	<div class="boximg">
	<img src="http://netdna.coolthings.com/wp-content/uploads/2014/09/stacked-hong-kong-peter-stewart-1.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>


	<div class="boximg">
	<img src="https://templated.co/items/demos/visualize/images/thumbs/02.jpg" />
	<p>Lorem ipsum dolor sit amet</p>
	</div>

	</div>
	<hr />
	<p class="footer" align="center"></p>
</div>

</template>

<script>
  import {db} from '../firebase'
  import {auth} from '../firebase'

  export default{
    methods:{
      logout(){
        auth.signOut().then(()=>{
          this.$router.replace({name: 'loginLink'})
        })
      }
    }
  }
</script>
<style>

.button-exit{
    position: relative;
    top: -235px;
    right: 277px;
}

.photo-1{
    color: black;
    font-family: 'Shadows Into Light', cursive;
    position: relative;
    top: -37px;
    left: 16px;
    font-size: 51px;
}
.panel-title{
		font-family: 'Shadows Into Light', cursive;
    position: relative;
    top: -37px;
    left: -77px;
    font-size: 48px;
}
.profile{
	  position: relative;
    top: -144px;
    /* left: 40px; */
    right: 162px;
}
.table{
	color:black;
}
.user-row {
    margin-bottom: 14px;
}

.user-row:last-child {
    margin-bottom: 0;
}

.dropdown-user {
    margin: 13px 0;
    padding: 5px;
    height: 100%;
}

.dropdown-user:hover {
    cursor: pointer;
}

.table-user-information > tbody > tr {
    border-top: 1px solid rgb(221, 221, 221);
}

.table-user-information > tbody > tr:first-child {
    border-top: 0;
}


.table-user-information > tbody > tr > td {
    border-top: 0;
}
.toppad
{margin-top:20px;
}

	
h3{
	color:black;

}

.image { 
	background-color:rgba(255, 255, 255, 0.075);  
	border-radius: 50%; margin: 20px auto; padding:10px; border: 1px solid #C7C7D0;
	margin-top:50px;
	position: relative;
  top: 6px;
  right: 297px;}



h1 {  font-family: Source Sans Pro, sans-serif; color: black; font-weight:200; margin:10px auto; width:70%; line-height:1.5;}

.socialmedia a { background-color:rgba(255, 255, 255, 0.075); text-decoration: none; font-size:16pt; transition:.5s all;
color:#C7C7D0; border:1px solid #C7C7D0; width:50px; height:50px; display: inline-block; padding:10px; border-radius:50%; }

.socialmedia a:hover,strong { color: #FFFFFF; border-color:#FFF; font-weight: 200; }

div.tripple { width:364px; display: inline-block; text-align: center; vertical-align: top; }

.boximg { color:#FFF; background-color:rgba(255, 255, 255, 0.075); width:346px; height:auto; margin:20px auto; border:1px solid #C7C7D0; border-radius:5px; overflow: hidden;  transition: 0.5s all;}
.boximg img { width:346px; height:auto;  }
.boximg p { min-height:50px; display:block; padding-top:20px; text-align:center;  }

.boximg:hover { box-shadow:0 0 20px #333333; border:1px solid #FFF;}
.footer { color: #FFFFFF; font-size:11pt; }
hr { width:10%;background-color:rgba(255, 255, 255, 0.075); margin-top:70px; margin-bottom:70px; }
</style>