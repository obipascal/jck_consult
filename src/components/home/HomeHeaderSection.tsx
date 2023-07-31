import React from "react"

import ProductCatalogViewer from "../misc/ProductCatalogViewer"
import Image from "next/image"
import BackgroundDivider from "@JCKConsultant/assets/img/compliment-bg.png"
import Link from "next/link"

import HeaderLady from "@JCKConsultant/assets/img/swippers/Header_Lady.png"
import Asset1 from "@JCKConsultant/assets/img/assets/asset-1.jpg"
import Asset2 from "@JCKConsultant/assets/img/assets/asset-2.jpg"
import Asset3 from "@JCKConsultant/assets/img/assets/asset-3.jpg"
import Asset4 from "@JCKConsultant/assets/img/assets/asset-4.jpg"
import Asset5 from "@JCKConsultant/assets/img/assets/asset-5.jpg"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function HomeHeaderSection() {
	const images = [HeaderLady, Asset1, Asset2, Asset3, Asset4, Asset5]

	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue-900  pt-20 " data-aos="fade-up">
			<div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:px-10 xs:px-5">
				<div className="flex justify-start relative">
					<div className="xs:px-0 md:p-5 py-10">
						<h1 className="font-bold text-white tracking-tight">
							<span className="xs:text-[20px] md:text-[25px] text-secondary">Welcome to JCK Consulting </span>
							<br />
							<span className="xs:text-[40px] md:text-[64px]">Transition into tech with our Agile Scrum Experts</span>
						</h1>
						<p className="my-5 text-white xs:text-md md:text-lg">
							Are you ready to embark on an exciting journey into the world of technology? At JCK Consulting, we&apos;re dedicated to empowering individuals like you to transition seamlessly into the
							tech industry through our top-notch Agile Scrum training programs.
						</p>
						<Link
							href={ROUTES?.contact}
							className="hover:bg-secondary hover:text-primary transition ease-in duration-300 p-4 rounded-full w-fit mt-10  bg-white text-primary font-medium shadow-lg flex items-center"
							role="button"
						>
							Learn more
						</Link>
					</div>
				</div>
				<div className="flex md:items-center md:justify-center xs:px-0 md:p-3 relative">
					<ProductCatalogViewer images={images} />
				</div>
			</div>
			<Image src={BackgroundDivider} alt="" className="relative bottom-[-10px] h-[125px] w-[100%] buttom-0" />
		</section>
	)
}
