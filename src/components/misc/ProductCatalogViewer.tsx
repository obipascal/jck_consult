import Image, { StaticImageData } from "next/image"
import React, { useState } from "react"

export type ProductCatalogViewerTypes = {
	images: Array<StaticImageData>
}
const ProductCatalogViewer = ({ images }: ProductCatalogViewerTypes) => {
	const [currentImage, setCurrentImage] = useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1))
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [images.length])

	const handleNext = () => {
		setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1))
	}

	const handlePrevious = () => {
		setCurrentImage(prevImage => (prevImage === 0 ? images.length - 1 : prevImage - 1))
	}

	const handleImageClick = (index: number) => {
		setCurrentImage(index)
	}

	return (
		<div>
			<div id="viewer">
				<Image
					src={images[currentImage]}
					alt="Product"
					className="w-[100%] h-[400px] object-fill bg-white p-5 rounded-lg rounded-tl-[50px] rounded-br-[50px] animate__animated animate__fadeIn shadow-2xl"
				/>
			</div>
			{/* <div id="thumbnails">
				{images.map((image, index) => (
					<Image
						key={index}
						src={image}
						alt={`Product Thumbnail ${index}`}
						style={{ width: "100px", height: "100px", marginRight: "5px", cursor: "pointer" }}
						onClick={() => handleImageClick(index)}
					/>
				))}
			</div>
			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button> */}
		</div>
	)
}

export default ProductCatalogViewer
