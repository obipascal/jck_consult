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

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<MainLayout>
			<HomeHeaderSection />
			<HomeWhoweareSection />
			<WhyUs />
			<OurCourses />
			<HomeFAQs />
			<Testimonies />
			<ContactInfo />
		</MainLayout>
	)
}
