import Image from "next/image"
import { Inter } from "next/font/google"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import HomeHeaderSection from "@JCKConsultant/components/home/HomeHeaderSection"
import HomeWhoweareSection from "@JCKConsultant/components/home/HomeWhoweareSection"
import WhyUs from "@JCKConsultant/components/home/WhyUs"
import OurCourses from "@JCKConsultant/components/home/OurCourses"
import HomeFAQs from "@JCKConsultant/components/home/HomeFAQs"
import Testimonies from "@JCKConsultant/components/home/Testimonies"
import ContactInfo from "@JCKConsultant/components/home/ContactInfo"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta, SiteConfigs } from "@JCKConsultant/types"
import { useRouter } from "next/router"
import Loader from "@JCKConsultant/components/sites/Loader"
import ServicesSection from "@JCKConsultant/components/home/ServicesSection"

const inter = Inter({ subsets: ["latin"] })

export default function Home({ configs }: AppConfigs) {
	const router = useRouter()

	if (router.isFallback) return <Loader />

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Home">
			<HomeHeaderSection />
			<ServicesSection />
			<HomeWhoweareSection content={configs?.settings?.about} />
			<WhyUs />
			<OurCourses siteId={configs?.settings?.site_id} />
			<HomeFAQs faqs={configs?.faqs} />
			<Testimonies siteId={configs?.settings?.site_id} />
			<ContactInfo settings={configs?.settings} />
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
