export const courseEndpoints = {
	CREATE: "protected:/v1/courses",
	UPDATE: (id: string) => `protected:/v1/courses/${id}`,
	LOGO: (id: string) => `protected:/v1/courses/${id}`,
	SHOW: (id: string) => `public:/v1/courses/${id}`,
	INDEX: (perPage: any, page: any = 1) => `protected:/v1/courses?perPage=${perPage}&page=${page}`,
	DELETE: (id: string) => `protected:/v1/courses/${id}`,
	SEARCH: (sq: string, perPage: any = 50) => `public:/v1/courses/search?sq=${sq}&perPage=${perPage}`,
	ACTIVE: (perPage: any = 50, page: any = 1) => `public:/v1/courses/active?perPage=${perPage}&page=${page}`,
	USER_ENROLLMENTS: (perPage: any = 50, page: any = 1) => `protected:/v1/courses/user/enrolled?perPage=${perPage}&page=${page}`
}
