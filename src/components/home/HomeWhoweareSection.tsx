import Image from "next/image"
import React from "react"
import FounderImageCropped from "@JCKConsultant/assets/img/avatar/owner-img-cropped.png"
import Asset1 from "@JCKConsultant/assets/img/assets/asset-1.jpeg"
import Asset2 from "@JCKConsultant/assets/img/assets/asset-2.jpg"
import Asset3 from "@JCKConsultant/assets/img/assets/asset-3.jpg"
import Asset4 from "@JCKConsultant/assets/img/assets/asset-4.jpg"
import Asset5 from "@JCKConsultant/assets/img/assets/asset-5.webp"
type HomeWhoweareSectionProps = {
	content?: string
}
export default function HomeWhoweareSection({ content }: HomeWhoweareSectionProps) {
	return (
		<section className="bg-white pb-20 pt-5" id="next__h_whoweare">
			<header data-aos="fade-up" className="px-10 mb-10 text-center">
				<h1 className=" font-bold xs:text-[40px] md:text-[64px] text-blue">Who We Are</h1>
			</header>
			<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 px-10">
				<div data-aos="zoom-in-right" className="flex items-center justify-center">
					<div className="grid grid-cols-2 gap-4">
						<Image src={Asset1} alt="Product" className="w-[100%] h-[100%] object-fill bg-white p-5 rounded-lg rounded-tl-[50px] rounded-br-[50px] animate__animated animate__fadeIn shadow-2xl" />
						<Image src={Asset2} alt="Product" className="w-[100%] h-[100%] object-fill bg-white p-5 rounded-lg rounded-tl-[50px] rounded-br-[50px] animate__animated animate__fadeIn shadow-2xl" />
						<Image src={Asset3} alt="Product" className="w-[100%] h-[100%] object-fill bg-white p-5 rounded-lg rounded-tl-[50px] rounded-br-[50px] animate__animated animate__fadeIn shadow-2xl" />
						<Image src={Asset4} alt="Product" className="w-[100%] h-[100%] object-fill bg-white p-5 rounded-lg rounded-tl-[50px] rounded-br-[50px] animate__animated animate__fadeIn shadow-2xl" />
					</div>
				</div>
				<div data-aos="fade-up" className="col-span-1 text-black text-[20px] p-4" dangerouslySetInnerHTML={{ __html: content as string }}></div>
			</div>
		</section>
	)
}
