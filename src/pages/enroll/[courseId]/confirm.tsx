import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import SuccessCheck from "@JCKConsultant/assets/img/icons/success-icon.png"
import ErrorCheck from "@JCKConsultant/assets/img/icons/error-Icon.png"
import PendingCheck from "@JCKConsultant/assets/img/icons/pending-icon.png"
import { prefetchConfigs } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import ConfirmCheckout from "@JCKConsultant/components/checkout/ConfirmCheckout"

export const SuccessIcon = SuccessCheck
export const ErrorIcon = ErrorCheck
export const PendingIcon = PendingCheck

export default function EnrollSuccess({ configs }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Confirm Course Enrollment">
			<ConfirmCheckout />
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigs(context)
}
