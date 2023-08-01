import React from "react"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik"
import { useMutation } from "react-query"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import dynamic from "next/dynamic"
import Link from "next/link"
import { FgpwdValidatorScheme } from "@JCKConsultant/lib/validator/authValidtor"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { CreateAccount, RecoverAccount } from "@JCKConsultant/services/auth/auth.apis"
import { useDispatch } from "react-redux"
import { setApiToken } from "@JCKConsultant/redux/reducers/AuthSlice"
import { useRouter } from "next/router"
import { waitUntil } from "@JCKConsultant/lib/utils"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	email: string
}

export default function ForgetPasswordPage({ configs }: AppConfigs) {
	const dispatcher = useDispatch()
	const router = useRouter()
	const { callback } = router?.query

	const initData: InitValsProps = {
		email: ""
	}

	const forgetPasswordApi = useMutation(RecoverAccount, {
		onSuccess(res: any, params) {
			if (res?.status) {
				Success("Forget Password", res?.message)
				dispatcher(setApiToken(res?.data?.api_token))

				waitUntil(100).then(() =>
					router?.push(callback ? `${ROUTES?.user?.forgetPassword.confirm}?email=${params?.email}&callback=${callback}` : `${ROUTES?.user?.forgetPassword.confirm}?email=${params?.email}`)
				)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Forget Password", error)
		}
	})

	const isLoading = forgetPasswordApi.isLoading

	const _handleSubmit = (values: InitValsProps, helpers: FormikHelpers<InitValsProps>) => {
		forgetPasswordApi.mutateAsync(values)
		helpers?.resetForm()
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Recover Account">
			<InitTailwindUI />
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full">
						<div className="block rounded-lg bg-white shadow-lg ">
							<div className="grid grid-cols-1">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12 flex items-center justify-center">
										<Formik initialValues={initData} onSubmit={_handleSubmit} validationSchema={FgpwdValidatorScheme}>
											{({ handleChange, values }) => (
												<Form className="space-y-6 rounded-lg shadow p-5">
													<p className="mb-2 font-bold text-2xl">Forgot Password</p>
													<p className="mb-4">Forgotten your password? No worries we&apos;ve got your back.</p>

													<div className="relative mb-4" data-te-input-wrapper-init>
														<Field
															id="fgpwd_email"
															name="email"
															type="text"
															value={values?.email}
															onChange={handleChange}
															className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														/>
														<label
															htmlFor="fgpwd_email"
															className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
														>
															Registered email address
														</label>
														<ErrorMessage name="email" component={"p"} className="text-red-600 mt-2 p-2" />
													</div>

													<button
														disabled={isLoading}
														className="bg-gradient-to-r from-blue-800 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="submit"
														data-te-ripple-init
														data-te-ripple-color="light"
													>
														{!isLoading && "Submit"}
														{isLoading && <Spinner />}
													</button>

													<p className="my-8">
														Remembered password?
														<Link href={ROUTES.user.signin} className="font-extrabold ml-2 text-primary">
															Login
														</Link>
													</p>
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
