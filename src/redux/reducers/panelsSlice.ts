import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"

// Type for our state
export interface PanelsStateProps {
	editCoursePanel: {
		show?: boolean
		params?: string
		data?: any
	}
}

// Initial state
const initialState: PanelsStateProps = {
	editCoursePanel: {
		show: false,
		params: "",
		data: null
	}
}

// Actual Slice
export const PanelsSlice = createSlice({
	name: "panels",
	initialState,
	reducers: {
		toggleEditCoursePanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.editCoursePanel.show = status

			if (params) state.editCoursePanel.params = params

			if (data) state.editCoursePanel.data = data
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

export const { toggleEditCoursePanel } = PanelsSlice.actions

export const getEditCoursePanel = (state: AppState) => state?.panels?.editCoursePanel

export default PanelsSlice
