import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ClipboardIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getEnrollmentPanel, getPromotionPanel, toggleEnrollmentPanel, togglePromotionPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { useMutation } from "react-query"
import { PromotionInterface } from "@JCKConsultant/types"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import TransactionDetailsLoader from "@JCKConsultant/components/loaders/TransactionDetailsLoader"
import { FetchPromoCode } from "@JCKConsultant/services/promo/promo.apis"
import UpdatePromotionForm from "../promos/UpdatePromotionForm"
import { FetchUsers } from "@JCKConsultant/services/account/account.apis"
import { UserInterface } from "@JCKConsultant/types/user"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { OfflineTrans } from "@JCKConsultant/services/transactions/trans.apis"
import Spinner from "@JCKConsultant/components/home/Spinner"

export default function OfflineEnrollmentPanel() {
	const { show, data, params } = useSelector(getEnrollmentPanel)
	const [users, setUsers] = React.useState<Array<UserInterface>>([])

	const dispatcher = useDispatch()

	const _closePanel = () => dispatcher(toggleEnrollmentPanel({ status: false }))

	const fetchUsersApi = useMutation(FetchUsers, {
		onSuccess: (res: any) => setUsers(res?.data),
		onError: error => ServerErrors("Error", error)
	})

	const isFetching = fetchUsersApi.isLoading

	React.useEffect(() => {
		if (params) {
			fetchUsersApi.mutateAsync()
		}
	}, [params])

	// ----------------------> [Enrollment]
	const offlineEnrollmentApi = useMutation(OfflineTrans, {
		onSuccess: (res: any) => {
			if (res?.status) {
				Success("Offline Enrollment", res?.message)

				_closePanel()
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isSubminting = offlineEnrollmentApi.isLoading

	const _handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		const _data = new FormData(e.target)
		_data.append("course_id", params as string)

		offlineEnrollmentApi.mutateAsync(_data)
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
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Offline Course Enrollment</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6 text-black">
											{isFetching && <TransactionDetailsLoader />}

											{!isFetching && (
												<>
													<div className="mb-4">
														<h1 className="font-bold text-2xl text-blackp-2 flex items-center">Select Users to enrollment</h1>
													</div>

													<form action="" onSubmit={_handleSubmit}>
														<dl className="divide-y divide-gray-300">
															{users?.length > 0 && (
																<>
																	{users?.map(user => (
																		<div key={uniqueId()} className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
																			<dt className="text-sm font-semibold leading-6 text-gray-900">User:</dt>
																			<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">
																				{user?.first_name} {user.last_name} ({user.email})
																				<br />
																				<input
																					className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
																					type="checkbox"
																					role="switch"
																					id="flexSwitchCheckDefault"
																					name="account_ids[]"
																					value={user?.account_id}
																				/>
																				<label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="flexSwitchCheckDefault">
																					Select User
																				</label>
																			</dd>
																		</div>
																	))}
																</>
															)}

															<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
																<dt className="text-sm font-semibold leading-6 text-gray-900">
																	<button
																		disabled={isSubminting}
																		type="submit"
																		className="flex w-full justify-center rounded-md bg-blue disabled:bg-blue/50  p-3 font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
																	>
																		{!isSubminting && "Enroll"}
																		{isSubminting && <Spinner />}
																	</button>
																</dt>
															</div>
														</dl>
													</form>
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
