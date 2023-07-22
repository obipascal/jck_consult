export interface FAQResponseInterface {
	id: string
	faq_id: string
	title: string
	content: string
	created_at: string
	updated_at: string
	last_modified: string
}

export type FQAFormTypes = {
	title?: string
	content?: string
}
