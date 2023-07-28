export interface CreateOrEditCourseFormData {
	image?: string | File
	title?: string
	price?: number
	desc?: string
	status?: "published" | "drafted" | string
	content?: string
}

export type CourseFormKey = keyof CreateOrEditCourseFormData

export interface CourseInterface {
	id: number
	account_id: number
	course_id: number
	title: string
	desc: string
	price: number
	image: string
	body: string
	status: "published" | "drafted"
	created_at: string
	updated_at: string
	last_modified: string
	materials: Array<CourseMaterialFileInterface>
}

export interface PromotionInterface {
	id: number
	promo_id: number
	promo_code: string
	disc_percentage: number
	valid_from: string
	valid_to: string
	created_at: string
	updated_at: string
}

export interface DiscountCodeInterface {
	id: number
	promo_id: number
	account_id: number
	discounted_amount: number
	status: "applied" | "used" | "expired"
	created_at: string
	updated_at: string
}

export interface CourseMaterialFileInterface {
	id: number
	course_id: number
	material_id: number
	title: string
	type: string
	size: string
	file: string
	created_at: string
	updated_at: string
}
