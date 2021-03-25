<template>
	<div>
		<h1>Boekingen</h1>
		<button 
			class="btn btn-danger btn-sm btn-signout"
			@click="signOut"
		>
			Log uit
		</button>
		<p>Welkom {{$store.state.user.email}}</p><br>
		<router-link class="btn btn-primary" to="/vluchten">Vluchten bekijken</router-link>
		<router-link class="btn btn-primary" to="/luchthavens">Luchthavens bekijken</router-link>
	</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
	methods: {
		signOut() {
			this.$store.dispatch('signOut')
			firebaseApp.auth().signOut()
		}
	}
}
</script>

<style>
	.btn-signout {
		position: absolute;
		text-align: right;
		top: 2rem;
		right: 2rem;
	}
</style>