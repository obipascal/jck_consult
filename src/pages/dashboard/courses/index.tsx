import CourseListItem from "@JCKConsultant/components/dashboard/courses/CourseListItem"
import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { uniqueId } from "@JCKConsultant/lib/utils"
import Link from "next/link"

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
			Enroll Request
			<sup className="inline-block whitespace-nowrap rounded-full bg-red-500 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-white shadow-3xl ml-1">
				3
			</sup>
		</Link>
	)
}

const components = [<EnrollRequestButton key={uniqueId()} />, <CreateButton key={uniqueId()} />]

export default function DashboardCourses() {
	return (
		<DashboardLayout pageName="Courses">
			<DashboardContent title="Courses" component={components}>
				<CourseListItem courseName="Data Analysis" />
				<CourseListItem courseName="Scrum Master Class" />
			</DashboardContent>
		</DashboardLayout>
	)
}
