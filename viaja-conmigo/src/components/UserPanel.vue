<template>
<div id="user1" class="col-md-12">
		<div class="container">
      <div class="row">
        <div class="col-6">
        </div>
        <div class="container" >
           <div class="row user-profile-2 mb-5">
              <div class="col-md-3">
                <img class="image-2 img-fluid  img-rounded" src="http://nabeel.co.in/files/bootsnipp/team/1.jpg"/>
              </div>
              <div class=" profile-4 col-md-9 mt-4 mb-5">
                <h2 class="name-2 "> María Carrasco </h2>
                <table class= "table table-striped table-lis mt-3 mb-5">
                    <tr>
                      <th> Pais  </th>
                      <th> Ciudad</th>
                      <th> Fecha cumpleaños </th>
                      <th> Idioma</th>
                      <th> Genero </th>
                    </tr>
                    <tr>
                      <td> España </td>
                      <td> Zaragoza</td>
                      <td> 12/08/1990</td>
                      <td> Español</td>
                      <td> Presupuesto </td>                      
                    </tr>
                </table>
                <p class="p-user"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, libero! Omnis accusantium eum, possimus corrupti cumque itaque ratione tempora eius mollitia porro minus illo eligendi molestias deserunt earum, nesciunt autem?</p>
                <button class="btn btn-1 button-exit" @click="logout">Cerrar sesión </button>
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
    },
    
  }
</script>

<style>

.button-exit{
position: relative;

}

.photo-1{
color: black;
font-family: 'Shadows Into Light', cursive;
position: relative;
top: -37px;
left: 16px;
font-size: 51px;
border-bottom:1px solid #0000006b;
}
.panel-title-2{
font-family: 'Shadows Into Light', cursive;
position: relative;
top: -37px;
left: -77px;
font-size: 48px;
}
.profile-1{
position: relative;
top: -144px;
/* left: 40px; */
right: 162px;
}
.table{
color:black;
background-color: #f1f1f1ad;
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

.name-2{
font-family: 'Shadows Into Light', cursive;
color:black;
position: relative;
right: 53px;

}
.p-user{
color:black;
font-style: oblique;
}



table{
color:black;
}

.image-2{
background-color:rgba(255, 255, 255, 0.075);  
border-radius: 50%; margin: 20px auto; padding:10px; border: 1px solid #C7C7D0;
margin-top:50px;
}

.user-profile-2{
background-color: #ffffff8a;
/* padding: 4px; */
margin: 10px;
padding-right: 29px;
padding-left: 29px;
padding-bottom: 8px;
}

.profile-4{
position: relative;
top: 37px;
}

.photo-1{
color: black;
font-family: 'Shadows Into Light', cursive;
position: relative;
top: -13px;
left: 16px;
font-size: 47px;
}
.panel-title-2{
font-family: 'Shadows Into Light', cursive;
position: relative;
top: -37px;
left: -77px;
font-size: 48px;
}
.profile-1{
position: relative;
top: -144px;
/* left: 40px; */
right: 162px;
}
.table{
color:black;
background-color: #f1f1f1ad;
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