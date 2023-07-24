import Image from "next/image"
import React from "react"
import Persons from "@JCKConsultant/assets/img/look_mob-4 1.png"
import Link from "next/link"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"

export const WhoWeAreImg = Persons

type HomeWhoweareSectionProps = {
	content?: string
}
export default function HomeWhoweareSection({ content }: HomeWhoweareSectionProps) {
	return (
		<section className="bg-white pb-20 pt-5" id="next__h_whoweare">
			<header data-aos="fade-up" className="px-10 mb-10 text-center">
				<h1 className=" font-bold text-[50px] text-blue">Who We Are</h1>
			</header>
			<div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 px-10">
				<div data-aos="zoom-in-right" className="flex items-center justify-center">
					<Image src={Persons} alt="" className="m-auto block wow zoomInUp" data-wow-duration="2s" data-wow-delay="5s" data-wow-offset="10" />
				</div>
				<div data-aos="fade-up" className="md:col-span-2 xs:col-span-1 text-black " dangerouslySetInnerHTML={{ __html: content as string }}></div>
			</div>
		</section>
	)
}
