import "animate.css"
import "@JCKConsultant/styles/globals.scss"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

import type { AppProps } from "next/app"
import { QueryClientProvider, QueryClient } from "react-query"
import { Provider } from "react-redux"
import { wrapper } from "@JCKConsultant/redux/stores"
import DarkModeHandler from "@JCKConsultant/components/sites/DarkModeHandler"
import "aos/dist/aos.css"
import React from "react"

const queryClient = new QueryClient()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
	const { store, props } = wrapper.useWrappedStore(pageProps)

	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<QueryClientProvider client={queryClient}>
					<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
					<Component {...pageProps} />
					<DarkModeHandler />
				</QueryClientProvider>
			</SessionProvider>
		</Provider>
	)
}
