import React from "react"
import MainLayout from "@JCKConsultant/components/sites/MainLayout"
import { prefetchConfigsAuthorizedOnly } from "@JCKConsultant/lib/prefetch"
import { AppConfigs, Meta, TransactionInterface } from "@JCKConsultant/types"
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
import { checkoutValidatorScheme, promoCodeValidatorScheme } from "@JCKConsultant/lib/validator/miscValidators"
import { CheckoutTrans, FetchTran, FetchTrans, InitiateInstallmentPayment } from "@JCKConsultant/services/transactions/trans.apis"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { useDispatch } from "react-redux"
import { setPayIntentClientSecret } from "@JCKConsultant/redux/reducers/checkoutFlowSlice"
import { waitUntil } from "@JCKConsultant/lib/utils"
import { formatNumber } from "@JCKConsultant/lib/utilities"
const InitTailwindUI = dynamic(() => import("@JCKConsultant/components/sites/initTailwindUI"), { ssr: false })

type InitValsProps = {
	code: string
	course_id?: string
}

type CheckoutValsProps = {
	payment_type: string
}
export default function InstallmentalPaymentPage({ configs }: AppConfigs) {
	const router = useRouter()
	const dispatcher = useDispatch()

	const { transId } = router?.query
	const [transaction, setTransaction] = React.useState<TransactionInterface>()

	const fetchTransactionApi = useMutation(FetchTran, {
		onSuccess(res: any) {
			if (res?.status) setTransaction(res?.data)
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isLoading = fetchTransactionApi.isLoading

	React.useEffect(() => {
		fetchTransactionApi.mutateAsync(transId)
	}, [transId])

	// ----------------------> [Checking out the course]

	const installmentPaymentApi = useMutation(InitiateInstallmentPayment, {
		onSuccess(res: any) {
			if (res?.status) {
				Info("Checkout", res?.message)

				dispatcher(setPayIntentClientSecret(res?.data?.cs_code))

				waitUntil(100).then(() => router?.push(ROUTES?.enroll.checkout(res?.data?.course_id)))
			}
		},

		onError(error, variables, context) {
			ServerErrors("Checkout", error)
		}
	})
	const isProcessing = installmentPaymentApi.isLoading

	const _handleInstallmentPayment = (transId: any) => {
		installmentPaymentApi.mutateAsync({ id: transId })
	}

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}

	return (
		<MainLayout meta={metaData} siteConfigs={configs} title="Installment Payment">
			<UserDashLayout>
				<div className="flex flex-col gap-8 items-center justify-center">
					{!isLoading && (
						<>
							<InitTailwindUI />
							<div className="shadow rounded-md p-3 min-w-[50%]">
								<div className="flex flex-col my-3">
									<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
										<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
											<div className="overflow-hidden">
												<table className="min-w-full text-left text-sm font-light">
													<thead className="border-b bg-white font-medium">
														<tr>
															<th scope="col" className="px-6 py-4 font-bold text-2xl">
																Payment Summary
															</th>
															<th scope="col" className="px-6 py-4"></th>
														</tr>
													</thead>
													<tbody>
														<tr className="border-b bg-neutral-100">
															<td className="whitespace-nowrap px-6 py-4 font-bold">Course:</td>
															<td className="whitespace-nowrap px-6 py-4">{transaction?.course?.title}</td>
														</tr>
														<tr className="border-b bg-white">
															<td className="whitespace-nowrap px-6 py-4 font-bold">Full Amount:</td>
															<td className="whitespace-nowrap px-6 py-4">&pound;{formatNumber(transaction?.original_amount)}</td>
														</tr>

														<tr className="border-b bg-neutral-100">
															<td className="whitespace-nowrap px-6 py-4 font-bold">Discount:</td>
															<td className="whitespace-nowrap px-6 py-4">-&pound;{formatNumber(transaction?.discount)}</td>
														</tr>

														<tr className="border-b bg-neutral-100">
															<td className="whitespace-nowrap px-6 py-4 font-bold">First Installment:</td>
															<td className="whitespace-nowrap px-6 py-4">-&pound;{formatNumber(transaction?.amount)}</td>
														</tr>

														<tr className="">
															<td className="whitespace-nowrap px-6 py-4 font-bold text-end">Next Installment:</td>
															<td className="whitespace-nowrap px-6 py-4">&pound;{formatNumber(transaction?.amount)}</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>

							<button
								onClick={() => _handleInstallmentPayment(transId)}
								disabled={isProcessing || isLoading}
								className="bg-gradient-to-r from-indigo-500 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block w-fit rounded-full p-4 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
								type="submit"
								data-te-ripple-init
								data-te-ripple-color="light"
							>
								{!isProcessing && "Make Payment"}
								{isProcessing && <Spinner />}
							</button>
						</>
					)}

					{isLoading && <Spinner classes="text-3xlg" />}
				</div>
			</UserDashLayout>
		</MainLayout>
	)
}

export async function getServerSideProps(context: any) {
	return prefetchConfigsAuthorizedOnly(context)
}
