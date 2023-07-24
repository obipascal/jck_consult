import React from "react"

type CourseListItemLoaderProps = {
	items?: number
}
export default function CourseListItemLoader({ items = 5 }: CourseListItemLoaderProps) {
	const renderItems: Array<number> = []
	for (let index = items; index > renderItems.length; index--) {
		renderItems.push(index)
	}

	return (
		<>
			{renderItems?.map(items => (
				<div key={items} className="grid grid-cols-3 gap-4 h-24 bg-white p-3 animate-pulse rounded-md mb-3">
					<div className="col-span-2">
						<div className="h-8 bg-gray-200 animate-pulse rounded-md mb-3"></div>
						<div className="flex flex-row gap-4 justify-between">
							<div className="h-6 w-[72px] bg-gray-200 animate-pulse rounded-md"></div>
							<div className="h-6 w-full bg-gray-200 animate-pulse rounded-md"></div>
						</div>
					</div>
					<div className="col-span-1 flex items-center flex-row gap-4 justify-center">
						<div className="h-6 w-[100px] bg-gray-200 animate-pulse rounded-md"></div>
						<div className="h-6 w-[100px] bg-gray-200 animate-pulse rounded-md"></div>
						<div className="h-6 w-[100px] bg-gray-200 animate-pulse rounded-md"></div>
					</div>
				</div>
			))}
		</>
	)
}
