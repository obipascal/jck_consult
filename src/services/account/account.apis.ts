import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { accountEndpoints } from "./account.endpoints"

export type UpdateAccountProps = {
	accountId?: number
	data: any
}

export const UpdateAccount = async (params: UpdateAccountProps) => {
	return await PUT(accountEndpoints.UPDATE, params?.data)
}

export const UpdateProfile = async (params: UpdateAccountProps) => {
	return await PUT(accountEndpoints.UPDATE_PROFILE(params?.accountId), params?.data)
}

export const FetchAccount = async () => {
	return await GET(accountEndpoints.GET)
}
export const FetchProfile = async (accountId: number) => {
	return await GET(accountEndpoints.PROFILE(accountId))
}

export const FetchAccounts = async (perPage: number = 10) => {
	return await GET(accountEndpoints.ALL(perPage))
}

export const DeleteAccount = async (accountId: number) => {
	return await DROP(accountEndpoints.DELETE(accountId))
}
