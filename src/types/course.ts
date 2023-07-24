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
}
