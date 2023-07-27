export const materialsEndpoints = {
	CREATE: "protected:/v1/materials",
	UPDATE: (id: any) => `protected:/v1/materials/${id}`,
	UPDATE_FILE: (id: any) => `protected:/v1/materials/${id}`,
	SINGLE: (id: any) => `protected:/v1/materials/${id}`,
	ALL: (perPage: any = 50, page: any = 1) => `protected:/v1/materials?perPage=${perPage}&page=${page}`,
	DELETE: (id: any) => `protected:/v1/materials/${id}`
}
