<template>
	<div class="booking">
		<h3>({{booking.flight.number}}) - {{booking.flight.departure_airport.city}} > {{booking.flight.arrival_airport.city}}</h3>
		<p>Vertrek: {{booking.flight.departure_date}} {{booking.flight.departure_time}}</p>
		<p>Aankomst: {{booking.flight.arrival_date}} {{booking.flight.arrival_time}}</p>
		<h4>Passagiers</h4>
		<ul>
			<li v-for="passenger in booking.passengers"><span v-if="passenger.salutation == 1">Dhr.</span><span v-if="passenger.salutation == 2">Mw.</span> {{passenger.first_name}} {{passenger.middle_name}} {{passenger.last_name}} <span class="passenger-date-of-birth">({{passenger.date_of_birth}})</span></li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['booking']
}
</script>

<style>
.booking {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	padding: 1rem 2rem;
	text-align: left;
	margin-bottom: 2rem;
}

.passenger-date-of-birth {
	font-size: 1.1rem;
	color: #8c8c8c;
}
</style>