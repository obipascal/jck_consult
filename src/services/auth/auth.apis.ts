import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { authEndpoint } from "./auth.endpoints"

export const FetchCSRFXSSToken = () => {
	return GET(authEndpoint.CSRF_TOKEN)
}

export const AuthorizeDashboardAccess = async (params: any) => {
	return await POST(authEndpoint.LOGIN, params)
}

export const CreateAccount = async (params: any) => {
	return await POST(authEndpoint.REGISTER, params)
}

export const VerifyAccount = async (params: any) => {
	return await POST(authEndpoint.VERIFY_ACCOUNT, params)
}

export const RecoverAccount = async (params: any) => {
	return await POST(authEndpoint.FORGOT_PWD, params)
}

export const VerifyPasswordReset = async (params: any) => {
	return await POST(authEndpoint.VERIFY_PWD_RESET, params)
}

export const ResetAccountPassword = async (params: any) => {
	return await POST(authEndpoint.RESET_PWD, params)
}
