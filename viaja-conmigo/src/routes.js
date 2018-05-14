import Home from './components/Home.vue'
import About from './components/About.vue'
import Dates from './components/Dates.vue'
import Login from './components/Login.vue'
import Menu from './components/Menu.vue'
import Profile from './components/Profile.vue'
import Register from './components/Register.vue'
import PostTrip from './components/Post-trip.vue'
import Resset from './components/Resset.vue'


export const routes = [
{path: '/', component: Home, name: 'homeLink'},
{path: '/post', component: PostTrip, name: 'postLink'},
{path: '/about', component: About, name: 'aboutLink'},
{path: '/dates', component: Dates, name: 'datesLink'},
{path: '/login', component: Login, name: 'loginLink'},
{path: '/menu', component: Menu, name: 'menuLink'},
{path: '/profile', component: Profile, name: 'profileLink'},
{path: '/register', component: Register, name: 'registerLink'},
{path: '/resset', component: Resset, name: 'ressetLink'},
{path:'*', redirect: '/'}
]
