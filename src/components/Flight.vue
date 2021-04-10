<template>
	<div class="flight">
		<div class="flight-header">
			<h4 class="card-title"><b>{{flight.departure_airport.city}}</b> <span class="flight-abbr">({{flight.departure_airport_abbr}})</span> <span class="to-arrow">></span> <b>{{flight.arrival_airport.city}}</b> <span class="flight-abbr">({{flight.arrival_airport_abbr}})</span></h4>
		</div>
		<div class="flight-body">
			<p class="card-text"><b>Vertrek:</b> {{flight.departure_date}} {{flight.departure_time}}</p>
			<p class="card-text"><b>Aankomst:</b> {{flight.arrival_date}} {{flight.arrival_time}}</p>
			<p class="card-text"><b>Zitplaatsen beschikbaar:</b> {{flight.available_seats}}/{{flight.total_seats}}</p>
			<p v-if="book && flight.available_seats < passengers">Niet genoeg plekken beschikbaar.</p>
			<router-link class="book-btn" v-if="book && flight.available_seats >= passengers" :to="'/boeken/'+flight.number+'/'+passengers">Boeken</router-link>
		</div>
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
	text-align: left;
	margin-bottom: 2rem;
	background-color: white;
	position: relative;
}

.flight-header {
	padding: 1rem 2rem;
	background-color: #f47b20;
	color: white;
}

.flight-abbr {
	font-weight: 100;
    font-size: 1.5rem;
}

.flight-body {
	padding: 1rem 2rem;
}

.book-btn {
	padding: 1rem 2rem;
	background-color: #f47b20;
	border: 1px solid #f47b20;
	color: white;
	position: absolute;
	font-weight: 600;
	bottom: 2rem;
	right: 2rem;
}

.book-btn:focus {
	padding: 1rem 2rem;
	background-color: #f47b20;
	border: 1px solid #f47b20;
	text-decoration: none;
	color: white;
}

.book-btn:active {
	padding: 1rem 2rem;
	background-color: #f47b20;
	border: 1px solid #f47b20;
	color: white;
}

.book-btn:hover {
	background-color: #ffffff;
	border: 1px solid #f47b20;
	color: #f47b20;
	text-decoration: none;
}

.to-arrow {
	font-size: 1.8rem;
	line-height: 1.8rem;
	font-weight: 700;
	color: #ffffff;
}
</style>