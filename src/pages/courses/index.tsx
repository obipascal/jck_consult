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
							<h1 className=" font-bold text-[50px] text-slate-800">Our Courses</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">Unleashing Your Full Potential with Cutting-Edge Courses</p>
						</div>

						{isFetching && <CourseCardsLoader />}

						{!isFetching && (
							<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{products && (
									<>
										{products?.length > 0 && (
											<>
												{products.map(product => (
													<div data-aos="fade-up" key={product.course_id} className="group relative bg-white rounded shadow-lg">
														<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
															<Image width={100} height={100} data-aos="fade-up" src={product.image} alt={product.title} className="h-full w-full object-cover lg:h-full lg:w-full" />
														</div>
														<div className="mt-4 flex justify-between p-3">
															<div>
																<h3 className="text-sm font-semibold text-gray-700">
																	<Link href={ROUTES.courses.details(product?.course_id)}>
																		{/* <span aria-hidden="true" className="absolute inset-0" /> */}
																		{product.title}
																	</Link>
																</h3>
																<p className="mt-1 text-sm text-gray-500">{product?.desc}</p>
																<Link href={ROUTES.enroll.index(product?.course_id)} className="p-2 px-3 rounded-full w-fit mt-3 block bg-secondary text-primary" role="button">
																	Enroll course
																</Link>
															</div>
															<p className="text-sm font-medium text-gray-900">&pound;{formatNumber(product.price)}</p>
														</div>
													</div>
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
