import React from "react"
import DashboardNavbar from "./DashboardNavbar"
import dynamic from "next/dynamic"
import EditCoursePanel from "../panels/EditCoursePanel"
import TransactionDetailsPanel from "../panels/TransactionDetailsPanel"
import { useUser } from "@JCKConsultant/hooks/useUser"
import { useDispatch } from "react-redux"
import { useMutation } from "react-query"
import { FetchConfigs } from "@JCKConsultant/services/settings/settings.apis"
import { setConfigs } from "@JCKConsultant/redux/reducers/appSlice"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type DashboardLayoutProps = {
	children?: React.ReactNode
	pageName?: string
}

export default function DashboardLayout({ children, pageName = "Dashboard" }: DashboardLayoutProps) {
	const User = useUser()
	const dispatcher = useDispatch()

	const fetchConfigsApi = useMutation(FetchConfigs, {
		onSuccess(res: any) {
			if (res?.status) {
				dispatcher(setConfigs(res?.data))
			}
		},

		onError(error, variables, context) {
			ServerErrors("Configs Error", error)
		}
	})

	React.useEffect(() => {
		if (User?.api_token) {
			sessionStorage.setItem("api_token", User?.api_token)
		}

		fetchConfigsApi.mutateAsync()
	}, [User?.api_token])

	return (
		<>
			<section className="min-h-screen">
				<InitTailwindUI />
				<DashboardNavbar pageName={pageName} />
				{children}
			</section>

			{/* Panels */}
			<EditCoursePanel />
			<TransactionDetailsPanel />
		</>
	)
}
