<template>
	<div class="form-inline sign-in-form">
		<h3 v-if="!confirm">Log in</h3>
		<h3 v-if="confirm">Log in om uw boeking te bevestigen...</h3>
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
			<button 
				class="btn btn-primary"
				@click="signIn"
			>
				Inloggen
			</button>
			<p>{{error.message}}</p>
			<router-link v-if="!confirm" to="/aanmelden">Nog geen account? Meld je aan!</router-link>
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
			error: {
				message: ''
			}
		}
	},
	props: ['confirm'],
	methods: {
		signIn() {
			// Use the firebase auth domain to sign in with email and password
			firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
				.catch(error => {
					this.error = error
				})
		}
	}
}
</script>

<style>
.sign-in-form {
	display: flex;
	flex-direction: column;
}

.sign-in-form .form-group {
	display: flex;
	flex-direction: column;
}

.sign-in-form .form-group .form-control {
	margin-bottom: 1rem;
}
</style>