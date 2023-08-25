import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import UserList from "@JCKConsultant/components/dashboard/users/UsersList"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"

export default function DashboardUsers({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<DashboardLayout meta={metaData} pageName="Users" siteConfigs={configs}>
			<DashboardContent title="Registered Users">
				<UserList />
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
