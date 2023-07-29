import CourseInfoLoader from "@JCKConsultant/components/loaders/CourseInfoLoader"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { toDateString } from "@JCKConsultant/lib/utils"
import { FetchCourse } from "@JCKConsultant/services/course/course.apis"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useMutation } from "react-query"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { formatNumber } from "@JCKConsultant/lib/utilities"

export default function CourseInfo({ configs }: AppConfigs) {
	const router = useRouter()
	const { courseId } = router?.query

	const [course, setCourse] = React.useState<CourseInterface>()

	const fetchCourseApi = useMutation(FetchCourse, {
		onSuccess(res: any) {
			if (res?.status) {
				setCourse(res?.data)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isFetching = fetchCourseApi.isLoading

	React.useEffect(() => {
		if (courseId) fetchCourseApi.mutateAsync(courseId)
	}, [courseId])

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Course Info">
			<section className="bg-[url('/img/bg/Frame_bg.png')] bg-fixed bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
				<div className="bg-white/80 py-24 sm:py-32">
					{/* <!-- Container for demo purpose --> */}
					<div className="container mx-auto md:p-6 bg-white rounded shadow-lg">
						{/* <!-- Section: Design Block --> */}
						{!isFetching && (
							<section className="mb-32 text-black">
								{/* <Image width={100} height={100} src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg" className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" /> */}

								<div className="mb-6 flex items-center">
									<div>
										<span>
											{" "}
											Published <em>on</em> <u>{toDateString(course?.created_at as any as Date)}</u>
										</span>
									</div>
								</div>

								<h1 className="mb-6 text-3xl font-bold">{course?.title}</h1>

								<div className="p-4" dangerouslySetInnerHTML={{ __html: course?.body as string }}></div>

								{/* <div className="rounded-md p-3 bg-sky-100/[.25] mt-12 flex flex-col gap-5 items-center">
									<p className="text-gray-800 mr-3 text-2xl">Fee: &pound;{formatNumber(course?.price)}</p>
									<Link href={ROUTES.enroll.index(course?.course_id)} className="bg-primary text-white p-2 rounded-lg">
										Enroll now!
									</Link>
								</div> */}
							</section>
						)}
						{/* <!-- Section: Design Block --> */}
						{isFetching && <CourseInfoLoader />}
					</div>
					{/* <!-- Container for demo purpose --> */}
				</div>
			</section>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
