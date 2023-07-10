import React, { Fragment, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getModal, toggleModal } from "@JCKConsultant/redux/reducers/modalSlice"
import { classNames } from "@JCKConsultant/lib/utils"

type ModalProps = {
	title?: string
	message?: React.ReactNode | string
	params?: string
	data?: any
	type?: "danger" | "info" | "success" | "warning"
	confirmText?: string
	confirmBtnClass?: string
	cancelText?: string
	cancelBtnClass?: string
	onConfirm?: () => void
	onCancel?: () => void
}
export default function Modal({
	title = "Modal title",
	message = <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>,
	params,
	data,
	type = "info",
	confirmText = "Okay",
	confirmBtnClass = "text-white  bg-blue",
	cancelText = "Cancel",
	cancelBtnClass = "bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
	onConfirm,
	onCancel
}: ModalProps) {
	const show = useSelector(getModal)
	const dispatcher = useDispatch()

	const _closeModal = () => dispatcher(toggleModal(false))

	const cancelButtonRef = useRef(null)

	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={_closeModal}>
				<Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										<div
											className={classNames([
												"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10",
												`
                                            ${type === "danger" ? "bg-red-100" : ""}
                                            ${type === "info" ? "bg-sky-100" : ""}
                                            ${type === "warning" ? "bg-yellow-100" : ""}
                                            ${type === "success" ? "bg-green-100" : ""}
                                        `
											])}
										>
											{type === "warning" && <ExclamationTriangleIcon className="h-6 w-6 text-yellow-300" aria-hidden="true" />}
											{type === "info" && <InformationCircleIcon className="h-6 w-6 text-sky-600" aria-hidden="true" />}
											{type === "success" && <CheckCircleIcon className="h-6 w-6 text-green-500" aria-hidden="true" />}
											{type === "danger" && <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" />}
										</div>
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
												{title}
											</Dialog.Title>
											<div className="mt-2">{message}</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto  ${confirmBtnClass}`}
										onClick={typeof onConfirm === "function" ? onConfirm : _closeModal}
									>
										{confirmText}
									</button>
									<button
										type="button"
										className={`mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold  shadow-sm sm:mt-0 sm:w-auto ${cancelBtnClass}`}
										onClick={typeof onCancel === "function" ? onCancel : _closeModal}
										ref={cancelButtonRef}
									>
										{cancelText}
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
