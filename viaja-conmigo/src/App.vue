<template>
	<div id="app">
		<div class="container-fluid">
			<pp-header></pp-header>	
		</div>
		<div class="container-fluid">
			<router-view></router-view>	
		</div>
		<div class="container-fluid">
			<pp-footer></pp-footer>	
		</div>
	</div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
	components:{
		ppHeader:Header,
		ppFooter: Footer,
	}
 
}
</script>

<style>

#login{
    background: url('../src/assets/login.jpg');
    background-size: cover;
    height: 617px
    
}
#home{
	/*background:url('../src/assets/homepage.jpg')fixed;*/
	background-size: cover;
    position: relative;
    /* top: 12px; */
    left: -20px;
    right: 5px;
    height: 710px;
    width: 1354px;;
    padding: 4%;

}
body{ 
	background: url('../src/assets/homepage.jpg'); 
	background-repeat: no-repeat;
	background-size: cover; 
	background-attachment: fixed; 
	text-align: center; 
	color: #C7C7D0;  
	font-family: Source Sans Pro, sans-serif;
	font-weight:200;
	padding-bottom:50px; }


</style>
