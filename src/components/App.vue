<template>
	<div id="app">
		<Nav />
		<router-view></router-view>
	</div>
</template>

<script>
import Nav from './Nav.vue'

export default {
	components: {
		Nav
	}
}
</script>