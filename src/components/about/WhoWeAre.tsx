import Image from "next/image"
import React from "react"
import { WhoWeAreImg } from "../home/HomeWhoweareSection"

type WhoWeAreProps = {
	content?: string
}
export default function WhoWeAre({ content }: WhoWeAreProps) {
	return (
		<div className="md:py-20 xs:py-10 bg-white mx-auto md:px-6" id="who-we-are">
			{/* <!-- Section: Design Block --> */}
			<div className="mx-auto text-center lg:text-left xl:px-32">
				<div className="flex grid items-center lg:grid-cols-2">
					<div className="mb-12 lg:mb-0">
						<div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]   md:px-12 lg:-mr-14">
							<h2 className="mb-8 text-3xl font-bold text-blue">Who We Are</h2>
							<div dangerouslySetInnerHTML={{ __html: content as string }} className="mb-8 pb-2 text-neutral-500  lg:pb-0"></div>
						</div>
					</div>

					<div>
						<Image src={WhoWeAreImg} className="w-full rounded-lg shadow-lg " alt="image" />
					</div>
				</div>
			</div>
			{/* <!-- Section: Design Block --> */}
		</div>
	)
}
