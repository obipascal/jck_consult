import { useRouter } from "next/router"
import React from "react"

type DashboardContentProps = {
	type?: "page" | "nav"
	title?: string
	component?: React.ReactNode
	children?: React.ReactNode
}
export default function DashboardContent({ type = "page", title = "Dashboard", component, children }: DashboardContentProps) {
	const router = useRouter()
	const goBack = () => router?.back()

	switch (type) {
		case "page":
			return (
				<>
					<header className="bg-white shadow">
						<div className={`mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 grid ${component ? "grid-cols-2" : "grid-cols-1"}`}>
							<div>
								<h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
							</div>

							<div className="flex items-end justify-end">{component}</div>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
					</main>
				</>
			)

		case "nav":
			return (
				<>
					<header className="bg-white shadow">
						<div className={`mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 grid ${component ? "grid-cols-2" : "grid-cols-1"}`}>
							<div className="flex items-center">
								<button onClick={goBack} type="button" className="rounded-full bg-gradient-to-r from-blue-800 to-blue-900 p-1 pr-2 text-white flex items-center shadow-md mr-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
										<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
									</svg>
									Back
								</button>
								<h1 className="xs:text-md md:text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
							</div>
							<div>{component}</div>
						</div>
					</header>
					<main>
						<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
					</main>
				</>
			)
		default:
			return null
	}
}
