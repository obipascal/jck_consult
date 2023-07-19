import Image from "next/image"
import React from "react"
import Logo from "@JCKConsultant/assets/img/logo.png"
import WYSIWYGEditor from "@JCKConsultant/components/misc/WYSIWYGEditor"
import dynamic from "next/dynamic"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

export default function ApplicationSettings() {
	const [previewImage, setPreviewImage] = React.useState<string | null>(null)
	const fileInputRef = React.createRef<HTMLInputElement>()

	const toggleFileUpload = () => {
		if (fileInputRef?.current) {
			fileInputRef?.current?.click()
		}
	}

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] as File
		previewFile(file)
	}

	const previewFile = (file: File | null) => {
		if (!file) return
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewImage(reader.result as string)
		}
	}
	return (
		<div className="mt-6 border-t border-gray-100">
			<InitTailwindUI />
			<form>
				<dl className="divide-y divide-gray-100">
					{/* Logo Upload */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<Image width={100} height={100} src={previewImage ? previewImage : Logo} alt="" className="rounded-full w-20 h-20 md:inline md:m-0 xs:block xs:m-auto" />
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center md:justify-start xs:justify-center py-2">
							<div className="">
								<input onChange={handleFileInputChange} type="file" name="app_logo" accept="image/*" hidden ref={fileInputRef} />
								<button onClick={toggleFileUpload} type="button" className="xs:p-1 md:p-3 rounded-lg text-blue border-blue border">
									Select files
								</button>
							</div>
						</dd>
					</div>

					{/* Site Name */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-semibold text-gray-600 text-lg">Site Name</h1>
							<h2 className="font-medium text-md text-gray-500">JCK Consult</h2>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
										type="text"
										className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_siteName"
										placeholder="Site Name"
									/>
									<label
										htmlFor="appSettings_siteName"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										Site Name
									</label>
								</div>
							</div>
						</dd>
					</div>

					{/* Site Description */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-semibold text-gray-600 text-lg">Site Description</h1>
							<p className="font-medium text-md text-gray-500">JCK Consult is a IT consulting service company, we help you transit into tech ease.</p>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<textarea
										className="peer block min-h-[100px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_seoDesc"
										placeholder="Site Description"
									></textarea>
									<label
										htmlFor="appSettings_seoDesc"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										Site Description
									</label>
								</div>
							</div>
						</dd>
					</div>

					{/* Site About */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-semibold text-gray-600 text-lg">Site About</h1>
							<p className="font-medium text-md text-gray-500">Write content will be displayed on the about us description page.</p>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							<div>
								<div className="relative mb-4">
									<WYSIWYGEditor inputName="about_us" />
								</div>
							</div>
						</dd>
					</div>

					{/* Site About */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-semibold text-gray-600 text-lg">Site Contacts</h1>
							<p className="font-medium text-md text-gray-500">Update site contact information.</p>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							{/* Phone Number */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
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
								</div>
							</div>

							{/* Email Address */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
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
								</div>
							</div>

							{/* Office Address */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
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
								</div>
							</div>
						</dd>
					</div>

					{/* Site Social Links */}
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-gray-900">
							<h1 className="font-semibold text-gray-600 text-lg">Set Social Handles</h1>
							<p className="font-medium text-md text-gray-500">Update your social handle links.</p>
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-700 xs:mt-4 md:mt-0 sm:col-span-2 sm:mt-0">
							{/* Facebook */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
										type="url"
										className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_facebookInput"
										placeholder="Facebook Link"
									/>
									<label
										htmlFor="appSettings_facebookInput"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										Facebook Link
									</label>
								</div>
							</div>

							{/* Instagram */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
										type="url"
										className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_instagramInput"
										placeholder="Instagram Link"
									/>
									<label
										htmlFor="appSettings_instagramInput"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										Instagram Link
									</label>
								</div>
							</div>

							{/* Twitter */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
										type="url"
										className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_twitterInput"
										placeholder="Twitter Link"
									/>
									<label
										htmlFor="appSettings_twitterInput"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										Twitter Link
									</label>
								</div>
							</div>

							{/* LinkedIn */}
							<div>
								<div className="relative mb-4" data-te-input-wrapper-init>
									<input
										type="url"
										className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
										id="appSettings_linkedIn"
										placeholder="LinkedIn Link"
									/>
									<label
										htmlFor="appSettings_linkedIn"
										className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
									>
										LinkedIn Link
									</label>
								</div>
							</div>
						</dd>
					</div>
				</dl>
				<div className="my-4">
					<button type="submit" className="p-3 rounded-lg text-white bg-blue">
						Save Changes
					</button>
				</div>
			</form>
		</div>
	)
}
