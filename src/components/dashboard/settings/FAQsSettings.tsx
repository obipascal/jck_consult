import React from "react"
import AddFAQPanel from "../panels/AddFAQPanel"
import { useDispatch, useSelector } from "react-redux"
import { toggleAddFAQPanel, toggleUpdateFAQPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { CalendarDaysIcon } from "@heroicons/react/24/solid"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useMutation } from "react-query"
import { DeleteFAQ, FetchFAQs } from "@JCKConsultant/services/settings/settings.apis"
import { Info, ServerErrors } from "@JCKConsultant/lib/_toaster"
import { PaginationResponse } from "@JCKConsultant/types"
import { FAQResponseInterface } from "@JCKConsultant/types/faqs"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { getFAQsData, setFAQsData } from "@JCKConsultant/redux/reducers/faqsSlice"
import { useUser } from "@JCKConsultant/hooks/useUser"
import Spinner from "@JCKConsultant/components/home/Spinner"
import UpdateFAQPanel from "../panels/UpdateFAQPanel"

type FAQsSettingsProps = {
	faqsData: PaginationResponse<FAQResponseInterface>
}
export default function FAQsSettings() {
	const dispatcher = useDispatch()
	const _faqsData = useSelector(getFAQsData)
	const user = useUser()
	const _togglePanel = () => dispatcher(toggleAddFAQPanel({ status: true }))
	const _toggleUpdatePanel = (id: any) => dispatcher(toggleUpdateFAQPanel({ status: true, params: id }))

	const FetchFAQsApi = useMutation(FetchFAQs, {
		onSuccess(res: any) {
			if (res?.status) {
				dispatcher(setFAQsData(res?.data))
			}
		},

		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const deleteFAQApi = useMutation(DeleteFAQ, {
		onSuccess(res: any) {
			if (res?.status) {
				Info("FAQ Deleted", res?.message)
				FetchFAQsApi.mutateAsync({ perPage: 50, page: 1 })
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	React.useEffect(() => {
		if (user?.account_id) {
			FetchFAQsApi.mutateAsync({ perPage: 50, page: 1 })
		}
	}, [user?.account_id])

	const isDeleting = deleteFAQApi.isLoading

	const _handleDelete = (id: any) => deleteFAQApi.mutateAsync(id)
	/* Data */
	const data = _faqsData?.data

	return (
		<>
			<div className="mt-6 border-t border-gray-100">
				<div className="px-4 mt-5 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						<h1 className="font-semibold text-gray-600 text-lg">FAQs</h1>
						<p className="font-medium text-md text-gray-500">Add, Update & Remove FAQs</p>
						<button onClick={_togglePanel} type="button" className="p-3 mt-5 rounded-lg text-white bg-blue disabled:bg-blue/50">
							Add New FAQ
						</button>
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
						<div>
							<div className="relative mb-4 flex flex-col gap-4">
								{data && (
									<>
										{data?.map(faq => (
											<div key={uniqueId()} className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
												<h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">{faq?.title}</h5>
												<p className="mb-4 text-base text-neutral-600 ">
													<CalendarDaysIcon className="h-6 w-6 mr-1 inline" /> {faq?.last_modified}
												</p>
												<div className="flex gap-4">
													<button
														onClick={() => _toggleUpdatePanel(faq?.faq_id)}
														disabled={isDeleting}
														type="button"
														className="inline-block rounded border-primary border text-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														<PencilIcon className="h-4 w-4 inline mr-1" /> Edit
													</button>

													<button
														onClick={() => _handleDelete(faq?.faq_id)}
														disabled={isDeleting}
														type="button"
														className="inline-block rounded border-red-500 border text-red-500 disabled:text-red-500/50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														<TrashIcon className="h-4 w-4 inline mr-1" /> Remove
													</button>
												</div>
											</div>
										))}
									</>
								)}
							</div>
						</div>
					</dd>
				</div>
			</div>
			<AddFAQPanel />
			<UpdateFAQPanel />
		</>
	)
}
