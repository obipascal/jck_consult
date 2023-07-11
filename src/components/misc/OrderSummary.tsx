import React from "react"

export default function OrderSummary() {
	return (
		<div className="flex flex-col my-3">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full text-left text-sm font-light">
							<thead className="border-b bg-white font-medium">
								<tr>
									<th scope="col" className="px-6 py-4">
										Item
									</th>
									<th scope="col" className="px-6 py-4">
										Desc
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b bg-neutral-100">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Course:</td>
									<td className="whitespace-nowrap px-6 py-4">Data Analysis</td>
								</tr>
								<tr className="border-b bg-white">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Amount:</td>
									<td className="whitespace-nowrap px-6 py-4">&pound; 1,000.00</td>
								</tr>

								<tr className="border-b bg-neutral-100">
									<td className="whitespace-nowrap px-6 py-4 font-bold">Discount:</td>
									<td className="whitespace-nowrap px-6 py-4">0% (&pound; 0)</td>
								</tr>

								<tr className="border-b">
									<td className="whitespace-nowrap px-6 py-4 font-bold text-end">Subtotal:</td>
									<td className="whitespace-nowrap px-6 py-4">&pound; 1,000.00</td>
								</tr>

								<tr className="">
									<td className="whitespace-nowrap px-6 py-4 font-bold text-end">Total:</td>
									<td className="whitespace-nowrap px-6 py-4">&pound; 1,000.00</td>
								</tr>
								<tr className="">
									<td className="whitespace-nowrap px-6 py-4 font-bold text-end">Status:</td>
									<td className="whitespace-nowrap px-6 py-4">
										<span className="text-red-500 uppercase font-extrabold text-lg">Unpaid</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
