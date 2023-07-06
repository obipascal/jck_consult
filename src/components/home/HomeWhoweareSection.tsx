import Image from "next/image"
import React from "react"
import Persons from "@JCKConsultant/assets/img/look_mob-4 1.png"
import Link from "next/link"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"

export const WhoWeAreImg = Persons
export default function HomeWhoweareSection() {
	return (
		<section className="bg-white pb-20 pt-5" id="next__h_whoweare">
			<header data-aos="fade-up" className="px-10 mb-10 text-center">
				<h1 className=" font-bold text-[50px] text-slate-800">Who We Are</h1>
			</header>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 px-10">
				<div data-aos="zoom-in-right" className="flex items-center justify-center">
					<Image src={Persons} alt="" className="m-auto block wow zoomInUp" data-wow-duration="2s" data-wow-delay="5s" data-wow-offset="10" />
				</div>
				<div data-aos="fade-up" className="md:col-span-2 xs:col-span-1">
					<p className="text-md mb-3 font-medium ">Welcome to JCK Consultant Ltd, your gateway to success in the fast-paced world of technology.</p>

					<p className="text-md mb-3 font-medium">
						At JCK Consultant Ltd, we believe in the power of knowledge and continuous improvement. Our comprehensive suite of courses and workshops caters to aspiring tech professionals and those
						seeking to transition their careers. Whether you&apos;re looking to become a Scrum Master, Agile Coach, or delve into other tech domains, our transformative training programs are tailored
						to meet your unique goals.
					</p>

					<p className="text-md mb-3 font-medium">
						What sets us apart is our unwavering commitment to your success. We don&apos;t just offer theoretical concepts; we provide hands-on practical experiences that empower you to excel in
						real-world scenarios. Our seasoned instructors bring a wealth of industry insights, equipping you with the skills and confidence needed to thrive in today&apos;s competitive landscape.
					</p>

					<p className="text-md mb-3 font-medium">
						Join JCK Consultant Ltd and embark on a transformative journey that unlocks your true potential. Gain the knowledge, tools, and mindset to navigate the tech industry with finesse, adapting
						to change and embracing innovation. Together, let&apos;s shape the future of technology and elevate your career to new heights.
					</p>
				</div>
			</div>
			<Link
				href={`${ROUTES.about}#who-we-are`}
				className="p-3 rounded-full w-fit mt-10 border bg-gradient-to-r from-indigo-500 to-blue text-white border-blue  text-slate-800 hover:bg-secondary hover:border-white border-2 transition-all hover:text-white m-auto block shadow-lg flex items-center"
				role="button"
			>
				Read more <IconArrowRight className="ml-1" />
			</Link>
		</section>
	)
}
