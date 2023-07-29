import TransactionsLoader from "@JCKConsultant/components/loaders/TransactionsLoader"
import LinkPagination from "@JCKConsultant/components/misc/LinkPagination"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { classNames, toDateString, uniqueId } from "@JCKConsultant/lib/utils"
import { emitFetchReviews, getReviewsEvents } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { togglePromotionPanel, toggleReviewPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { FetchReviews } from "@JCKConsultant/services/review/review.apis"
import { LinksPaginationResponse, SiteConfigs } from "@JCKConsultant/types"
import { ReviewerInterface } from "@JCKConsultant/types/user"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import ReviewModrationPanel from "../panels/ReviewModrationPanel"

export default function ListUsersTestimonies({ settings }: SiteConfigs) {
	const dispatcher = useDispatch()
	const [testimonies, setTestimonies] = React.useState<LinksPaginationResponse<ReviewerInterface>>()
	const { canFetchReviews } = useSelector(getReviewsEvents)

	const _openPanel = (param: any) => dispatcher(toggleReviewPanel({ status: true, params: param }))

	const fetchUsersTestimoniesApi = useMutation(FetchReviews, {
		onSuccess: (res: any) => {
			setTestimonies(res?.data)
			dispatcher(emitFetchReviews(false))
		},
		onError: err => ServerErrors("Error", err)
	})
	const isLoading = fetchUsersTestimoniesApi?.isLoading

	React.useEffect(() => {
		if (settings?.site_id) fetchUsersTestimoniesApi?.mutateAsync({ perPage: 50, page: 1 })
	}, [settings?.site_id])

	React.useEffect(() => {
		if (canFetchReviews) fetchUsersTestimoniesApi?.mutateAsync({ perPage: 50, page: 1 })
	}, [canFetchReviews])

	const _data = testimonies?.data

	return (
		<>
			<div className="bg-white shadow rounded-md p-3">
				{isLoading && <TransactionsLoader />}
				{!isLoading && (
					<>
						<ul role="list" className="divide-y divide-gray-100 mb-3">
							{_data && _data?.length > 0 && (
								<>
									{_data.map(review => (
										<li key={uniqueId()} className="px-3 hover:shadow-lg">
											<Link onClick={() => _openPanel(review?.review_id)} className="flex justify-between gap-x-6 py-5" href={`#${review?.review_id}`}>
												<div className="flex gap-x-4 ">
													{review?.reviewer_image && <Image width={100} height={100} className="h-12 w-12 flex-none rounded-full bg-gray-50" src={review?.reviewer_image} alt="" />}
													<div className="min-w-0 flex-auto">
														<p className="text-md font-semibold leading-7 text-gray-900">{review?.reviewer_name}</p>
														<p className={classNames("mt-1 truncate text-xs leading-5 text-gray-500")}>
															{review?.reviewer_role} <em className="mx-2 italic">at</em> {review?.reviewer_company}
														</p>
													</div>
												</div>

												<div className="flex gap-x-4 items-center justify-between">
													<div className="hidden sm:flex sm:flex-col sm:items-end">
														<p className="mt-1 text-xs leading-5 text-gray-500">
															<time dateTime={review.updated_at}>{toDateString(review.updated_at as any as Date)}</time>
														</p>
													</div>
													<ChevronRightIcon className="text-gray-500 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
												</div>
											</Link>
										</li>
									))}
								</>
							)}
						</ul>

						<LinkPagination pager={testimonies} mutator={fetchUsersTestimoniesApi} isLoading={isLoading} />
					</>
				)}
			</div>
			<ReviewModrationPanel />
		</>
	)
}
