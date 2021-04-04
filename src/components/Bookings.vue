<template>
	<div class="bookings-outer">
		<div class="bookings">
			<h1>Uw boekingen</h1>

			<h3 v-if="this.$store.state.bookings.length == 0">U heeft nog geen vluchten geboekt.</h3>
			<Booking :booking="booking" v-for="(booking, index) in this.$store.state.bookings" :key="index" />
			<router-link class="btn btn-primary" to="/vluchten">Vluchten bekijken</router-link>
			<router-link class="btn btn-primary" to="/luchthavens">Luchthavens bekijken</router-link>
		</div>
	</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
import Booking from './Booking.vue'

export default {
	mounted() {
		this.$store.dispatch('setBookings')
		this.$store.dispatch('getUserDisplayName')
	},
	components: {
		Booking
	}
}
</script>

<style>
.bookings-outer {
	background-image: url("../../src/assets/images/background.jpg");
	background-size: cover;
	min-height: 85vh;
	padding: 10rem 20%;
}

.bookings {
	background-color: white;
	margin: 0 auto;
	padding: 2rem;
	clear: both;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>