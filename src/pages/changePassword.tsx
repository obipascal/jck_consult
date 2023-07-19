import dynamic from "next/dynamic"

const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })
import Logo from "@JCKConsultant/assets/img/logo.png"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { changePasswordValidatorScheme } from "@JCKConsultant/lib/validator/authValidtor"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { ResetAccountPassword } from "@JCKConsultant/services/auth/auth.apis"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"

type InitValsProps = {
	password?: string
	password_confirmation?: string
	reset_token?: string
}

export default function AdministrativeConsoleChangePassword() {
	const router = useRouter()
	const { reset_token } = router?.query

	const changePasswordApi = useMutation(ResetAccountPassword, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Password Reset", res?.message)
				sessionStorage.clear()
				router?.push(ROUTES?.login)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isLoading = changePasswordApi.isLoading

	const initVals: InitValsProps = {
		password: "",
		password_confirmation: "",
		reset_token: reset_token as string
	}

	const _handleSubmit = (values: InitValsProps) => {
		changePasswordApi.mutateAsync(values)
	}
	return (
		<>
			<InitTailwindUI />
			<div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Image className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Change Password</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-md shadow-lg p-5 py-10">
					<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={changePasswordValidatorScheme}>
						{({ handleChange, values }) => (
							<Form className="space-y-6">
								<input type="hidden" name="reset_token" value={values?.reset_token} />
								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<Field
											id="authForm_passwordInput"
											name="password"
											type="password"
											autoComplete="password"
											value={values?.password}
											onChange={handleChange}
											className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
										/>
										<label
											htmlFor="authForm_passwordInput"
											className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
										>
											New Password
										</label>
										<ErrorMessage name="password" component={"p"} className="text-red-600 mt-2 p-2" />
									</div>
								</div>

								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<Field
											id="authForm_passwordInput"
											name="password_confirmation"
											type="password"
											autoComplete="password"
											value={values?.password_confirmation}
											onChange={handleChange}
											className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 text-black"
										/>
										<label
											htmlFor="authForm_passwordInput"
											className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
										>
											Confirm Password
										</label>
										<ErrorMessage name="password_confirmation" component={"p"} className="text-red-600 mt-2 p-2" />
									</div>
								</div>

								<div>
									<button
										disabled={isLoading}
										type="submit"
										className="flex w-full justify-center rounded-md bg-blue disabled:bg-blue/50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										{!isLoading && "Reset Password"}
										{isLoading && <Spinner />}
									</button>
								</div>
							</Form>
						)}
					</Formik>

					<p className="mt-10 text-center text-sm text-gray-500">
						<Link href={ROUTES.home} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Cancel
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}
