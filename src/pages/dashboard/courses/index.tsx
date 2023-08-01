const CourseListItem = dynamic(() => import("@JCKConsultant/components/dashboard/courses/CourseListItem"), { ssr: false })
import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { FetchCourses } from "@JCKConsultant/services/course/course.apis"
import { DashboardProps, Meta, PaginationResponse } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"
import Link from "next/link"
import { useMutation } from "react-query"
import React from "react"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import CourseListItemLoader from "@JCKConsultant/components/loaders/CourseListItemLoader"
import { useDispatch, useSelector } from "react-redux"
import { emitFetchCourses, getCourseEvents } from "@JCKConsultant/redux/reducers/appEventsSlice"
import dynamic from "next/dynamic"

const CreateButton = () => {
	return (
		<Link href={ROUTES.dashboard.courses.create} role="button" className="rounded-full bg-gradient-to-r from-blue-800 to-blue-900 p-2 text-white flex items-center shadow-md">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			Create
		</Link>
	)
}

const EnrollRequestButton = () => {
	return (
		<Link href={ROUTES.dashboard.courses.request} role="button" className="rounded-full border-2 border-secondary  p-2 text-blue flex items-center shadow-md mr-3">
			Course Enquiry
			<sup className="inline-block whitespace-nowrap rounded-full bg-red-500 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white shadow-3xl ml-1">
				3
			</sup>
		</Link>
	)
}

const components = [<EnrollRequestButton key={uniqueId()} />, <CreateButton key={uniqueId()} />]

export default function DashboardCourses({ configs }: DashboardProps) {
	const [courses, setCourses] = React.useState<PaginationResponse<CourseInterface>>()
	const { canFetchCourses } = useSelector(getCourseEvents)
	const dispatcher = useDispatch()

	const fetchCoursesApis = useMutation(FetchCourses, {
		onSuccess(res: any) {
			if (res?.status) {
				setCourses(res?.data)

				/* disable any fetch course event */
				dispatcher(emitFetchCourses(false))
			}
		},
		onError(error, variables, context) {
			ServerErrors("Courses Error", error)
		}
	})
	const isFetching = fetchCoursesApis.isLoading

	React.useEffect(() => {
		if (configs?.settings?.site_id) {
			fetchCoursesApis.mutateAsync({ perPage: 100, page: 1 })
		}
	}, [configs?.settings?.site_id])

	/* listen for course fetch events  */
	React.useEffect(() => {
		if (canFetchCourses) fetchCoursesApis.mutateAsync({ perPage: 100, page: 1 })
	}, [canFetchCourses])

	const _data = courses?.data

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<DashboardLayout meta={metaData} title="Courses" pageName="Courses" siteConfigs={configs}>
			<DashboardContent title="Courses" component={components}>
				{isFetching && <CourseListItemLoader />}

				{!isFetching && (
					<>
						{(typeof _data?.length !== "undefined" ? _data?.length > 0 : false) && (
							<>
								{_data?.map(course => (
									<CourseListItem
										isAdmin={true}
										data={course}
										image={course?.image}
										status={course?.status}
										courseId={course?.course_id}
										key={course?.course_id}
										courseName={course?.title}
										courseAmount={course?.price}
										courseLastModified={course?.last_modified}
									/>
								))}
							</>
						)}

						{(typeof _data?.length !== "undefined" ? _data?.length <= 0 : false) && <p className="text-gray-400">No courses yet. Click on &quot;+ Create&quot; to create a new course </p>}
					</>
				)}
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
