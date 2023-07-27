import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { transEndpoints } from "./trans.endpoints"

export const CheckoutTrans = async (params: FormData | any) => {
	return await POST(transEndpoints.CREATE, params)
}
