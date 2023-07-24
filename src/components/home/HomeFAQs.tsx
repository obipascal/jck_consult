import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { SiteConfigs } from "@JCKConsultant/types"
import { classNames, uniqueId } from "@JCKConsultant/lib/utils"
import dynamic from "next/dynamic"

const AccordionItem = dynamic(() => import("../accordion/AccordionItem"), { ssr: false })

export default function HomeFAQs({ faqs }: SiteConfigs) {
	const _data = faqs?.data

	return (
		<section className="bg-[url('/img/bg/Frame_bg.png')] bg-no-repeat bg-cover bg-center my-0">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className="font-bold text-[50px] text-blue">Support & FAQs</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 font-semibold capitalize">Got Questions? We Have Answers! Explore Our Frequently Asked Questions</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<div>
							{_data?.length && (
								<>
									{_data?.map((faq, index) => (
										<AccordionItem title={faq?.title} content={faq?.content} key={uniqueId()} />
									))}
								</>
							)}
						</div>
					</div>
					<Link
						href={`${ROUTES.about}#faqs`}
						className="p-3 rounded-full w-fit mt-10 border border-blue  text-slate-800 hover:bg-primary hover:border-white border-2 transition-all hover:text-white m-auto block shadow-lg flex items-center"
						role="button"
					>
						Read more <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}
