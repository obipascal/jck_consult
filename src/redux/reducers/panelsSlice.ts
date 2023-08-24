import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { PanelState } from "@JCKConsultant/types/panel"

// Type for our state

export interface PanelsStateProps {
	editCoursePanel: PanelState
	transDetailsPanel: PanelState
	addFAQPanel: PanelState
	updateFAQPanel: PanelState
	uploadMaterialPanel: PanelState
	promotionPanel: PanelState
	reviewPanel: PanelState
	enrollmentPanel: PanelState
}

// Initial state
const panelInitState: PanelState = {
	show: false,
	params: "",
	data: null
}
const initialState: PanelsStateProps = {
	editCoursePanel: panelInitState,
	transDetailsPanel: panelInitState,
	addFAQPanel: panelInitState,
	updateFAQPanel: panelInitState,
	uploadMaterialPanel: panelInitState,
	promotionPanel: panelInitState,
	reviewPanel: panelInitState,
	enrollmentPanel: panelInitState
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

		toggleAddFAQPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.addFAQPanel.show = status

			if (params) state.addFAQPanel.params = params

			if (data) state.addFAQPanel.data = data
		},

		toggleUpdateFAQPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.updateFAQPanel.show = status

			if (params) state.updateFAQPanel.params = params

			if (data) state.updateFAQPanel.data = data
		},

		toggleUploadMaterialPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.uploadMaterialPanel.show = status

			if (params) state.uploadMaterialPanel.params = params

			if (data) state.uploadMaterialPanel.data = data
		},

		togglePromotionPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.promotionPanel.show = status

			if (params) state.promotionPanel.params = params

			if (data) state.promotionPanel.data = data
		},

		toggleReviewPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.reviewPanel.show = status

			if (params) state.reviewPanel.params = params

			if (data) state.reviewPanel.data = data
		},

		toggleEnrollmentPanel(state, action) {
			const { params, data, status } = action?.payload

			if (typeof status === "boolean") state.enrollmentPanel.show = status

			if (params) state.enrollmentPanel.params = params

			if (data) state.enrollmentPanel.data = data
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

export const { toggleEnrollmentPanel, toggleEditCoursePanel, toggleTransDetailsPanel, toggleAddFAQPanel, toggleUpdateFAQPanel, toggleUploadMaterialPanel, togglePromotionPanel, toggleReviewPanel } =
	PanelsSlice.actions

export const getEditCoursePanel = (state: AppState) => state?.panels?.editCoursePanel
export const getTransDetailsPanel = (state: AppState) => state?.panels?.transDetailsPanel
export const getAddFAQPanel = (state: AppState) => state?.panels?.addFAQPanel
export const getUpdateFAQPanel = (state: AppState) => state?.panels?.updateFAQPanel
export const getUploadMaterialPanel = (state: AppState) => state?.panels?.uploadMaterialPanel
export const getPromotionPanel = (state: AppState) => state?.panels?.promotionPanel
export const getReviewPanel = (state: AppState) => state?.panels?.reviewPanel
export const getEnrollmentPanel = (state: AppState) => state?.panels?.enrollmentPanel

export default PanelsSlice
