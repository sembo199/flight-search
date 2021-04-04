<template>
	<div class="form passenger" :key="index">
		<h3>Passagier {{passenger.index}} <span v-if=""></span></h3>
		<div class="form-group">
			<label>Aanhef</label>
			<input :disabled="confirm" v-model="passenger.salutation" type="radio" :id="'male-'+passenger.index" :name="'aanhef-'+passenger.index" value="1">
			<label :for="'male-'+passenger.index">Dhr.</label>
			<input :disabled="confirm" v-model="passenger.salutation" type="radio" :id="'female-'+passenger.index" :name="'aanhef-'+passenger.index" value="2">
			<label :for="'female-'+passenger.index">Mw.</label>
		</div>
		<div class="form-group">
			<label>Voornaam</label>
			<input 
				type="text" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.first_name">
		</div>
		<div class="form-group">
			<label>Tussenvoegsel</label>
			<input 
				type="text" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.middle_name">
		</div>
		<div class="form-group">
			<label>Achternaam</label>
			<input 
				type="text" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.last_name">
		</div>
		<div class="form-group">
			<label>Geboortedatum</label>
			<input 
				type="date" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.date_of_birth">
		</div>
	</div>
</template>

<script>
export default {
	props: ['passenger', 'confirm']
}
</script>

<style>
.passenger {
	padding: 1rem 2rem;
	margin: 3rem 0;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>