import { FetchConfigs } from "@JCKConsultant/services/settings/settings.apis"
import { getSession } from "next-auth/react"

export const prefetchConfigs = async (context: any) => {
	const _session = await getSession(context)
	try {
	const _data = await FetchConfigs()

	return {
		props: {
			session: _session,
			configs: _data?.data
		}
	}
	} catch (error) {
		return {
			props: {
				session: _session,
				configs: null
			}
		}
	}
}
