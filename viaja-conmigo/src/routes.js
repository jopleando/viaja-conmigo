import Home from './components/Home.vue'
import About from './components/About.vue'
import Dates from './components/Dates.vue'
import Login from './components/Login.vue'
//import Carousel from './components/Carousel.vue'
import Profile from './components/Profile.vue'
import Register from './components/Register.vue'
import PostTrip from './components/Post-trip.vue'
import Resset from './components/Resset.vue'
import Messages from './components/Messages.vue'
import ProfileUsers from './components/ProfileUsers.vue'
import Settings from './components/Settings.vue'
import Trips from './components/Trips.vue'
import UserPanel from './components/UserPanel.vue'
import Share from './components/Share.vue'
import User1 from './components/User1.vue'
import User2 from './components/User2.vue'
import ViewTrips from './components/ViewTrips.vue'
import OwnTrips from './components/OwnTrips.vue'



export const routes = [
{path: '/', components:{
	default:Home,
	'tripsLink' : Trips

},
name:'homeLink'},
{path: '/post', component: PostTrip, name: 'postLink', props:true, meta: { requiresAuth: true }},
{path: '/about', component: About, name: 'aboutLink',},
{path: '/dates', component: Dates, name: 'datesLink'},
{path: '/login', component: Login, name: 'loginLink'},
{path: '/user1', component: User1, name: 'user1Link'},
{path: '/user2', component: User2, name: 'user2Link'},
{path: '/all-trips', component: ViewTrips, name: 'viewTripsLink'},
{path: '/her-trips', component: OwnTrips, name: 'ownTripsLink'},
//{path: '/carousel', component: Carousel, name: 'carouselLink'},
{path:'/share', component: Share, name: 'shareLink', meta: { requiresAuth: true }},
{path: '/profile', component: Profile, meta: { requiresAuth: true }, name: 'profileLink',
										children:[
										{path:'user-panel', component:UserPanel, name:'panelLink'},
										{path:'messages', component:Messages, name:'messagesLink'},
										{path:'profiles', component:ProfileUsers, name:'profilesLink'},
										{path:'settings', component:Settings, name:'settingsLink'},
										{path:'trips-publicate', component:Trips, name:'tripsLink'},

										




										]},
{path: '/register', component: Register, name: 'registerLink'},
{path: '/resset', component: Resset, name: 'ressetLink'},
{path:'*', redirect: '/'}
]



