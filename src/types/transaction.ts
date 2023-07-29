import { CourseInterface } from "./course"
import { UserInterface } from "./user"

export interface TransactionInterface {
	id: number
	trans_id: number
	account_id: number
	course_id: number
	amount: number
	discount: number
	reference: string
	status: "pending" | "success" | "failed" | "error"
	pi_id: string
	cs_code: string
	created_at: string
	updated_at: string
	course: CourseInterface
	user: UserInterface
}
