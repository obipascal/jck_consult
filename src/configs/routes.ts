export const ROUTES = {
	home: "/",
	register: "/register",
	login: "/login",
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
			create: "/dashboard/courses/create"
		},
		users: {
			index: "/dashboard/users"
		},
		transactions: {
			index: "/dashboard/transactions"
		}
	}
}
