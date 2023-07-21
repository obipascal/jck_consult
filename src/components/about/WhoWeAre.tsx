import Image from "next/image"
import React from "react"
import { WhoWeAreImg } from "../home/HomeWhoweareSection"

export default function WhoWeAre() {
	return (
		<div className="md:py-20 xs:py-10 bg-white mx-auto md:px-6" id="who-we-are">
			{/* <!-- Section: Design Block --> */}
			<div className="mx-auto text-center lg:text-left xl:px-32">
				<div className="flex grid items-center lg:grid-cols-2">
					<div className="mb-12 lg:mb-0">
						<div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px]   md:px-12 lg:-mr-14">
							<h2 className="mb-8 text-3xl font-bold text-blue">Who We Are</h2>
							<p className="mb-8 pb-2 text-neutral-500  lg:pb-0">
								Welcome to JCK Consultant Ltd, your gateway to success in the fast-paced world of technology. We are a visionary tech consulting firm dedicated to transforming individuals and
								organizations into agile powerhouses. With a team of experienced industry experts and a deep understanding of the latest trends, we provide cutting-edge solutions that propel your
								business forward.
							</p>

							<p className="mb-3 text-neutral-500 ">
								At JCK Consultant Ltd, we believe in the power of knowledge and continuous improvement. Our comprehensive suite of courses and workshops caters to aspiring tech professionals and those
								seeking to transition their careers. Whether you&apos;re looking to become a Scrum Master, Agile Coach, or delve into other tech domains, our transformative training programs are
								tailored to meet your unique goals.
							</p>

							<p className="mb-3 text-neutral-500 ">
								What sets us apart is our unwavering commitment to your success. We don&apos;t just offer theoretical concepts; we provide hands-on practical experiences that empower you to excel in
								real-world scenarios. Our seasoned instructors bring a wealth of industry insights, equipping you with the skills and confidence needed to thrive in today&apos;s competitive landscape.
							</p>

							<p className="mb-0 text-neutral-500 ">
								Join JCK Consultant Ltd and embark on a transformative journey that unlocks your true potential. Gain the knowledge, tools, and mindset to navigate the tech industry with finesse,
								adapting to change and embracing innovation. Together, let&apos;s shape the future of technology and elevate your career to new heights.
							</p>
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
