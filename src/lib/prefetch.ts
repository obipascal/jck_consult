import { ROUTES } from "@JCKConsultant/configs/routes"
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

export const prefetchConfigsUnauthorizedOnly = async (context: any) => {
	const _session = await getSession(context)

	if (_session)
		return {
			redirect: {
				destination: ROUTES.user.dashboard,
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

export const prefetchConfigsAuthorizedOnly = async (context: any) => {
	const { resolvedUrl } = context
	const _session = await getSession(context)

	if (!_session)
		return {
			redirect: {
				destination: resolvedUrl && resolvedUrl !== ROUTES.user.signin ? `${ROUTES.user.signin}?callback=${resolvedUrl}` : ROUTES.user.signin,
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
