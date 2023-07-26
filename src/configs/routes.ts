export const ROUTES = {
	home: "/",
	about: "/about",
	courses: {
		index: "/courses",
		details: (courseId: any) => `/courses/${courseId}`
	},
	testimonies: "/testimonies",

	enroll: {
		index: (course: any) => `/enroll?_course=${course}`,
		confirm: (orderId: any) => `/enroll/${orderId}/confirm`
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
		enquiries: {
			index: "/dashboard/enquiries"
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
		forgetPassword: "/auth/fgpwd",
		verify: "/auth/verify"
	}
}
