import { uniqueId } from "@JCKConsultant/lib/utils"
import { FetchPublishedCourses } from "@JCKConsultant/services/course/course.apis"
import { PaginationResponse } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"
import Spinner from "../home/Spinner"
import { ROUTES } from "@JCKConsultant/configs/routes"

type CourseNavDropdownProps = {
	siteId?: string
}
export default function CourseNavDropdown({ siteId }: CourseNavDropdownProps) {
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
		<div className="absolute group-hover/nav-dropdown:visible  hover:visible flex flex-col top-[50px] bg-neutral-100 transition duration-150 ease-in-out invisible z-[1000] float-left overflow-hidden rounded-0 min-w-[200px]">
			{isFetching && <Spinner />}
			{!isFetching && (
				<>
					{products && (
						<>
							{products?.length > 0 && (
								<>
									{products?.map(product => (
										<Link
											key={uniqueId()}
											className="block w-full whitespace-nowrap bg-transparent hover:bg-primary hover:text-white  px-4 py-2 text-sm font-normal text-neutral-700   active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 "
											href={ROUTES.courses.details(product?.course_id)}
											data-te-dropdown-item-ref
										>
											{product?.title}
										</Link>
									))}
								</>
							)}
						</>
					)}
				</>
			)}
		</div>
	)
}
