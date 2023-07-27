export const promoEndpoints = {
	CREATE: "protected:/v1/promotions",
	UPDATE: (id: any) => `protected:/v1/promotions/${id}`,
	SINGLE: (id: any) => `protected:/v1/promotions/${id}`,
	ALL: (perPage: any = 50, page: any = 1) => `protected:/v1/promotions?perPage=${perPage}&page=${page}`,
	DELETE: (id: any) => `protected:/v1/promotions/${id}`,
	APPLY: `public:/v1/promotions/apply`
}
