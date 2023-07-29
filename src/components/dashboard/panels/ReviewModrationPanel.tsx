import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getReviewPanel, toggleReviewPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { useMutation } from "react-query"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import TransactionDetailsLoader from "@JCKConsultant/components/loaders/TransactionDetailsLoader"
import { ReviewerInterface } from "@JCKConsultant/types/user"
import { DeleteReview, FetchReview, UpdateReview } from "@JCKConsultant/services/review/review.apis"
import ReviewModerationForm from "../testimonies/ReviewModerationForm"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { emitFetchReviews } from "@JCKConsultant/redux/reducers/appEventsSlice"

export default function ReviewModrationPanel() {
	const { show, data, params } = useSelector(getReviewPanel)
	const [review, setReivewData] = React.useState<ReviewerInterface>()

	const dispatcher = useDispatch()

	const _closePanel = () => dispatcher(toggleReviewPanel({ status: false }))

	const fetchReviewApi = useMutation(FetchReview, {
		onSuccess: (res: any) => setReivewData(res?.data),
		onError: e => ServerErrors("Error", e)
	})

	const isFetching = fetchReviewApi.isLoading

	React.useEffect(() => {
		if (params) {
			fetchReviewApi.mutateAsync(params)
		}
	}, [params])

	// -------------------> Delete review

	const deletePromotionApi = useMutation(DeleteReview, {
		onSuccess: () => {
			Success("Success", "Promotion deleted")
			dispatcher(emitFetchReviews(true))
			dispatcher(toggleReviewPanel({ status: false, params: null }))
		},
		onError: e => ServerErrors("Error", e)
	})
	const isDeleting = deletePromotionApi.isLoading

	const _handleDelete = () => deletePromotionApi.mutateAsync(review?.review_id)

	// -------------------> Publish review

	const publishReviewApi = useMutation(UpdateReview, {
		onSuccess: (res: any) => {
			Success("Success", res?.message)
			dispatcher(emitFetchReviews(true))
			fetchReviewApi.mutateAsync(params)
		},
		onError: e => ServerErrors("Error", e)
	})
	const isPublishing = publishReviewApi.isLoading

	const _handlePublishing = () => publishReviewApi.mutateAsync({ id: review?.review_id, data: { status: "published" } })

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
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Reviewer Details</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6 text-black">
											{isFetching && <TransactionDetailsLoader />}

											{!isFetching && (
												<>
													<dl className="divide-y divide-gray-300">
														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Name</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{review?.reviewer_name}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Role / Postion</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{review?.reviewer_role}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Company</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{review?.reviewer_company}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Email</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{review?.reviewer_email}</dd>
														</div>

														<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
															<dt className="text-sm font-semibold leading-6 text-gray-900">Review Message</dt>
															<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0 pl-3">{review?.reviewer_message}</dd>
														</div>
													</dl>
													<div className="flex gap-8 items-center">
														<button
															onClick={_handlePublishing}
															disabled={isPublishing || isDeleting || review?.status === "published"}
															type="button"
															className="flex w-full justify-center rounded-md border border-primary disabled:border-primary/50 p-1 text-sm font-semibold leading-6 text-primary shadow-sm hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
														>
															{!isDeleting && (review?.status === "published" ? "Published" : "Publish")}
															{isDeleting && <Spinner />}
														</button>

														<button
															onClick={_handleDelete}
															disabled={isPublishing || isDeleting}
															type="button"
															className="flex w-full justify-center rounded-md border border-red-400 disabled:border-red-400/50 p-1 text-sm font-semibold leading-6 text-primary shadow-sm hover:text-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
														>
															{!isDeleting && "Delete"}
															{isDeleting && <Spinner />}
														</button>
													</div>
													<hr className="my-4" />

													<div className="my-5">
														<h1 className="mb-3 font-bold text-lg p-2">Moderate Review Message</h1>
														<hr className="my-4" />
														<ReviewModerationForm data={review} />
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
