import Spinner from "@JCKConsultant/components/home/Spinner"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import { UpdateCourseMaterialFile } from "@JCKConsultant/services/course/materials/materials.apis"
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import React from "react"
import { useMutation } from "react-query"

type CourseReplaceUploadFile = {
	materialId?: string
}
export default function CourseReplaceUploadFile({ materialId }: CourseReplaceUploadFile) {
	const fileInputRef = React.createRef<HTMLInputElement>()

	const updateMaterialFile = useMutation(UpdateCourseMaterialFile, {
		onSuccess(res: any) {
			if (res?.status) Success("Success", res?.message)
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isLoading = updateMaterialFile.isLoading

	const handleFileChange = () => {
		console.log("selected")

		const file = fileInputRef?.current?.files?.[0]
		if (file) {
			const _data = new FormData()
			_data.append("upload_file", file)
			updateMaterialFile.mutateAsync({ id: materialId, data: _data })
		}
	}

	const _toggleFile = () => (fileInputRef?.current ? fileInputRef?.current?.click() : "")
	return (
		<>
			{!isLoading && (
				<label
					role="button"
					className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
					onClick={_toggleFile}
				>
					<ArrowUpTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> Replace File
				</label>
			)}
			{isLoading && <Spinner color="text-black text-sm" />}

			<input type="file" ref={fileInputRef} onChange={handleFileChange} hidden />
		</>
	)
}
