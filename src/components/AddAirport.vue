<template>
	<div class="add-airport">
		<a class="btn btn-primary btn-add-airport" v-if="!showForm" @click="toggleForm">Luchthaven toevoegen</a>
		<div class="form" v-if="showForm">
			<div class="form-group">
				<label>Luchthaven naam</label>
				<input 
					type="text" 
					class="form-control"
					v-model="airport.name">
			</div>
			<div class="form-group">
				<label>Afkorting</label>
				<input 
					type="text" 
					class="form-control"
					v-model="airport.abbreviation">
			</div>
			<div class="form-group">
				<label>Land</label>
				<input 
					type="text" 
					class="form-control"
					v-model="airport.country">
			</div>
			<div class="form-group">
				<label>Stad</label>
				<input 
					type="text" 
					class="form-control"
					v-model="airport.city">
			</div>
			<div class="form-group">
				<label>Tijdszone</label>
				<input 
					type="number" 
					class="form-control"
					v-model="airport.timezone">
			</div>
			<button class="btn btn-sm btn-secondary" @click="toggleForm">Annuleer</button>
			<button class="btn btn-sm btn-primary" @click="addAirport">Toevoegen</button>
		</div>
	</div>
</template>

<script>
import { airportsRef } from '../firebaseApp'

export default {
	data() {
		return {
			showForm: false,
			airport: {
				abbreviation: '',
				name: '',
				country: '',
				city: '',
				timezone: ''
			}
		}
	},
	methods : {
		addAirport() {
			airportsRef.push(this.airport)
		},
		toggleForm() {
			this.showForm = !this.showForm
		}
	}
}
</script>

<style>

.btn-add-airport {
	margin: 1rem 0;
}

.form {
	padding: 1rem 2rem;
	margin: 3rem 0;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>