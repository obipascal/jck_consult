import React from "react"

export default function TransactionDetailsLoader() {
	return (
		<>
			<dl className="divide-y divide-gray-300">
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">ID</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">asdfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Reference</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">asdfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Course</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">asdfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Course Price</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">asdfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Discount</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">sadfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Total Paid</dt>
					<dd className="mt-1 text-sm leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">sadfasdf</dd>
				</div>

				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-semibold leading-6 bg-gray-200 text-gray-200 animate-pulse rounded-md">Status</dt>
					<dd className="mt-1 text-sm leading-6  xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3 bg-gray-200 text-gray-200 animate-pulse rounded-md">asdfasdf</dd>
				</div>
			</dl>

			<hr className="my-4  animate-pulse" />

			<div className="">
				<h1 className="bg-gray-200 animate-pulse rounded-md p-3 text-gray-200 mb-3">Customer</h1>
				<div className="flex items-center justify-start gap-x-4 block w-full text-gray-500 hover:text-blue">
					<div className="h-12 w-12 flex-none rounded-full bg-gray-200 animate-pulse" />
					<h1 className="bg-gray-200 animate-pulse rounded-md p-2"></h1>
				</div>
			</div>
		</>
	)
}
