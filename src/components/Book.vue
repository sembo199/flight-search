<template>
	<div class="book-outer">
		<div class="book">
			<h2>Boek uw vlucht: {{passengers}} passagier<span v-if="passengers > 1">s</span></h2>
			<Flight :flight="this.$store.state.flightToBook" />
			<Passenger v-for="(passenger, index) in passengersInfo" :passenger="passenger" :key="index" />
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
			passengersInfo: []
		}
	},
	props: ['passengers'],
	created() {
		this.$store.dispatch('setFlightToBook', this.$route.params.number)
	},
	mounted() {
		for (var i = 1; i <= this.passengers; i++) {
			this.passengersInfo.push({
				index: i,
				salutation: '1',
				first_name: '',
				middle_name: '',
				last_name: '',
				date_of_birth: '1990-01-01'
			});
		}
	},
	methods: {
		confirmBooking() {
			this.$store.dispatch('setPassengers', this.passengersInfo)
			this.$router.push('/bevestigen')
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
	background-image: url("../../src/assets/images/background.jpg");
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