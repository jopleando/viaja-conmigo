<template>

	<div class="mb-3" id="home">
		<div class="row">
			<div class="col-xl-9 mx-auto text-center mb-5">
			<h4> Compartir viajes, para vivir experiencias únicas</h4>
			</div>
		</div>

		<form class="searching mb-3 ">
			<h5 class="ml-8">Busca a tu compañero ideal</h5>
	
		<div class=" form-group row">
        <select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityOrigin">
          <option class="options" value="">Selecciona Pais de origen</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
         </select>
     </div>
		<div class=" form-group row">
			<!-- <label for="" class="col-sm-3 "> ¿Desde que ciudad?</label> -->
			<input class="col-sm-6 form-control  border rounded" type="text" v-model="newPartner.countryOrigin" placeholder=" Escribe desde que ciudad">	
		</div>

		<div class=" form-group row">
			<!--<label for="" class="col-sm-3 ">¿A que pais te gustaría  viajar</label>-->
      <select class="col-sm-6 form-control  border rounded" v-model="newPartner.cityDestination">
          <option value="">Selecciona Pais de destino</option>
          <option v-for="(city_obj, city) in cities" :value="city" >{{city}}</option>
       </select>
      </div>
      
		<div class="form-group row">
			
			<input class="col-sm-6 form-control  border rounded" type="text" v-model="newPartner.countryDestination" placeholder="Escribe a que ciudad">
		</div>
		
		<div class="form-group row">
		      <select class="col-sm-6 form-control  border rounded" v-model="newPartner.sexSelected">
            <option value="">Sexo de tu compañero</option>
            <option v-for="(user_obj, user) in userSex" :value="user" >{{user}}</option>
		       </select>
     </div>
     <div class="form-group row mb-5" >
			<input class="col-sm-2 form-control  border rounded " type="text" v-model="newPartner.travelDate" placeholder=" YYYY/MM/DD">
			<input class="col-sm-2  " type="text" v-model="newPartner.travelDate1" placeholder="YYYY/MM/DD">
			<button :disabled="sending" class="col-2 btn btn-primary ml-2 btn-block" type="button" v-on:click.prevent="addFilters">Buscar </button>
		</div>
		<!--<div class="form-group row">
			<label for="" class="col-sm-3">Descripción de tu compañero</label>
			<input class= "form-control col-sm-6" aria-label="Large" type="text" v-model="newPartner.description" placeholder="">
		</div>-->
		
	</form>	

	<section class="features-icons bg-light text-center mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <h3>Fully Responsive</h3>
              <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-layers m-auto text-primary"></i>
              </div>
              <h3>Bootstrap 4 Ready</h3>
              <p class="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
              <div class="features-icons-icon d-flex">
                <i class="icon-check m-auto text-primary"></i>
              </div>
              <h3>Easy to Use</h3>
              <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
            </div>
          </div>
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
				'countryOrigin': "",
				'countryDestination': "",
				'travelDate':"",
				"travelDate1":"",
				'sexSelected':"",
				'description': "",
				'cityOrigin':"",
				'cityDestination':""
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
			cityDestination: this.cityDestination


			}
		})   
		
		this.$router.push({name: 'datesLink', params:{ newPartner: this.newPartner}}) 
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
<style>
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');

@import url('https://fonts.googleapis.com/css?family=Alef');


h5{

	font-family: 'Shadows Into Light', cursive;

}
h4{
	font-family: 'Shadows Into Light', cursive;
	font-size: 40px;
}

.searching{
	
	

	
	
}

.features-icons{
	position: relative;
	top:40px;
}
	
</style>