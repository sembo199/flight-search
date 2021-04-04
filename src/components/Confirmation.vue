<template>
	<div class="confirmation-outer">
		<div class="confirmation">
			<h2>Bevestig uw boeking</h2>
			<Flight :flight="this.$store.state.flightToBook" />
			<Passenger v-for="(passenger, index) in this.$store.state.passengers" :confirm="true" :passenger="passenger" :key="index" />
			<div class="form-row" v-if="!this.$store.state.user.email">
				<SignInForm class="column-half" :confirm="true" />
				<SignUpForm class="column-half" :confirm="true" />
			</div>
			<p v-if="this.$store.state.user.email">Aangemeld als {{this.$store.state.user.email}}</p>
			<button v-if="this.$store.state.user.email" @click="confirmBooking" class="btn btn-primary btn-large">Bevestig boeking</button>
			<div class="spacer"></div>
		</div>
	</div>
</template>

<script>
import Flight from './Flight.vue'
import Passenger from './Passenger.vue'
import SignInForm from './SignInForm.vue'
import SignUpForm from './SignUpForm.vue'

export default {
	data() {
		return {
			userIsSet: false
		}
	},
	components: {
		Flight,
		Passenger,
		SignInForm,
		SignUpForm
	},
	methods: {
		confirmBooking() {
			this.$store.dispatch('confirmBooking')
			this.$router.replace('/boekingen')
		},
		userIsSet() {
			for(var key in this.$store.state.user) {
		        if(obj.hasOwnProperty(key))
		            return false;
		    }
		}
	}
}
</script>

<style>
.confirmation-outer {
	background-image: url("../../src/assets/images/background.jpg");
	background-size: cover;
	min-height: 85vh;
	padding: 10rem 20%;
}

.confirmation {
	background-color: white;
	margin: 0 auto;
	padding: 2rem;
	clear: both;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.form-row {
	display: flex;
	justify-content: space-between;
}

.column-half {
	padding: 2rem;
	flex-basis: 49%;
}

.column-half:nth-of-type(2n-1) {
	border-right: 1px solid #d3d3d3;
}
</style>