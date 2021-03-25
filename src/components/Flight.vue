<template>
	<div class="flight">
		<h4 class="card-title">{{flight.departure_airport}} -> {{flight.arrival_airport}}</h4>
		<p class="card-text">Vertrek: {{flight.departure_date}} {{flight.departure_time}}</p>
		<p class="card-text">Reistijd: {{flight.flight_duration}}</p>
	</div>
</template>

<script>
export default {
	props: ['flight']
}
</script>

<style>
.flight {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	padding: 1rem 2rem;
	text-align: left;
}
</style>