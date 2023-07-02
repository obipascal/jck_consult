import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { appSlice } from "./reducers/appSlice"
import AuthSlice from "./reducers/AuthSlice"

const makeStore = () =>
	configureStore({
		reducer: {
			[appSlice?.name]: appSlice.reducer,
			[AuthSlice?.name]: AuthSlice.reducer
		},
		devTools: true
	})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)