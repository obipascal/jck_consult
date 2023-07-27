import Image from "next/image"
import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { useMutation } from "react-query"
import { FetchPublishedCourses } from "@JCKConsultant/services/course/course.apis"
import { PaginationResponse } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"
import CourseCardsLoader from "../loaders/CourseCardsLoader"
import { formatNumber } from "@JCKConsultant/lib/utilities"

type OurCoursesProps = {
	siteId?: string
}
export default function OurCourses({ siteId }: OurCoursesProps) {
	const [courses, setCourses] = React.useState<PaginationResponse<CourseInterface>>()

	const fetchCourseApi = useMutation(FetchPublishedCourses, {
		onSuccess(res: any) {
			if (res?.status) setCourses(res?.data)
		}
	})

	const isFetching = fetchCourseApi.isLoading

	React.useEffect(() => {
		if (siteId) {
			fetchCourseApi.mutateAsync({ perPage: 10, page: 1 })
		}
	}, [siteId])

	const products = courses?.data

	return (
		<section className="bg-[url('/img/bg/Frame_bg_flip.png')] bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-blue">Our Courses</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 font-semibold">Unleashing Your Full Potential with Cutting-Edge Courses</p>
					</div>
					{isFetching && <CourseCardsLoader />}

					{!isFetching && (
						<div className="mt-6 grid lg:grid-cols-4 sm:grid-cols-3 sm-4:grid-cols-2 md:grid-cols-4 gap-4">
							{products && (
								<>
									{products?.length > 0 && (
										<>
											{products.map(product => (
												<>
													<article data-aos="fade-up" key={product?.course_id} className="relative shadow-md group/product rounded-lg bg-white">
														{/* product image */}
														<div className="relative">
															<div className="object-fill h-72 w-full rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${product?.image})` }}></div>
														</div>
														{/* product body */}
														<div className="p-3">
															<div className="flex justify-between pt-2 mb-3">
																<h3 className="font-semibold truncate text-ellipsis p-1 text-2xl max-w-xs text-black">
																	<Link href={ROUTES.courses.details(product?.course_id)} className="hover:underline hover:decoration-secondary hover:transition-all">
																		{product?.title}
																	</Link>
																</h3>
															</div>
															<div className="">
																<p className="text-sm text-gray-500 mb-4">{product?.desc}</p>
																<Link href={ROUTES.courses.details(product?.course_id)} className="p-2 px-3 rounded-full font-medium w-fit mt-3 block bg-primary text-white" role="button">
																	Learn more
																</Link>
															</div>
														</div>
													</article>
												</>
											))}
										</>
									)}
								</>
							)}
						</div>
					)}

					{products && (
						<Link
							href={ROUTES.courses.index}
							className="p-3 rounded-full w-fit mt-10 border border-blue  text-slate-800 hover:bg-primary hover:border-white border-2 transition-all hover:text-white m-auto block shadow-lg flex items-center"
							role="button"
						>
							View all courses <IconArrowRight className="ml-1" />
						</Link>
					)}
				</div>
			</div>
		</section>
	)
}
