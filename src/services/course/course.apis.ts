import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { courseEndpoints } from "./course.endpoints"

export const CreateSettings = async (params: FormData | any) => {
	return await POST(courseEndpoints.CREATE, params)
}
