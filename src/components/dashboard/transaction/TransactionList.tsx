import Pagination from "@JCKConsultant/components/misc/Pagination"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { toggleTransDetailsPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { useDispatch } from "react-redux"
const people = [
	{
		name: "Course title",
		message: "Transaction was successful!",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "3h ago",
		status: "success",
		dateTime: "2023-01-23T13:23Z"
	},
	{
		name: "Course title",
		message: "Transaction couldn't be completed.",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "3h ago",
		status: "failed",
		dateTime: "2023-01-23T13:23Z"
	},
	{
		name: "Course title",
		message: "Transaction was successful",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "July 10, 2023",
		status: "success",
		dateTime: "2023-01-23T13:23Z"
	},
	{
		name: "Course title",
		message: "Transaction was successful",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "3h ago",
		status: "success",
		dateTime: "2023-01-23T13:23Z"
	},
	{
		name: "Course title",
		message: "Transaction is pending",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "3h ago",
		status: "pending",
		dateTime: "2023-01-23T13:23Z"
	},
	{
		name: "Course title",
		message: "Transaction declined",
		amount: "2,000.00",
		imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		date: "July 10, 2023",
		status: "declined",
		dateTime: "2023-01-23T13:23Z"
	}
]

export default function TransactionList() {
	const dispatcher = useDispatch()

	const _openPanel = () => dispatcher(toggleTransDetailsPanel({ status: true }))

	return (
		<div className="  bg-white shadow rounded-md p-3">
			<ul role="list" className="divide-y divide-gray-100 mb-3">
				{people.map(transaction => (
					<li key={uniqueId()} className="px-3 hover:shadow-lg">
						<Link onClick={_openPanel} className="flex justify-between gap-x-6 py-5" href={`#${uniqueId()}`}>
							<div className="flex gap-x-4">
								<Image width={100} height={100} className="h-12 w-12 flex-none rounded-lg bg-gray-50" src={transaction.imageUrl} alt="" />
								<div className="min-w-0 flex-auto">
									<p className="text-sm font-semibold leading-6 text-gray-900">{transaction.name}</p>

									<p className="mt-1 truncate text-xs leading-5 text-gray-500">{transaction.message}</p>
								</div>
							</div>

							<div className="flex gap-x-4 items-center justify-between">
								<div className="hidden sm:flex sm:flex-col sm:items-end">
									<p className="text-sm leading-6 text-gray-900 font-bold">&pound;{transaction.amount}</p>

									<p className="mt-1 text-xs leading-5 text-gray-500">
										<time dateTime={transaction.dateTime}>{transaction.date}</time>
									</p>
									<div className="mt-1 flex items-center gap-x-1.5">
										{transaction?.status === "success" && (
											<div className="flex-none rounded-full bg-emerald-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
											</div>
										)}

										{transaction?.status === "failed" && (
											<div className="flex-none rounded-full bg-red-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-red-500" />
											</div>
										)}

										{transaction?.status === "pending" && (
											<div className="flex-none rounded-full bg-yellow-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
											</div>
										)}

										{transaction?.status === "declined" && (
											<div className="flex-none rounded-full bg-red-500/20 p-1">
												<div className="h-1.5 w-1.5 rounded-full bg-red-500" />
											</div>
										)}
										<p className="text-xs leading-5 text-gray-500 capitalize">{transaction.status}</p>
									</div>
								</div>
								<ChevronRightIcon className="text-gray-500 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
							</div>
						</Link>
					</li>
				))}
			</ul>

			<Pagination />
		</div>
	)
}
