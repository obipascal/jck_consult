import React from "react"
import DashboardNavbar from "./DashboardNavbar"
import dynamic from "next/dynamic"
import EditCoursePanel from "../panels/EditCoursePanel"
import TransactionDetailsPanel from "../panels/TransactionDetailsPanel"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type DashboardLayoutProps = {
	children?: React.ReactNode
	pageName?: string
}

export default function DashboardLayout({ children, pageName = "Dashboard" }: DashboardLayoutProps) {
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
