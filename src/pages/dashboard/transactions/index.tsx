import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import TransactionList from "@JCKConsultant/components/dashboard/transaction/TransactionList"

export default function DashboardTransactions() {
	return (
		<DashboardLayout pageName="Transactions">
			<DashboardContent title="Transactions">
				<TransactionList />
			</DashboardContent>
		</DashboardLayout>
	)
}
