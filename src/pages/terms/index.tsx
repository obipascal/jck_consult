import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import React from "react"

export default function TermsAndConditions({ configs }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Course Info">
			<section className="bg-[url('/img/bg/Frame_bg.png')] bg-fixed bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
				<div className="bg-white/80 py-24 sm:py-32">
					{/* <!-- Container for demo purpose --> */}
					<div className="container mx-auto md:p-6 bg-white rounded shadow-lg bg-gradient-to-r from-indigo-500 to-blue-900">
						{/* <!-- Section: Design Block --> */}
						<section className="mb-32 text-black xs:py-10 xs:px-5 md:p-10">
							<h1 className="mb-10 text-4xl leading-8 font-bold text-secondary">Terms and Conditions</h1>

							<article
								className=" _html_viewer text-white text-justify md:text-2xl xs:text-md leading-loose tracking-wide"
								dangerouslySetInnerHTML={{ __html: configs?.settings?.terms as string }}
							></article>
						</section>
					</div>
					{/* <!-- Container for demo purpose --> */}
				</div>
			</section>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
