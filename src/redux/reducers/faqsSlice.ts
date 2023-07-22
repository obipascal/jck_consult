import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { PaginationResponse } from "@JCKConsultant/types"
import { FAQResponseInterface } from "@JCKConsultant/types/faqs"

// Type for our state

export interface FQAsStateProps {
	faq?: PaginationResponse<FAQResponseInterface>
}

// Initial state
const initialState: FQAsStateProps = {
	faq: undefined
}

// Actual Slice
export const FAQsSlice = createSlice({
	name: "faqs",
	initialState,
	reducers: {
		setFAQsData(state, action) {
			state.faq = action?.payload
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

export const { setFAQsData } = FAQsSlice.actions

export const getFAQsData = (state: AppState) => state?.faqs?.faq

export default FAQsSlice
