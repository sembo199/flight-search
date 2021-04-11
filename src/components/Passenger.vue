<template>
	<div class="form passenger">
		<button v-if="confirm" class="btn btn-primary edit-passenger-btn" @click="editPassengers">Aanpassen</button>
		<h3>Passagier {{passenger.index}} <span class="head-passenger" v-if="passenger.index == 1">(Hoofdboeker)</span></h3>
		<div class="form-group">
			<label>Aanhef</label>
			<input :disabled="confirm" v-model="passenger.salutation" type="radio" :id="'male-'+passenger.index" :name="'aanhef-'+passenger.index" value="1">
			<label :for="'male-'+passenger.index">Dhr.</label>
			<input :disabled="confirm" v-model="passenger.salutation" type="radio" :id="'female-'+passenger.index" :name="'aanhef-'+passenger.index" value="2">
			<label :for="'female-'+passenger.index">Mw.</label>
		</div>
		<div class="form-group">
			<label>Voornaam*</label>
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
			<label>Achternaam*</label>
			<input 
				type="text" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.last_name">
		</div>
		<div class="form-group">
			<label>Geboortedatum*</label>
			<input 
				type="date" 
				class="form-control"
				:disabled="confirm"
				v-model="passenger.date_of_birth">
		</div>
		<p>* Dit veld is een verplicht veld.</p>
	</div>
</template>

<script>
export default {
	props: ['passenger', 'confirm'],
	methods: {
		editPassengers() {
			// Navigate back to the booking page to edit the passengers
			this.$router.go(-1)
		}
	}
}
</script>

<style>
.passenger {
	padding: 1rem 2rem;
	position: relative;
	margin: 3rem 0;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.edit-passenger-btn {
	position: absolute;
	top: 2rem;
	right: 2rem;
}

.head-passenger {
	font-size: 1.5rem;
	font-weight: 600;
	font-style: italic;
}
</style>