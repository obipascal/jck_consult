import React, { Fragment } from "react"
import { CalendarIcon, CheckIcon, ChevronDownIcon, CurrencyDollarIcon, ChartBarIcon, MapPinIcon, PencilIcon, TrashIcon } from "@heroicons/react/20/solid"
import { Menu, Transition } from "@headlessui/react"
import { classNames } from "@JCKConsultant/lib/utils"
import { useDispatch } from "react-redux"
import { toggleEditCoursePanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { toggleModal } from "@JCKConsultant/redux/reducers/modalSlice"
import Modal from "@JCKConsultant/components/misc/Modal"
import Link from "next/link"

type CourseListItemProps = {
	courseName?: string
	showInfo?: boolean
	showActions?: boolean
}
export default function CourseListItem({ showInfo = true, showActions = true, courseName }: CourseListItemProps) {
	const dispatcher = useDispatch()

	const _toggleEditPanel = () => dispatcher(toggleEditCoursePanel({ status: true }))
	const _toggleModal = () => dispatcher(toggleModal(true))

	return (
		<>
			<div className="lg:flex lg:items-center lg:justify-between bg-white shadow-log p-3 rounded mb-4">
				<div className="min-w-0 flex-1">
					<h2 className="text-md hover:text-blue font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
						<Link href="#">{courseName}</Link>
					</h2>
					{showInfo && (
						<div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
								&pound;120k
							</div>
							<div className="mt-2 flex items-center text-sm text-gray-500">
								<CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
								last modified on January 9, 2020
							</div>
						</div>
					)}
				</div>
				{showActions && (
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

						{/* <span className="ml-3 hidden sm:block">
					<button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
						<ChartBarIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						Activities
					</button>
				</span> */}

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
								type="button"
								className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-800 to-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								<CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
								Publish
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

									{/* <Menu.Item>
								{({ active }) => (
									<a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
										Activities
									</a>
								)}
							</Menu.Item> */}

									<Menu.Item>
										{({ active }) => (
											<a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
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

			<Modal />
		</>
	)
}
