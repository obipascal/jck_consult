import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"

// Type for our state
export interface AuthStateProps {
	user?: undefined
	isActive: boolean
	api_token?: string
}

// Initial state
const initialState: AuthStateProps = {
	isActive: false
}

// Actual Slice
export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		// Action to set the authentication status
		setAuthUser(state, action) {
			state.user = action?.payload
		},

		setApiToken(state, action) {
			state.api_token = action?.payload
			sessionStorage?.setItem("api_token", action?.payload)
		},

		destroySession(state, action) {
			state.api_token = ""
			sessionStorage?.clear()
		},

		// Special reducer for hydrating the state. Special case for next-redux-wrapper
		extraReducers: {
			// @ts-ignore
			[HYDRATE]: (state, action) => {
				return {
					...state,
					...action.payload
				}
			}
		}
	}
})

export const { setAuthUser, setApiToken, destroySession } = AuthSlice.actions

export const getAuthUser = (state: AppState) => state?.auth?.user
export const getAuth = (state: AppState) => state?.auth

export default AuthSlice
