import React from "react"
import { features } from "../home/WhyUs"

export default function WhyChooseUs() {
	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue-900 bg-no-repeat bg-cover bg-center" id="why-us">
			<div className="py-16 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<header data-aos="fade-up" className="xs:px-2 md:px-10 mb-20 text-center">
						<h1 className="font-medium xs:text-[20px] md:text-[20px] text-secondary uppercase">ABOUT</h1>
						<p className="font-bold xs:text-[36px] md:text-[50px] text-white">Our Experts are the finest</p>
					</header>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div data-aos="fade-up" key={feature.name} className="relative pl-16">
									<dt className="font-bold text-secondary text-[16px] ">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
											<feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-[18px] text-white font-medium">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}
