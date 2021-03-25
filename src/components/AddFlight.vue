<template>
	<div class="add-flight">
		<a class="btn btn-primary btn-add-flight" v-if="!showForm" @click="toggleForm">Vlucht toevoegen</a>
		<div class="form" v-if="showForm">
			<div class="form-group">
				<label>Vertrek vliegveld</label>
				<select class="form-control" v-model="flight.departure_airport">
					<option value="0">Kies vertrek vliegveld</option>
					<option 
						v-for="(airport, index) in this.$store.state.airports"
						:value="airport.abbreviation"
						key="index">
						({{airport.abbreviation}}) {{airport.name}}
					</option>
				</select>
			</div>
			<div class="form-group">
				<label>Aankomst vliegveld</label>
				<select class="form-control" v-model="flight.arrival_airport">
					<option value="0">Kies vertrek vliegveld</option>
					<option 
						v-for="(airport, index) in this.$store.state.airports"
						:value="airport.abbreviation"
						key="index">
						({{airport.abbreviation}}) {{airport.name}}
					</option>
				</select>
			</div>
			<div class="form-group">
				<label>Vertrekdatum</label>
				<input 
					type="date" 
					class="form-control"
					v-model="flight.departure_date">
			</div>
			<div class="form-group">
				<label>Vertrektijd</label>
				<input 
					type="time" 
					class="form-control"
					v-model="flight.departure_time">
			</div>
			<div class="form-group">
				<label>Vluchtduur</label>
				<input 
					type="time" 
					class="form-control"
					v-model="flight.flight_duration">
			</div>
			<button class="btn btn-sm btn-secondary" @click="toggleForm">Annuleer</button>
			<button class="btn btn-sm btn-primary" @click="addFlight">Toevoegen</button>
		</div>
	</div>
</template>

<script>
import { flightsRef, airportsRef } from '../firebaseApp'

export default {
	data() {
		return {
			showForm: false,
			flight: {
				departure_airport: 0,
				departure_date: '',
				departure_time: '',
				arrival_airport: 0,
				flight_duration: ''
			}
		}
	},
	methods : {
		addFlight() {
			flightsRef.push(this.flight)
		},
		toggleForm() {
			this.showForm = !this.showForm
		}
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

<style>

.btn-add-flight {
	margin: 1rem 0;
}

.form {
	padding: 1rem 2rem;
	margin: 3rem 0;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>