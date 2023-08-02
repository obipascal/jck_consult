import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import UserDashLayout from "@JCKConsultant/components/user/layout/UserDashLayout"
import CheckoutForm from "@JCKConsultant/components/checkout/CheckoutForm"
import StripeLogo from "@JCKConsultant/assets/img/assets/stripe-badge-transparent.png"
import Image from "next/image"

export default function CheckoutCourseEnrollmentPage({ configs }: AppConfigs) {
	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Checkout">
			<UserDashLayout>
				<div className="flex flex-col gap-8 items-center justify-center min-w-[50%]">
					<div className="p-3 rounded-md shadow">
						<h1 className="px-2 py-3 font-bold text-2xl text-primary mb-4">Checkout</h1>
						<CheckoutForm />
						<div className="pt-4">
							<Image src={StripeLogo} className="w-96 m-auto block" alt="Secured by stripe" />
						</div>
					</div>
				</div>
			</UserDashLayout>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigsAuthorizedOnly(context)
}
