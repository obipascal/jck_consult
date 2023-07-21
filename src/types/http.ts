export enum HttpMethod {
	CONNECT = "CONNECT",
	DELETE = "DELETE",
	GET = "GET",
	HEAD = "HEAD",
	OPTIONS = "OPTIONS",
	PATCH = "PATCH",
	POST = "POST",
	PUT = "PUT",
	TRACE = "TRACE"
}

export interface UpdateRequestParams {
	id: string | any
	data: FormData | any
}

export interface PaginationRequestParams {
	perPage: string | any
	page: string | any
	data?: FormData | any
}

export interface PaginationResponse<T> {
	data: Array<T>
	current_page: number
	first_page_url: string
	from: number
	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string
	to: number
}

export interface APIResponse<T> {
	status: boolean
	message: string
	resource: string
	data: PaginationResponse<T> | T
}
