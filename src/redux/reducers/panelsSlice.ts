import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { PanelState } from "@JCKConsultant/types/panel"

// Type for our state

export interface PanelsStateProps {
	editCoursePanel: PanelState
	transDetailsPanel: PanelState
}

// Initial state
const panelInitState: PanelState = {
	show: false,
	params: "",
	data: null
}
const initialState: PanelsStateProps = {
	editCoursePanel: panelInitState,
	transDetailsPanel: panelInitState
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

		toggleTransDetailsPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.transDetailsPanel.show = status

			if (params) state.transDetailsPanel.params = params

			if (data) state.transDetailsPanel.data = data
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

export const { toggleEditCoursePanel, toggleTransDetailsPanel } = PanelsSlice.actions

export const getEditCoursePanel = (state: AppState) => state?.panels?.editCoursePanel
export const getTransDetailsPanel = (state: AppState) => state?.panels?.transDetailsPanel

export default PanelsSlice
