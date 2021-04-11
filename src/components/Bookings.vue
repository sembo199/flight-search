<template>
	<div class="bookings-outer">
		<div class="bookings">
			<h2>Uw boekingen</h2>
			<h3 v-if="this.$store.state.bookings.length == 0">U heeft nog geen vluchten geboekt.</h3>
			<Booking :booking="booking" v-for="(booking, index) in this.$store.state.bookings" :key="index" />
			<router-link v-if="this.$store.state.user.email == 'sem.ekkelboom@gmail.com'" class="btn btn-primary" to="/vluchten">Vluchten bekijken</router-link>
			<router-link v-if="this.$store.state.user.email == 'sem.ekkelboom@gmail.com'" class="btn btn-primary" to="/luchthavens">Luchthavens bekijken</router-link>
		</div>
	</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
import Booking from './Booking.vue'

export default {
	mounted() {
		// Set the bookings for the current user
		this.$store.dispatch('setBookings')
	},
	components: {
		Booking
	}
}
</script>

<style>
.bookings-outer {
	background-image: url("../../src/assets/images/background3.jpg");
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

.bookings h2 {
	margin: 0 0 2rem;
}

@media screen and (max-width: 1024px) {
	.bookings-outer {
		padding: 5rem 5%;
	}
}
</style>