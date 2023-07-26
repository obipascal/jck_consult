import Image from "next/image"
import React from "react"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import IconMapMarkerRadius from "@JCKConsultant/components/icons/IconMapMarkerRadius"
import IconEnvelope from "@JCKConsultant/components/icons/IconEnvelope"
import IconTelephoneFill from "@JCKConsultant/components/icons/IconTelephoneFill"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { reviewValidatorScheme } from "@JCKConsultant/lib/validator/enquiriesValidator"
import { useMutation } from "react-query"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import AvatarUploader from "@JCKConsultant/components/misc/AvatarUploader"
import dynamic from "next/dynamic"
import { CreateReview } from "@JCKConsultant/services/review/review.apis"
import { useRouter } from "next/router"
import { ROUTES } from "@JCKConsultant/configs/routes"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	reviewer_name: string
	reviewer_role: string
	reviewer_company: string
	reviewer_email: string
	reviewer_message: string
}

export default function Contact({ configs }: AppConfigs) {
	const fileInputRef = React.createRef<HTMLInputElement>()
	const router = useRouter()

	const initData: InitValsProps = {
		reviewer_name: "",
		reviewer_role: "",
		reviewer_company: "",
		reviewer_email: "",
		reviewer_message: ""
	}

	const createReviewApi = useMutation(CreateReview, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Review", res?.message)
				router?.push(ROUTES.home)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Review", error)
		}
	})

	const isLoading = createReviewApi.isLoading

	const _handleSubmit = (values: InitValsProps, helpers: FormikHelpers<InitValsProps>) => {
		const _formData = new FormData()
		Object.keys(values).forEach(field => {
			const keyIndex: keyof InitValsProps = field as any

			_formData.append(keyIndex, values[keyIndex])
		})

		if (fileInputRef?.current?.files) {
			_formData.append("reviewer_image", fileInputRef?.current.files[0])
		}

		createReviewApi.mutateAsync(_formData)
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
						<InitTailwindUI />
						<div className="block rounded-lg bg-white shadow-lg ">
							<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12">
										<Formik initialValues={initData} onSubmit={_handleSubmit} validationSchema={reviewValidatorScheme}>
											{({ handleChange, values }) => (
												<Form className="space-y-6">
													<div className="flex items-center justify-center">
														<AvatarUploader fileInputRef={fileInputRef} />
													</div>
													<p className="mb-4 font-bold text-md">Share Your Thoughts on Our Service: Your Valuable Feedback Matters!</p>
													<p className="mb-4">Thank you for taking the time to share your thoughts with us! Your feedback is highly valued and will undoubtedly contribute to our ongoing success.</p>

													{/* subject */}
													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="reviewForm_nameInput"
															name="reviewer_name"
															type="text"
															value={values?.reviewer_name}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="reviewForm_nameInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Your Name
														</label>
														<ErrorMessage name="reviewer_name" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													{/* First and Last Name */}
													<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
														<div className="relative mb-4" data-te-input-wrapper-init>
															<Field
																id="reviewForm_roleInput"
																name="reviewer_role"
																type="text"
																value={values?.reviewer_role}
																onChange={handleChange}
																className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															/>
															<label
																htmlFor="reviewForm_roleInput"
																className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
															>
																Role / Position
															</label>
															<ErrorMessage name="reviewer_role" component={"p"} className="text-red-600 mt-2 p-2" />
														</div>

														<div className="relative mb-4" data-te-input-wrapper-init>
															<Field
																id="reviewForm_companyInput"
																name="reviewer_company"
																type="text"
																value={values?.reviewer_company}
																onChange={handleChange}
																className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															/>
															<label
																htmlFor="reviewForm_companyInput"
																className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
															>
																Company
															</label>
															<ErrorMessage name="reviewer_company" component={"p"} className="text-red-600 mt-2 p-2" />
														</div>
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="reviewForm_emailInput"
															name="reviewer_email"
															type="text"
															value={values?.reviewer_email}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="reviewForm_emailInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Email address
														</label>
														<ErrorMessage name="reviewer_email" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="reviewForm_messageInput"
															name="reviewer_message"
															as="textarea"
															value={values?.reviewer_message}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="reviewForm_messageInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Message
														</label>
														<ErrorMessage name="reviewer_message" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<button
														disabled={isLoading}
														className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="submit"
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														{!isLoading && "Submit Review"}
														{isLoading && <Spinner />}
													</button>
												</Form>
											)}
										</Formik>
									</div>
								</div>

								{/* <!-- Right column container with background and description--> */}
								<div className="bg-gradient-to-r from-blue-800 to-blue flex flex-col justify-start items-center rounded-b-lg  lg:rounded-r-lg lg:rounded-bl-none">
									<div className="px-4 py-6 md:mx-6 text-white md:p-12">
										<h4 className="mb-6 text-3xl font-bold text-secondary">Get In Touch</h4>
										<p className="text-sm">We are eager to connect with you. Please don&apos;t hesitate to get in touch using the contact information provided below.</p>
									</div>
									<div data-aos="fade-up" className=" grid grid-cols-1 items-start justify-between pl-2">
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
