import "animate.css"
import "@JCKConsultant/styles/globals.scss"

import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

import type { AppProps } from "next/app"

import { QueryClientProvider, QueryClient } from "react-query"
import { Provider } from "react-redux"
import { wrapper } from "@JCKConsultant/redux/stores"
import DarkModeHandler from "@JCKConsultant/components/sites/DarkModeHandler"

const queryClient = new QueryClient()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
	const { store, props } = wrapper.useWrappedStore(pageProps)
	return (
		<Provider store={store}>
			<SessionProvider session={session}>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
					<DarkModeHandler />
				</QueryClientProvider>
			</SessionProvider>
		</Provider>
	)
}
