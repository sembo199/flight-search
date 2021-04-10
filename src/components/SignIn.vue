<template>
	<div class="sign-in-outer">
		<div class="sign-in">
			<SignInForm />
		</div>
	</div>
</template>

<script>
import SignInForm from './SignInForm.vue'

export default {
	components: {
		SignInForm
	}
}
</script>

<style>
.sign-in-outer {
	padding: 20rem 25%;
	background-image: url("../../src/assets/images/background.jpg");
	background-size: cover;
	min-height: 80vh;
}

.sign-in {
	box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
	background-color: white;
	padding: 2rem;
}

@media screen and (max-width: 1024px) {
	.sign-in-outer {
		padding: 5rem 10%;
	}
}
</style>