<template>
	<div class="flight">
		<h4 class="card-title">{{flight.departure_airport}} -> {{flight.arrival_airport}}</h4>
		<p class="card-text">Vertrek: {{flight.departure_date}} {{flight.departure_time}}</p>
		<p class="card-text">Aankomst: {{flight.arrival_date}} {{flight.arrival_time}}</p>
		<p class="card-text">Plekken beschikbaar: {{flight.available_seats}}/{{flight.total_seats}}</p>
		<router-link v-if="book && flight.available_seats >= passengers" :to="'/boeken/'+flight.number+'/'+passengers">Boeken</router-link>
		<p v-if="book && flight.available_seats < passengers">Niet genoeg plekken beschikbaar.</p>
	</div>
</template>

<script>
export default {
	props: ['flight', 'book', 'passengers']
}
</script>

<style>
.flight {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	padding: 1rem 2rem;
	text-align: left;
	margin-bottom: 2rem;
	background-color: white;
}
</style>