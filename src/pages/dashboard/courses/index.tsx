import CourseListItem from "@JCKConsultant/components/dashboard/courses/CourseListItem"
import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import { ROUTES } from "@JCKConsultant/configs/routes"
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
export default function DashboardCourses() {
	return (
		<DashboardLayout pageName="Courses">
			<DashboardContent title="Courses" component={<CreateButton />}>
				<p className="p-2">My Courses</p>

				<CourseListItem courseName="Data Analysis" />
				<CourseListItem courseName="Scrum Master Class" />
			</DashboardContent>
		</DashboardLayout>
	)
}
