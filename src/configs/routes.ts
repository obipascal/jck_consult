export const ROUTES = {
	home: "/",
	about: "/about",
	review: "/review",
	courses: {
		index: "/courses",
		details: (courseId: any) => `/courses/${courseId}`
	},
	testimonies: "/testimonies",

	enroll: {
		index: (course: any) => `/enroll/${course}`,
		checkout: (course: any) => `/enroll/${course}/checkout`,
		confirm: (course: any) => `/enroll/${course}/confirm`
	},

	contact: "/contact",

	dashboard: {
		index: "/dashboard",
		courses: {
			index: "/dashboard/courses",
			create: "/dashboard/courses/create",
			request: "/dashboard/courses/enrollRequest"
		},
		users: {
			index: "/dashboard/users",
			info: (userId: any) => `/dashboard/users/${userId}`
		},
		transactions: {
			index: "/dashboard/transactions"
		},
		settings: {
			index: "/dashboard/settings"
		},
		promotion: {
			index: "/dashboard/promotions",
			create: "/dashboard/promotions/create"
		},
		testimonies: {
			index: "/dashboard/testimonies"
		}
	},

	forgotPassword: "/forgotPassword",
	verifyPasswordReset: "/confirmResetPassword",
	changePassword: (resetToken: string) => `/changePassword?reset_token=${resetToken}`,
	login: "/login",

	// ----------> [User routes]
	user: {
		signin: "/auth",
		signup: "/auth/signup",
		verify: "/auth/verify",
		onboard: "/auth/onboard",
		forgetPassword: {
			index: "/auth/forget-password",
			confirm: "/auth/forget-password/confirm",
			reset: "/auth/forget-password/reset"
		},

		dashboard: "/user",
		transactions: "/user/transactions"
	}
}
