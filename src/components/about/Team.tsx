import Image from "next/image"
import React from "react"
import NnadiChiomaImg from "@JCKConsultant/assets/img/team/nnadi-chioma.jpg"
import ObiPascalImg from "@JCKConsultant/assets/img/team/obi-pascal.png"
import LilianGareldImg from "@JCKConsultant/assets/img/team/lilian-garald.jpg"
import AyorindeOmoJuwa from "@JCKConsultant/assets/img/team/ayorinde-omojuwa.jpg"

type TeamProps = {
	content?: string
}
export default function Team({ content }: TeamProps) {
	return (
		<section className="bg-[url('/img/bg/Frame_bg.png')] bg-no-repeat bg-cover bg-center">
			<section className="bg-white/80 py-20">
				<header data-aos="fade-up" className="xs:px-2 md:px-10 mb-20 text-center">
					{/* <h1 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 uppercase">Our Team</h1> */}
					<p className="font-bold xs:text-[36px] md:text-[50px] text-primary">Our Team</p>
				</header>
				<div className="grid grid-cols-1 gap-20 xs:px-5 md:px-10">
					<div className="grid xs:grid-cols-1 md:grid-cols-3 gap-1">
						<div className="">
							<Image src={NnadiChiomaImg} alt="Nnadia Chioma" className="xs:rounded-md sm:rounded-t-[50%] w-60 m-auto block  transition ease-in duration-300 hover:scale-[1.1]" />
						</div>
						<div className="px-4 col-span-2 flex items-center justify-between gap-1">
							<div className="">
								<h1 className="font-bold text-3xl p-2 text-primary">Chioma Nnadi</h1>
								<h2 className="font-bold text-md p-2 text-gray-500">CEO and Founder</h2>
								<p className="text-md p-2 text-black text-justify">
									As the visionary leader and founder of JCK Consulting, Chioma Nnadi is fueled by her passion for technology and desire to empower individuals to thrive in the tech industry. With
									years of experience in project management and Agile Scrum methodologies, Chioma Nnadi leads the team with a clear vision of fostering a tech-inclusive community. Her commitment to
									excellence and dedication to delivering outstanding services have set JCK Consulting on a path to success.
								</p>
							</div>
						</div>
					</div>
					<div className="grid xs:grid-cols-1 md:grid-cols-3 gap-8">
						<div className="relative group/card transition ease-in duration-300 min-h-10">
							<Image src={LilianGareldImg} alt="Lilian Garald" className="rounded-md w-80 m-auto block  transition ease-in duration-300 hover:scale-[1.1]" />
							<div className="rounded-md bg-gradient-to-r from-indigo-500 to-blue-900 my-4 p-3 w-full">
								<h1 className="font-bold xs:text-[16px] md:text-[22px] text-white uppercase">LILIAN GERALD</h1>
								<h2 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 capitalize italic text-secondary">-Social Media Manager</h2>
								<hr className="my-4" />
								<p className="font-medium text-md text-gray-100 italic text-justify">
									Gerald is the creative force behind JCK Consulting&apos;s social media presence. With a keen eye for storytelling and a passion for community engagement, she brings the
									company&apos;s mission to life through captivating content.
								</p>
							</div>
						</div>

						<div className="relative group/card transition ease-in duration-300 min-h-10">
							<Image src={AyorindeOmoJuwa} alt="Ayorinde Omojuwa" className="rounded-md w-80 m-auto block  transition ease-in duration-300 hover:scale-[1.1]" />
							<div className="rounded-md bg-gradient-to-r from-indigo-500 to-blue-900 my-4 p-3 w-full">
								<h1 className="font-bold xs:text-[16px] md:text-[22px] text-white uppercase">Ayorinde Omojuwa</h1>
								<h2 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 capitalize italic text-secondary">-Coding Tutor</h2>
								<hr className="my-4" />
								<p className="font-medium text-md text-gray-100 italic text-justify">
									Versatile Coding Tutor at JCK Consulting. With expertise in tech and a passion for empowering learners, I play a pivotal role in guiding aspiring tech enthusiasts and engaging our
									online community.
								</p>
							</div>
						</div>

						<div className="relative group/card transition ease-in duration-300 min-h-10">
							<Image src={ObiPascalImg} alt="Obi Pascal Banjuare" className="rounded-md w-80 m-auto block transition ease-in duration-300 hover:scale-[1.1]" />
							<div className="rounded-md bg-gradient-to-r from-indigo-500 to-blue-900 my-4 p-3 w-full">
								<h1 className="font-bold xs:text-[16px] md:text-[22px] text-white uppercase">OBI PASCAL</h1>
								<h2 className="font-medium xs:text-[20px] md:text-[20px] text-gray-500 capitalize italic text-secondary">-Software Developer</h2>
								<hr className="my-4" />
								<p className="font-medium text-md text-gray-100 italic text-justify">
									Accomplished Full-stack Software Developer with 6 years of expertise, committed to delivering innovative solutions for clients. Passionate about creating efficient and user-friendly
									applications, they boast a stellar record of high-quality project delivery within time and budget constraints.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
