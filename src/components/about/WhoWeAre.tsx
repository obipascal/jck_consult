import React from "react"
import FounderImage from "@JCKConsultant/assets/img/avatar/owner-img.jpg"

export const Founder = FounderImage

type WhoWeAreProps = {
	content?: string
}
export default function WhoWeAre({ content }: WhoWeAreProps) {
	return (
		<div className="md:py-20 xs:py-10 bg-white mx-auto md:px-6" id="who-we-are">
			{/* <!-- Section: Design Block --> */}
			<div className="mx-auto text-center lg:text-left xl:px-32">
				<div className="grid items-center lg:grid-cols-1">
					<div className="mb-12 lg:mb-0 col-span-1">
						<div className="relative block rounded-tr-lg rounded-tl-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]   md:px-12 lg:-mr-14">
							<h2 className="mb-8   font-bold xs:text-[36px] md:text-[50px] text-primary">About Us</h2>
							<div dangerouslySetInnerHTML={{ __html: content as string }} className="mb-8 pb-2 text-neutral-500  lg:pb-0"></div>
							{/* <Image src={Asset1} className="ma-auto block w-full rounded-br-lg rounded-bl-lg shadow-lg " alt="image" /> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Section: Design Block --> */}
		</div>
	)
}
