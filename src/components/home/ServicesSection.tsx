import React from "react"

import IconPersonChalkboard from "../icons/IconPersonChalkboard"
import IconBxCodeCurly from "../icons/IconBxCodeCurly"
import IconMortarboardFill from "../icons/IconMortarboardFill"
type HomeWhoweareSectionProps = {
	content?: string
}
export default function ServicesSection({ content }: HomeWhoweareSectionProps) {
	return (
		<section className="bg-white pb-20 pt-5" id="next__h_whoweare">
			<section className="my-24">
				<header data-aos="fade-up" className="xs:px-2 md:px-10 mb-20 text-center">
					<h1 className="font-medium xs:text-[20px] md:text-[20px] text-primary uppercase">Services</h1>
					<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Empowering your journey in the digital world</p>
				</header>
				<div className="grid md:grid-cols-3  xs:grid-cols-1 gap-4 xs:px-5 md:px-10">
					<div className="flex flex-col gap-4 shadow rounded-md p-5 bg-gradient-to-r from-indigo-500 to-blue-900  ease-in  duration-300  sm:hover:scale-[1.1]">
						<div className="flex flex-col gap-1 text-center">
							<IconBxCodeCurly className="text-white m-auto block" width={"10em"} height={"10em"} />
							<h2 className="text-secondary text-[20px] font-bold">software development</h2>
						</div>
						<p className="text-[18px] text-white text-center">
							Our software development service turns innovative ideas into robust, user-centric software solutions. Our skilled developers and engineers work closely with you to create tailored
							software solutions that exceed expectations.
						</p>
					</div>
					<div className="flex flex-col gap-4 shadow rounded-md p-5 bg-gradient-to-r from-indigo-500 to-blue-900  ease-in  duration-300  sm:scale-[1.1]">
						<div className="flex flex-col gap-1 text-center">
							<IconPersonChalkboard className="text-white m-auto block" width={"10em"} height={"10em"} />
							<h2 className="text-secondary text-[20px] font-bold">Agile Coaching</h2>
						</div>
						<p className="text-[18px] text-white text-center">
							Our Agile Scrum Coaching service equips individuals and teams with the agility required to adapt, innovate, and deliver projects efficiently. You&apos;ll learn the principles, best
							practices, and methodologies that drive successful project management.
						</p>
					</div>
					<div className="flex flex-col gap-4 shadow rounded-md p-5 bg-gradient-to-r from-indigo-500 to-blue-900  ease-in  duration-300 sm:hover:scale-[1.1]">
						<div className="flex flex-col gap-1 text-center">
							<IconMortarboardFill className="text-white m-auto block" width={"10em"} height={"10em"} />
							<h2 className="text-secondary text-[20px] font-bold">IT Training</h2>
						</div>
						<p className="text-[18px] text-white text-center">
							Our IT Training service empowers individuals with technical expertise to excel in the digital landscape. We offer a diverse range of training programs that cover various IT disciplines.
							From programming languages to cybersecurity, and cloud computing to data analytics.
						</p>
					</div>
				</div>
			</section>
		</section>
	)
}
