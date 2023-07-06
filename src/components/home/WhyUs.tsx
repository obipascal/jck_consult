import React from "react"
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function WhyUs() {
	return (
		<section className="bg-[url('/img/bg/Frame_bg.png')] bg-no-repeat bg-cover bg-center">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-slate-800">Why Us</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">Empowering Success Through Expertise, Customization, Practicality, and Support</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div data-aos="fade-up" key={feature.name} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 text-gray-900">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
											<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
					<Link
						href={`${ROUTES.about}#why-us`}
						className="p-3 rounded-full w-fit mt-10 border border-blue  text-slate-800 hover:bg-secondary hover:border-white border-2 transition-all hover:text-white m-auto block shadow-lg flex items-center"
						role="button"
					>
						Read more <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}

const features = [
	{
		name: "Expert Guidance",
		description: "Benefit from our team of seasoned industry professionals who bring a wealth of expertise and real-world experience.",
		icon: CloudArrowUpIcon
	},
	{
		name: "Tailored Solutions",
		description: "We understand that every organization is unique. Our approach involves customizing our services to align with your specific goals, culture, and industry.",
		icon: LockClosedIcon
	},
	{
		name: "Practical Training",
		description: "Gain hands-on experience through our immersive training programs.",
		icon: ArrowPathIcon
	},
	{
		name: "Continuous Support",
		description: "Our commitment to your success extends beyond the training room.",
		icon: FingerPrintIcon
	}
]
