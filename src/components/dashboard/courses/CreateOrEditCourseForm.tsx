import DragAndDropImageFile from "@JCKConsultant/components/misc/DragAndDropImageFile"
import WYSIWYGEditor from "@JCKConsultant/components/misc/WYSIWYGEditor"
import { CreateOrEditCourseFormData } from "@JCKConsultant/types/course"
import React from "react"

export type CreateOrEditCourseFormInputProps = {
	data?: CreateOrEditCourseFormData
	submitBtnText?: string
}

export default function CreateOrEditCourseForm({ data, submitBtnText = "Create Course" }: CreateOrEditCourseFormInputProps) {
	return (
		<form>
			{/* File uploader & Previewer */}
			<div className="relative mb-12">
				<DragAndDropImageFile inputName="course_image" />
			</div>

			{/* Course Name */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<input
					type="text"
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="createCourseInput-name"
					aria-describedby="emailHelp"
					placeholder="Course Title"
				/>
				<label
					htmlFor="createCourseInput-name"
					className="font-extrabold pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
				>
					Course Title
				</label>
				{/* <small id="emailHelp" className="absolute w-full text-neutral-500 dark:text-neutral-200" data-te-input-helper-ref>
								We&apos;ll never share your email with anyone else.
							</small> */}
			</div>

			{/* Course Amount */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<input
					type="number"
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="createCourseInput-amount"
					aria-describedby="emailHelp"
					placeholder="Course Amount"
				/>
				<label
					htmlFor="createCourseInput-amount"
					className="font-extrabold pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  "
				>
					Course Amount <small>in pound (&pound;)</small>
				</label>
				{/* <small id="emailHelp" className="absolute w-full text-neutral-500 dark:text-neutral-200" data-te-input-helper-ref>
								We&apos;ll never share your email with anyone else.
							</small> */}
			</div>

			{/* Course Description */}
			<div className="relative mb-12" data-te-input-wrapper-init>
				<textarea
					className="peer block min-h-[50px] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 text-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
				<small className="absolute w-full text-neutral-500 dark:text-neutral-200" data-te-input-helper-ref>
					This will be displayed on the course cards, Please make it brief.
				</small>
			</div>

			{/* Course Body */}
			<div className="relative mb-12">
				<small className="w-full font-bold my-3 block text-neutral-500 dark:text-neutral-200" data-te-input-helper-ref>
					Write the course content here
				</small>
				<WYSIWYGEditor />
			</div>

			{/* <!--Submit button--> */}
			<button
				type="submit"
				className="inline-block rounded bg-gradient-to-r from-blue-800 to-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
				data-te-ripple-init
				data-te-ripple-color="light"
			>
				{submitBtnText}
			</button>
		</form>
	)
}
