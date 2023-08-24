import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import UserDashLayout from "@JCKConsultant/components/user/layout/UserDashLayout"
import CheckoutForm from "@JCKConsultant/components/checkout/CheckoutForm"
import StripeLogo from "@JCKConsultant/assets/img/assets/stripe-badge-transparent.png"
import Image from "next/image"
import { getTransaction } from "@JCKConsultant/redux/reducers/checkoutFlowSlice"
import { useSelector } from "react-redux"
import { POUND_SIGN } from "@JCKConsultant/lib/currency"

export default function CheckoutCourseEnrollmentPage({ configs }: AppConfigs) {
	const transaction = useSelector(getTransaction)

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
						<h1 className="px-2 py-3 font-bold text-3xl text-primary">Checkout</h1>
						<div className="divide-y">
							<p className="px-2 py-3 font-medium text-md text-fill-gray-500 mb-4">
								Course Amount:
								<strong className="font-bold ml-3">
									{POUND_SIGN}
									{transaction?.original_amount}
								</strong>
							</p>
							<p className="px-2 py-3 font-medium text-md text-fill-gray-500 mb-4">
								Payment Plan:
								<strong className="font-bold ml-3">{transaction?.payment_type?.toUpperCase()}</strong>
							</p>
							<p className="px-2 py-3 font-medium text-md text-fill-gray-500 mb-4">
								Amount to pay:
								<strong className="font-bold ml-3">
									{POUND_SIGN}
									{transaction?.amount}
								</strong>
							</p>
							<p className="px-2 py-3 font-medium text-md text-fill-gray-500 mb-4">
								Next Payment:
								<strong className="font-bold ml-3">
									{POUND_SIGN}
									{transaction?.payment_type === "partial" ? transaction.original_amount / 2 : "No next payment!"}
								</strong>
							</p>
						</div>

						<hr className="my-10 bg-gray-500" />
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
