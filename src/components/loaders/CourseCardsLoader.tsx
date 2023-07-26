import { uniqueId } from "@JCKConsultant/lib/utils"
import React from "react"

type CourseCardsLoaderProps = {
	items?: number
}
export default function CourseCardsLoader({ items = 9 }: CourseCardsLoaderProps) {
	return (
		<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			<div key={uniqueId()} className="group relative bg-white rounded shadow-lg">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
					<div className="h-16 w-full bg-gray-200 animate-pulse rounded-md"></div>
				</div>
				<div className="mt-4 flex gap-4 justify-between p-3">
					<div className="w-full">
						<h3 className="p-3 bg-gray-200 animate-pulse rounded-md w-full"></h3>
						<p className="mt-1 bg-gray-200 animate-pulse rounded-md h-16"></p>
						<span className="h-10 w-16 rounded-full mt-3 block bg-gray-200 animate-pulse rounded-md"></span>
					</div>
					<p className="p-3 h-10 w-16 bg-gray-200 animate-pulse rounded-md"></p>
				</div>
			</div>

			<div key={uniqueId()} className="group relative bg-white rounded shadow-lg">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
					<div className="h-16 w-full bg-gray-200 animate-pulse rounded-md"></div>
				</div>
				<div className="mt-4 flex gap-4 justify-between p-3">
					<div className="w-full">
						<h3 className="p-3 bg-gray-200 animate-pulse rounded-md w-full"></h3>
						<p className="mt-1 bg-gray-200 animate-pulse rounded-md h-16"></p>
						<span className="h-10 w-16 rounded-full mt-3 block bg-gray-200 animate-pulse rounded-md"></span>
					</div>
					<p className="p-3 h-10 w-16 bg-gray-200 animate-pulse rounded-md"></p>
				</div>
			</div>

			<div key={uniqueId()} className="group relative bg-white rounded shadow-lg">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
					<div className="h-16 w-full bg-gray-200 animate-pulse rounded-md"></div>
				</div>
				<div className="mt-4 flex gap-4 justify-between p-3">
					<div className="w-full">
						<h3 className="p-3 bg-gray-200 animate-pulse rounded-md w-full"></h3>
						<p className="mt-1 bg-gray-200 animate-pulse rounded-md h-16"></p>
						<span className="h-10 w-16 rounded-full mt-3 block bg-gray-200 animate-pulse rounded-md"></span>
					</div>
					<p className="p-3 h-10 w-16 bg-gray-200 animate-pulse rounded-md"></p>
				</div>
			</div>
		</div>
	)
}
