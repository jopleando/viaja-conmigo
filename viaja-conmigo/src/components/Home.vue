<template>
	<div class="" id="home">
		<div class="row">
			<div class="col-md-12 text-center mb-5">
			<h4> Compartir viajes para vivir experiencias inolvidables</h4>
			</div>
		</div>

		<form class="searching">
		<div class=" form-group row">
			<label for="" class="col-sm-3">Pais de procedencia del viajero</label>
			<div class="col-sm-9">
			<input type="text" v-model="newPartner.countryOrigin" placeholder="">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Sexo del viajero</label>
			<div class="col-sm-9">
			<input type="text" v-model="newPartner.sex" placeholder="">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Continente del destino de viaje</label>
			<div class="col-sm-9">
			<input type="text" v-model="newPartner.continent" placeholder="">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Pais del destino de viaje</label>
			<div class="col-sm-9">
			<input type="text" v-model="newPartner.countryDestination" placeholder="">
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-3">Fecha del comienzo del viaje</label>
			<div class="col-sm-9">
			<input type="text" v-model="newPartner.travelDate" placeholder="">
			</div>
		</div>
			<div class="form-group row col-2">
			<button :disabled="sending" class="btn btn-info btn-block" type="button" v-on:click="addFilters">Buscar </button>
		</div>
		</form>
	</div>

</template>

<script>

import {db} from '../firebase'
import {storage} from '../firebase'

export default{
	data(){
		return{
			newPartner:{
				'countryOrigin': "",
				'sex': "",
				'continent':"",
				'countryDestination':"",
				'travelDate': ""


			}
		}

	},
	
	methods:{
		addFilters(){
		db.ref("viaja-conmigo").push(this.newPartner).then(() =>{
			this.sending = false

			this.newPartner = {
				'countryOrigin': "",
				'sex': "",
				'continent':"",
				'countryDestination':"",
				'travelDate': ""


			}
		})
	}
	}	
}

	
</script>
<style>

.searching{
	
	position: relative;
  left: 489px;
	
}
	
</style>