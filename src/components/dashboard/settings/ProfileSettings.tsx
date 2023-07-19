import React from "react"

export default function ProfileSettings() {
	return (
		<div className="mt-6 border-t border-gray-100">
			<form autoComplete="off">
				<dl className="divide-y divide-gray-100">
					{/* Name */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-bold text-lg">Full name</h1>
							<h2 className="font-semibold text-md text-gray-500">Obi Pascal Banjuare</h2>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<input
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
									</div>
								</div>

								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<input
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
									</div>
								</div>
							</div>
						</dd>
					</div>

					{/* email / Phone number */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-bold text-lg">Contacts:</h1>
							<h2 className="font-semibold text-md text-gray-500">pascalobi83@gmail.com</h2>
							<h2 className="font-semibold text-md text-gray-500">09125256272</h2>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							<div className="grid xs:grid-cols-1 gap-4">
								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<input
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
									</div>
								</div>

								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<input
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
									</div>
								</div>
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
										<input
											type="text"
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
									</div>
								</div>

								<div>
									<div className="relative mb-4" data-te-input-wrapper-init>
										<input
											type="text"
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
									</div>
								</div>
							</div>
						</dd>
					</div>
				</dl>

				<div className="py-3">
					<button type="submit" className="p-3 rounded-lg text-white bg-blue">
						Save Change
					</button>
				</div>
			</form>
		</div>
	)
}
