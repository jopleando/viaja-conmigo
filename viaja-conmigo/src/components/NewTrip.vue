<template>

	<div class="mb-5" id="post">
		<form class="searching mb-5 ">
			<h5 class="ml-8">Publica tu viaje</h5>
	
		<div class=" form-group row">
			<!--<label for="" class="col-sm-3 ">¿Desde que pais vas a viajar</label>-->
        <select class="col-sm-6" v-model="newTrip.cityOrigin1">
          <option value="">Selecciona Pais de origen</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>
		<div class=" form-group row">
			<!-- <label for="" class="col-sm-3 "> ¿Desde que ciudad?</label> -->
			<input class="col-sm-6" type="text" v-model="newTrip.countryOrigin1" placeholder=" Escribe desde que ciudad">	
		</div>

		<div class=" form-group row">
			<!--<label for="" class="col-sm-3 ">¿A que pais te gustaría  viajar</label>-->
      <select class="col-sm-6" v-model="newTrip.cityDestination1">
          <option value="">Selecciona Pais de destino</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
       </select>
      </div>
      
		<div class="form-group row">
			
			<input class="col-sm-6" type="text" v-model="newTrip.countryDestination1" placeholder="Escribe a que ciudad">
		</div>
		
		<div class="form-group row">
		      <select class="col-sm-6" v-model="newTrip.sexSelected1">
            <option value="">Sexo de tu compañero</option>
            <option v-for="(user_obj, user) in userSex" :value="user" >{{user}}</option>
		       </select>
     </div>
     <div class="form-group row mb-5" >
			<input class="col-sm-2 " type="text" v-model="newTrip.travelDate2" placeholder=" YYYY/MM/DD">
			<input class="col-sm-2  " type="text" v-model="newTrip.travelDate3" placeholder="YYYY/MM/DD">
			<button :disabled="sending" class="col-2 btn btn-primary ml-2 btn-block" type="button" v-on:click.prevent="addOptions">Buscar </button>
		</div>

	</form>
</div>
</template>
<script>
var moment = require ('moment')
import {db} from '../firebase'
import {storage} from '../firebase'
let tripsRef=db.ref('trips')

export default{
	firebase:{
		trips:tripsRef,
		

	},
	data(){
		return{
			moment:moment,
			sending:false,
			newTrip:{
				'countryOrigin1': "",
				'countryDestination1': "",
				'travelDate2':"",
				"travelDate3":"",
				'sexSelected1':"",
				'description1': "",
				'cityOrigin1':"",
				'cityDestination1':""
			},
		
       userSex:{
        	'Indiferent':{},
        	'Women':{},
        	'Men':{}

        },
       cities : {

						'Afghanistan':{},
						"Albania":{},
						"Algeria":{},
						"Andorra":{},
						"Angola":{},
						"Anguilla":{},
						"Antigua & Barbuda":{},
						"Argentina":{},
						"Armenia":{},
						"Aruba":{},
						"Australia":{},
						"Austria":{},
						"Azerbaijan":{},
						"Bahamas":{},
						"Bahrain":{},
						"Bangladesh":{},
						"Barbados":{},
						"Belarus":{},
						"Belgium":{},
						"Belize":{},
						"Benin":{},
						"Bermuda":{},
						"Bhutan":{},
						"Bolivia":{},
						"Bosnia & Herzegovina":{},
						"Botswana":{},
						"Brazil":{},
						"British Virgin Islands":{},
						"Brunei":{},
						"Bulgaria":{},
						"Burkina Faso":{},
						"Burundi":{},
						"Cambodia":{},
						"Cameroon":{},
						"Canada":{},
						"Cape Verde":{},
						"Cayman Islands":{},
						"Central Arfrican Republic":{},
						"Chad":{},
						"Chile":{},
						"China":{},
						"Colombia":{},
						"Congo":{},
						"Cook Islands":{},
						"Costa Rica":{},
						"Cote D Ivoire":{},
						"Croatia":{},
						"Cuba":{},
						"Curacao":{},
						"Cyprus":{},
						"Czech Republic":{},
						"Denmark":{},
						"Djibouti":{},
						"Dominica":{},
						"Dominican Republic":{},
						"Ecuador":{},
						"Egypt":{},
						"El Salvador":{},
						"Equatorial Guinea":{},
						"Eritrea":{},
						"Estonia":{},
						"Ethiopia":{},
						"Falkland Islands":{},
						"Faroe Islands":{},
						"Fiji":{},
						"Finland":{},
						"France":{},
						"French Polynesia":{},
						"French West Indies":{},
						"Gabon":{},
						"Gambia":{},
						"Georgia":{},
						"Germany":{},
						"Ghana":{},
						"Gibraltar":{},
						"Greece":{},
						"Greenland":{},
						"Grenada":{},
						"Guam":{},
						"Guatemala":{},
						"Guernsey":{},
						"Guinea":{},
						"Guinea Bissau":{},
						"Guyana":{},
						"Haiti":{},
						"Honduras":{},
						"Hong Kong":{},
						"Hungary":{},
						"Iceland":{},
						"India":{},
						"Indonesia":{},
						"Iran":{},
						"Iraq":{},
						"Ireland":{},
						"Isle of Man":{},
						"Israel":{},
						"Italy":{},
						"Jamaica":{},
						"Japan":{},
						"Jersey":{},
						"Jordan":{},
						"Kazakhstan":{},
						"Kenya":{},
						"Kiribati":{},
						"Kosovo":{},
						"Kuwait":{},
						"Kyrgyzstan":{},
						"Laos":{},
						"Latvia":{},
						"Lebanon":{},
						"Lesotho":{},
						"Liberia":{},
						"Libya":{},
						"Liechtenstein":{},
						"Lithuania":{},
						"Luxembourg":{},
						"Macau":{},
						"Macedonia":{},
						"Madagascar":{},
						"Malawi":{},
						"Malaysia":{},
						"Maldives":{},
						"Mali":{},
						"Malta":{},
						"Marshall Islands":{},
						"Mauritania":{},
						"Mauritius":{},
						"Mexico":{},
						"Micronesia":{},
						"Moldova":{},
						"Monaco":{},
						"Mongolia":{},
						"Montenegro":{},
						"Montserrat":{},
						"Morocco":{},
						"Mozambique":{},
						"Myanmar":{},
						"Namibia":{},
						"Nauro":{},
						"Nepal":{},
						"Netherlands":{},
						"Netherlands Antilles":{},
						"New Caledonia":{},
						"New Zealand":{},
						"Nicaragua":{},
						"Niger":{},
						"Nigeria":{},
						"North Korea":{},
						"Norway":{},
						"Oman":{},
						"Pakistan":{},
						"Palau":{},
						"Palestine":{},
						"Panama":{},
						"Papua New Guinea":{},
						"Paraguay":{},
						"Peru":{},
						"Philippines":{},
						"Poland":{},
						"Portugal":{},
						"Puerto Rico":{},
						"Qatar":{},
						"Reunion":{},
						"Romania":{},
						"Russia":{},
						"Rwanda":{},
						"Saint Pierre & Miquelon":{},
						"Samoa":{},
						"San Marino":{},
						"Sao Tome and Principe":{},
						"Saudi Arabia":{},
						"Senegal":{},
						"Serbia":{},
						"Seychelles":{},
						"Sierra Leone":{},
						"Singapore":{},
						"Slovakia":{},
						"Slovenia":{},
						"Solomon Islands":{},
						"Somalia":{},
						"South Africa":{},
						"South Korea":{},
						"South Sudan":{},
						"Spain":{},
						"Sri Lanka":{},
						"St Kitts & Nevis":{},
						"St Lucia":{},
						"St Vincent":{},
						"Sudan":{},
						"Suriname":{},
						"Swaziland":{},
						"Sweden":{},
						"Switzerland":{},
						"Syria":{},
						"Taiwan":{},
						"Tajikistan":{},
						"Tanzania":{},
						"Thailand":{},
						"Timor L'Este":{},
						"Togo":{},
						"Tonga":{},
						"Trinidad & Tobago":{},
						"Tunisia":{},
						"Turkey":{},
						"Turkmenistan":{},
						"Turks & Caicos":{},
						"Tuvalu":{},
						"Uganda":{},
						"Ukraine":{},
						"United Arab Emirates":{},
						"United Kingdom":{},
						"United States of America":{},
						"Uruguay":{},
						"Uzbekistan":{},
						"Vanuatu":{},
						"Vatican City":{},
						"Venezuela":{},
						"Vietnam":{},
						"Virgin Islands (US)":{},
						"Yemen":{},
						"Zambia":{},
						"Zimbabwe":{},
			},

       }
	},
	methods:{
		addOptions(){
		this.sending = true
		tripsRef.push(this.newTrip).then(() =>{
			this.sending = false

			this.newTrip = {
			countryOrigin1: this.countryOrigin1,
			countryDestination1: this.countryDestination1,
			travelDate2: this.travelDate2,
			travelDate3:this.travelDate3,
			sexSelected1: this.sexSelected1,
			description1: this.description1,
			cityOrigin1: this.cityOrigin1,
			cityDestination1: this.cityDestination1


			}
		})   
		
		this.$router.push({name: 'tripsLink', params:{ newPartner: this.newTrip}}) 
	},
	
	 
   
// 	   
// }
	created () {
	      // value = snapshot.val() | key = snapshot.key
	      websitesRef.on('value', function(snapshot){
	        console.log(snapshot.val());
	       
	        });
	    
	}

	}
}
	



	
</script>