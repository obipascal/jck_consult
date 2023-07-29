import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import ListUsersTestimonies from "@JCKConsultant/components/dashboard/testimonies/ListUsersTestimonies"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"

export default function DashboardTestimonies({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}
	return (
		<DashboardLayout meta={metaData} pageName="Testimonies" siteConfigs={configs}>
			<DashboardContent title="Users Testimonies">
				<ListUsersTestimonies settings={configs?.settings} />
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
