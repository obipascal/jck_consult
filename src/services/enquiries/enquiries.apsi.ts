import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { EnquiriesEndpoints } from "./enquiries.endpoints"

export const PostEnquiry = async (params: FormData | any) => {
	return await POST(EnquiriesEndpoints.STORE, params)
}

export const FetchEnquiry = async (params: any) => {
	return await GET(EnquiriesEndpoints.SHOW(params))
}

export const FetchEnquiries = async (params: PaginationRequestParams) => {
	return await GET(EnquiriesEndpoints.INDEX(params?.perPage, params?.page))
}

export const DeleteEnquiry = async (params: any) => {
	return await DROP(EnquiriesEndpoints.DELETE(params))
}
