import FAQs from "@JCKConsultant/components/about/FAQs"
import WhoWeAre from "@JCKConsultant/components/about/WhoWeAre"
import WhyChooseUs from "@JCKConsultant/components/about/WhyChooseUs"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import React from "react"

export default function about({ configs }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="About Us">
			<WhoWeAre />
			<WhyChooseUs />
			<FAQs />
		</MainLayout>
	)
}
export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
