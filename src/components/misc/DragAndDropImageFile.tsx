import { Info, ServerErrors } from "@JCKConsultant/lib/_toaster"
import { emitFetchCourses } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { UpdateCourseImage } from "@JCKConsultant/services/course/course.apis"
import React, { useState } from "react"
import { useMutation } from "react-query"
import { useDispatch } from "react-redux"
import Spinner from "../home/Spinner"

type DragAndDropImageFileProps = {
	inputName?: string
	defaultImag?: string
	canUpload?: boolean
	courseId?: number
}

const DragAndDropImageFile: React.FC<DragAndDropImageFileProps> = props => {
	const [previewImage, setPreviewImage] = useState<string | null>(null)
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const inputRef = React.createRef<HTMLInputElement>()
	const dispatcher = useDispatch()

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] as File

		previewFile(file)
	}

	const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
		const file = event.dataTransfer.files?.[0]

		previewFile(file)
	}

	const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault()
	}

	const previewFile = (file: File | null) => {
		if (!file) return
		setSelectedFile(file)

		const reader = new FileReader()
		reader.readAsDataURL(file)

		reader.onloadend = () => {
			setPreviewImage(reader.result as string)
		}
	}

	const containerStyle: React.CSSProperties = {
		backgroundImage: `url(${previewImage ? previewImage : props?.defaultImag ? props?.defaultImag : ""})`,
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		border: previewImage ? `2px gray` : `2px dashed gray`,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
		padding: "20px"
	}

	const handleContainerClick = () => {
		if (inputRef?.current) {
			inputRef?.current?.click()
		}
	}

	const courseImpageUploaderApi = useMutation(UpdateCourseImage, {
		onSuccess(res: any) {
			Info("Success", res?.message)

			dispatcher(emitFetchCourses(true))
		},
		onError(error, variables, context) {
			ServerErrors("Upload Error", error)
		}
	})

	const isUploading = courseImpageUploaderApi.isLoading

	const _handleUpload = () => {
		if (selectedFile) {
			const formData = new FormData()
			formData.append("image", selectedFile as Blob)

			courseImpageUploaderApi.mutateAsync({ id: props?.courseId, data: formData })
		}
	}

	return (
		<>
			<div
				onClick={handleContainerClick}
				className="cursor-pointer xs:h-[250px] md:h-[300px] bg-light-bg rounded border-dotted border-3 border-sky-500 flex items-center justify-center text-center text-black drag-and-drop-container"
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				style={containerStyle}
			>
				<input ref={inputRef} name={props?.inputName} type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: "none" }} />
				{!previewImage && !props?.defaultImag && <p>Drag and drop an image or click to select</p>}
			</div>
			<div className="my-4">
				{props?.canUpload && (
					<button
						onClick={_handleUpload}
						disabled={isUploading}
						type="button"
						className="block m-auto rounded border border-blue-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-700  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] disabled:border-blue-900/50 disabled:text-gray-700/50"
					>
						{!isUploading && "Upload"}
						{isUploading && <Spinner />}
					</button>
				)}
			</div>
		</>
	)
}

export default DragAndDropImageFile
