import React from "react"
import CourseMaterialFile from "./CourseMaterialFile"
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { toggleUploadMaterialPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { CourseMaterialFileInterface } from "@JCKConsultant/types/course"

type CourseMaterialsProps = {
	courseId?: string
	courseMaterials?: Array<CourseMaterialFileInterface>
	isAdmin?: boolean
}
export default function CourseMaterials({ isAdmin = true, courseId, courseMaterials }: CourseMaterialsProps) {
	const dispatcher = useDispatch()

	const _togglePanel = () => dispatcher(toggleUploadMaterialPanel({ status: true, params: courseId }))

	return (
		<div className="p-3 md:px-10 xs:px-5">
			{isAdmin && (
				<button
					onClick={_togglePanel}
					type="button"
					className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
				>
					<ArrowUpTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
					Upload Material
				</button>
			)}

			{!isAdmin && <h1 className="mb-2 font-bold text-2xl p-2 text-gray-800">Course Materials</h1>}

			<div className="flex divide-y flex-col rounded">
				{courseMaterials && (
					<>
						{courseMaterials?.length > 0 && (
							<>
								{courseMaterials?.map(file => (
									<CourseMaterialFile key={file?.material_id} data={file} isAdmin={isAdmin} />
								))}
							</>
						)}
					</>
				)}
			</div>
		</div>
	)
}
