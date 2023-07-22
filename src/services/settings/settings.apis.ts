import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { settingsEndpoints } from "./settings.endpoints"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"

export const CreateSettings = async (params: FormData | any) => {
	return await POST(settingsEndpoints.CREATE, params)
}

export const UpdateSiteLogo = async (params: FormData | any) => {
	return await POST(settingsEndpoints.LOGO, params)
}

export const FetchSetting = async (params: string | any) => {
	return await GET(settingsEndpoints.SHOW(params))
}

export const FetchConfigs = async () => {
	return await GET(settingsEndpoints.INDEX())
}

export const CreateFAQ = async (params: FormData | any) => {
	return await POST(settingsEndpoints.FAQs.CREATE, params)
}

export const UpdateFAQ = async (params: UpdateRequestParams) => {
	return await PUT(settingsEndpoints.FAQs.UPDATE(params?.id), params?.data)
}

export const FetchFAQ = async (params: string | any) => {
	return await GET(settingsEndpoints.FAQs.SHOW(params))
}

export const FetchFAQs = async (params: PaginationRequestParams) => {
	return await GET(settingsEndpoints.FAQs.INDEX(params?.perPage, params?.page))
}

export const DeleteFAQ = async (params: string | any) => {
	return await DROP(settingsEndpoints.FAQs.DESTROY(params))
}
