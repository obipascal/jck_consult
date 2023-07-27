import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import { appSlice } from "./reducers/appSlice"
import AuthSlice from "./reducers/AuthSlice"
import PanelsSlice from "./reducers/panelsSlice"
import ModalsSlice from "./reducers/modalSlice"
import { FAQsSlice } from "./reducers/faqsSlice"
import AppEventsSlice from "./reducers/appEventsSlice"
import CheckoutFlowSlice from "./reducers/checkoutFlowSlice"

const makeStore = () =>
	configureStore({
		reducer: {
			[appSlice?.name]: appSlice.reducer,
			[AuthSlice?.name]: AuthSlice.reducer,
			[PanelsSlice?.name]: PanelsSlice.reducer,
			[ModalsSlice?.name]: ModalsSlice.reducer,
			[FAQsSlice?.name]: FAQsSlice.reducer,
			[AppEventsSlice?.name]: AppEventsSlice.reducer,
			[CheckoutFlowSlice?.name]: CheckoutFlowSlice.reducer
		},
		devTools: true
	})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>

export const wrapper = createWrapper<AppStore>(makeStore)
