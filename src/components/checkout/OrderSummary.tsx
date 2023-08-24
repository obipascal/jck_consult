import { formatNumber } from "@JCKConsultant/lib/utilities"
import React from "react"

type OrderSummaryProps = {
	productName?: string
	productPrice?: number
	productDiscount?: number
}
export default function OrderSummary({ productName, productDiscount = 0, productPrice = 0 }: OrderSummaryProps) {
	return (
		<div className="flex flex-col my-3">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full text-left text-sm font-light">
							<thead className="border-b bg-white font-medium">
								<tr>
									<th scope="col" className="px-6 py-4 font-bold text-2xl">
										Summary
									</th>
									<th scope="col" className="px-6 py-4"></th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b bg-neutral-100">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Course:</td>
									<td className="whitespace-nowrap px-6 py-4">{productName}</td>
								</tr>
								<tr className="border-b bg-white">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Price:</td>
									<td className="whitespace-nowrap px-6 py-4">&pound;{formatNumber(productPrice)}</td>
								</tr>

								<tr className="border-b bg-neutral-100">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Discounts:</td>
									<td className="whitespace-nowrap px-6 py-4">-&pound;{formatNumber(productDiscount)}</td>
								</tr>

								<tr className="">
									<td className="whitespace-nowrap px-6 py-4 font-bold text-end">Total:</td>
									<td className="whitespace-nowrap px-6 py-4">&pound;{formatNumber(productPrice - productDiscount)}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
