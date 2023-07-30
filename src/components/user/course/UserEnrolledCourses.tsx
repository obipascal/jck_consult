import CourseListItem from "@JCKConsultant/components/dashboard/courses/CourseListItem"
import CourseListItemLoader from "@JCKConsultant/components/loaders/CourseListItemLoader"
import LinkPagination from "@JCKConsultant/components/misc/LinkPagination"
import { useUser } from "@JCKConsultant/hooks/useUser"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { FetchUserCoursesEnrolled } from "@JCKConsultant/services/course/course.apis"
import { LinksPaginationResponse } from "@JCKConsultant/types"
import { EnrolledCourseInterface } from "@JCKConsultant/types/course"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"

export default function UserEnrolledCourses() {
	const [courses, setCourses] = React.useState<LinksPaginationResponse<EnrolledCourseInterface>>()
	const dispatcher = useDispatch()
	const user = useUser()

	const fetchCoursesApis = useMutation(FetchUserCoursesEnrolled, {
		onSuccess(res: any) {
			if (res?.status) {
				setCourses(res?.data)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Courses Error", error)
		}
	})
	const isFetching = fetchCoursesApis.isLoading

	React.useEffect(() => {
		if (user && user?.role === "user") {
			fetchCoursesApis.mutateAsync({ perPage: 100, page: 1 })
		}
	}, [user?.role, user])

	const _data = courses?.data
	return (
		<>
			{isFetching && <CourseListItemLoader />}

			{!isFetching && (
				<>
					{(typeof _data?.length !== "undefined" ? _data?.length > 0 : false) && (
						<>
							{_data?.map(enrollment => (
								<CourseListItem
									isAdmin={false}
									data={enrollment?.course}
									image={enrollment?.course?.image}
									status={enrollment?.course?.status}
									courseId={enrollment?.course?.course_id}
									key={enrollment?.course?.course_id}
									courseName={enrollment?.course?.title}
									courseAmount={enrollment?.course?.price}
									courseLastModified={enrollment?.course?.last_modified}
								/>
							))}
						</>
					)}

					{(typeof _data?.length !== "undefined" ? _data?.length <= 0 : false) && <p className="text-gray-400">No courses yet. Click on &quot;+ Create&quot; to create a new course </p>}
				</>
			)}

			<LinkPagination pager={courses} mutator={fetchCoursesApis} isLoading={isFetching} />
		</>
	)
}
