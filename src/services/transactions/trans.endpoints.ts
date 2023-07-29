export const transEndpoints = {
	CREATE: "protected:/v1/transactions/checkout",
	SINGLE: (id: any) => `protected:/v1/transactions/${id}`,
	ALL: (perPage: any = 50, page: any = 1) => `protected:/v1/transactions?perPage=${perPage}&page=${page}`,
	USER: (perPage: any = 50, page: any = 1) => `protected:/v1/transactions/user?perPage=${perPage}&page=${page}`
}
