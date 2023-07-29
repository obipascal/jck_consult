import Image from "next/image"
import React from "react"
import FounderImageCropped from "@JCKConsultant/assets/img/avatar/owner-img-cropped.png"
import Asset1 from "@JCKConsultant/assets/img/assets/asset-1.jpeg"
import Asset2 from "@JCKConsultant/assets/img/assets/asset-2.jpg"
import Asset3 from "@JCKConsultant/assets/img/assets/asset-3.jpg"
import Asset4 from "@JCKConsultant/assets/img/assets/asset-4.jpg"
import Asset5 from "@JCKConsultant/assets/img/assets/asset-5.webp"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
type HomeWhoweareSectionProps = {
	content?: string
}
export default function HomeWhoweareSection({ content }: HomeWhoweareSectionProps) {
	return (
		<section className="bg-white pb-20 pt-5" id="next__h_whoweare">
			<section className="mb-24">
				<header data-aos="fade-up" className="px-10 mb-20 text-center">
					<h1 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 uppercase">ABOUT</h1>
					<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Our Experts are the finest</p>
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
					<div data-aos="fade-up" className="col-span-1 text-black text-[20px] p-4">
						<p className="">
							Welcome to JCK Consultant Ltd, where success in the fast-paced world of technology begins. We are a dedicated team of tech experts who firmly believe in the power of knowledge and
							continuous improvement. Our mission is to be your gateway to success by providing a comprehensive suite of courses and workshops that cater to aspiring tech professionals and career
							transitioners alike.
							<br />
							<br />
							Transformative Training for Your Unique Goals:
							<br />
							<br />
							At JCK Consultant Ltd, we recognize that each individual&apos;s tech journey is unique. That&apos;s why our transformative training programs are carefully tailored to meet your specific
							aspirations. Whether you aspire to become a Scrum Master, Agile Coach, or venture into other tech domains, our courses are designed to equip you with the skills and knowledge needed to
							thrive in today&apos;s ever-evolving landscape...
						</p>
					</div>
				</div>

				<div className="text-center flex items-center justify-center">
					<Link
						href={ROUTES?.about}
						className="hover:bg-secondary hover:text-primary transition ease-in duration-300 p-4 rounded-full w-fit mt-10  bg-primary text-white font-medium shadow-lg flex items-center"
						role="button"
					>
						Learn more
					</Link>
				</div>
			</section>
		</section>
	)
}
