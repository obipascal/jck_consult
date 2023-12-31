import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getEditCoursePanel, toggleEditCoursePanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import CreateOrEditCourseForm from "../courses/CreateOrEditCourseForm"
import dynamic from "next/dynamic"
import EditCourseLoader from "@JCKConsultant/components/loaders/EditCourseLoader"
import { useMutation } from "react-query"
import { FetchCourse } from "@JCKConsultant/services/course/course.apis"
import { CourseInterface } from "@JCKConsultant/types/course"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })
import React from "react"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { emitFetchCourses } from "@JCKConsultant/redux/reducers/appEventsSlice"

export default function EditCoursePanel() {
	const editCoursePanel = useSelector(getEditCoursePanel)
	const { show, data, params } = editCoursePanel
	const [course, setCourse] = React.useState<CourseInterface>()
	const dispatcher = useDispatch()

	const _closePanel = () => {
		dispatcher(toggleEditCoursePanel({ status: false }))
	}

	const fetchCourseApi = useMutation(FetchCourse, {
		onSuccess(res: any) {
			if (res?.status) {
				setCourse(res?.data)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Course Fetchhing Error", error)
		}
	})
	const isLoading = fetchCourseApi.isLoading

	React.useEffect(() => {
		if (params) fetchCourseApi.mutateAsync(params)
	}, [params])

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
											<Dialog.Title className="text-base font-semibold leading-6 text-gray-900">Edit Course</Dialog.Title>
										</div>
										<div className="relative mt-6 flex-1 px-4 sm:px-6">
											{isLoading && <EditCourseLoader />}
											{!isLoading && (
												<>
													<InitTailwindUI />
													<CreateOrEditCourseForm canCreate={false} data={course} />
												</>
											)}
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
