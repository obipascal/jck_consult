import { toDateString } from "@JCKConsultant/lib/utils"
import { CalendarIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import React from "react"

type CourseOfferedItemProps = {
	title?: string
	date?: string | Date
}
export default function CourseOfferedItem({ title, date }: CourseOfferedItemProps) {
	return (
		<div className="lg:flex lg:items-center lg:justify-between bg-white shadow-log p-3 rounded mb-4">
			<div className="min-w-0 flex-1">
				<h2 className="text-md hover:text-blue font-bold leading-1 text-gray-900 sm:truncate sm:text-lg sm:tracking-tight">
					<Link href="#">{title}</Link>
				</h2>
				<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
					<div className="mt-2 flex items-center text-sm text-gray-500">
						<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
						enrolled since {toDateString(date as Date)}
					</div>
				</div>
			</div>
		</div>
	)
}
