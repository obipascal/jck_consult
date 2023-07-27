import React from "react"
import Spinner from "../home/Spinner"
import { useRouter } from "next/router"
import { useStripe } from "@stripe/react-stripe-js"
import { Error, Info, Success, Warning } from "@JCKConsultant/lib/_toaster"
import { setPayIntentClientSecret } from "@JCKConsultant/redux/reducers/checkoutFlowSlice"
import { useDispatch } from "react-redux"
import { ErrorIcon, PendingIcon, SuccessIcon } from "@JCKConsultant/pages/enroll/[courseId]/confirm"
import { waitUntil } from "@JCKConsultant/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"

export default function ConfirmCheckout() {
	const router = useRouter()
	const stripe = useStripe()
	const { payment_intent, payment_intent_client_secret, courseId } = router?.query
	const dispatcher = useDispatch()

	const [isLoading, setLoader] = React.useState<boolean>(false)

	const [status, setStatus] = React.useState<"pending" | "error" | "success" | "failed">("pending")

	React.useEffect(() => {
		if (!stripe) {
			return
		}

		setLoader(true)
		// Retrieve the PaymentIntent
		stripe
			.retrievePaymentIntent(payment_intent_client_secret as string)
			.then(({ paymentIntent }) => {
				setLoader(false)
				// Inspect the PaymentIntent `status` to indicate the status of the payment
				// to your customer.
				//
				// Some payment methods will [immediately succeed or fail][0] upon
				// confirmation, while others will first enter a `processing` state.
				//
				// [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
				switch (paymentIntent?.status) {
					case "succeeded":
						Success("Payment", "Success! Your payment has been received and a receipt has been sent to your email.")
						setStatus("success")
						break

					case "processing":
						Info("Payment", "Payment processing. We'll update you when payment is received.")
						setStatus("pending")
						break

					case "requires_payment_method":
						// Redirect your user back to your payment page to attempt collecting
						// payment again
						Warning("Payment", "Payment failed. Please try another payment method.")

						dispatcher(setPayIntentClientSecret(payment_intent_client_secret))
						waitUntil(100).then(() => router?.push(ROUTES.enroll.checkout(courseId)))
						break

					default:
						Error("Payment", "Something went wrong.")
						setStatus("failed")
						break
				}
			})
			.catch(() => {
				setLoader(false)
				setStatus("error")
			})
	}, [stripe])

	return (
		<div className=" h-full xs:p-3 md:p-10">
			<div className=" w-full text-neutral-800">
				<div className="w-full flex justify-center items-center">
					<div className="block rounded-lg bg-white shadow-lg lg:w-6/12">
						{!isLoading && (
							<div className="">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12  ">
										{status === "success" && <Image src={SuccessIcon} alt="" className="m-auto mb-3 block" />}
										{status === "pending" && <Image src={PendingIcon} alt="" className="m-auto mb-3 block" />}
										{status === "failed" && <Image src={ErrorIcon} alt="" className="m-auto mb-3 block" />}

										<p className="mb-4 font-bold text-3xl text-center">
											{status === "success" && <span className="">Success</span>}
											{status === "pending" && <span className="italic">Processing...</span>}
											{status === "failed" && <span className="italic">Failed!</span>}
										</p>

										{status === "success" && (
											<p className="mb-4">
												Thank you for expressing interest in our course. We appreciate your eagerness to learn and would like to inform you that your request was successful and a receipt has been sent
												to your email.
												<br />
												<br />
												If you have any further questions or require assistance, please do not hesitate to reach out to us via{" "}
												<Link href={ROUTES.contact} className="underline decoration-5 font-semibold text-primary decoration-transparent hover:decoration-yellow-300">
													Contact Us
												</Link>
												. We are here to help you through your learning journey.
											</p>
										)}

										{status === "pending" && (
											<p className="mb-4">
												Please wait while your transaction is being processed...
												<br />
												<br />
												If nothing happens please reach out to use via our
												<Link href={ROUTES.contact} className="underline decoration-5 font-semibold text-primary decoration-transparent hover:decoration-yellow-300">
													Contact Us
												</Link>
												.
											</p>
										)}

										{status === "failed" && (
											<p className="mb-4">
												We apologize, but we are unable to process your transaction at this time.
												<br />
												<br />
												Are you experiencing issues while making the payment?
												<Link href={ROUTES.contact} className="underline decoration-5 font-semibold text-primary decoration-transparent hover:decoration-yellow-300">
													Contact Us
												</Link>
												.
											</p>
										)}

										{status === "failed" && (
											<p className="mb-4">
												Apologies, there seems to be an issue with confirming your payment.
												<br />
												<br />
												Are you experiencing issues while making the payment?
												<Link href={ROUTES.contact} className="underline decoration-5 font-semibold text-primary decoration-transparent hover:decoration-yellow-300">
													Contact Us
												</Link>
												.
											</p>
										)}

										<div className="flex gap-8 items-center justify-center">
											<Link
												href={ROUTES.courses.index}
												className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block w-fit rounded p-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
												type="button"
												data-te-ripple-init
												data-te-ripple-color="light"
											>
												View more courses
											</Link>

											<Link
												href={ROUTES.user.dashboard}
												className="text-primary border border-primary bg-white mb-3 inline-block w-fit rounded p-3 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
												type="button"
												data-te-ripple-init
												data-te-ripple-color="light"
											>
												Go to dashboard
											</Link>
										</div>
									</div>
								</div>
							</div>
						)}

						{isLoading && (
							<div className="text-center p-10">
								<Spinner />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
