import React from "react"
import { ArrowPathRoundedSquareIcon, CloudArrowUpIcon, CodeBracketIcon, Cog6ToothIcon, FingerPrintIcon, LockClosedIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function WhyUs() {
	return (
		<section className="bg-gradient-to-r from-indigo-500 to-primary">
			<div className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl  lg:px-8">
					<header data-aos="fade-up" className="xs:px-2 md:px-10 mb-20 text-center">
						<h1 className="font-medium xs:text-[20px] md:text-[20px] text-secondary uppercase">WHY CHOOSE JCKCONSULTING?</h1>
						<p className="font-bold xs:text-[36px] md:text-[50px] text-white">Empowering Success Through Expertise, Customization, Practicality, and Support</p>
					</header>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl xs:px-5 md:px-10">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
							{features.map(feature => (
								<div data-aos="fade-up" key={feature.name} className="relative pl-16">
									<dt className="font-bold text-secondary text-[16px] ">
										<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ">
											<feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
										</div>
										{feature.name}
									</dt>
									<dd className="mt-2 text-[18px] text-white font-medium text-justify">{feature.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</div>
		</section>
	)
}

export const features = [
	{
		name: "Expert Guidance",
		description:
			"Our trainers at JCK Consulting are not just instructors; they are seasoned professionals with years of experience in Agile Scrum and the tech industry. Learning from the best ensures you gain invaluable insights and knowledge that can elevate your career.",
		icon: UserGroupIcon
	},
	{
		name: "Tailored Solutions",
		description:
			"At JCK Consulting, we believe in learning by doing. Our courses provide practical experience through real-world projects, giving you the confidence and skills needed to excel in the dynamic tech workspace.",
		icon: Cog6ToothIcon
	},
	{
		name: "Practical Training",
		description:
			"We value your unique goals and aspirations. With our personalized approach, we take the time to understand your individual needs and tailor our training programs to ensure you get the most relevant and effective learning experience possible.",
		icon: CodeBracketIcon
	},
	{
		name: "Continuous Support",
		description:
			"At JCK Consulting, our commitment to your success extends beyond the completion of our courses. We offer continuous support to our students, providing guidance and assistance as you navigate your tech career, ensuring you have the resources and encouragement you need to thrive in the ever-evolving tech industry.",
		icon: ArrowPathRoundedSquareIcon
	}
]
