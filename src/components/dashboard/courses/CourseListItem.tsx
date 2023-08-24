import React, { Fragment } from "react"
import { CalendarIcon, CheckIcon, ChevronDownIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid"
import { Menu, Transition } from "@headlessui/react"
import { capitalize, classNames, toDateString } from "@JCKConsultant/lib/utils"
import { useDispatch } from "react-redux"
import { toggleEditCoursePanel, toggleEnrollmentPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { toggleModal } from "@JCKConsultant/redux/reducers/modalSlice"
import Modal from "@JCKConsultant/components/misc/Modal"
import { formatNumber } from "@JCKConsultant/lib/utilities"
import Image from "next/image"
import { useMutation } from "react-query"
import { DeleteCourse, UpdateCourse } from "@JCKConsultant/services/course/course.apis"
import { Info, ServerErrors } from "@JCKConsultant/lib/_toaster"
import { emitFetchCourses } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { TECollapse } from "tw-elements-react"
import CourseMaterials from "./CourseMaterials"
import { CourseInterface } from "@JCKConsultant/types/course"
import { UserCircleIcon } from "@heroicons/react/24/outline"

type CourseListItemProps = {
	courseId: number
	courseName?: string
	courseAmount?: number
	courseLastModified?: string
	showInfo?: boolean
	showActions?: boolean
	status?: "drafted" | "published"
	image?: string
	data?: CourseInterface
	isAdmin?: boolean
}

export default function CourseListItem({ isAdmin = true, data, showInfo = true, showActions = true, status, image, courseId, courseName, courseAmount, courseLastModified }: CourseListItemProps) {
	const dispatcher = useDispatch()
	const [show, toggle] = React.useState<boolean>(false)
	const _handleToggle = () => toggle(!show)

	const _toggleEditPanel = () => dispatcher(toggleEditCoursePanel({ status: true, params: courseId }))
	const _toggleEnrollmentPanel = () => dispatcher(toggleEnrollmentPanel({ status: true, params: courseId }))

	const _toggleModal = () => dispatcher(toggleModal(true))

	const updateCourseApi = useMutation(UpdateCourse, {
		onSuccess(res: any) {
			if (res?.status) {
				Info("Success", res?.message)
				dispatcher(emitFetchCourses(true))
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isUpdating = updateCourseApi.isLoading

	const deleteCourseApi = useMutation(DeleteCourse, {
		onSuccess(res: any) {
			Info("Course Deleted", res?.message)
			dispatcher(emitFetchCourses(true))
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isDeleting = deleteCourseApi.isLoading

	const _handleUpdate = () => updateCourseApi.mutateAsync({ id: courseId, data: { status: status === "published" ? "drafted" : "published" } })
	const _handleDelete = (_course_id: any) => deleteCourseApi.mutateAsync(_course_id)

	return (
		<>
			<div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white mb-4">
				<div className="flex lg:items-center lg:justify-between bg-white p-3 rounded">
					<div className="p-3 w-fit">
						<Image src={image ?? ""} width={100} height={100} className="rounded-md md:h-20 md:w-40" alt="" />
					</div>
					<div className="  w-full lg:flex lg:items-center lg:justify-between">
						<div className="min-w-0 flex-1">
							<h2 className="text-md hover:text-blue font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight cursor-pointer" onClick={_handleToggle}>
								{courseName}
							</h2>
							{showInfo && (
								<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
									<div className="mt-2 flex items-center text-sm text-gray-500">
										&pound;
										{formatNumber(courseAmount)}
									</div>
									{isAdmin && (
										<>
											<div className="mt-2 flex items-center text-sm text-gray-500">
												<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
												last modified {courseLastModified}
											</div>
										</>
									)}
								</div>
							)}
						</div>
						{showActions && isAdmin && (
							<div className="mt-5 flex lg:ml-4 lg:mt-0">
								<span className="hidden sm:block">
									<button
										onClick={_toggleEditPanel}
										type="button"
										className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>
										<PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
										Edit
									</button>
								</span>

								{/* @todo: Add course activities such as number of student registered etc */}

								<span className="ml-3 hidden sm:block">
									<button
										onClick={_toggleModal}
										type="button"
										className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
									>
										<TrashIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
										Delete
									</button>
								</span>

								<span className="sm:ml-3">
									<button
										disabled={isUpdating}
										onClick={_handleUpdate}
										type="button"
										className={classNames(
											status === "published"
												? "border-primary hover:bg-primary hover:text-white disabled:border-primary/50 disabled:hover:bg-primary/50"
												: "border-secondary hover:bg-secondary hover:text-primary disabled:border-secondary/50 disabled:hover:bg-secondary/50 disabled:hover:text-secondary/50",
											" border-2 inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-primary shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										)}
									>
										<CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
										{capitalize(status as string)}
									</button>
								</span>

								{/* Dropdown */}
								<Menu as="div" className="relative ml-3 sm:hidden">
									<Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
										More
										<ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
									</Menu.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a onClick={_toggleEditPanel} href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 w-full")}>
														Edit
													</a>
												)}
											</Menu.Item>

											{/* @todo: Add course activities such as number of student registered etc */}

											<Menu.Item>
												{({ active }) => (
													<a onClick={_toggleModal} href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
														Delete
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						)}
					</div>
				</div>
				<hr />
				<TECollapse show={show}>
					{/* course material content */}
					<button
						onClick={_toggleEnrollmentPanel}
						type="button"
						className="ml-10 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
					>
						<UserCircleIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						Offline User Enrollment
					</button>
					<div className="h-full">
						<CourseMaterials isAdmin={isAdmin} courseId={courseId as any as string} courseMaterials={data?.materials} />
					</div>
				</TECollapse>
			</div>

			<Modal
				isLoading={isDeleting}
				message="Are you sure you want to delete this course? This will delete any transaction related to this course."
				onConfirm={() => _handleDelete(courseId)}
				confirmText="Yes! Delete"
				confirmBtnClass="bg-red-500 text-white"
			/>
		</>
	)
}
