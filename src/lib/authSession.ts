import { ROUTES } from "@JCKConsultant/configs/routes"
import { FetchConfigs } from "@JCKConsultant/services/settings/settings.apis"
import { getSession } from "next-auth/react"

export const authorizedOnly = async (context: any) => {
	const { resolvedUrl } = context
	const _session = await getSession(context)
	const _data = await FetchConfigs()

	if (!_session)
		return {
			redirect: {
				destination: resolvedUrl && resolvedUrl !== ROUTES.login ? `${ROUTES.login}?callback=${resolvedUrl}` : ROUTES.login,
				permanent: false
			}
		}

	return {
		props: {
			session: _session,
			configs: _data?.data
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

	return {
		props: {
			session: _session
		}
	}
}
