import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { CurrencyPoundIcon } from "@heroicons/react/20/solid"
import { BookOpenIcon, UsersIcon } from "@heroicons/react/24/outline"
import dynamic from "next/dynamic"

const DashboardUsersStatistics = dynamic(() => import("@JCKConsultant/components/dashboard/statistics/DashboardUsersStatistics"), { ssr: false })

export default function Dashboard() {
	return (
		<DashboardLayout>
			<DashboardContent title="Dashboard">
				<section className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 mb-5">
					<div className=" bg-gradient-to-r from-secondary to-blue md:rounded  xs:rounded-none shadow min-h-[72px] relative mb-4 p-4">
						<UsersIcon className="h-20 w-20 text-gray-500" />
						<div className="absolute top-0 left-0 right-0 bottom-0 p-3 text-end text-white">
							<h1 className="font-bold text-2xl">2,000</h1>
							<p className="text-gray-200">Total users</p>
						</div>
					</div>

					<div className=" bg-gradient-to-r from-secondary to-blue md:rounded  xs:rounded-none shadow min-h-[72px] relative mb-4 p-4">
						<BookOpenIcon className="h-20 w-20 text-gray-500" />
						<div className="absolute top-0 left-0 right-0 bottom-0 p-3 text-end text-white">
							<h1 className="font-bold text-2xl">100</h1>
							<p className="text-gray-200">Courses</p>
						</div>
					</div>

					<div className=" bg-gradient-to-r from-secondary to-blue md:rounded  xs:rounded-none shadow min-h-[72px] relative mb-4 p-4">
						<CurrencyPoundIcon className="h-20 w-20 text-gray-500" />
						<div className="absolute top-0 left-0 right-0 bottom-0 p-3 text-end text-white">
							<h1 className="font-bold text-2xl">&pound;50,000.00</h1>
							<p className="text-gray-200">Revenues</p>
						</div>
					</div>
				</section>

				<section className="bg-white shadow-md rounded-md p-3">
					<DashboardUsersStatistics />
				</section>
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
