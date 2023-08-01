import Image from "next/image"
import React from "react"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { useMutation } from "react-query"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import dynamic from "next/dynamic"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { waitUntil } from "@JCKConsultant/lib/utils"
import { UpdateAccount } from "@JCKConsultant/services/account/account.apis"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { destroySession } from "@JCKConsultant/redux/reducers/AuthSlice"
import { onboardAccountValidatorScheme } from "@JCKConsultant/lib/validator/accountValidator"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	first_name: string
	last_name: string
	phone_number: string
	gender: string
	qualification: string
	password: string
	password_confirmation?: string
}

export default function OnboardPage({ configs }: AppConfigs) {
	const router = useRouter()
	const dispatcher = useDispatch()
	const { callback } = router?.query

	const initData: InitValsProps = {
		first_name: "",
		last_name: "",
		phone_number: "",
		gender: "",
		qualification: "",
		password: ""
	}

	const onboardAccountApi = useMutation(UpdateAccount, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Profile Updated", "Account created successfully, you can now login to enroll in your desired course.")
				dispatcher(destroySession(true))

				waitUntil(100).then(() => router?.push(callback ? `${ROUTES.user?.signin}?callback=${callback}` : ROUTES.user?.signin))
			}
		},
		onError(error, variables, context) {
			ServerErrors("Onboarding", error)
		}
	})
	const isLoading = onboardAccountApi.isLoading

	const _handleSubmit = (values: InitValsProps, helpers: FormikHelpers<InitValsProps>) => {
		onboardAccountApi.mutateAsync({ data: values })
		helpers?.resetForm()
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Verify Account">
			<InitTailwindUI />
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg">
							<div className="grid grid-cols-1">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12 flex items-center justify-center">
										<Formik initialValues={initData} onSubmit={_handleSubmit} validationSchema={onboardAccountValidatorScheme}>
											{({ handleChange, values }) => (
												<Form className="space-y-6 rounded-lg shadow p-5 min-w-[52%]">
													<p className="mb-2 font-bold text-2xl">Account Onboarding</p>
													<p className="mb-4">Update you profile information</p>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="authForm_firstName"
															name="first_name"
															type="text"
															value={values?.first_name}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="authForm_firstName"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															First Name
														</label>
														<ErrorMessage name="first_name" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="authForm_lastName"
															name="last_name"
															type="text"
															value={values?.last_name}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="authForm_lastName"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															First Name
														</label>
														<ErrorMessage name="last_name" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="authForm_phoneNumber"
															name="phone_number"
															type="tel"
															value={values?.phone_number}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="authForm_phoneNumber"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Phone Number
														</label>
														<ErrorMessage name="phone_number" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4">
														<Field
															id="authForm_gender"
															name="gender"
															as="select"
															value={values?.gender}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														>
															<option value="">Gender</option>
															<option value="male">Male</option>
															<option value="female">Female</option>
															<option value="others">Others</option>
														</Field>

														<ErrorMessage name="gender" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															name="password"
															onChange={handleChange}
															value={values?.password}
															type="password"
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															id="authForm_newPassword"
															placeholder="New Password"
														/>
														<label
															htmlFor="authForm_newPassword"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Create Password
														</label>
														<ErrorMessage name="password" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															name={"password_confirmation"}
															onChange={handleChange}
															value={values?.password_confirmation}
															type="password"
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
															id="authForm_confirmPassword"
															placeholder="Confirm Password"
														/>
														<label
															htmlFor="authForm_confirmPassword"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Confirm Password
														</label>
														<ErrorMessage name="password_confirmation" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<button
														disabled={isLoading}
														className="bg-gradient-to-r from-blue-800 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="submit"
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														{!isLoading && "Update Account"}
														{isLoading && <Spinner />}
													</button>
												</Form>
											)}
										</Formik>
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
