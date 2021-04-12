<template>
	<div class="home">
		<div class="flight-finder-outer">
			<div class="flight-finder">
				<h2>Zoek uw vlucht</h2>

				<div class="form search-form">
					<div class="form-group form-group-half">
						<label>Vertrekken vanaf:</label>
						<input @change="resetResults" v-model="selectedDeparture" class="form-control" type="text" name="example" list="exampleList">
						<datalist id="exampleList">
						  <option value="">Maak uw keuze</option>
						  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.name}} - {{airport.city}}, {{airport.country}}</option>
						</datalist>
					</div>
					<div class="form-group form-group-half">
						<label>Vertrekken naar:</label>
						<input v-model="selectedArrival" class="form-control" type="text" name="example" list="exampleList">
						<datalist id="exampleList">
						  <option value="">Maak uw keuze</option>
						  <option :value="airport.abbreviation" v-for="(airport, index) in this.$store.state.airports">{{airport.name}} - {{airport.city}}, {{airport.country}}</option>
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

				<a v-if="selectedDeparture !== '' && selectedArrival !== ''" href="#flights" @click="calculateFlights"><button class="btn btn-primary btn-large">Bekijk vluchten</button></a>
				<div class="spacer"></div>
			</div>
		</div>
		<div class="flights" id="flights" v-if="showResults">
			<h2 v-if="calculatedFlights.length > 0">Gevonden vluchten:</h2>
			<h2 v-if="calculatedFlights.length <= 0">Er zijn helaas geen vluchten gevonden.</h2>
			<Flight 
				:book="true" 
				:flight="flight" 
				:passengers="passengers" 
				:key="index" 
				v-for="(flight, index) in calculatedFlights" />
		</div>
	</div>
	
</template>

<script>
import { flightsRef, airportsRef } from '../firebaseApp'
import Flight from './Flight.vue'

export default {
	data() {
		return {
			showResults: false,
			selectedDeparture: '',
			selectedArrival: '',
			passengers: 1,
			selectedDate: new Date().toISOString().slice(0,10),
			calculatedFlights: []
		}
	},
	methods: {
		calculateFlights() {
			// Function to calculate which flights match the users search params
			let tempFlights = []
			for (var i = 0; i < this.$store.state.flights.length; i++) {
				// Check if the date, dep. and arr. airport match
				if (this.$store.state.flights[i].departure_date == this.selectedDate
					&& this.$store.state.flights[i].arrival_airport.abbreviation == this.selectedArrival
					&& this.$store.state.flights[i].departure_airport.abbreviation == this.selectedDeparture) {
					// Add them to a temporary flights array
					tempFlights.push(this.$store.state.flights[i])
				}
			}
			// Sort flights by departure time
			tempFlights.sort((flightA, flightB) => {
				if (flightA.departure_time > flightB.departure_time) {
					return 1
				} else {
					return -1
				}
			})
			this.calculatedFlights = tempFlights
			// Enable showing the results
			this.showResults = true
		},
		resetResults() {
			// Disable the results if any search params change
			this.showResults = false
		}
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
	},
	components: {
		Flight
	}
}
</script>

<style>
.flight-finder-outer {
	background-image: url("../../src/assets/images/background5.jpg");
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
	padding: 5rem 20%;
	background-color: #fcfcfc;
}

@media screen and (max-width: 1024px) {
	.flight-finder-outer {
		padding: 5rem 10% 0;
	}

	.flights {
		padding: 2rem 10%;
	}

	.form-group-half {
		width: 100%;
		margin-right: 0;
	}
}
</style>