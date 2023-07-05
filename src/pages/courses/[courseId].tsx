import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import Image from "next/image"
import React from "react"

export default function CourseInfo() {
	return (
		<MainLayout>
			<section className="bg-[url('/img/bg/Frame_bg.png')] bg-fixed bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
				<div className="bg-white/80 py-24 sm:py-32">
					{/* <!-- Container for demo purpose --> */}
					<div className="container mx-auto md:p-6 bg-white rounded shadow-lg">
						{/* <!-- Section: Design Block --> */}
						<section className="mb-32">
							<Image width={100} height={100} src="https://mdbcdn.b-cdn.net/img/new/slides/198.jpg" className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />

							<div className="mb-6 flex items-center">
								<Image width={50} height={50} src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (23).jpg" className="mr-2 rounded-full" alt="avatar" loading="lazy" />
								<div>
									<span>
										{" "}
										Published <u>15.07.2020</u> by{" "}
									</span>
									<a href="#!" className="font-medium">
										Anna Maria Doe
									</a>
								</div>
							</div>

							<h1 className="mb-6 text-3xl font-bold">An intriguing title for an interesting article</h1>

							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi harum tempore cupiditate asperiores provident, itaque, quo ex iusto rerum voluptatum delectus corporis quisquam
								maxime a ipsam nisi sapiente qui optio! Dignissimos harum quod culpa officiis suscipit soluta labore! Expedita quas, nesciunt similique autem, sunt, doloribus pariatur maxime qui sint
								id enim. Placeat, maxime labore. Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex ducimus consequatur corporis, architecto nesciunt vitae ipsum consequuntur
								perspiciatis nulla esse voluptatem quos dolorum delectus similique eum vero in est velit quasi pariatur blanditiis incidunt quam.
							</p>
						</section>
						{/* <!-- Section: Design Block --> */}
					</div>
					{/* <!-- Container for demo purpose --> */}
				</div>
			</section>
		</MainLayout>
	)
}
