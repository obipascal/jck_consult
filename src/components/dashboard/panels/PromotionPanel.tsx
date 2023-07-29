import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ClipboardIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getPromotionPanel, togglePromotionPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { useMutation } from "react-query"
import { PromotionInterface } from "@JCKConsultant/types"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import TransactionDetailsLoader from "@JCKConsultant/components/loaders/TransactionDetailsLoader"
import { FetchPromoCode } from "@JCKConsultant/services/promo/promo.apis"
import UpdatePromotionForm from "../promos/UpdatePromotionForm"

export default function PromotionPanel() {
	const { show, data, params } = useSelector(getPromotionPanel)
	const [promotion, setPromotion] = React.useState<PromotionInterface>()

	const dispatcher = useDispatch()

	const _closePanel = () => dispatcher(togglePromotionPanel({ status: false }))

	const fetchPromotionApi = useMutation(FetchPromoCode, {
		onSuccess: (res: any) => setPromotion(res?.data),
		onError: error => ServerErrors("Error", error)
	})

	const isFetching = fetchPromotionApi.isLoading

	React.useEffect(() => {
		if (params) {
			fetchPromotionApi.mutateAsync(params)
		}
	}, [params])

	const _copyPromoCode = () => {
		navigator.clipboard.writeText(promotion?.promo_code as string).then(() => Success("Promotion", "Promo code coppied"))
	}
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
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Promotion Details</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6 text-black">
											{isFetching && <TransactionDetailsLoader />}

											{!isFetching && (
												<>
													<div className="mb-4">
														<h1 className="font-bold text-2xl text-blackp-2 flex items-center">
															{promotion?.promo_code} <ClipboardIcon onClick={_copyPromoCode} className="h-8 w-8 text-gray-500 mx-2" />
														</h1>
													</div>
													<dl className="divide-y divide-gray-300">
														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Starts on</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{promotion?.starts}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Ending on</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{promotion?.ends}</dd>
														</div>
													</dl>

													<hr className="my-4" />

													<div className="my-5">
														<UpdatePromotionForm promo={promotion} />
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
