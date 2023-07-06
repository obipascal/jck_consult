import React from "react"

import Chart from "@JCKConsultant/assets/img/swippers/undraw_charts_re_5qe9.svg"
import Programming from "@JCKConsultant/assets/img/swippers/undraw_programmer_re_owql.svg"
import Scrum from "@JCKConsultant/assets/img/swippers/undraw_scrum_board_re_wk7v.svg"
import ProductCatalogViewer from "../misc/ProductCatalogViewer"
import Image from "next/image"
import BackgroundDivider from "@JCKConsultant/assets/img/compliment-bg.png"
import HeaderLady from "@JCKConsultant/assets/img/swippers/Header_Lady.png"
import Link from "next/link"

export default function HomeHeaderSection() {
	const images = [HeaderLady, Chart, Programming, Scrum]

	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue-900  pt-20" data-aos="fade-up">
			<div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:px-10 xs:px-5">
				<div className="flex justify-start relative">
					<div className="p-5 py-10">
						<h1 className="font-bold xs:text-[36px] md:text-[42px] text-white">Tech Career Accelerator: Empowering Your Journey in the Digital World</h1>
						<p className="my-5 text-white xs:text-md md:text-lg">Unleash Your Potential, Master New Skills, and Forge a Path to Success in the Ever-Evolving Tech Landscape.</p>
						<Link href="#next__h_courses" className="p-3 rounded-full w-fit mt-10  bg-secondary text-white shadow-lg flex items-center" role="button">
							Let&apos;s Get Started
						</Link>
					</div>

					<Link
						href="#next__h_whoweare"
						className="p-3 rounded-full w-fit shadow-lg backdrop-blur bg-white/50 absolute left-auto top-auto right-0 bottom-0 animate__animated animate__heartBeat animate__infinite"
						role="button"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</Link>
				</div>
				<div className="flex md:items-center md:justify-center p-3 relative">
					<ProductCatalogViewer images={images} />
				</div>
			</div>
			<Image src={BackgroundDivider} alt="" className="relative bottom-[-10px] h-[125px] w-[100%] buttom-0" />
		</section>
	)
}
