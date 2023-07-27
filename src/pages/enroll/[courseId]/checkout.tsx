import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta } from "@JCKConsultant/types"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import UserDashLayout from "@JCKConsultant/components/user/layout/UserDashLayout"
import OrderSummary from "@JCKConsultant/components/checkout/OrderSummary"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { CourseInterface, DiscountCodeInterface } from "@JCKConsultant/types/course"
import { useMutation } from "react-query"
import { FetchCourse } from "@JCKConsultant/services/course/course.apis"
import { Info, ServerErrors } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"
import { ApplyPromoCode } from "@JCKConsultant/services/promo/promo.apis"
import { promoCodeValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
import { CheckoutTrans } from "@JCKConsultant/services/transactions/trans.apis"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { useDispatch } from "react-redux"
import { setPayIntentClientSecret } from "@JCKConsultant/redux/reducers/checkoutFlowSlice"
import { waitUntil } from "@JCKConsultant/lib/utils"
import CheckoutForm from "@JCKConsultant/components/checkout/CheckoutForm"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	code: string
	course_id?: string
}
export default function CheckoutCourseEnrollmentPage({ configs }: AppConfigs) {
	const dispatcher = useDispatch()

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Dashboard">
			<UserDashLayout>
				<div className="flex flex-col gap-8 items-center justify-center min-w-[50%]">
					<div className="p-3 rounded-md shadow">
						<h1 className="px-2 py-3 font-bold text-2xl text-primary mb-4">Checkout</h1>
						<CheckoutForm />
						<p className="p-2 italic font-semibold text-sm text-gray-500 text-center items-center">Your details are secured by Stripe</p>
					</div>
				</div>
			</UserDashLayout>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigsAuthorizedOnly(context)
}
