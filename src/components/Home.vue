<template>
	<div class="home">
		<div class="flight-finder-outer">
			<div class="flight-finder">
				<h2>Zoek uw vlucht</h2>

				<div class="form search-form">
					<div class="form-group form-group-half">
						<label>Vertrekken vanaf:</label>
						<input v-model="selectedDeparture" class="form-control" type="text" name="example" list="exampleList">
						<datalist id="exampleList">
						  <option value="">Maak uw keuze</option>
						  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.city}}, {{airport.name}}</option>
						</datalist>
					</div>
					<div class="form-group form-group-half">
						<label>Vertrekken vanaf:</label>
						<input v-model="selectedArrival" class="form-control" type="text" name="example" list="exampleList">
						<datalist id="exampleList">
						  <option value="">Maak uw keuze</option>
						  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.city}}, {{airport.name}}</option>
						</datalist>
					</div>
					<div class="form-group form-group-half">
						<label>Datum:</label>
						<input v-model="selectedDate" class="form-control" type="date">
					</div>
					<div class="form-group form-group-half">
						<label>Passagiers:</label>
						<input v-model="passengers" class="form-control" type="number">
					</div>
				</div>

				<a v-if="selectedDeparture !== '' && selectedArrival !== ''" href="#flights"><button class="btn btn-primary btn-large">Bekijk vluchten</button></a>
				<div class="spacer"></div>
			</div>
		</div>
		<div class="flights" id="flights" v-if="selectedDeparture !== '' && selectedArrival !== ''">
			<h2>Gevonden vluchten:</h2>
			<Flight 
				:book="true" 
				:flight="flight" 
				:passengers="passengers" 
				:key="index" 
				v-for="(flight, index) in this.$store.state.flights" 
				v-if="flight.departure_airport == selectedDeparture && flight.arrival_airport == selectedArrival && selectedDate == flight.departure_date" />
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
			passengers: 1,
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
.flight-finder-outer {
	background-image: url("../../src/assets/images/background.jpg");
	background-size: cover;
	min-height: 85vh;
	padding: 20rem 20% 0;
}

.flight-finder {
	background-color: white;
	margin: 0 auto;
	padding: 2rem;
	clear: both;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.flight-finder h2 {
	margin-top: 0;
}

.search-form {
	display: flex;
	flex-wrap: wrap;
}

.form-group-half {
	width: 49%;
}

.form-group-half:nth-of-type(2n-1) {
	margin-right: 2%;
}

.flights {
	padding: 2rem 20%;
	background-color: #fcfcfc;
}
</style>