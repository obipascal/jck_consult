import Layout from "@JCKConsultant/components/sites/Layout"
import Image from "next/image"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import AuthBackground from "@JCKConsultant/assets/img/auth/draw2.webp"
import { ReviewValidationSchema } from "@JCKConsultant/lib/validator/reviewValidator"
import IconGoogle from "@JCKConsultant/components/icons/IconGoogle"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"

type InitDataTypes = {
	username?: string
	password?: string
}

export default function Login() {
	const initData: InitDataTypes = {}
	return (
		<Layout>
			<section className="h-screen">
				<div className="h-full">
					{/* <!-- Left column container with background--> */}
					<div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
						<div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
							<Image src={AuthBackground} className="w-full" alt="Sample image" />
						</div>

						{/* <!-- Right column container --> */}
						<div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
							<Formik initialValues={initData} onSubmit={() => {}} validationSchema={ReviewValidationSchema}>
								{({ isSubmitting, values, handleChange, handleSubmit }) => (
									<Form className="px-8 text-slate-900 dark:text-light rounded-md shadow-sm bg-white dark:bg-slate-800 py-5" onSubmit={handleSubmit} autoComplete="off">
										{/* <!--Sign in section--> */}
										<div className="my-4">
											<h1>Sign-in</h1>
										</div>

										<div className="relative mb-6" data-te-input-wrapper-init>
											<Field
												type="email"
												name="username"
												onChange={handleChange}
												value={values?.username}
												className="peer border-transparent block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="userUsername"
												placeholder="e.g: example@yourcompany.com"
											/>
											<label
												htmlFor="userUsername"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out dark:peer-focus:bg-slate-800 peer-focus:bg-white peer-focus:px-1 peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white font-bold"
											>
												Email
											</label>
											<ErrorMessage name="email" component={"span"} className="text-danger dark:text-orange-500 mt-2 px-2" />
										</div>

										<div className="relative mb-6" data-te-input-wrapper-init>
											<Field
												type="password"
												name="password"
												onChange={handleChange}
												value={values?.password}
												className="peer border-transparent block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
												id="userPassword"
												placeholder="e.g: example@yourcompany.com"
											/>
											<label
												htmlFor="userPassword"
												className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out dark:peer-focus:bg-slate-800 peer-focus:bg-white peer-focus:px-1 peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-white font-bold"
											>
												Password
											</label>
											<ErrorMessage name="password" component={"span"} className="text-danger dark:text-orange-500 mt-2 px-2" />
										</div>

										<div className="mb-6 flex items-center justify-between">
											<Link
												href={ROUTES.register}
												className="text-primary font-medium transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-secondary dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
											>
												Sign up
											</Link>

											{/* <!-- Forgot password link --> */}
											<a
												href="#!"
												className="text-primary font-medium transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-secondary dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
											>
												Forgot password?
											</a>
										</div>

										{/* <!-- Login button --> */}
										<div className="text-center lg:text-left">
											<button
												type="submit"
												className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
												data-te-ripple-init
												data-te-ripple-color="light"
											>
												Login
											</button>
										</div>

										{/* <!-- Separator between social media sign in and email/password sign in --> */}
										<div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
											<p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
										</div>

										{/* <!-- Social login buttons --> */}
										<a
											className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-danger"
											href="#!"
											role="button"
											data-te-ripple-init
											data-te-ripple-color="light"
										>
											<IconGoogle className="mr-3" width={"2em"} height={"2em"} />
											Continue with Google
										</a>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
