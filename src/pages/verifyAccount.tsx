import dynamic from "next/dynamic"

const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })
import Logo from "@JCKConsultant/assets/img/logo.png"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function AdministrativeConsoleVerifyAccount() {
	return (
		<>
			<InitTailwindUI />
			<div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Image className="mx-auto h-10 w-auto" src={Logo} alt="Your Company" />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Verify Password Reset</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-md shadow-lg p-5 py-10">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<div className="relative mb-4" data-te-input-wrapper-init>
								<input
									id="authForms_otpInput"
									name="otp_code"
									type="tel"
									autoComplete="otp"
									required
									className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
								/>
								<label
									htmlFor="authForms_otpInput"
									className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
								>
									Enter OTP Code
								</label>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md from-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hovehover:bg-blue-800us-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Verify
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						<Link href={ROUTES.forgotPassword} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Go back
						</Link>
					</p>
				</div>
			</div>
		</>
	)
}
