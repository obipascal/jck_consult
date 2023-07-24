import Spinner from "@JCKConsultant/components/home/Spinner"
import DragAndDropImageFile from "@JCKConsultant/components/misc/DragAndDropImageFile"
import WYSIWYGEditor from "@JCKConsultant/components/misc/WYSIWYGEditor"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { emitFetchCourses } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { toggleEditCoursePanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { CreateCourse, UpdateCourse } from "@JCKConsultant/services/course/course.apis"
import { CourseInterface, CreateOrEditCourseFormData } from "@JCKConsultant/types/course"
import { useRouter } from "next/router"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"

export type CreateOrEditCourseFormInputProps = {
	data?: CourseInterface
	canCreate?: boolean
}

export default function CreateOrEditCourseForm({ data, canCreate = true }: CreateOrEditCourseFormInputProps) {
	const [_status, setStatus] = React.useState<"published" | "drafted" | string>("published")
	const router = useRouter()

	const dispatcher = useDispatch()

	const _closePanel = () => {
		dispatcher(toggleEditCoursePanel({ status: false }))
	}

	const createCourseApi = useMutation(CreateCourse, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Course Creation", res?.message)

				router?.back()
			}
		},
		onError(error, variables, context) {
			ServerErrors("Course Error", error)
		}
	})

	const isCreating = createCourseApi.isLoading

	// ----------------------------------> [Update Course]

	const updateCourseApi = useMutation(UpdateCourse, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Course Update", res?.message)
				dispatcher(emitFetchCourses(true))
				_closePanel()
			}
		},
		onError(error, variables, context) {
			ServerErrors("Courese Error", error)
		}
	})

	const isUpdating = updateCourseApi.isLoading

	// ------------------------> [Handle forms ]

	// ---> Create
	const _handleCreate = (e: React.ChangeEvent<HTMLFormElement>) => {
		e?.preventDefault()

		const _formData = new FormData(e?.target)
		_formData.append("status", _status)
		createCourseApi.mutateAsync(_formData)
	}

	// ---> Update
	const _handleUpdate = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		const _formData = new FormData(e?.target)
		const _data: CreateOrEditCourseFormData = {
			status: _status
		}
		_formData.forEach((value, key) => {
			const formDataKey = key as keyof CreateOrEditCourseFormData // Cast 'key' to 'keyof CreateOrEditCourseFormData'
			_data[formDataKey] = value as any
		})

		delete _data["image"]

		updateCourseApi.mutateAsync({ id: data?.course_id, data: _data })
	}

	return (
		<form onSubmit={canCreate ? _handleCreate : _handleUpdate} className="text-black">
			{/* File uploader & Previewer */}
			<div className="relative mb-12">
				<DragAndDropImageFile canUpload={canCreate === false} courseId={data?.course_id} defaultImag={data?.image} inputName="image" />
			</div>

			{/* Course Name */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<input
					defaultValue={data?.title as string}
					type="text"
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="createCourseInput-name"
					aria-describedby="emailHelp"
					placeholder="Course Title"
					name="title"
					required
				/>
				<label
					htmlFor="createCourseInput-name"
					className="font-extrabold pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
				>
					Course Title
				</label>
			</div>

			{/* Course Amount */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<input
					defaultValue={data?.price}
					type="number"
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="createCourseInput-amount"
					aria-describedby="emailHelp"
					placeholder="Course Amount"
					name="price"
					required
				/>
				<label
					htmlFor="createCourseInput-amount"
					className="font-extrabold pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
				>
					Course Amount <small>in pound (&pound;)</small>
				</label>
			</div>

			{/* Course Description */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<textarea
					defaultValue={data?.desc}
					name="desc"
					required
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[1.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-black  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="createCourseInput-courseName"
					aria-describedby="emailHelp"
					placeholder="Course Description"
				></textarea>
				<label
					htmlFor="createCourseInput-courseName"
					className="font-extrabold pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
				>
					Course Description
				</label>
				<small className="absolute w-full text-neutral-500 text-black" data-te-input-helper-ref>
					This will be displayed on the course cards, Please make it brief!
				</small>
			</div>

			{/* Course Body */}
			<div className="relative mb-12">
				<small className="w-full font-bold my-3 block text-neutral-500 text-black" data-te-input-helper-ref>
					Write the course content here
				</small>
				<WYSIWYGEditor value={data?.body} inputName="body" />
			</div>

			{/* <!--Submit button--> */}
			<div className="text-center">
				{(isUpdating || isCreating) && <Spinner classes="mb-4" />}
				<div className="grid grid-cols-2 gap-4">
					<button
						disabled={isUpdating || isCreating}
						onClick={() => (canCreate ? setStatus("published") : setStatus(data?.status as string))}
						type="submit"
						className="inline-block rounded bg-gradient-to-r from-blue-800 to-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:from-blue-800/50 disabled:to-blue-900/50"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						{canCreate ? "Publish" : "Update"}
					</button>

					<button
						disabled={isUpdating || isCreating}
						onClick={() => setStatus(data?.status === "published" ? "drafted" : "published")}
						type="submit"
						className="inline-block rounded border border-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-700  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:border-blue-900/50 disabled:text-gray-700/50"
						data-te-ripple-init
						data-te-ripple-color="light"
					>
						{canCreate ? "Draft" : data?.status === "published" ? "Draft" : "Publish"}
					</button>
				</div>
			</div>
		</form>
	)
}
