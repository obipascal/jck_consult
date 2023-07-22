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

export const { setAuthUser } = AuthSlice.actions

export const getAuthUser = (state: AppState) => state?.auth?.user
export const getAuthStatus = (state: AppState) => state?.auth?.isActive

export default AuthSlice
