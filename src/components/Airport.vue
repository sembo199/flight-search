<template>
	<div class="airport">
		<h4 class="card-title">({{airport.abbreviation}}) {{airport.name}}</h4>
		<p class="card-text">Locatie: {{airport.city}}, {{airport.country}}</p>
	</div>
</template>

<script>
export default {
	// Fetch the airport from the component's properties
	props: ['airport']
}
</script>

<style>
.airport {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	padding: 1rem 2rem;
	text-align: left;
}
</style>