import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "../stores"
import { SiteConfigs } from "@JCKConsultant/types"

// Type for our state
export interface AppEventsStateProps {
	course: {
		canFetchCourses: boolean
	}
}

// Initial state
const initialState: AppEventsStateProps = {
	course: {
		canFetchCourses: false
	}
}

// Actual Slice
export const AppEventsSlice = createSlice({
	name: "appEvents",
	initialState,
	reducers: {
		/**
		 * Emit an event to indicate that an should beginne course fetching operation.
		 */
		emitFetchCourses(state, action) {
			state.course.canFetchCourses = action?.payload
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

export const { emitFetchCourses } = AppEventsSlice.actions

export const getCourseEvents = (state: AppState) => state?.appEvents?.course

export default AppEventsSlice
