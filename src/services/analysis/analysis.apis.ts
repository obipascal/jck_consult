import { GET, POST, PUT, DROP } from "@JCKConsultant/configs/api"
import { PaginationRequestParams, UpdateRequestParams } from "@JCKConsultant/types"
import { analysisEndpoints } from "./analysis.endpoints"

export const FetchAnalysis = async () => {
	return await GET(analysisEndpoints.ALL)
}
