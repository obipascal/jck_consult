import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import React, { useState, useRef } from "react"

type FilePickerProps = {
	name?: string
}
const FilePicker: React.FC<FilePickerProps> = ({ name }: FilePickerProps) => {
	const [fileInfo, setFileInfo] = useState<{
		name: string | null
		size: string | null
		extension: string | null
		content: string | null
	}>({
		name: null,
		size: null,
		extension: null,
		content: null
	})

	const fileInputRef = useRef<HTMLInputElement>(null)

	const formatFileSize = (size: number): string => {
		const bytesInMB = 1024 * 1024
		if (size >= bytesInMB) {
			return `${(size / bytesInMB).toFixed(2)} MB`
		} else {
			return `${size} bytes`
		}
	}

	const handleFileChange = () => {
		const file = fileInputRef.current?.files?.[0]
		if (file) {
			const { name, size } = file
			const extension = name.split(".").pop() || null

			// Read file content
			const reader = new FileReader()
			reader.onload = e => {
				const content = e.target?.result as string
				setFileInfo({
					name,
					size: formatFileSize(size),
					extension,
					content
				})
			}
			reader.readAsText(file)
		}
	}

	return (
		<div>
			<label
				htmlFor="fileInput"
				role="button"
				className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
			>
				<ArrowUpTrayIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
				Select Course Material
			</label>

			<input name={name} id="fileInput" type="file" onChange={handleFileChange} ref={fileInputRef} style={{ display: "none" }} />
			<div className="text-black flex flex-col gap-1">
				{fileInfo.name && (
					<p>
						<span className="font-bold">File Name:</span> {fileInfo.name}
					</p>
				)}
				{fileInfo.size && (
					<p>
						<span className="font-bold">File Size:</span> {fileInfo.size}
					</p>
				)}
				{fileInfo.extension && (
					<p>
						<span className="font-bold">File Type:</span> {fileInfo.extension}
					</p>
				)}
			</div>
		</div>
	)
}

export default FilePicker
