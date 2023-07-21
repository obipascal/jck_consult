import React from "react"
import Logo from "@JCKConsultant/assets/img/logo.png"
import Image from "next/image"
import { useMutation } from "react-query"
import { UpdateSiteLogo } from "@JCKConsultant/services/settings/settings.apis"
import { ServerErrors, Success } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"

export default function AppSettingLogoUploader() {
	const [previewImage, setPreviewImage] = React.useState<string | null>(null)
	const fileInputRef = React.createRef<HTMLInputElement>()

	const toggleFileUpload = () => {
		if (fileInputRef?.current) {
			fileInputRef?.current?.click()
		}
	}

	const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0] as File
		previewFile(file)
	}

	const previewFile = (file: File | null) => {
		if (!file) return
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewImage(reader.result as string)
		}
	}

	const createSettingApi = useMutation(UpdateSiteLogo, {
		onSuccess(res: any) {
			if (res?.status) {
				Success("Settings", res?.message)
			}
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})

	const isUploading = createSettingApi.isLoading

	const _handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.target)
		createSettingApi.mutateAsync(formData)
	}

	return (
		<dl className="divide-y divide-gray-100">
			{/* Logo Upload */}
			<form onSubmit={_handleSubmit}>
				<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt className="text-sm font-medium leading-6 text-gray-900">
						<Image width={100} height={100} src={previewImage ? previewImage : Logo} alt="" className="rounded-full w-20 h-20 md:inline md:m-0 xs:block xs:m-auto" />
					</dt>
					<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex items-center md:justify-start xs:justify-center py-2">
						<div className="">
							<input onChange={handleFileInputChange} type="file" name="site_logo" accept="image/*" hidden ref={fileInputRef} />
							<button onClick={toggleFileUpload} type="button" className="xs:p-1 md:p-3 rounded-lg text-blue border-blue border">
								Select files
							</button>
							{previewImage && (
								<button disabled={isUploading} type="submit" className="xs:p-1 md:p-3 mx-1 rounded-lg text-white bg-blue disabled:bg-blue/50">
									{!isUploading && "Save"}
									{isUploading && <Spinner />}
								</button>
							)}
						</div>
					</dd>
				</div>
			</form>
		</dl>
	)
}
