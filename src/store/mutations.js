import * as types from './mutation-types'

// Export the mutations to the Vuex store
export const mutations = {
	[types.SIGN_IN] (state, user_payload) {
		// Set the store's user object to the user payload passed from the firebase auth domain
		state.user = user_payload
	},
	[types.SIGN_OUT] (state) {
		// Clear the user object
		state.user = {}
	},
	[types.SET_FLIGHTS] (state, flights_payload) {
		// Set the store's flights to the flights payload
		state.flights = flights_payload
	},
	[types.SET_AIRPORTS] (state, airports_payload) {
		// Set the store's airports to the airports payload
		state.airports = airports_payload
	}
}