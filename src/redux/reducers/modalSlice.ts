import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"

// Type for our state
export interface ModalsStateProps {
	show?: boolean
	title?: string
	body?: string
	type?: "success" | "danger" | "warning" | "info"
	data?: any
	param?: string
}

// Initial state
const initialState: ModalsStateProps = {
	show: false
}

// Actual Slice
export const ModalsSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		toggleModal(state, action) {
			if (typeof action?.payload === "boolean") state.show = action?.payload
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

export const { toggleModal } = ModalsSlice.actions

export const getModal = (state: AppState) => state?.modal?.show

export default ModalsSlice
