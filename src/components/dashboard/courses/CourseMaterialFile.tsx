import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { DeleteCourseMaterial, UpdateCourseMaterial } from "@JCKConsultant/services/course/materials/materials.apis"
import { CourseMaterialFileInterface } from "@JCKConsultant/types/course"
import { Menu, Transition } from "@headlessui/react"
import { ArrowDownTrayIcon, ArrowPathIcon, CheckCircleIcon, ChevronDownIcon, DocumentIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import classNames from "classnames"
import dynamic from "next/dynamic"
import React, { Fragment } from "react"
import { useMutation } from "react-query"
import CourseReplaceUploadFile from "./CourseReplaceUploadFile"
import { useRouter } from "next/router"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type CourseMaterialFileProps = {
	data?: CourseMaterialFileInterface
}
export default function CourseMaterialFile({ data }: CourseMaterialFileProps) {
	const router = useRouter()

	const [editTitle, setEditTitle] = React.useState<boolean>(false)
	const [title, setTitle] = React.useState<string>(data?.title as string)
	const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e?.target?.value)
	}

	const updateMaterialApi = useMutation(UpdateCourseMaterial, {
		onSuccess: (res: any) => {
			setEditTitle(!editTitle)
			Success("Material", res?.message)
		},
		onError: er => ServerErrors("Material", er)
	})
	const isUpdating = updateMaterialApi.isLoading

	const _handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e?.preventDefault()
		updateMaterialApi.mutateAsync({ id: data?.material_id, data: { title } })
	}

	// ----------------> [Delete]
	const deleteCouseMaterialApi = useMutation(DeleteCourseMaterial, {
		onSuccess: (res: any) => {
			router?.reload()
			Success("Delete", "Course material deleted successfully!")
		},
		onError: err => ServerErrors("Error", err)
	})
	const _handleDelete = (id: any) => deleteCouseMaterialApi.mutateAsync(id)

	return (
		<form className="" onSubmit={_handleSubmit}>
			<div className="flex lg:items-center lg:justify-between bg-white shadow-md p-3 border-0 ">
				<div className="w-full lg:flex lg:items-center lg:justify-between">
					<div className="min-w-0 flex-1">
						<div className="w-fit">
							{!editTitle && <h2 className="text-sm hover:text-blue font-bold leading-7 text-gray-900 sm:truncate sm:tracking-tight cursor-pointer">{title}</h2>}
							{editTitle && (
								<>
									<InitTailwindUI />
									<div className="relative inline" data-te-input-wrapper-init>
										<input
											name="title"
											onChange={_handleChange}
											defaultValue={title}
											type="text"
											className="peer block  h-[50px] w-fit rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
											id="createCourseInput-name"
											aria-describedby="emailHelp"
											placeholder="Display name"
										/>
										<label
											htmlFor="createCourseInput-name"
											className="font-medium pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
										>
											Title
										</label>
									</div>
								</>
							)}
						</div>
						<div className="mt-1 flex gap-4 divide-x">
							<div className="mt-2 flex items-center cursor-pointer text-sm text-gray-500">{data?.size}</div>
							<div className="mt-2 flex items-center cursor-pointer text-sm text-gray-500">
								<DocumentIcon className="mr-1 pl-3 h-8 w-8 flex-shrink-0 text-gray-400" aria-hidden="true" />
								{data?.type?.toUpperCase()}
							</div>
						</div>
					</div>
					<div className="mt-5 flex lg:ml-4 lg:mt-0">
						<span className="sm:block">
							{!editTitle && (
								<button
									onClick={() => setEditTitle(!editTitle)}
									type="button"
									className="inline-flex items-center cursor-pointer rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									<PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
									Edit
								</button>
							)}

							{editTitle && (
								<button
									disabled={isUpdating}
									type="submit"
									className="inline-flex items-center cursor-pointer rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									<CheckCircleIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
									Save changes
								</button>
							)}
						</span>
						<span className="ml-3 sm:block">
							<CourseReplaceUploadFile materialId={data?.material_id as any as string} />
						</span>

						{/* Dropdown */}
						<Menu as="div" className="relative ml-3">
							<Menu.Button className="inline-flex items-center cursor-pointer rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
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
											<a href={data?.file} download className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 w-full flex items-center cursor-pointer")}>
												<ArrowDownTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
												Download
											</a>
										)}
									</Menu.Item>

									<Menu.Item>
										{({ active }) => (
											<a
												onClick={() => _handleDelete(data?.material_id)}
												className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 w-full flex items-center cursor-pointer")}
											>
												<TrashIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
												Delete
											</a>
										)}
									</Menu.Item>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</form>
	)
}
