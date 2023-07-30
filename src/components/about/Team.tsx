import Image from "next/image"
import React from "react"
import NnadiChiomaImg from "@JCKConsultant/assets/img/team/nnadi-chioma.jpg"
import ObiPascalImg from "@JCKConsultant/assets/img/team/obi-pascal.png"
import LilianGareldImg from "@JCKConsultant/assets/img/team/lilian-gareld.jpg"

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
				<div className="grid grid-cols-1 gap-60 px-10">
					<div className="grid xs:grid-cols-1 md:grid-cols-3 gap-1">
						<div className="">
							<Image src={NnadiChiomaImg} alt="Nnadia Chioma" className="xs:rounded-md sm:rounded-t-[50%] w-60 m-auto block" />
						</div>
						<div className="px-4 col-span-2 flex items-center justify-between gap-1">
							<div className="">
								<h1 className="font-bold text-3xl p-2 text-primary">Nnadi Chioma</h1>
								<h2 className="font-bold text-md p-2 text-gray-500">CEO and Founder</h2>
								<p className="text-md p-2 text-black">
									As the visionary leader and founder of JCKConsulting, Nnadi Chioma is fueled by her passion for technology and desire to empower individuals to thrive in the tech industry. With
									years of experience in project management and Agile Scrum methodologies, Nnadi Chioma leads the team with a clear vision of fostering a tech-inclusive community. Her commitment to
									excellence and dedication to delivering outstanding services have set JCK Consulting on a path to success.
								</p>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-3 gap-8">
						<div className="relative group/card transition ease-in duration-300">
							<Image src={ObiPascalImg} alt="Obi Pascal Banjuare" className="rounded-md w-full h-full m-auto block" />
							<div className="absolute top-[80%]  left-0 right-0 bottom-0 rounded-md bg-black/50 p-3 visible group-hover/card:invisible">
								<h1 className="font-bold xs:text-[16px] md:text-[36px] text-white uppercase">Obi Pascal</h1>
								<h2 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 capitalize italic text-secondary">-Software Developer</h2>
							</div>
							<div className="absolute top-[100%]  left-0 right-0 bottom-0 rounded-md bg-black/50 p-3 invisible group-hover/card:visible group-hover/card:top-[0%] text-[16px]">
								<p className="text-white"></p>
							</div>
						</div>
						<div className="relative group/card transition ease-in duration-300">
							<Image src={LilianGareldImg} alt="Nnadia Chioma" className="rounded-md w-full h-full m-auto block" />
							<div className="absolute top-[80%]  left-0 right-0 bottom-0 rounded-md bg-black/50 p-3 visible group-hover/card:invisible">
								<h1 className="font-bold xs:text-[16px] md:text-[36px] text-white uppercase">LILIAN GERALD</h1>
								<h2 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 capitalize italic text-secondary">-Social Media Manager</h2>
							</div>
							<div className="absolute top-[100%]  left-0 right-0 bottom-0 rounded-md bg-black/50 p-3 invisible group-hover/card:visible group-hover/card:top-[0%] ">
								<p className="text-white text-[18px] font-medium">
									Gerald is the creative force behind JCKConsulting&apos;s social media presence. With a keen eye for storytelling and a passion for community engagement, she brings the company&apos;s
									mission to life through captivating content. Gerald is deeply committed to showcasing the success stories of students and clients, ensuring that the positive impact of
									JCKConsulting&apos;s services reaches a global audience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
