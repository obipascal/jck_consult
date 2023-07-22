export const settingsEndpoints = {
	CREATE: "protected:/v1/settings",
	SHOW: (id: any) => `/v1/settings/${id}`,
	LOGO: `protected:/v1/settings/logo`,
	INDEX: (perPage: number = 10, page: any = 1) => `public:/v1/settings?perPage=${perPage}&page=${page}`,

	FAQs: {
		CREATE: "protected:/v1/settings/faqs",
		UPDATE: (id: any) => `protected:/v1/settings/faqs/${id}`,
		SHOW: (id: any) => `protected:/v1/settings/faqs/${id}`,
		INDEX: (perPage: any, page: any = 1) => `protected:/v1/settings/faqs?perPage=${perPage}&page=${page}`,
		DESTROY: (id: any) => `protected:/v1/settings/faqs/${id}`
	}
}
