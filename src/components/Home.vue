<template>
	<div class="flight-finder">
		<h2>Vind uw vlucht</h2>

		<div class="form">
			<div class="form-group">
				<label>Vertrekken vanaf:</label>
				<input class="form-control" type="text">
			</div>
			<div class="form-group">
				<label>Vertrekken naar:</label>
				<input class="form-control" type="text">
			</div>
			<div class="form-group">
				<label>Datum:</label>
				<input class="form-control" type="text">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		// Get any new flights from the db in realtime
		flightsRef.on('value', snap => {
			let flights = []
			snap.forEach(flight => {
				flights.push(flight.val())
			})
			this.$store.dispatch('setFlights', flights)
		})
	}
}
</script>