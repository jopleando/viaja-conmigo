<template>
	<div>
<pp-New></pp-New>
	</div>


</template>

<script>




import NewPartner from '../components/NewPartner.vue'
import {db} from '../firebase'
import {storage} from '../firebase'
let websitesRef=db.ref('websites')
let listRef= db.ref('listCity')

export default{
	data(){
		return{
			websites:[],
			listCity:[]

		} 
		
		},
		firebase:{
			websites:{
				source:db.ref("websites")
			},
			listCity:{
				source:db.ref("listCity")
			}

		},
		components:{
			ppNew:NewPartner,
	
	}
}
</script>