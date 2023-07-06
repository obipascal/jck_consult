import Image from "next/image"
import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { uniqueId } from "@JCKConsultant/lib/utils"

export default function OurCourses() {
	return (
		<section className="bg-[url('/img/bg/Frame_bg_flip.png')] bg-no-repeat bg-cover bg-center my-0" id="next__h_courses">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-blue">Our Courses</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 font-semibold">Unleashing Your Full Potential with Cutting-Edge Courses</p>
					</div>
					<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{products.map(product => (
							<div data-aos="fade-up" key={product.id} className="group relative bg-white rounded shadow-lg">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
									<Image width={100} height={100} data-aos="fade-up" src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
								</div>
								<div className="mt-4 flex justify-between p-3">
									<div>
										<h3 className="text-sm font-semibold text-gray-700">
											<a href={product.href}>
												{/* <span aria-hidden="true" className="absolute inset-0" /> */}
												{product.name}
											</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">{product?.desc}</p>
										<Link href={ROUTES.enroll.index(product?.name)} className="p-2 px-3 rounded-full w-fit mt-3 block bg-secondary text-white" role="button">
											Enroll course
										</Link>
									</div>
									<p className="text-sm font-medium text-gray-900">{product.price}</p>
								</div>
							</div>
						))}
					</div>
					<Link
						href={ROUTES.courses.index}
						className="p-3 rounded-full w-fit mt-10 border border-blue  text-slate-800 hover:bg-primary hover:border-white border-2 transition-all hover:text-white m-auto block shadow-lg flex items-center"
						role="button"
					>
						View all courses <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}

const products = [
	{
		id: 1,
		name: "Scrum Master Class",
		href: ROUTES.courses.details(uniqueId()),
		imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		desc: "Front of men's Basic Tee in black."
	},
	{
		id: 2,
		name: "Data Analysis with Python",
		href: ROUTES.courses.details(uniqueId()),
		imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		desc: "Front of men's Basic Tee in black."
	},
	{
		id: 3,
		name: "Cyber Security",
		href: ROUTES.courses.details(uniqueId()),
		imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		desc: "Front of men's Basic Tee in black."
	},
	{
		id: 4,
		name: "Ethical Hacking",
		href: ROUTES.courses.details(uniqueId()),
		imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
		imageAlt: "Front of men's Basic Tee in black.",
		price: "$35",
		desc: "Front of men's Basic Tee in black."
	}

	// More products...
]
