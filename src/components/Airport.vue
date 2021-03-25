<template>
	<div class="airport">
		<h4 class="card-title">({{airport.abbreviation}}) {{airport.name}}</h4>
		<p class="card-text">Locatie: {{airport.city}}, {{airport.country}}</p>
		<p class="card-text">Tijdszone: GMT <span v-if="airport.timezone > 0">+</span>{{airport.timezone}}</p>
	</div>
</template>

<script>
export default {
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