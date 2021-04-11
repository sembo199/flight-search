<template>
	<div class="booking">
		<div class="booking-header">
			<h4><b>{{booking.flight.departure_airport.city}}</b> <span class="flight-abbr">({{booking.flight.departure_airport_abbr}})</span> > <b>{{booking.flight.arrival_airport.city}}</b> <span class="flight-abbr">({{booking.flight.arrival_airport_abbr}})</span> <span class="flight-number">- {{booking.flight.number}}</span></h4>
		</div>
		<div class="booking-body">
			<p><b>Vertrek:</b> {{booking.flight.departure_date}} {{booking.flight.departure_time}}</p>
			<p><b>Aankomst:</b> {{booking.flight.arrival_date}} {{booking.flight.arrival_time}}</p>
			<h4>Passagiers</h4>
			<ul class="passengers">
				<li v-for="passenger in booking.passengers"><img class="icon-person" src="../assets/images/person.svg"><span v-if="passenger.salutation == 1">Dhr.</span><span v-if="passenger.salutation == 2">Mw.</span> {{passenger.first_name}} {{passenger.middle_name}} {{passenger.last_name}} <span class="passenger-date-of-birth">({{passenger.date_of_birth}})</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	// Fetch the booking from the component's properties
	props: ['booking']
}
</script>

<style>
.booking {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	text-align: left;
	margin-bottom: 2rem;
}

.booking-header {
	padding: 1rem 2rem;
	background-color: #f47b20;
	color: white;
}

.booking-header h4 {
	margin: 0;
}

.booking-body {
	padding: 1rem 2rem;
}

.passenger-date-of-birth {
	font-size: 1.1rem;
	color: #8c8c8c;
}

.passengers {
	list-style-type: none;
	padding-left: 0;
}

.icon-person {
	height: 2rem;
	margin-bottom: 0.3rem;
}
</style>