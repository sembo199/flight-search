<template>
	<div>
		<h2>Boek uw vlucht</h2>
		<Flight :flight="this.$store.state.flightToBook" />
		<div class="form">
			<div class="form-group">
				<label>Aanhef</label>
				<input type="radio" id="male" name="aanhef" value="Dhr.">
				<label for="male">Dhr.</label>
				<input type="radio" id="female" name="aanhef" value="Mw.">
				<label for="female">Mw.</label>
			</div>
			<div class="form-group">
				<label>Voornaam</label>
				<input 
					type="text" 
					class="form-control">
			</div>
			<div class="form-group">
				<label>Tussenvoegsel</label>
				<input 
					type="text" 
					class="form-control">
			</div>
			<div class="form-group">
				<label>Achternaam</label>
				<input 
					type="text" 
					class="form-control">
			</div>
			<div class="form-group">
				<label>Geboortedatum</label>
				<input 
					type="date" 
					class="form-control">
			</div>
		</div>
	</div>
</template>

<script>
import { flightsRef } from '../firebaseApp'
import Flight from './Flight.vue'

export default {
	data() {
		return {
			flightLoaded: false,
			flight: []
		}
	},
	created() {
		this.$store.dispatch('setFlightToBook', this.$route.params.number)
	},
	components: {
		Flight
	}
}
</script>

<style>
.form {
	padding: 1rem 2rem;
	margin: 3rem 0;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>