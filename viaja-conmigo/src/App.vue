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
#home{
	/*background:url('../src/assets/home.jpg');*/
	position: relative;
  left: -16px;
  height: 444px;
  width: 1081px;
  padding: 4%;

}


</style>
