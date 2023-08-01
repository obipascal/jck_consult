import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import React from "react"

export default function CourseInfo({ configs, course }: AppConfigs) {
	const metaData: Meta = {
		title: course?.title,
		description: course?.desc,
		logo: configs?.settings?.logo,
		media: course?.image
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Course Info">
			<section className="bg-[url('/img/bg/Frame_bg.png')] bg-fixed bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
				<div className="bg-white/80 py-24 sm:py-32">
					{/* <!-- Container for demo purpose --> */}
					<div className="container mx-auto md:p-6 bg-white rounded shadow-lg bg-gradient-to-r from-indigo-500 to-blue-900">
						{/* <!-- Section: Design Block --> */}
						<section className="mb-32 text-black xs:py-10 xs:px-5 md:p-10">
							{/* <Image width={100} height={100} src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg" className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" /> */}

							<h1 className="mb-10 text-4xl leading-8 font-bold text-secondary">{course?.title}</h1>

							<article className=" _html_viewer text-white text-justify md:text-2xl xs:text-md leading-loose tracking-wide" dangerouslySetInnerHTML={{ __html: course?.body as string }}></article>
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
