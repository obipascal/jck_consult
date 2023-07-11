import Layout from "@JCKConsultant/components/sites/Layout"
import Image from "next/image"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import AuthBackground from "@JCKConsultant/assets/img/auth/draw2.webp"
import { ReviewValidationSchema } from "@JCKConsultant/lib/validator/reviewValidator"
import IconGoogle from "@JCKConsultant/components/icons/IconGoogle"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { uniqueId } from "@JCKConsultant/lib/utils"
import OrderSummary from "@JCKConsultant/components/misc/OrderSummary"

type InitDataTypes = {
	username?: string
	password?: string
}

export default function EnrollCourse() {
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
											<p className="mb-4">Please fill-in your information to enroll in this course.</p>
											{/* <!--Username input--> */}
											<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<div className="relative mb-4" data-te-input-wrapper-init>
														<input
															type="text"
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															id="enrollFormFirstNameInput"
															placeholder="First Name"
														/>
														<label
															htmlFor="enrollFormFirstNameInput"
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
															id="enrollFormLastNameInput"
															placeholder="Last Name"
														/>
														<label
															htmlFor="enrollFormLastNameInput"
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
													id="enrollFormEmailInput"
													placeholder="Email Address"
												/>
												<label
													htmlFor="enrollFormEmailInput"
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
													id="enrollFormPhoneNumberInput"
													placeholder="Phone Number"
												/>
												<label
													htmlFor="enrollFormPhoneNumberInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
												>
													Phone Number
												</label>
											</div>

											{/* Billing number */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<input
													type="text"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="enrollFormBillingAddressInput"
													placeholder="Billing Address"
												/>
												<label
													htmlFor="enrollFormBillingAddressInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
												>
													Billing Address
												</label>
											</div>
										</form>
										<br />
										<hr />
										<br />

										<p className="mb-4">Your order summary</p>

										<OrderSummary />

										<Link
											href={ROUTES.enroll.confirm(uniqueId())}
											className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
										>
											Enroll Now
										</Link>
									</div>
								</div>

								{/* <!-- Right column container with background and description--> */}
								<div className="bg-gradient-to-r from-blue-800 to-blue flex justify-center items-center rounded-b-lg  lg:rounded-r-lg lg:rounded-bl-none">
									<div className="px-4 py-6 md:mx-6 text-white md:p-12">
										<h4 className="mb-6 text-xl font-semibold">Over 200 candidates are already enrolled in this course</h4>
										<p className="text-sm">Join our amazing community and happy students who are already enrolled.</p>
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
