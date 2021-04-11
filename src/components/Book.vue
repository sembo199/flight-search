<template>
	<div class="book-outer">
		<div class="book">
			<h2>Boek uw vlucht: {{passengers}} passagier<span v-if="passengers > 1">s</span></h2>
			<Flight :flight="this.$store.state.flightToBook" />
			<Passenger v-for="(passenger, index) in passengersInfo" :passenger="passenger" :key="index" />
			<p class="error-message">{{error.message}}</p>
			<button class='btn btn-primary btn-large' @click="confirmBooking">Naar boekingsoverzicht</button>
			<div class="spacer"></div>
		</div>
	</div>
</template>

<script>
import { flightsRef } from '../firebaseApp'
import Flight from './Flight.vue'
import Passenger from './Passenger.vue'

export default {
	data() {
		return {
			flightLoaded: false,
			flight: [],
			passengersInfo: [],
			error: {
				message: ''
			}
		}
	},
	props: ['passengers'],
	created() {
		// Set the flight to book in the store by its flight number
		this.$store.dispatch('setFlightToBook', this.$route.params.number)
	},
	mounted() {
		// If the amount of passengers corresponds to the store's passengers size
		if (this.$store.state.passengers.length == this.passengers) {
			// Use the store's passenger information, to edit existing passengers
			this.passengersInfo = this.$store.state.passengers
		} else {
			// If not, the store is reset or a new flight/passenger amount was chosen
			for (var i = 1; i <= this.passengers; i++) {
				// Push placeholder data to the passengersInfo array
				this.passengersInfo.push({
					index: i,
					salutation: '1',
					first_name: '',
					middle_name: '',
					last_name: '',
					date_of_birth: '1990-01-01'
				});
			}
		}
	},
	methods: {
		confirmBooking() {
			// First check if all required fields are set
			let valid = true
			for (var i = 0; i < this.passengersInfo.length; i++) {
				if (this.passengersInfo[i].first_name == '' || this.passengersInfo[i].last_name == '') {
					valid = false;
				}
			}
			if (valid) {
				// All required fields set, go to confirmation page
				this.$store.dispatch('setPassengers', this.passengersInfo)
				this.$router.push('/bevestigen')
			} else {
				// Not all required fields are set, show error message
				this.error.message = "Niet alle verplichte velden zijn ingevoerd."
			}
		}
	},
	components: {
		Flight,
		Passenger
	}
}
</script>

<style>
.book-outer {
	background-image: url("../../src/assets/images/background1.jpg");
	background-size: cover;
	min-height: 85vh;
	padding: 10rem 20%;
}

.book {
	background-color: white;
	margin: 0 auto;
	padding: 2rem;
	clear: both;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.error-message {
	color: #c43232;
	font-weight: 600;
}

@media screen and (max-width: 1024px) {
	.book-outer {
		padding: 5rem 5%;
	}

	.book h2 {
		font-size: 1.8rem;
		margin: 0 0 2rem;
		font-weight: 700;
	}
}
</style>