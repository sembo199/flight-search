<template>
	<div class="sign-up-outer">
		<div class="sign-up">
			<SignUpForm />
		</div>
	</div>
</template>

<script>
import SignUpForm from './SignUpForm.vue'

export default {
	components: {
		SignUpForm
	}
}
</script>

<style>
.sign-up-outer {
	padding: 20rem 25%;
	background-image: url("../../src/assets/images/background.jpg");
	background-size: cover;
	min-height: 80vh;
}

.sign-up {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	background-color: white;
	padding: 2rem;
}

@media screen and (max-width: 1024px) {
	.sign-up-outer {
		padding: 5rem 10%;
	}
}
</style>