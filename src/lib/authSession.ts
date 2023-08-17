import { ROUTES } from "@JCKConsultant/configs/routes"
import { FetchAnalysis } from "@JCKConsultant/services/analysis/analysis.apis"
import { FetchConfigs } from "@JCKConsultant/services/settings/settings.apis"
import { getSession } from "next-auth/react"

export const authorizedOnly = async (context: any) => {
	const { resolvedUrl } = context
	const _session = await getSession(context)

	if (!_session)
		return {
			redirect: {
				destination: resolvedUrl && resolvedUrl !== ROUTES.login ? `${ROUTES.login}?callback=${resolvedUrl}` : ROUTES.login,
				permanent: false
			}
		}

	try {
		const _data = await FetchConfigs()
		const _analysis = await FetchAnalysis()

		return {
			props: {
				session: _session,
				configs: _data?.data,
				analysis: _analysis?.data
			}
		}
	} catch (error) {
		return {
			props: {
				session: _session,
				configs: null,
				analysis: null
			}
		}
	}
}

export const unauthorizedOnly = async (context: any) => {
	const _session = await getSession(context)

	if (_session)
		return {
			redirect: {
				destination: ROUTES.dashboard.index,
				permanent: false
			}
		}

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
