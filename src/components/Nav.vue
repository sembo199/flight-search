<template>
	<div class="navbar">
		<div class="navbar-inner">
			<div class="brand">
				<router-link to="/"><img src="../assets/images/sharevalue.svg"></router-link>
				<h1>Flight Search</h1>
			</div>
			<nav>
				<router-link class="navbar-link" to="/">Home</router-link>
				<router-link class="navbar-link" v-if="this.$store.state.user.email" to="/boekingen">Uw boekingen</router-link>
				<router-link class="navbar-link" v-if="!this.$store.state.user.email" to="/inloggen">Log In</router-link>
				<router-link class="navbar-link" v-if="!this.$store.state.user.email" to="/aanmelden">Aanmelden</router-link>
				<button 
					v-if="this.$store.state.user.email"
					class="navbar-link"
					@click="signOut">
					Log uit
				</button>
			</nav>
		</div>
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

.navbar {
	/*padding: 2rem 0;*/
	display: flex;
	align-items: center;
	box-shadow: 0 3px 6px rgba(0,0,0,0.16);
	background: white;
	margin-bottom: 0;
	height: 15vh;
}

.navbar-inner {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 0 10%;
}

.navbar::after, .navbar::before {
	content: none;
}

.navbar .brand {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.navbar .brand img {
	display: inline;
	height: 7rem;
	margin-right: 2rem;
}

.navbar .brand h1 {
	display: inline;
}

.navbar-link {
	background-color: white;
	text-decoration: none;
	padding: 1.3rem 2rem;
	color: #24282A;
	border: 0;
}

.navbar-link.router-link-exact-active {
	color: #F47B20;
	background-color: #f7f7f7;
	text-decoration: none;
}

.navbar-link:hover {
	background-color: #f7f7f7;
	text-decoration: underline;
	padding: 1.3rem 2rem;
	color: #F47B20;
	border: 0;
}

</style>