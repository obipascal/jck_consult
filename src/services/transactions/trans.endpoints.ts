export const transEndpoints = {
	CREATE: "protected:/v1/transactions/checkout",
	OFFLINE: "protected:/v1/transactions/offline",
	INSTALLMENT: (id: any) => `protected:/v1/transactions/installment_collection/${id}`,
	REQUEST: (id: any) => `protected:/v1/transactions/request_payment/${id}`,
	SINGLE: (id: any) => `protected:/v1/transactions/${id}`,
	ALL: (perPage: any = 50, page: any = 1) => `protected:/v1/transactions?perPage=${perPage}&page=${page}`,
	USER: (perPage: any = 50, page: any = 1) => `protected:/v1/transactions/user?perPage=${perPage}&page=${page}`
}
