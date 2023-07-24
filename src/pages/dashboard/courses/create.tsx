import CreateOrEditCourseForm from "@JCKConsultant/components/dashboard/courses/CreateOrEditCourseForm"
import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"

export default function DashboardCourses({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<DashboardLayout meta={metaData} title="Create New Course" pageName="Courses" siteConfigs={configs}>
			<DashboardContent title="Create New Course" type="nav">
				<div className="block xs:mx-3 md:m-auto max-w-3xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
					<CreateOrEditCourseForm />
				</div>
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
