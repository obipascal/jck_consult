import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import Image from "next/image"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function Testimonies() {
	return (
		<section className="bg-gradient-to-r from-indigo-500 to-blue bg-no-repeat bg-cover bg-center my-0">
			<div className="bg-white/80 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div data-aos="fade-up" className="mx-auto max-w-2xl lg:text-center">
						<h1 className=" font-bold text-[50px] text-slate-800">Testimonials</h1>
						<p className="mt-6 text-lg leading-8 text-slate-800">Discover What Our Clients Are Saying: Real Stories, Real Results</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
						<section className="text-neutral-700 dark:text-neutral-300">
							{/* <!--First Testimonial--> */}
							<div className="grid gap-6 text-center md:grid-cols-3">
								<div data-aos="fade-up">
									<div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
										<div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
										<div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
											<Image alt="" width={100} height={100} src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
										</div>
										<div className="p-6">
											<h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
											<hr />
											<p className="mt-4">
												<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
													<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
												</svg>
												Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
											</p>
										</div>
									</div>
								</div>

								{/* <!--Second Testimonial--> */}
								<div data-aos="fade-up">
									<div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
										<div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
										<div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
											<Image alt="" width={100} height={100} src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
										</div>
										<div className="p-6">
											<h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
											<hr />
											<p className="mt-4">
												<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
													<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
												</svg>
												Neque cupiditate assumenda in maiores repudi mollitia architecto.
											</p>
										</div>
									</div>
								</div>

								{/* <!--Third Testimonial--> */}
								<div data-aos="fade-up">
									<div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
										<div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
										<div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
											<Image alt="" width={100} height={100} src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
										</div>
										<div className="p-6">
											<h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
											<hr />
											<p className="mt-4">
												<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block h-7 w-7 pr-2" viewBox="0 0 24 24">
													<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
												</svg>
												Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<Link
						href={ROUTES.testimonies}
						className="p-3 rounded-full w-fit mt-10 border border-blue  text-slate-800 hover:bg-secondary hover:border-secondary transition-all hover:text-white m-auto block shadow-lg flex items-center"
						role="button"
					>
						Show more <IconArrowRight className="ml-1" />
					</Link>
				</div>
			</div>
		</section>
	)
}
