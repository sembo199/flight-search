<template>
	<div class="airports">
		<router-link class="btn btn-primary" to="/boekingen">Terug</router-link>
		<div class="col-md-12">	
			<AddAirport />
		</div>
		<div class="col-md-12">	
			<Airport 
				v-for="(airport, index) in this.$store.state.airports"
				:airport="airport"
				key="index"
			/>
		</div>
	</div>
</template>

<script>
import { firebaseApp, airportsRef } from '../firebaseApp'
import AddAirport from './AddAirport.vue'
import Airport from './Airport.vue'

export default {
	components: {
		AddAirport,
		Airport
	},
	mounted() {
		// Get any new airports from the db in realtime
		airportsRef.on('value', snap => {
			let airports = []
			snap.forEach(airport => {
				airports.push(airport.val())
			})
			this.$store.dispatch('setAirports', airports)
		})
	}
}
</script>