<template>

	<div class="mb-5" id="post">
		
		<form class="searching-1 mb-5">
			<h5 class="title-5">Publica tu viaje</h5>
	
	
     <div class=" form-group row">
      	<select class="col-sm-6 form-control  border rounded" v-model="newTrip.cityOrigin">
          <option value="">Indica de que pais eres</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
       </select>
     </div>
     <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newTrip.cityDestination">
          <option class="options" value="">Indica a que pais te gustaría viajar</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>
     <div class="form-group row">
		      <select class="col-sm-6 form-control  border rounded" v-model="newTrip.sexSelected">
            <option value="">Indica tu genero</option>
            <option v-for="(user_obj, user) in userSex" :value="user" >{{user}}</option>
		       </select>
     </div>

      <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newTrip.language">
          <option class="options" value=""> Indica tu idioma </option>
          <option v-for="(language_obj, language) in languages" :value="language" >{{language}}</option>
         </select>
     </div>
      <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newTrip.dayMoney">
          <option class="options" value="">Indica cual seria tu presupuesto medio por dia</option>
          <option v-for="(mon_obj, mon) in money" :value="mon" >{{mon}}</option>
         </select>
     </div>
     <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newTrip.hostDay">
          <option class="options" value="">Indica donde te gustaría hospedarte</option>
          <option v-for="(ho_obj, ho) in host" :value="ho" >{{ho}}</option>
         </select>
     </div>
		
		 <div class="form-group row mb-5" >
		 	
       <select class="col-sm-1 form-control  border rounded" v-model="newTrip.month1">
          <option class="options" value="">Mes</option>
          <option v-for="(month_obj, month) in months" :value="month" >{{month}}</option>
       </select>
       <select class="col-sm-1 form-control  border rounded" v-model="newTrip.year1">
          <option class="options" value=""> Año</option>
          <option v-for="(year_obj, year) in years" :value="year" >{{year}}</option>
       </select>
       <p class="mr-3 ml-3 mt-2"> - </p>
       <select class="col-sm-1 form-control  border rounded" v-model="newTrip.month2">
          <option class="options" value="">Mes</option>
          <option v-for="(month_obj, month) in months" :value="month" >{{month}}</option>
        </select>
        <select class="col-sm-1 form-control  border rounded" v-model="newTrip.year2">
          <option class="options" value="">Año </option>
          <option v-for="(year_obj, year) in years" :value="year" >{{year}}</option>
        </select>
		<button :disabled="sending" class="col-1 btn btn-1 ml-5 " type="button" v-on:click.prevent="addOptions">Publicalo </button>
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
				'sexSelected':"",
				'cityOrigin':"",
				'cityDestination':"",
				'cityOriginPartner':"",
				'language':"",
				'transports':"",
				'dayMoney':"",
				'hostDay':"",
				'month1':"",
				'year1':"",
				'month2':"",
				'year2':""
			},
		
       userSex:{
        	'Indiferente':{},
        	'Mujer':{},
        	'Hombre':{}

        },

        money:{
        	'Indiferent':{},
        	'0 - 10 $':{},
        	'10 - 30 $':{},
        	'30 - 50 $':{},
        	'50 - 100 $':{},
        	'+ 100 $': {}

        },

        host:{
        	'Indiferente':{},
        	'Albergue':{},
        	'Camping':{},
        	'Hotel':{},
        	'Hostal':{},
        	'Casas privadas':{},
        	'Otros':{}
        	

        },
        days:{
        	'1':{},
        	'2':{},
        	'3':{},
        	'4':{},
        	'5':{},
        	'6':{},
        	'7':{},
        	'8':{},
        	'9':{},
        	'10':{},
        	'11':{},
        	'12':{},
        	'13':{},
        	'14':{},
        	'15':{},
        	'16':{},
        	'17':{},
        	'18':{},
        	'19':{},
        	'20':{},
        	'21':{},
        	'22':{},
        	'23':{},
        	'24':{},
        	'25':{},
        	'26':{},
        	'27':{},
        	'28':{},
        	'29':{},
        	'30':{}

        },
        months:{
        	'Enero':{},
        	'Febrero':{},
        	'Marzo':{},
        	'Abril':{},
        	'Mayo':{},
        	'Junio':{},
        	'Julio':{},
        	'Agosto':{},
        	'Septiembre':{},
        	'Octubre':{},
        	'Noviembre':{},
        	'Diciembre':{}

        },

       years:{
      	'2018':{},
      	'2019':{},
      	'2020':{},
      	'2021':{},
      	'2022':{},
      	'2023':{},
      	'2024':{},
      	'2025':{},
      	'2026':{},
      	'2027':{},


        },

        languages:{
        	'Indiferente':{},
        	'Aleman':{},
        	'Arabe':{},
        	'Bengalí':{},
        	'Chino mandarín':{},
        	'Coreano':{},
        	'Español':{},
        	'Francés':{},
        	'Hindi':{},
        	'Inglés':{},
        	'Italiano':{},
        	'Japones':{},
        	'Maratí':{},
        	'Portugues':{},
        	'Ruso':{},
        	'Tamil':{},
        	'Télugu':{},
        	'Turco':{},
        	'Vietnamita':{},
        	'Urdu':{},
        	'Wu':{},
        	'Otro':{}
        },

        transport:{
        	'Avión':{},
        	'Auto Stop':{},
        	'Barco':{},
        	'Coche, moto..':{},
        	'Tren, Ave':{},
        	'Otros':{},
        	
        },
       cities : {

       			'Indiferente':{},
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
			countryOrigin: this.countryOrigin,
			countryDestination: this.countryDestination,
			travelDate: this.travelDate,
			travelDate1:this.travelDate1,
			sexSelected: this.sexSelected,
			description: this.description,
			cityOrigin: this.cityOrigin,
			cityDestination: this.cityDestination,
			cityOriginPartner:this.cityOriginPartner,
			language:this.language,
			transports:this.transports,
			dayMoney: this.dayMoney,
			hostDay:this.hostDay,
			month1:this.month1,
			month2:this.month2,
			year1:this.year1,
			year2:this.year2


			}
		})   
		
		this.$router.push({name: 'tripsLink', params:{ newTrip: this.newTrip}}) 
	},
	
	 
   
// 	   
// }
	created () {
	      // value = snapshot.val() | key = snapshot.key
	      tripsRef.on('value', function(snapshot){
	        console.log(snapshot.val());
	       
	        });
	    
	}

	}
}
	



	
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

@import url('https://fonts.googleapis.com/css?family=Alef');
	.searching-1{
		position: relative;
    top: 48px;
    left: 343px;
	}

	.title-5{
		font-family: 'Shadows Into Light', cursive;
		position: relative;
    /* left: -33px; */
    right: 617px;
    color:black;

	}
</style>