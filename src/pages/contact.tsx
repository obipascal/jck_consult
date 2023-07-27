import Image from "next/image"
import React from "react"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import IconMapMarkerRadius from "@JCKConsultant/components/icons/IconMapMarkerRadius"
import IconEnvelope from "@JCKConsultant/components/icons/IconEnvelope"
import IconTelephoneFill from "@JCKConsultant/components/icons/IconTelephoneFill"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { enquiryValidatorScheme } from "@JCKConsultant/lib/validator/enquiriesValidator"
import { useMutation } from "react-query"
import { PostEnquiry } from "@JCKConsultant/services/enquiries/enquiries.apsi"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"

type InitValsProps = {
	subject: string
	first_name: string
	last_name: string
	email: string
	phone_number: string
	message: string
}

export default function Contact({ configs }: AppConfigs) {
	const initData: InitValsProps = {
		subject: "",
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		message: ""
	}

	const postEnquiryApi = useMutation(PostEnquiry, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Contact Us", res?.message)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Contact Us", error)
		}
	})

	const isLoading = postEnquiryApi.isLoading

	const _handleSubmit = (values: InitValsProps, helpers: FormikHelpers<InitValsProps>) => {
		postEnquiryApi.mutateAsync(values)
		helpers?.resetForm()
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Contact Us">
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg ">
							<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10">
										<Formik initialValues={initData} onSubmit={_handleSubmit} validationSchema={enquiryValidatorScheme}>
											{({ handleChange, values }) => (
												<Form className="space-y-6">
													<p className="mb-4">Let&apos;s get in-touch! Please fill out the form below and we will contact you as soon as possible.</p>

													{/* subject */}
													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="contactForm_subjectInput"
															name="subject"
															type="text"
															value={values?.subject}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="contactForm_subjectInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Subject
														</label>
														<ErrorMessage name="subject" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													{/* First and Last Name */}
													<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
														<div className="relative mb-4" data-te-input-wrapper-init>
															<Field
																id="contactForm_firstNameInput"
																name="first_name"
																type="text"
																value={values?.first_name}
																onChange={handleChange}
																className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															/>
															<label
																htmlFor="contactForm_firstNameInput"
																className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
															>
																First Name
															</label>
															<ErrorMessage name="first_name" component={"p"} className="text-red-600 mt-2 p-2" />
														</div>

														<div className="relative mb-4" data-te-input-wrapper-init>
															<Field
																id="contactForm_lastName"
																name="last_name"
																type="text"
																value={values?.last_name}
																onChange={handleChange}
																className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															/>
															<label
																htmlFor="contactForm_lastName"
																className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
															>
																Last Name
															</label>
															<ErrorMessage name="last_name" component={"p"} className="text-red-600 mt-2 p-2" />
														</div>
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="contactForm_email"
															name="email"
															type="text"
															value={values?.email}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="contactForm_email"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Email
														</label>
														<ErrorMessage name="email" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="contactForm_phoneNumber"
															name="phone_number"
															type="text"
															value={values?.phone_number}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="contactForm_phoneNumber"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Phone Number
														</label>
														<ErrorMessage name="phone_number" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="contactForm_message"
															name="message"
															as="textarea"
															value={values?.message}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="contactForm_message"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Message
														</label>
														<ErrorMessage name="message" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<button
														disabled={isLoading}
														className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block  rounded-full p-4 min-w-[35%] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="submit"
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														{!isLoading && "Send"}
														{isLoading && <Spinner />}
													</button>
												</Form>
											)}
										</Formik>
									</div>
								</div>

								{/* <!-- Right column container with background and description--> */}
								<div className="bg-gradient-to-r from-blue-800 to-blue  rounded-b-lg  lg:rounded-r-lg lg:rounded-bl-none">
									<div className="px-4 py-6 md:mx-6 text-white">
										<h4 className="mb-6 text-3xl font-bold text-secondary">Get In Touch</h4>
										<p className="text-sm">We are eager to connect with you. Please don&apos;t hesitate to get in touch using the contact information provided below.</p>
									</div>
									<div data-aos="fade-up" className="px-4 py-6 md:mx-6 text-white md:p-12 grid grid-cols-1 items-start justify-between pl-2">
										{/* Phone number */}
										<div className="flex">
											<div className="w-fit flex items-center text-white">
												<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-secondary  mb-3">
													<IconTelephoneFill width={"1em"} height={"1em"} />
												</span>
												<div className="ml-3">
													<h1 className="font-bold ">Phone Number</h1>
													<p className="font-normal md:text-md xs:text-xs ">{configs?.settings?.phone_number}</p>
												</div>
											</div>
										</div>

										{/* Email */}
										<div className="flex text-white">
											<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-secondary mb-3">
												<IconEnvelope width={"1em"} height={"1em"} />
											</span>

											<div className="ml-3">
												<h1 className="font-bold md:text-md xs:text-xs">Email</h1>
												<p className="font-normal ">{configs?.settings?.email}</p>
											</div>
										</div>

										{/* Address */}
										<div className="flex text-white">
											<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-secondary mb-3 h-fit">
												<IconMapMarkerRadius width={"1em"} height={"1em"} />
											</span>

											<div className="ml-3">
												<h1 className="font-bold md:text-md xs:text-xs">Address</h1>
												<p className="font-normal ">{configs?.settings?.line_address}</p>
											</div>
										</div>
									</div>
									<div className="px-4 py-6 md:mx-6 text-white">
										<h4 className="mb-6 text-3xl font-bold text-secondary">We&apos;re Open</h4>
										<p className="text-sm">
											<span className="font-bold">From:</span> Monday <span className="font-bold">To:</span> Friday, 9:00AM - 5:00PM UK Time.
										</p>
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

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
