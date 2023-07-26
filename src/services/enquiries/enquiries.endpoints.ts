export const EnquiriesEndpoints = {
	STORE: "public:/v1/enquiries",
	SHOW: (id: any) => `protected:/v1/enquiries/${id}`,
	INDEX: (perPage: any = 50, page: any = 1) => `protected:/v1/enquiries?perPage=${perPage}&page=${page}`,
	DELETE: (id: any) => `protected:/v1/enquiries/${id}`
}
