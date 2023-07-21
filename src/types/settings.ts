import type { User as NextAuthUser } from "next-auth"

export type UserSettings = Pick<NextAuthUser, "name" | "email" | "image">

export interface ApplicationSettingsProps {
	id: string
	site_id: string
	name: string
	desc: string
	email: string
	phone_number: string
	line_address: string
	about: string
	facebook_handle: string
	instagram_handle: string
	twitter_handle: string
	linkedin_handle: string
	whatsapp_handle: string
	logo: string
	created_at: string
	updated_at: string
}
