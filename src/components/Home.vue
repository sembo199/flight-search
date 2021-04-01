<template>
	<div class="flight-finder">
		<h2>Zoek uw vlucht</h2>

		<div class="form">
						<div class="form-group">
				<label>Vertrekken vanaf:</label>
				<input v-model="selectedDeparture" class="form-control" type="text" name="example" list="exampleList">
				<datalist id="exampleList">
				  <option value="">Maak uw keuze</option>
				  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.city}}, {{airport.name}}</option>
				</datalist>
			</div>
			<div class="form-group">
				<label>Vertrekken vanaf:</label>
				<input v-model="selectedArrival" class="form-control" type="text" name="example" list="exampleList">
				<datalist id="exampleList">
				  <option value="">Maak uw keuze</option>
				  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.city}}, {{airport.name}}</option>
				</datalist>
			</div>
			<div class="form-group">
				<label>Datum:</label>
				<input v-model="selectedDate" class="form-control" type="date">
			</div>
		</div>

		<div id="flights">
			<Flight :book="true" :flight="flight" :key="index" v-for="(flight, index) in this.$store.state.flights" v-if="flight.departure_airport == selectedDeparture && flight.arrival_airport == selectedArrival && selectedDate == flight.departure_date" />
		</div>
	</div>
</template>

<script>
import { flightsRef, airportsRef } from '../firebaseApp'
import Flight from './Flight.vue'

export default {
	data() {
		return {
			selectedDeparture: '',
			selectedArrival: '',
			selectedDate: new Date().toISOString().slice(0,10)
		}
	},
	methods: {
		
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
    	airportsRef.on('value', snap => {
			let airports = []
			snap.forEach(airport => {
				airports.push(airport.val())
			})
			this.$store.dispatch('setAirports', airports)
		})
	},
	components: {
		Flight
	}
}
</script>

<style>
</style>