export interface BillingFormParams {
	first_name?: string
	last_name?: string
	email?: string
	address?: string
	phone?: string
}

export interface UserInterface {
	id: string
	account_id: string
	first_name: string
	last_name: string
	email: string
	phone_number: string
	gender: "male" | "female" | "others"
	qualification: string
	email_verified_at: string
	created_at: string
	updated_at: string
	api_token: string
	role: "admin" | "user"
	billing_info: string
}
