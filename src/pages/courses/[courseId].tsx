import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { POUND_SIGN } from "@JCKConsultant/lib/currency"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { formatNumber } from "@JCKConsultant/lib/utilities"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import Link from "next/link"
import React from "react"

export default function CourseInfo({ configs, course }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: course?.desc,
		logo: configs?.settings?.logo,
		media: course?.image,
		mediaTitle: course?.title
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Course Info">
			<section className="bg-[url('/img/bg/Frame_bg.png')] bg-fixed bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
				<div className="bg-white/80 py-24 sm:py-32">
					{/* <!-- Container for demo purpose --> */}
					<div className="container mx-auto md:p-6 bg-white rounded shadow-lg bg-gradient-to-r from-indigo-500 to-blue-900">
						{/* <!-- Section: Design Block --> */}
						<section className="mb-32 text-black xs:py-10 xs:px-5 md:p-10">
							<h1 className="mb-10 text-4xl leading-8 font-bold text-secondary">{course?.title}</h1>

							<article className=" _html_viewer text-white text-justify md:text-2xl xs:text-md leading-loose tracking-wide mb-8" dangerouslySetInnerHTML={{ __html: course?.body as string }}></article>

							<div className="flex flex-col items-center justify-center gap-4">
								<h1 className="text-lg font-bold text-gray-100">
									Total Fee: {POUND_SIGN}
									{formatNumber(course?.price)}
								</h1>

								<Link
									href={ROUTES.enroll.index(course?.course_id)}
									className="bg-secondary text-primary transition ease-in duration-300  p-2 px-3 rounded-full font-medium w-fit mt-3 block"
									role="button"
								>
									Register Now
								</Link>
							</div>
						</section>
					</div>
					{/* <!-- Container for demo purpose --> */}
				</div>
			</section>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context, true)
}
