import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import UserDashLayout from "@JCKConsultant/components/user/layout/UserDashLayout"

export default function UserDashboard({ configs }: AppConfigs) {
	const router = useRouter()

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Dashboard">
			<UserDashLayout>
				<p>Hello, welcome to my dashboard</p>
			</UserDashLayout>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigsAuthorizedOnly(context)
}
