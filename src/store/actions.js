import * as types from './mutation-types'

export const signIn = ({commit}, user_payload) => {
	commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
	commit(types.SIGN_OUT)
}

export const setFlights = ({commit}, flights_payload) => {
	commit(types.SET_FLIGHTS, flights_payload)
}

export const setAirports = ({commit}, airports_payload) => {
	commit(types.SET_AIRPORTS, airports_payload)
}

export const setFlightToBook = ({commit}, flight_number) => {
	commit(types.SET_FLIGHT_TO_BOOK, flight_number)
}