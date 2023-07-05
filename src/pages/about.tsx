import FAQs from "@JCKConsultant/components/about/FAQs"
import WhoWeAre from "@JCKConsultant/components/about/WhoWeAre"
import WhyChooseUs from "@JCKConsultant/components/about/WhyChooseUs"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import React from "react"

export default function about() {
	return (
		<MainLayout>
			<WhoWeAre />
			<WhyChooseUs />
			<FAQs />
		</MainLayout>
	)
}
