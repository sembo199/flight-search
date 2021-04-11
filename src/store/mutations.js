import * as types from './mutation-types'
import { firebaseApp, flightsRef, bookingsRef } from '../firebaseApp'

// Export the mutations to the Vuex store
export const mutations = {
	[types.SIGN_IN] (state, user_payload) {
		// Set the store's user object to the user payload passed from the firebase auth domain
		state.user = user_payload
	},
	[types.SIGN_OUT] (state) {
		// Clear the user object
		state.user = {}
		state.bookings = []
	},
	[types.SET_FLIGHTS] (state, flights_payload) {
		// Set the store's flights to the flights payload
		state.flights = flights_payload
	},
	[types.SET_AIRPORTS] (state, airports_payload) {
		// Set the store's airports to the airports payload
		state.airports = airports_payload
	},
	[types.SET_FLIGHT_TO_BOOK] (state, flight_number_payload) {
		// Set the store's flight to book
		flightsRef.child(flight_number_payload).get().then(function(snapshot) {
			if (snapshot.exists()) {
				state.flightToBook = snapshot.val()
			}
		}).catch(function(error) {
		  console.error(error);
		});
	},
	[types.SET_PASSENGERS] (state, passengers_payload) {
		// Set the passengers for the flight to book
		state.passengers = passengers_payload;
	},
	[types.CONFIRM_BOOKING] (state) {
		// Remove the seats from the flight's available seats
		state.flightToBook.available_seats -= state.passengers.length
		flightsRef.child(state.flightToBook.number).set(state.flightToBook)
		let booking = {
			email: state.user.email,
			flight: state.flightToBook,
			passengers: state.passengers
		}
		const now = new Date()
		// Add the booking by it's flight number and current datetime so multiple bookings for the same flight can be made
		bookingsRef.child(state.user.uid+"/"+state.flightToBook.number+"-"+now.getTime()).set(booking)
		// Reset the passengers and flight to book for new bookings
		state.passengers = []
		state.flightToBook = {}
	},
	[types.SET_BOOKINGS] (state) {
		// Get bookings by user's id
		bookingsRef.child(state.user.uid).get().then(function(snapshot) {
			if (snapshot.exists()) {
				state.bookings = snapshot.val()
			}
		}).catch(function(error) {
		  console.error(error);
		});
	}
}