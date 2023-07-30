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
		<section className="bg-[url('/img/bg/Frame_bg.png')] bg-no-repeat bg-cover bg-center my-0 ">
			<div className="bg-white/80 py-24 sm:py-32 pb-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<header data-aos="fade-up" className="px-10 mb-20 text-center">
						<h1 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 uppercase">SUPPORT AND FAQ</h1>
						<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Got Questions? We Have Answers! Explore Our Frequently Asked Questions</p>
					</header>
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
						className="hover:bg-secondary hover:text-primary transition ease-in duration-300 p-4 rounded-full w-fit mt-10  bg-primary text-white font-medium shadow-lg flex items-center m-auto block"
						role="button"
					>
						Read more <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}
