import React, { useState } from "react"

type DragAndDropImageFileProps = {
	inputName?: string
	previewImage?: string
}
const DragAndDropImageFile: React.FC<DragAndDropImageFileProps> = props => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [previewImage, setPreviewImage] = useState<string | null>(null)
	const inutRef = React.createRef<HTMLInputElement>()

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
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewImage(reader.result as string)
		}
	}

	const containerStyle: React.CSSProperties = {
		backgroundImage: `url(${previewImage ? props?.previewImage : ""})`,
		backgroundSize: "contain",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		border: "2px dashed gray",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer"
	}

	const handleContainerClick = () => {
		if (inutRef?.current) {
			inutRef?.current?.click()
		}
	}

	return (
		<div
			onClick={handleContainerClick}
			className="cursor-pointer xs:h-[250px] md:h-[300px] bg-light-bg rounded border-dotted border-3 border-sky-500 flex items-center justify-center px-3 text-center text-black drag-and-drop-container"
			onDrop={handleDrop}
			onDragOver={handleDragOver}
			style={containerStyle}
		>
			<input ref={inutRef} name={props?.inputName} type="file" accept="image/*" onChange={handleFileInputChange} style={{ display: "none" }} />
			{!previewImage && <p>Drag and drop an image or click to select</p>}
		</div>
	)
}

export default DragAndDropImageFile
