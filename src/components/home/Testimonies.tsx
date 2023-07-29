import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import Image from "next/image"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { PaginationResponse } from "@JCKConsultant/types"
import { ReviewerInterface } from "@JCKConsultant/types/user"
import { useMutation } from "react-query"
import { FetchPublishedReviews } from "@JCKConsultant/services/review/review.apis"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import TestimoniesLoader from "../loaders/TestimoniesLoader"
import MaleAvatar from "@JCKConsultant/assets/img/avatar/male-avatar.webp"

type TestimoniesProps = {
	siteId?: string
}
export default function Testimonies({ siteId }: TestimoniesProps) {
	const [reviews, setReviews] = React.useState<PaginationResponse<ReviewerInterface>>()

	const fetchPubReviewsApi = useMutation(FetchPublishedReviews, {
		onSuccess(res: any) {
			setReviews(res?.data)
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isLoading = fetchPubReviewsApi.isLoading

	React.useEffect(() => {
		fetchPubReviewsApi.mutateAsync({ perPage: 3, page: 1 })
	}, [siteId])

	const _data = reviews?.data

	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue bg-no-repeat bg-cover bg-center my-0">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<header data-aos="fade-up" className="px-10 mb-20 text-center">
						<h1 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 uppercase">TESTIMONIALS</h1>
						<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Discover What Our Clients Are Saying: Real Stories, Real Results</p>
					</header>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<section className="text-neutral-700 dark:text-neutral-300">
							{!isLoading && (
								<div className="grid gap-6 text-center md:grid-cols-3">
									{_data && (
										<>
											{_data?.length > 0 && (
												<>
													{_data?.map(review => (
														<div key={review?.review_id} data-aos="fade-up">
															<div className="block rounded-lg bg-white shadow-lg ">
																<div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
																<div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
																	<Image alt="" width={100} height={100} src={review?.reviewer_image ? review?.reviewer_image : MaleAvatar} />
																</div>
																<div className="p-6">
																	<h4 className="mb-1 text-2xl font-bold text-blue">{review?.reviewer_name}</h4>
																	<h4 className="mb-0 text-md font-semibold text-gray-400  ">{review?.reviewer_role}</h4>
																	<h4 className="mb-4 text-sm font-normal text-gray-400  ">{review?.reviewer_company}</h4>
																	<hr />
																	<p className="mt-4 text-gray-500">
																		<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
																			<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
																		</svg>
																		{review?.reviewer_message}
																	</p>
																</div>
															</div>
														</div>
													))}
												</>
											)}
										</>
									)}
								</div>
							)}

							{isLoading && <TestimoniesLoader />}
						</section>
					</div>
					<Link
						href={ROUTES.testimonies}
						className="p-3 rounded-full w-fit mt-10 border border-blue bg-white  text-slate-800 hover:bg-primary hover:border-primary transition-all hover:text-white m-auto block shadow-lg flex items-center"
						role="button"
					>
						Show more <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}
