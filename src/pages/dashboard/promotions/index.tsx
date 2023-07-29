import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import PromotionContent from "@JCKConsultant/components/dashboard/promos/PromotionContent"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { DashboardProps, Meta } from "@JCKConsultant/types"
import Link from "next/link"

const CreateButton = () => {
	return (
		<Link href={ROUTES.dashboard.promotion.create} role="button" className="rounded-full bg-gradient-to-r from-blue-800 to-blue-900 p-2 text-white flex items-center shadow-md">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
			Create Promo
		</Link>
	)
}

export default function DashboardPromotions({ configs }: DashboardProps) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}
	return (
		<DashboardLayout meta={metaData} pageName="Promotions" siteConfigs={configs}>
			<DashboardContent title="Promotions" component={<CreateButton />}>
				<PromotionContent settings={configs?.settings} />
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
