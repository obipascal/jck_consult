import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import TransactionList from "@JCKConsultant/components/dashboard/transaction/TransactionList"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"

export default function DashboardTransactions({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}
	return (
		<DashboardLayout meta={metaData} pageName="Transactions" siteConfigs={configs}>
			<DashboardContent title="Transactions">
				<TransactionList settings={configs?.settings} />
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
