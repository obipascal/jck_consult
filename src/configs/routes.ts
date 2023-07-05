export const ROUTES = {
	home: "/",
	register: "/register",
	login: "/login",
	about: "/about",
	courses: {
		index: "/courses",
		details: (courseId: any) => `/courses/${courseId}`
	},
	testimonies: "/testimonies"
}
