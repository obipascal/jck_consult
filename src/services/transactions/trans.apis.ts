import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { transEndpoints } from "./trans.endpoints"

export const CheckoutTrans = async (params: FormData | any) => {
	return await POST(transEndpoints.CREATE, params)
}

export const OfflineTrans = async (params: FormData | any) => {
	return await POST(transEndpoints.OFFLINE, params)
}

export const InitiateInstallmentPayment = async (params: UpdateRequestParams) => {
	return await POST(transEndpoints.INSTALLMENT(params?.id))
}

export const RequestInstallmentPayment = async (params: any) => {
	return await GET(transEndpoints.REQUEST(params))
}

export const FetchTrans = async (params: PaginationRequestParams) => {
	return await GET(transEndpoints.ALL(params?.perPage, params?.page))
}

export const FetchUserTrans = async (params: PaginationRequestParams) => {
	return await GET(transEndpoints.USER(params?.perPage, params?.page))
}

export const FetchTran = async (params: any) => {
	return await GET(transEndpoints.SINGLE(params))
}
