import Layout from "@JCKConsultant/components/sites/Layout"
import Image from "next/image"
import React from "react"

import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { uniqueId } from "@JCKConsultant/lib/utils"
import IconMapMarkerRadius from "@JCKConsultant/components/icons/IconMapMarkerRadius"
import IconEnvelope from "@JCKConsultant/components/icons/IconEnvelope"
import IconTelephoneFill from "@JCKConsultant/components/icons/IconTelephoneFill"

type InitDataTypes = {
	username?: string
	password?: string
}

export default function Contact() {
	const initData: InitDataTypes = {}
	return (
		<MainLayout>
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg ">
							<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12">
										<form autoComplete="off">
											<p className="mb-4">Please fill out the form below and we will contact you as soon as possible!</p>

											{/* <!--Username input--> */}
											<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<div className="relative mb-4" data-te-input-wrapper-init>
														<input
															type="text"
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															id="contactFormFirstNameInput"
															placeholder="First Name"
														/>
														<label
															htmlFor="contactFormFirstNameInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
														>
															First Name
														</label>
													</div>
												</div>

												<div>
													<div className="relative mb-4" data-te-input-wrapper-init>
														<input
															type="text"
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															id="contactFormLastNameInput"
															placeholder="Last Name"
														/>
														<label
															htmlFor="contactFormLastNameInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
														>
															Last Name
														</label>
													</div>
												</div>
											</div>

											{/* <!--Email input--> */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<input
													type="email"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="contactFormEmailInput"
													placeholder="Email Address"
												/>
												<label
													htmlFor="contactFormEmailInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
												>
													Email Address
												</label>
											</div>

											{/* Phone number */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<input
													type="tel"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="contactFormPhoneNumberInput"
													placeholder="Phone Number"
												/>
												<label
													htmlFor="contactFormPhoneNumberInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
												>
													Phone Number
												</label>
											</div>

											{/* Billing number */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<textarea
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="contactFormMessageInput"
													placeholder="Message"
												></textarea>
												<label
													htmlFor="contactMessageInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
												>
													Message
												</label>
											</div>
										</form>

										<Link
											href={ROUTES.enroll.confirm(uniqueId())}
											className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
										>
											Send
										</Link>
									</div>
								</div>

								{/* <!-- Right column container with background and description--> */}
								<div className="bg-gradient-to-r from-blue-800 to-blue flex flex-col justify-start items-center rounded-b-lg  lg:rounded-r-lg lg:rounded-bl-none">
									<div className="px-4 py-6 md:mx-6 text-white md:p-12">
										<h4 className="mb-6 text-3xl font-normal">Get In Touch</h4>
										<p className="text-sm">We would love to speak with you. Feel free to reach out using the below details.</p>
									</div>
									<div data-aos="fade-up" className=" grid grid-cols-1 justify-between pl-2">
										{/* Phone number */}
										<div className="flex">
											<div className="w-fit flex items-center text-white">
												<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue  mb-3">
													<IconTelephoneFill width={"1em"} height={"1em"} />
												</span>
												<div className="ml-3">
													<h1 className="font-bold ">Phone Number</h1>
													<p className="font-normal md:text-md xs:text-xs ">+234 9125256272</p>
												</div>
											</div>
										</div>

										{/* Email */}
										<div className="flex text-white">
											<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue mb-3">
												<IconEnvelope width={"1em"} height={"1em"} />
											</span>

											<div className="ml-3">
												<h1 className="font-bold md:text-md xs:text-xs">Email</h1>
												<p className="font-normal ">support@jckconsulting.co.uk</p>
											</div>
										</div>

										{/* Address */}
										<div className="flex text-white">
											<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue mb-3 h-fit">
												<IconMapMarkerRadius width={"1em"} height={"1em"} />
											</span>

											<div className="ml-3">
												<h1 className="font-bold md:text-md xs:text-xs">Address</h1>
												<p className="font-normal ">No 26 Ebenezer street, Byazhin Across, Kubwa</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
