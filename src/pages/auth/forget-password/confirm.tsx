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
import { OTPCodeValidatorScheme } from "@JCKConsultant/lib/validator/authValidtor"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { useRouter } from "next/router"
import { VerifyAccount, VerifyPasswordReset } from "@JCKConsultant/services/auth/auth.apis"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	otp_code: string
}

export default function ConfirmResetPasswordPage({ configs }: AppConfigs) {
	const router = useRouter()
	const { email } = router?.query

	const initData: InitValsProps = {
		otp_code: ""
	}

	const verifyPasswordResetApi = useMutation(VerifyPasswordReset, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Verification", res?.message)
				router?.push(`${ROUTES?.user?.forgetPassword?.reset}?token=${res?.data?.reset_token}`)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Verification", error)
		}
	})

	const isLoading = verifyPasswordResetApi.isLoading

	const _handleSubmit = (values: InitValsProps, helpers: FormikHelpers<InitValsProps>) => {
		verifyPasswordResetApi.mutateAsync(values)
		helpers?.resetForm()
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Confirm Account Password Reset">
			<InitTailwindUI />
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg">
							<div className="grid grid-cols-1">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12 flex items-center justify-center">
										<Formik initialValues={initData} onSubmit={_handleSubmit} validationSchema={OTPCodeValidatorScheme}>
											{({ handleChange, values }) => (
												<Form className="space-y-6 rounded-lg shadow p-5">
													<p className="mb-2 font-bold text-2xl">Confirm Account Password Reset</p>
													<p className="mb-4">
														We&apos;ve sent a One-time Password (OTP) to <span className="font-bold">{email}</span>.
													</p>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="authForm_otpInput"
															name="otp_code"
															type="text"
															value={values?.otp_code}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="authForm_otpInput"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Enter OTP Code
														</label>
														<ErrorMessage name="otp_code" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<button
														disabled={isLoading}
														className="bg-gradient-to-r from-blue-800 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="submit"
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														{!isLoading && "Confirm"}
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
