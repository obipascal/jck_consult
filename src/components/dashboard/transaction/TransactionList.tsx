import TransactionsLoader from "@JCKConsultant/components/loaders/TransactionsLoader"
import LinkPagination from "@JCKConsultant/components/misc/LinkPagination"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { formatNumber } from "@JCKConsultant/lib/utilities"
import { toDateString, uniqueId } from "@JCKConsultant/lib/utils"
import { ErrorIcon, PendingIcon, SuccessIcon } from "@JCKConsultant/pages/enroll/[courseId]/confirm"
import { toggleTransDetailsPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { FetchTrans } from "@JCKConsultant/services/transactions/trans.apis"
import { LinksPaginationResponse, SiteConfigs, TransactionInterface } from "@JCKConsultant/types"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import TransactionDetailsPanel from "../panels/TransactionDetailsPanel"

export default function TransactionList({ settings }: SiteConfigs) {
	const dispatcher = useDispatch()
	const [transactions, setTransactions] = React.useState<LinksPaginationResponse<TransactionInterface>>()

	const _openPanel = (param: any) => dispatcher(toggleTransDetailsPanel({ status: true, params: param }))

	const fetchTransactionsApi = useMutation(FetchTrans, {
		onSuccess: (res: any) => setTransactions(res?.data),
		onError: err => ServerErrors("Error", err)
	})
	const isLoading = fetchTransactionsApi?.isLoading

	React.useEffect(() => {
		if (settings?.site_id) fetchTransactionsApi?.mutateAsync({ perPage: 50, page: 1 })
	}, [settings?.site_id])

	const _data = transactions?.data

	return (
		<>
			<div className="bg-white shadow rounded-md p-3">
				{isLoading && <TransactionsLoader />}
				{!isLoading && (
					<>
						<ul role="list" className="divide-y divide-gray-100 mb-3">
							{_data && _data?.length > 0 && (
								<>
									{_data.map(transaction => (
										<li key={uniqueId()} className="px-3 hover:shadow-lg">
											<Link onClick={() => _openPanel(transaction?.trans_id)} className="flex justify-between gap-x-6 py-5" href={`#${transaction?.trans_id}`}>
												<div className="flex gap-x-4">
													{transaction.status === "success" && <Image width={100} height={100} className="h-12 w-12 flex-none rounded-lg bg-gray-50" src={SuccessIcon} alt="" />}
													{transaction.status === "pending" && <Image width={100} height={100} className="h-12 w-12 flex-none rounded-lg bg-gray-50" src={PendingIcon} alt="" />}
													{transaction.status === "failed" && <Image width={100} height={100} className="h-12 w-12 flex-none rounded-lg bg-gray-50" src={ErrorIcon} alt="" />}
													{transaction.status === "error" && <Image width={100} height={100} className="h-12 w-12 flex-none rounded-lg bg-gray-50" src={ErrorIcon} alt="" />}

													<div className="min-w-0 flex-auto">
														<p className="text-sm font-semibold leading-6 text-gray-900">{transaction?.course?.title}</p>

														<p className="mt-1 truncate text-xs leading-5 text-gray-500">
															<small className="italic mr-1 text-gray-300">by</small> {transaction?.user?.first_name} {transaction?.user?.last_name} |{" "}
															{transaction?.payment_type?.split("_")?.join(" ")}
														</p>
													</div>
												</div>

												<div className="flex gap-x-4 items-center justify-between">
													<div className="hidden sm:flex sm:flex-col sm:items-end">
														<p className="text-sm leading-6 text-gray-900 font-bold">&pound;{formatNumber(transaction.amount)}</p>

														<p className="mt-1 text-xs leading-5 text-gray-500">
															<time dateTime={transaction.updated_at}>{toDateString(transaction.updated_at as any as Date)}</time>
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

															{transaction?.status === "error" && (
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
								</>
							)}
						</ul>

						<LinkPagination pager={transactions} mutator={fetchTransactionsApi} isLoading={isLoading} />
					</>
				)}
			</div>

			<TransactionDetailsPanel />
		</>
	)
}
