<template>

	<div class="mb-1" id="home">
		<div class="row">
			<div class="col-xl-9 mx-auto text-center mb-2 mr-4">
			<h4 class=" principal-title mb-2 ml-3 mt-0"> Compartir viajes, para vivir experiencias únicas</h4>
			</div>
		</div>

		<form class="searching mb-5">
			<h5 class="ml-8">Busca a tu compañero ideal</h5>
	
	
     <div class=" form-group row">
     	<!--<input type="range" name="points" min="0" max="50">-->
      	<select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityOrigin">
          <option value="">¿De que pais eres?</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
       </select>
     </div>
     <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityDestination">
          <option class="options" value="">¿A que pais te gustaría ir?</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>
     <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityOriginPartner">
          <option class="options" value="">¿De que pais te gustaría que fuera tu compañer@?</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>

     <div class="form-group row">
		      <select class="col-sm-6 form-control  border rounded" v-model="newPartner.sexSelected">
            <option value="">¿Genero de tu compañer@?</option>
            <option v-for="(user_obj, user) in userSex" :value="user" >{{user}}</option>
		       </select>
     </div>

      <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.language">
          <option class="options" value="">¿Que idioma te gustaría que hablara tu compañer@?</option>
          <option v-for="(language_obj, language) in languages" :value="language" >{{language}}</option>
         </select>
     </div>
      <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.dayMoney">
          <option class="options" value="">¿Cual es tu presupuesto medio por día?</option>
          <option v-for="(mon_obj, mon) in money" :value="mon" >{{mon}}</option>
         </select>
     </div>
     <div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.hostDay">
          <option class="options" value="">¿Donde te gustaría hospedarte?</option>
          <option v-for="(ho_obj, ho) in host" :value="ho" >{{ho}}</option>
         </select>
     </div>
		
		 <div class="form-group row mb-5" >
<input type="date"  class=" col-sm-2 form-control" placeholder="Fecha de nacimiento" required autofocus v-model="newPartner.year1">
<p class="mr-3 ml-3 mt-2"> - </p>
<input type="date"  class=" col-sm-2 form-control" placeholder="Fecha de nacimiento" required autofocus v-model="newPartner.year2">
		 	
       <!--<select class="col-sm-1 form-control  border rounded" v-model="newPartner.month1">

          <option class="options" value="">Mes</option>
          <option v-for="(month_obj, month) in months" :value="month" >{{month}}</option>
       </select>
       <select class="col-sm-1 form-control  border rounded" v-model="newPartner.year1">
          <option class="options" value=""> Año</option>
          <option v-for="(year_obj, year) in years" :value="year" >{{year}}</option>
       </select>
       
       <select class="col-sm-1 form-control  border rounded" v-model="newPartner.month2">
          <option class="options" value="">Mes</option>
          <option v-for="(month_obj, month) in months" :value="month" >{{month}}</option>
        </select>
        <select class="col-sm-1 form-control  border rounded" v-model="newPartner.year2">
          <option class="options" value="">Año </option>
          <option v-for="(year_obj, year) in years" :value="year" >{{year}}</option>
        </select>-->
		<button :disabled="sending" class="col-1 btn btn-2 ml-5 " type="button" v-on:click.prevent="addFilters">Buscar </button>
		</div>
		
	</form>	
	<section class="content-2 row mt-5">
			<div class=" title-2 col-md-12 mb-5">
				<h1 class="text-center text-end">Experiencias de otros viajeros </h1>
				<h5 class=" title-3 text-center">Inspirate </h5>
			</div>
			
			<div class="photos row">
				<div class="col-md-4">
				<img src="src/assets/image-1.jpeg" alt="" class="img-fluid rounded">
			</div>
			<div class="col-md-4">
					<img src="src/assets/image-2.jpeg" alt="" class="img-fluid rounded" >
				</div>
				<div class="col-md-4">
					<img src="src/assets/image-4.jpeg" alt="" class="img-fluid rounded" >
				</div>
			</div>
	</section> 
</div>

</template>
<script>
var moment = require ('moment')
import {db} from '../firebase'
import {storage} from '../firebase'
let websitesRef=db.ref('websites')
let listRef= db.ref('listCity')

export default{
	firebase:{
		websites:websitesRef,
		

	},
	data(){
		return{
			moment:moment,
			sending:false,
			newPartner:{
				
				'sexSelected':"",
				'cityOrigin':"",
				'cityDestination':"",
				'cityOriginPartner':"",
				'language':"",
				'transports':"",
				'dayMoney':"",
				'hostDay':"",
				//'month1':"",
				'year1':"",
				//'month2':"",
				'year2':""

			},
		
       userSex:{
        	'Indiferente':{},
        	'Femenino':{},
        	'Masculino':{}

        },

        money:{
        	'Indiferente':{},
        	'0 - 10 $':{},
        	'10 - 30 $':{},
        	'30 - 50 $':{},
        	'50 - 100 $':{},
        	'+ 100 $': {}

        },

        host:{
        	'Albergue':{},
        	'Camping':{},
        	'Hotel':{},
        	'Hostal':{},
        	'Casas privadas':{},
        	'Otros':{}
        	

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
		addFilters(){
		this.sending = true
		websitesRef.push(this.newPartner).then(() =>{
			this.sending = false

			this.newPartner = {
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
		
		this.$router.push({name: 'shareLink', params:{ newPartner: this.newPartner}}) 
	},
	
	 
   
// 	   
// }
	

	}
}
	



	
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

@import url('https://fonts.googleapis.com/css?family=Alef');

h1{
	  font-weight: 800;
    font-size: 29px;
    letter-spacing: -0.6px;
    color: black;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    border-bottom: 1px solid #e4e4e4;
}

.subtitle{
	  font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.6px;
    color: #484848;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    position: relative;
    top:10px;
    left:130px;
}

h5{

	font-family: 'Shadows Into Light', cursive;
	
    color: black;
    position: relative;
    right: 535px;

}
.title-3{
	font-size:25px;
	font-size: 25px;
  position: relative;
  top: -135px;
  left: 10px;
}
.principal-title{
	font-family: 'Shadows Into Light', cursive;
	font-size: 40px;
	position: relative;
  top: -27px;
  left: 184px;
  color:black;
}

.searching{
	position: relative;
  top: -32px;
  left: 39px;
	
	
}

.text-end{
	  text-align: center!important;
    position: relative;
    top: -130px;
    left: 27px;
}

.photos{
	  background-color: #eeeeeea1;
    /* opacity: 1.8; */
    max-width: 92%;
    margin: -13px auto;
    padding: 20px 30px;
    width: 1487px;
    position: relative;
    top: -146px;
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

.btn-2 {
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
}

.features-icons{
	position: relative;
	top:40px;
}

.content-2{
	    position: relative;
    top: 115px;
}
	
</style>