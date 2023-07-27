import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { materialsEndpoints } from "./materials.endpoints"

export const UploadCourseMaterial = async (params: FormData | any) => {
	return await POST(materialsEndpoints.CREATE, params)
}

export const UpdateCourseMaterial = async (params: UpdateRequestParams) => {
	return await PUT(materialsEndpoints.UPDATE(params?.id), params?.data)
}

export const UpdateCourseMaterialFile = async (params: UpdateRequestParams) => {
	return await POST(materialsEndpoints.UPDATE_FILE(params?.id), params?.data)
}

export const FetchCourseMaterial = async (params: any) => {
	return await GET(materialsEndpoints.SINGLE(params))
}

export const FetchCourseMaterials = async (params: PaginationRequestParams) => {
	return await GET(materialsEndpoints.ALL(params?.perPage, params?.page))
}

export const DeleteCourseMaterial = async (params: any) => {
	return await DROP(materialsEndpoints.DELETE(params))
}
