// Default imports
import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

// Vuex Store import
import store from './store'

// Import the Vue components
import App from './components/App.vue'
import Home from './components/Home.vue'
import Bookings from './components/Bookings.vue'
import Book from './components/Book.vue'
import Flights from './components/Flights.vue'
import Airports from './components/Airports.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

// Setup the router in history mode (removes hash from the url of in-app changes)
const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/boekingen', component: Bookings },
		{ path: '/vluchten', component: Flights },
		{ path: '/luchthavens', component: Airports },
		{ path: '/boeken/:number', component: Book, props: true },
		{ path: '/inloggen', component: SignIn },
		{ path: '/aanmelden', component: SignUp }
	]
})

// Firebase Authentication check
firebaseApp.auth().onAuthStateChanged(user => {
	// Check if the user is logged in
	if (user) {
		// Dispatch signIn action to save user in the Vuex store
		store.dispatch('signIn', user)
		// Push the user to their bookings dashboard
		router.push('/boekingen')
	} else {
		// Replace to erase router history
		router.replace('/')
	}
})

// Create the new Vue instance and specify the main component and pass along the router
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})