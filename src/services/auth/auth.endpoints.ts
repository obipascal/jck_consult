export const authEndpoint = {
	REGISTER: "public:/v1/account/create",
	RESEND_OTP: (userId?: number) => `public:/v1/auth/verification/resend-otp/${userId}`,
	VERIFY_ACCOUNT: `protected:/v1/account/verify`,
	FORGOT_PWD: `public:/v1/account/forget_password`,
	VERIFY_PWD_RESET: `protected:/v1/account/fgpwd_confirm`,
	RESET_PWD: `protected:/v1/account/fgpwd_reset`,
	LOGIN: "public:/v1/account/authorize",
	CSRF_TOKEN: "public:/sanctum/csrf-cookie"
}
