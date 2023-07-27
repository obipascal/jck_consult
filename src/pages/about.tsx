const FAQs = dynamic(() => import("@JCKConsultant/components/about/FAQs"), { ssr: false })
import WhoWeAre from "@JCKConsultant/components/about/WhoWeAre"
import WhyChooseUs from "@JCKConsultant/components/about/WhyChooseUs"
import ContactInfo from "@JCKConsultant/components/home/ContactInfo"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import dynamic from "next/dynamic"
import React from "react"

export default function about({ configs }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="About Us">
			<WhoWeAre content={configs?.settings?.about} />
			<WhyChooseUs />
			<FAQs faqs={configs?.faqs} settings={configs?.settings} />
			<ContactInfo settings={configs?.settings} />
		</MainLayout>
	)
}
export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
