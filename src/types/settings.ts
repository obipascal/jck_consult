import type { User as NextAuthUser } from "next-auth"
import { PaginationResponse } from "./http"
import { FAQResponseInterface } from "./faqs"
import { CourseInterface } from "./course"
import { AnalysisInterface } from "./analysis"

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
	terms: string
	policy: string
	created_at: string
	updated_at: string
}

export interface SiteConfigs {
	faqs?: PaginationResponse<FAQResponseInterface>
	settings?: ApplicationSettingsProps
}

export type DashboardProps = {
	configs?: SiteConfigs
	analysis?: AnalysisInterface
}

export type AppConfigs = {
	configs?: SiteConfigs
	course?: CourseInterface
}
