import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { promoEndpoints } from "./promo.endpoints"

export const CreatePromoCode = async (params: FormData | any) => {
	return await POST(promoEndpoints.CREATE, params)
}

export const UpdatePromoCode = async (params: UpdateRequestParams) => {
	return await PUT(promoEndpoints.UPDATE(params?.id), params?.data)
}

export const FetchPromoCode = async (params: any) => {
	return await GET(promoEndpoints.SINGLE(params))
}

export const FetchPromoCodes = async (params: PaginationRequestParams) => {
	return await GET(promoEndpoints.ALL(params?.perPage, params?.page))
}

export const DeletePromoCode = async (params: any) => {
	return await DROP(promoEndpoints.DELETE(params))
}

export const ApplyPromoCode = async (params: FormData | any) => {
	return await POST(promoEndpoints.APPLY, params)
}
