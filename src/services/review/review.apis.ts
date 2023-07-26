import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { reviewEndpoints } from "./review.endpoints"

export const CreateReview = async (params: FormData | any) => {
	return await POST(reviewEndpoints.CREATE, params)
}

export const UpdateReview = async (params: UpdateRequestParams) => {
	return await PUT(reviewEndpoints.UPDATE(params?.id), params?.data)
}

export const FetchReview = async (params: any) => {
	return await GET(reviewEndpoints.SINGLE(params))
}

export const DeleteReview = async (params: any) => {
	return await DROP(reviewEndpoints.SINGLE(params))
}

export const FetchReviews = async (params: PaginationRequestParams) => {
	return await GET(reviewEndpoints.ALL(params?.perPage, params?.page))
}

export const FetchPublishedReviews = async (params: PaginationRequestParams) => {
	return await GET(reviewEndpoints.PUBLISHED(params?.perPage, params?.page))
}
