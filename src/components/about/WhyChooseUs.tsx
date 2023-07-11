import React from "react"
import { WrenchScrewdriverIcon, CpuChipIcon, PhoneIcon, UserCircleIcon } from "@heroicons/react/24/outline"

export default function WhyChooseUs() {
	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue-900 bg-no-repeat bg-cover bg-center" id="why-us">
			<div className="py-16 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-white">Why Us</h1>
						<p className="mt-6 text-lg leading-8 text-gray-100">Empowering Success Through Expertise, Customization, Practicality, and Support</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div data-aos="fade-up" key={feature.name} className="relative pl-16">
									<dt className="text-base font-semibold leading-7 text-white">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg from-blue">
											<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-base leading-7 text-gray-100">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}

const features = [
	{
		name: "Expert Guidance",
		description:
			"Benefit from our team of seasoned industry professionals who bring a wealth of expertise and real-world experience. We provide personalized guidance and mentorship to help you navigate complex tech challenges and make informed decisions.",
		icon: UserCircleIcon
	},
	{
		name: "Tailored Solutions",
		description:
			"We understand that every organization is unique. Our approach involves customizing our services to align with your specific goals, culture, and industry. Whether it's Agile implementation, process optimization, or talent development, we deliver solutions that fit seamlessly into your business ecosystem.",
		icon: CpuChipIcon
	},
	{
		name: "Practical Training",
		description:
			"Gain hands-on experience through our immersive training programs. We go beyond theoretical concepts, providing practical exercises and simulations that mirror real-world scenarios. Our goal is to equip you with the skills and confidence to tackle challenges head-on and drive impactful results.",
		icon: WrenchScrewdriverIcon
	},
	{
		name: "Continuous Support",
		description:
			"Our commitment to your success extends beyond the training room. We offer ongoing support, resources, and a network of professionals to ensure you stay on the path to excellence. From post-training consultations to community events, we foster a collaborative environment that fuels continuous growth and learning.",
		icon: PhoneIcon
	}
]
