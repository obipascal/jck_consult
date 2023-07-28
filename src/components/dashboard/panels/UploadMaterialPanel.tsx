import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import dynamic from "next/dynamic"
import { getUploadMaterialPanel, toggleUploadMaterialPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { useMutation } from "react-query"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import FilePicker from "@JCKConsultant/components/misc/FilePicker"
import { UploadCourseMaterial } from "@JCKConsultant/services/course/materials/materials.apis"
import { useRouter } from "next/router"
import { waitUntil } from "@JCKConsultant/lib/utils"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

export default function UploadMaterialPanel() {
	const uploadMaterialPanel = useSelector(getUploadMaterialPanel)
	const { show, data, params } = uploadMaterialPanel
	const dispatcher = useDispatch()
	const router = useRouter()

	const _closePanel = () => {
		dispatcher(toggleUploadMaterialPanel({ status: false }))
	}

	const UploadMaterialApi = useMutation(UploadCourseMaterial, {
		onSuccess(res: any) {
			if (res?.status) {
				_closePanel()
				Success("Course Material", res?.message)

				waitUntil(100).then(() => router?.reload())
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isUploading = UploadMaterialApi.isLoading

	const _handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e?.preventDefault()
		const _formData = new FormData(e?.target)

		UploadMaterialApi.mutateAsync(_formData)
	}

	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={_closePanel}>
				<Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
									<Transition.Child
										as={Fragment}
										enter="ease-in-out duration-500"
										enterFrom="opacity-0"
										enterTo="opacity-100"
										leave="ease-in-out duration-500"
										leaveFrom="opacity-100"
										leaveTo="opacity-0"
									>
										<div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
											<button type="button" className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" onClick={_closePanel}>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</Transition.Child>
									<div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
										<div className="px-4 sm:px-6">
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Upload Course Material</Dialog.Title>
										</div>
										<hr className="my-8" />

										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											<InitTailwindUI />
											<form onSubmit={_handleSubmit}>
												<input type="hidden" name="course" value={params as string} onChange={() => {}} />
												{/* Course Name */}
												<div className="relative mb-4" data-te-input-wrapper-init>
													<input
														name="title"
														type="text"
														className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
														id="createCourseInput-name"
														aria-describedby="emailHelp"
														placeholder="Display name"
													/>
													<label
														htmlFor="createCourseInput-name"
														className="font-medium pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
													>
														File Display Name
													</label>
												</div>

												{/* Course Body */}
												<div className="relative mb-4">
													<FilePicker name="upload_file" />
												</div>

												<div className="">
													<button disabled={isUploading} type="submit" className="p-3 mt-5 rounded-lg text-white bg-blue disabled:bg-blue/50">
														{!isUploading && "Upload File"}
														{isUploading && <Spinner />}
													</button>
												</div>
											</form>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
