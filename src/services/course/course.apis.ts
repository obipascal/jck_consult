import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { courseEndpoints } from "./course.endpoints"

export const CreateCourse = async (params: FormData | any) => {
	return await POST(courseEndpoints.CREATE, params)
}

export const UpdateCourse = async (params: UpdateRequestParams) => {
	return await PUT(courseEndpoints.UPDATE(params?.id), params?.data)
}

export const UpdateCourseImage = async (params: UpdateRequestParams) => {
	return await POST(courseEndpoints.UPDATE(params?.id), params?.data)
}

export const FetchCourse = async (params: string) => {
	return await GET(courseEndpoints.SHOW(params))
}

export const FetchCourses = async (params: PaginationRequestParams) => {
	return await GET(courseEndpoints.INDEX(params?.perPage, params?.page))
}

export const DeleteCourse = async (params: string) => {
	return await DROP(courseEndpoints.DELETE(params))
}

// ---------------------> {Public accessable apis}
export const SearchCourses = async (params: PaginationRequestParams) => {
	return await GET(courseEndpoints.SEARCH(params?.data, params?.perPage))
}

export const FetchPublishedCourses = async (params: PaginationRequestParams) => {
	return await GET(courseEndpoints.ACTIVE(params?.perPage, params?.page))
}
