<template>
	<div class="form-inline">
		<h3>Aanmelden</h3>
		<div class="form-group">
			<input 
				type="text" 
				placeholder="E-mailadres" 
				class="form-control"
				v-model="email"
			>
			<input 
				type="password"
				placeholder="Wachtwoord"
				class="form-control"
				v-model="password"
			>
			<input 
				type="password"
				placeholder="Herhaal wachtwoord"
				class="form-control"
				v-model="repeatPassword"
			>
			<button 
				class="btn btn-primary"
				@click="signUp"
			>
				Aanmelden
			</button>
			<p>{{error.message}}</p>
			<router-link to="/inloggen">Heeft u al een account? Log dan in!</router-link>
		</div>
	</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
	data() {
		return {
			email: '',
			password: '',
			repeatPassword: '',
			error: {
				message: ''
			}
		}
	},
	methods: {
		signUp() {
			// Password check
			if (this.repeatPassword === this.password) {
				// Use the firebase auth domain to sign up with email and password
				firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
					.catch(error => {
						this.error = error
					})
			} else {
				alert("Wachtwoorden komen niet overeen")
			}
		}
	}
}
</script>