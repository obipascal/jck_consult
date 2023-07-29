import Image from "next/image"
import React from "react"
import FounderImageCropped from "@JCKConsultant/assets/img/avatar/owner-img-cropped.png"
import Asset1 from "@JCKConsultant/assets/img/assets/asset-1.jpeg"
import Asset2 from "@JCKConsultant/assets/img/assets/asset-2.jpg"
import Asset3 from "@JCKConsultant/assets/img/assets/asset-3.jpg"
import Asset4 from "@JCKConsultant/assets/img/assets/asset-4.jpg"
import Asset5 from "@JCKConsultant/assets/img/assets/asset-5.webp"
import IconPersonChalkboard from "../icons/IconPersonChalkboard"
import IconBxCodeCurly from "../icons/IconBxCodeCurly"
import IconMortarboardFill from "../icons/IconMortarboardFill"
type TeamProps = {
	content?: string
}
export default function Team({ content }: TeamProps) {
	return (
		<section className="bg-white pb-20 pt-5">
			<section className="my-24">
				<header data-aos="fade-up" className="px-10 mb-20 text-center">
					{/* <h1 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 uppercase">Our Team</h1> */}
					<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Our Team</p>
				</header>
				<div className="grid md:grid-cols-2  xs:grid-cols-1 gap-4 px-10">
					<div className=""></div>
					<div className=""></div>
				</div>
			</section>
		</section>
	)
}
