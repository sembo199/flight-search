<template>
	<div class="flights">
		<router-link class="btn btn-primary" to="/boekingen">Terug</router-link>
		<div class="col-md-12">	
			<AddFlight />
		</div>
		<div class="col-md-12">	
			<Flight 
				v-for="(flight, index) in this.$store.state.flights"
				:flight="flight"
				:key="index"
			/>
		</div>
	</div>
</template>

<script>
import { airportsRef, firebaseApp, flightsRef } from '../firebaseApp'
import AddFlight from './AddFlight.vue'
import Flight from './Flight.vue'

export default {
	components: {
		AddFlight,
		Flight
	},
	mounted() {
		// Get any new flights from the db in realtime
		flightsRef.on('value', snap => {
			let flights = []
			snap.forEach(flight => {
				flights.push(flight.val())
			})
			this.$store.dispatch('setFlights', flights)
		})
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