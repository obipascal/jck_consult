import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { SiteConfigs } from "@JCKConsultant/types"

// Type for our state
export interface CheckoutFlowProps {
	client_secret?: string
}

// Initial state
const initialState: CheckoutFlowProps = {
	client_secret: undefined
}

// Actual Slice
export const CheckoutFlowSlice = createSlice({
	name: "checkoutFlow",
	initialState,
	reducers: {
		/**
		 * Emit an event to indicate that an should beginne course fetching operation.
		 */
		setPayIntentClientSecret(state, action) {
			state.client_secret = action?.payload
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

export const { setPayIntentClientSecret } = CheckoutFlowSlice.actions

export const getPayIntentClientSecret = (state: AppState) => state?.checkoutFlow?.client_secret

export default CheckoutFlowSlice
