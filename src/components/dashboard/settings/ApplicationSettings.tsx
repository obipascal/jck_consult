import React from "react"
import WYSIWYGEditor from "@JCKConsultant/components/misc/WYSIWYGEditor"
import dynamic from "next/dynamic"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { appValidatorScheme } from "@JCKConsultant/lib/validator/appValidator"
import { useMutation } from "react-query"
import { CreateSettings } from "@JCKConsultant/services/settings/settings.apis"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import AppSettingLogoUploader from "./AppSettingLogoUploader"
import { useSelector } from "react-redux"
import { getConfigs } from "@JCKConsultant/redux/reducers/appSlice"
import { SiteConfigs } from "@JCKConsultant/types"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	name: string
	desc: string
	phone_number: string
	email: string
	line_address: string
	facebook_handle: string
	instagram_handle: string
	twitter_handle: string
	linkedin_handle: string
	whatsapp_handle: string
}

export default function ApplicationSettings({ settings }: SiteConfigs) {
	const initVals: InitValsProps = {
		name: settings?.name ?? "",
		desc: settings?.desc ?? "",
		phone_number: settings?.phone_number ?? "",
		email: settings?.email ?? "",
		line_address: settings?.line_address ?? "",
		facebook_handle: settings?.facebook_handle ?? "",
		instagram_handle: settings?.instagram_handle ?? "",
		twitter_handle: settings?.twitter_handle ?? "",
		linkedin_handle: settings?.linkedin_handle ?? "",
		whatsapp_handle: settings?.whatsapp_handle ?? ""
	}

	const createSettingApi = useMutation(CreateSettings, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Settings", res?.message)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const updateAboutSettingApi = useMutation(CreateSettings, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Settings", res?.message)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isCreating = createSettingApi.isLoading
	const isUpdating = updateAboutSettingApi.isLoading

	const _handleSubmit = (values: InitValsProps) => createSettingApi.mutateAsync(values)

	const _handleUpdateSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e?.target)
		updateAboutSettingApi.mutateAsync(formData)
	}

	return (
		<div className="mt-6 border-t border-gray-100">
			<InitTailwindUI />

			<AppSettingLogoUploader defaultLogo={settings?.logo} />

			<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={appValidatorScheme}>
				{({ handleChange, values }) => (
					<Form>
						<dl className="divide-y divide-gray-100">
							{/* Site Name */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-semibold text-gray-600 text-lg">Website Name</h1>
									<h2 className="font-medium text-md text-gray-500">{settings?.name}</h2>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="name"
												onChange={handleChange}
												value={values?.name}
												type="text"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_siteName"
												placeholder="Website Name"
											/>
											<label
												htmlFor="appSettings_siteName"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Website Name
											</label>
											<ErrorMessage name="name" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>
								</dd>
							</div>

							{/* Site Description */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-semibold text-gray-600 text-lg">Description</h1>
									<p className="font-medium text-md text-gray-500">{settings?.desc}</p>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="desc"
												onChange={handleChange}
												value={values?.desc}
												as="textarea"
												className="peer block min-h-[100px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_seoDesc"
												placeholder="Description"
											/>
											<label
												htmlFor="appSettings_seoDesc"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Description
											</label>

											<ErrorMessage name="desc" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>
								</dd>
							</div>

							{/* Site About */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-semibold text-gray-600 text-lg">Contacts</h1>
									<p className="font-medium text-md text-gray-500">Update site contact information.</p>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									{/* Phone Number */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="phone_number"
												onChange={handleChange}
												value={values?.phone_number}
												type="text"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_phoneNumber"
												placeholder="Phone Number"
											/>
											<label
												htmlFor="appSettings_phoneNumber"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Phone Number
											</label>

											<ErrorMessage name="phone_number" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>

									{/* Email Address */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="email"
												onChange={handleChange}
												value={values?.email}
												type="text"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_emailAddress"
												placeholder="Email Address"
											/>
											<label
												htmlFor="appSettings_emailAddress"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Email Address
											</label>

											<ErrorMessage name="email" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>

									{/* Office Address */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="line_address"
												onChange={handleChange}
												vlaue={values?.line_address}
												type="text"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_officeAddress"
												placeholder="Office Address"
											/>
											<label
												htmlFor="appSettings_officeAddress"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Office Address
											</label>

											<ErrorMessage name="line_address" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>
								</dd>
							</div>

							{/* Site Social Links */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-semibold text-gray-600 text-lg">Social Handles</h1>
									<p className="font-medium text-md text-gray-500">Update your social handle links.</p>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									{/* Facebook */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="facebook_handle"
												onChange={handleChange}
												value={values?.facebook_handle}
												type="url"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_facebookInput"
												placeholder="Facebook Handle"
											/>
											<label
												htmlFor="appSettings_facebookInput"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Facebook
											</label>
											<ErrorMessage name="facebook_handle" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>

									{/* Instagram */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="instagram_handle"
												onChange={handleChange}
												value={values?.instagram_handle}
												type="url"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_instagramInput"
												placeholder="Facebook Handle"
											/>
											<label
												htmlFor="appSettings_instagramInput"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Instagram
											</label>
											<ErrorMessage name="instagram_handle" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>

									{/* Twitter */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="twitter_handle"
												onChange={handleChange}
												value={values?.twitter_handle}
												type="url"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_twitterInput"
												placeholder="Facebook Handle"
											/>
											<label
												htmlFor="appSettings_twitterInput"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												Twitter
											</label>
											<ErrorMessage name="twitter_handle" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>

									{/* LinkedIn */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="linkedin_handle"
												onChange={handleChange}
												value={values?.linkedin_handle}
												type="url"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_linkedinInput"
												placeholder="Facebook Handle"
											/>
											<label
												htmlFor="appSettings_linkedinInput"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												LinkedIn
											</label>
											<ErrorMessage name="linkedin_handle" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>
									{/* LinkedIn */}
									<div>
										<div className="relative mb-4" data-te-input-wrapper-init>
											<Field
												name="whatsapp_handle"
												onChange={handleChange}
												value={values?.whatsapp_handle}
												type="url"
												className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="appSettings_whatsappInput"
												placeholder="Facebook Handle"
											/>
											<label
												htmlFor="appSettings_whatsappInput"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
											>
												WhatsApp
											</label>
											<ErrorMessage name="whatsapp_handle" component={"p"} className="text-red-600 mt-2 p-2" />
										</div>
									</div>
								</dd>
							</div>
						</dl>
						<div className="my-4">
							<button disabled={isCreating} type="submit" className="p-3 rounded-lg text-white bg-blue disabled:bg-blue/50">
								{!isCreating && "Save Changes"}
								{isCreating && <Spinner />}
							</button>
						</div>
					</Form>
				)}
			</Formik>

			<form onSubmit={_handleUpdateSubmit}>
				{/* Site About */}
				<div className="px-4 mt-5 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						<h1 className="font-semibold text-gray-600 text-lg">Site About</h1>
						<p className="font-medium text-md text-gray-500">Write content will be displayed on the about us description page.</p>
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
						<div>
							<div className="relative mb-4">
								<WYSIWYGEditor value={settings?.about} inputName="about" />
							</div>
						</div>
					</dd>
				</div>
				<div className="my-4">
					<button disabled={isUpdating} type="submit" className="p-3 rounded-lg text-white bg-blue disabled:bg-blue/50">
						{!isUpdating && "Save Changes"}
						{isUpdating && <Spinner />}
					</button>
				</div>
			</form>
		</div>
	)
}
