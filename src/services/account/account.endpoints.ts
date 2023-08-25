export const accountEndpoints = {
	PROFILE: (accountId: number) => `protected:/v1/account/${accountId}`,
	UPDATE_PROFILE: (accountId?: number) => `protected:/v1/account/${accountId}`,
	UPDATE: `protected:/v1/account`,
	GET: `protected:/v1/account`,
	ALL: (perPage: number = 10, page: number = 1) => `protected:/v1/account/all?perPage=${perPage}&page=${page}`,
	USERS: `protected:/v1/account/users`,
	DELETE: (accountId: number) => `protected:/v1/account/${accountId}`,
	SEND_PHONE_VERIFICATION: `protected:/v1/account/sendPhoneVerification`,
	VERIFY_PHONE: `protected:/v1/account/verifyPhoneNumber`,
	SEND_EMAIL_VERIFICATION: `protected:/v1/account/sendEmailVerification`,
	VERIFY_EMAIL: `protected:/v1/account/verifyEmailAddress`
}
