import MaleAvatar from "@JCKConsultant/assets/img/avatar/male-avatar.webp"
import Image from "next/image"
import React, { useState, useRef } from "react"

interface Props {
	initialImage?: string
	fileInputRef: React.RefObject<HTMLInputElement>
}

const AvatarUploader: React.FC<Props> = ({ initialImage, fileInputRef }) => {
	const [selectedImage, setSelectedImage] = useState<string | undefined>(initialImage)
	const [isHovered, setIsHovered] = useState(false)

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				const imagePreview = reader.result as string
				setSelectedImage(imagePreview)
			}
			reader.readAsDataURL(file)
		}
	}

	const handleClick = () => {
		if (fileInputRef?.current) {
			fileInputRef?.current?.click()
		}
	}

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<div
			style={{
				position: "relative",
				width: "150px",
				height: "150px",
				borderRadius: "75px",
				overflow: "hidden",
				cursor: "pointer"
			}}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Image src={(selectedImage as string) || MaleAvatar} width={100} height={100} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
			{!selectedImage && (
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "rgba(0, 0, 0, 0.5)",
						color: "#fff",
						fontSize: "18px",
						fontWeight: "bold",
						borderRadius: "75px"
					}}
				>
					Select Image
				</div>
			)}
			{selectedImage && isHovered && (
				<div
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "rgba(0, 0, 0, 0.5)",
						color: "#fff",
						fontSize: "18px",
						fontWeight: "bold",
						borderRadius: "75px"
					}}
				>
					Change Image
				</div>
			)}
			<input type="file" accept="image/*" style={{ display: "none" }} ref={fileInputRef} onChange={handleImageChange} />
		</div>
	)
}

export default AvatarUploader
