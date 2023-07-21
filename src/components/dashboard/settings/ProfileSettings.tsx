import Spinner from "@JCKConsultant/components/home/Spinner"
import { useUser } from "@JCKConsultant/hooks/useUser"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { uniqueId } from "@JCKConsultant/lib/utils"
import { accountValidatorScheme } from "@JCKConsultant/lib/validator/accountValidator"
import { UpdateAccount } from "@JCKConsultant/services/account/account.apis"
import { SelectDropdownProps } from "@JCKConsultant/types/selectDropdown"
import { ErrorMessage, Field, Form, Formik } from "formik"
import React from "react"
import { useMutation } from "react-query"

const dropdownOptions: Array<SelectDropdownProps> = [
	{
		name: "Male",
		value: "male"
	},
	{
		name: "Female",
		value: "female"
	},
	{
		name: "Others",
		value: "others"
	}
]

type InitValsProps = {
	first_name: string
	last_name: string
	email: string
	phone_number: string
	gender?: string
	password: string
	password_confirmation?: string
}
export default function ProfileSettings() {
	const user = useUser()

	const initVals: InitValsProps = {
		first_name: user?.first_name ?? "",
		last_name: user?.last_name ?? "",
		email: user?.email ?? "",
		phone_number: user?.phone_number ?? "",
		gender: user?.gender ?? "",
		password: "",
		password_confirmation: ""
	}

	const updateAccountApi = useMutation(UpdateAccount, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Profile", res?.message)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isUpdating = updateAccountApi.isLoading
	const _handleSubmit = (values: InitValsProps) => {
		updateAccountApi.mutateAsync({ data: values })
	}

	return (
		<div className="mt-6 border-t border-gray-100">
			<Formik initialValues={initVals} onSubmit={_handleSubmit} validationSchema={accountValidatorScheme}>
				{({ handleChange, values }) => (
					<Form autoComplete="off">
						<dl className="divide-y divide-gray-100">
							{/* Name */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-bold text-lg">Full name</h1>
									<h2 className="font-semibold text-md text-gray-500">
										{user?.first_name} {user?.last_name}
									</h2>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<div className="relative mb-4" data-te-input-wrapper-init>
												<Field
													name="first_name"
													onChange={handleChange}
													value={values?.first_name}
													type="text"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="enrollFormFirstNameInput"
													placeholder="First Name"
												/>
												<label
													htmlFor="enrollFormFirstNameInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													First Name
												</label>

												<ErrorMessage name="first_name" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>
										</div>

										<div>
											<div className="relative mb-4" data-te-input-wrapper-init>
												<Field
													name="last_name"
													onChange={handleChange}
													value={values?.last_name}
													type="text"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="enrollFormLastNameInput"
													placeholder="Last Name"
												/>
												<label
													htmlFor="enrollFormLastNameInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													Last Name
												</label>
												<ErrorMessage name="last_name" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>
										</div>
									</div>
								</dd>
							</div>

							{/* email / Phone number */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-bold text-lg">Contacts:</h1>
									<h2 className="font-semibold text-md text-gray-500">{user?.email}</h2>
									<h2 className="font-semibold text-md text-gray-500">{user?.phone_number}</h2>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div className="grid xs:grid-cols-1 gap-4">
										<div>
											<div className="relative mb-4" data-te-input-wrapper-init>
												<Field
													name="email"
													onChange={handleChange}
													value={values?.email}
													type="text"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="settingsForm_emailInput"
													placeholder="Email Address"
												/>
												<label
													htmlFor="settingsForm_emailInput"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													Email Address
												</label>

												<ErrorMessage name="email" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>
										</div>

										<div>
											<div className="relative mb-4" data-te-input-wrapper-init>
												<Field
													name="phone_number"
													onChange={handleChange}
													value={values?.phone_number}
													type="text"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="settingsForm_phoneNumber"
													placeholder="Phone number"
												/>
												<label
													htmlFor="settingsForm_phoneNumber"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													Phone number
												</label>
												<ErrorMessage name="phone_number" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>
										</div>
									</div>
								</dd>
							</div>

							{/* Gender */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-bold text-lg">Gender:</h1>
									<h2 className="font-semibold text-md text-gray-500">{user?.gender}</h2>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-black xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div>
										<Field
											name="gender"
											onChange={handleChange}
											value={values?.gender}
											as="select"
											className="peer block min-h-[50px] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
											id="settingsForm_genderInput"
											placeholder="Email Address"
										>
											{dropdownOptions?.map(option => (
												<option key={uniqueId()} value={option?.value}>
													{option?.name}
												</option>
											))}
										</Field>
										<ErrorMessage name="gender" component={"p"} className="text-red-600 mt-2 p-2" />
									</div>
								</dd>
							</div>
							{/* Password */}
							<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
								<dt className="text-sm font-medium leading-6 text-gray-900">
									<h1 className="font-bold text-lg">Security Credentials</h1>
									<h2 className="font-normal text-md text-gray-500">Change your account password</h2>
								</dt>
								<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
									<div className="grid xs:grid-cols-1 gap-4">
										<div>
											<div className="relative mb-4" data-te-input-wrapper-init>
												<Field
													name="password"
													onChange={handleChange}
													value={values?.password}
													type="password"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="settingsForm_newPassword"
													placeholder="New Password"
												/>
												<label
													htmlFor="settingsForm_newPassword"
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
													name={"password_confirmation"}
													onChange={handleChange}
													value={values?.password_confirmation}
													type="password"
													className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
													id="settingsForm_confirmPassword"
													placeholder="Confirm Password"
												/>
												<label
													htmlFor="settingsForm_confirmPassword"
													className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
												>
													Confirm Password
												</label>
												<ErrorMessage name="password_confirmation" component={"p"} className="text-red-600 mt-2 p-2" />
											</div>
										</div>
									</div>
								</dd>
							</div>
						</dl>

						<div className="py-3">
							<button disabled={isUpdating} type="submit" className="p-3 rounded-lg text-white bg-blue disabled:bg-blue/50">
								{!isUpdating && "Update Profile"}
								{isUpdating && <Spinner />}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}
