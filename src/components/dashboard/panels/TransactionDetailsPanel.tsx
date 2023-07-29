import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getTransDetailsPanel, toggleTransDetailsPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { useMutation } from "react-query"
import { FetchTran } from "@JCKConsultant/services/transactions/trans.apis"
import { TransactionInterface } from "@JCKConsultant/types"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { formatNumber } from "@JCKConsultant/lib/utilities"
import TransactionDetailsLoader from "@JCKConsultant/components/loaders/TransactionDetailsLoader"
import { FemaleAvatar, MaleAvatar } from "@JCKConsultant/pages/dashboard/users/[userId]"

export default function TransactionDetailsPanel() {
	const { show, data, params } = useSelector(getTransDetailsPanel)
	const [transaction, setTransaction] = React.useState<TransactionInterface>()

	const dispatcher = useDispatch()

	const _closePanel = () => dispatcher(toggleTransDetailsPanel({ status: false }))

	const fetchTransactionApi = useMutation(FetchTran, {
		onSuccess: (res: any) => setTransaction(res?.data),
		onError: error => ServerErrors("Error", error)
	})

	const isFetching = fetchTransactionApi.isLoading

	React.useEffect(() => {
		if (params) {
			fetchTransactionApi.mutateAsync(params)
		}
	}, [params])

	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={_closePanel}>
				<Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
											<button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={_closePanel}>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Transaction Details</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6 text-black">
											{isFetching && <TransactionDetailsLoader />}

											{!isFetching && (
												<>
													<dl className="divide-y divide-gray-300">
														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">ID</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{transaction?.trans_id}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Reference</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{transaction?.reference}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Course</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{transaction?.course?.title}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Course Price</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">&pound;{formatNumber(transaction?.course?.price)}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Discount</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">&pound;{formatNumber(transaction?.discount)}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Total Paid</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">&pound;{formatNumber(transaction?.amount)}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Status</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{transaction?.status?.toUpperCase()}</dd>
														</div>
													</dl>

													<hr className="my-4" />

													<div className="">
														<h1 className="font-semibold text-lg mb-3">Customer</h1>
														<Link
															onClick={_closePanel}
															href={ROUTES.dashboard.users.info(transaction?.user?.account_id)}
															className="flex items-center justify-start gap-x-4 block w-full text-gray-500 hover:text-blue"
														>
															<Image width={100} height={100} className="h-12 w-12 flex-none rounded-full bg-gray-50" src={transaction?.user?.gender === "female" ? FemaleAvatar : MaleAvatar} alt="" />
															<h1 className="font-bold text-lg ">
																{transaction?.user?.first_name} {transaction?.user?.last_name}
															</h1>
														</Link>
													</div>
												</>
											)}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
