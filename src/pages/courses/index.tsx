import CourseCardsLoader from "@JCKConsultant/components/loaders/CourseCardsLoader"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { formatNumber } from "@JCKConsultant/lib/utilities"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { FetchPublishedCourses } from "@JCKConsultant/services/course/course.apis"
import { AppConfigs, Meta, PaginationResponse } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"

export default function OurCourses({ configs }: AppConfigs) {
	const [courses, setCourses] = React.useState<PaginationResponse<CourseInterface>>()

	const fetchCourseApi = useMutation(FetchPublishedCourses, {
		onSuccess(res: any) {
			if (res?.status) setCourses(res?.data)
		}
	})

	const isFetching = fetchCourseApi.isLoading

	React.useEffect(() => {
		if (configs?.settings?.site_id) {
			fetchCourseApi.mutateAsync({ perPage: 50, page: 1 })
		}
	}, [configs?.settings?.site_id])

	const products = courses?.data

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Courses">
			<section className="bg-[url('/img/bg/Frame_bg_flip.png')] bg-fixed bg-no-repeat bg-cover bg-center min-h-screen">
				<div className="bg-white/80 py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
							<h1 className=" font-bold text-[50px] text-primary">Our Courses</h1>
							<p className="mt-6 text-lg leading-8 text-primary">Unleashing Your Full Potential with Cutting-Edge Courses</p>
						</div>

						{isFetching && <CourseCardsLoader />}

						{!isFetching && (
							<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{products && (
									<>
										{products?.length > 0 && (
											<>
												{products.map(product => (
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
																<Link
																	href={ROUTES.courses.details(product?.course_id)}
																	className="hover:bg-secondary hover:text-primary transition ease-in duration-300  p-2 px-3 rounded-full font-medium w-fit mt-3 block border border-primary hover:border-secondary text-primary"
																	role="button"
																>
																	Learn more
																</Link>
															</div>
														</div>
													</article>
												))}
											</>
										)}
									</>
								)}
							</div>
						)}
					</div>
				</div>
			</section>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
