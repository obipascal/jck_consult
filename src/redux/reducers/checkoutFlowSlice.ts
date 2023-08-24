import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { SiteConfigs, TransactionInterface } from "@JCKConsultant/types"

// Type for our state
export interface CheckoutFlowProps {
	client_secret?: string
	transaction?: TransactionInterface
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
		setTransaction(state, action) {
			state.transaction = action?.payload
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

export const { setTransaction,setPayIntentClientSecret } = CheckoutFlowSlice.actions

export const getPayIntentClientSecret = (state: AppState) => state?.checkoutFlow?.client_secret
export const getTransaction = (state: AppState) => state?.checkoutFlow?.transaction

export default CheckoutFlowSlice
