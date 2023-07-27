import React from "react"

import ProductCatalogViewer from "../misc/ProductCatalogViewer"
import Image from "next/image"
import BackgroundDivider from "@JCKConsultant/assets/img/compliment-bg.png"
import Link from "next/link"

import HeaderLady from "@JCKConsultant/assets/img/swippers/Header_Lady.png"
import Asset1 from "@JCKConsultant/assets/img/assets/asset-1.jpeg"
import Asset2 from "@JCKConsultant/assets/img/assets/asset-2.jpg"
import Asset3 from "@JCKConsultant/assets/img/assets/asset-3.jpg"
import Asset4 from "@JCKConsultant/assets/img/assets/asset-4.jpg"
import Asset5 from "@JCKConsultant/assets/img/assets/asset-5.webp"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function HomeHeaderSection() {
	const images = [HeaderLady, Asset1, Asset2, Asset3, Asset4, Asset5]

	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue-900  pt-20" data-aos="fade-up">
			<div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:px-10 xs:px-5">
				<div className="flex justify-start relative">
					<div className="p-5 py-10">
						<h1 className="font-bold xs:text-[40px] md:text-[64px] text-white tracking-tight">Digital Career Catalyst: Empowering Your Journey</h1>
						<p className="my-5 text-white xs:text-md md:text-lg">Embrace the Power of Innovation: Equip Yourself with Top Digital Skills to Stand Out with JCK Consulting.</p>
						<Link href={ROUTES?.contact} className="p-4 rounded-full w-fit mt-10  bg-white text-primary font-medium shadow-lg flex items-center" role="button">
							Let&apos;s Get You Started
						</Link>
					</div>
				</div>
				<div className="flex md:items-center md:justify-center p-3 relative">
					<ProductCatalogViewer images={images} />
				</div>
			</div>
			<Image src={BackgroundDivider} alt="" className="relative bottom-[-10px] h-[125px] w-[100%] buttom-0" />
		</section>
	)
}
