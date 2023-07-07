import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"

export default function Dashboard() {
	return (
		<DashboardLayout>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 grid grid-cols-2">
					<div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
					</div>

					<div>
						<button type="button" className="rounded-full bg-primary">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
							Create New Course
						</button>
					</div>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
					<p className="p-2">Dashboard</p>
				</div>
			</main>
		</DashboardLayout>
	)
}
