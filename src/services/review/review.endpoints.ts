export const reviewEndpoints = {
	CREATE: "public:/v1/reviews",
	UPDATE: (id: any) => `protected:/v1/reviews/${id}`,
	SINGLE: (id: any) => `protected:/v1/reviews/${id}`,
	DELETE: (id: any) => `protected:/v1/reviews/${id}`,
	ALL: (perPage: any = 50, page: any = 1) => `protected:/v1/reviews?perPage=${perPage}&page=${page}`,
	PUBLISHED: (perPage: any = 50, page: any = 1) => `public:/v1/reviews/reviews?perPage=${perPage}&page=${page}`
}
