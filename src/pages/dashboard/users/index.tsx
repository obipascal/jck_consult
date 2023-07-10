import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import UserList from "@JCKConsultant/components/dashboard/users/UsersList"

export default function DashboardUsers() {
	return (
		<DashboardLayout pageName="Users">
			<DashboardContent title="Users">
				<UserList />
			</DashboardContent>
		</DashboardLayout>
	)
}
