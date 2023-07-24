import { PaginationResponse, SiteConfigs } from "@JCKConsultant/types"
import React from "react"
import AccordionItem from "../accordion/AccordionItem"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { useMutation } from "react-query"
import { FetchFAQs } from "@JCKConsultant/services/settings/settings.apis"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { FAQResponseInterface } from "@JCKConsultant/types/faqs"
import Loader from "../sites/Loader"
import FAQLoader from "../loaders/FAQLoader"

export default function FAQs({ faqs, settings }: SiteConfigs) {
	const [_faqs, setFAQs] = React.useState<PaginationResponse<FAQResponseInterface>>()

	const _data = _faqs ? _faqs?.data : faqs?.data

	const fetchFaqsApis = useMutation(FetchFAQs, {
		onSuccess(res: any) {
			if (res?.status) {
				setFAQs(res?.data)
			}
		},
		onError(error, variables, context) {
			ServerErrors("FAQ Error", error)
		}
	})

	const isLoading = fetchFaqsApis.isLoading

	React.useEffect(() => {
		if (settings?.site_id) {
			fetchFaqsApis.mutateAsync({ perPage: 100, page: 1 })
		}
	}, [settings?.site_id])

	return (
		<section className="bg-white bg-no-repeat bg-cover bg-center my-0" id="faqs">
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-slate-800">Support & FAQs</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">Got Questions? We Have Answers! Explore Our Frequently Asked Questions</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<div>
							{isLoading && <FAQLoader />}
							{!isLoading && (
								<>
									{_data?.length && (
										<>
											{_data?.map((faq, index) => (
												<AccordionItem title={faq?.title} content={faq?.content} key={uniqueId()} />
											))}
										</>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
