import React, { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { useRouter } from "next/router"
import { Error, Info } from "@JCKConsultant/lib/_toaster"
import Spinner from "../home/Spinner"

// The application or website base url
const baseUrl = process.env.NEXT_PUBLIC_URL

export default function CheckoutForm() {
	const stripe = useStripe()
	const elements = useElements()
	const [isLoading, setLoader] = React.useState<boolean>(false)

	const router = useRouter()
	const { courseId } = router?.query

	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault()
		setLoader(true)
		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return
		}

		const { error } = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			elements,
			confirmParams: {
				return_url: `${baseUrl}${ROUTES.enroll.confirm(courseId)}`
			}
		})

		if (error) {
			setLoader(false)
			// This point will only be reached if there is an immediate error when
			// confirming the payment. Show error to your customer (for example, payment
			// details incomplete)
			setErrorMessage(error?.message as string)
			Error("Payment", error?.message as string)
		} else {
			setLoader(false)
			Info("Payment", "Your payment is being processed.")
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<PaymentElement />
			<button
				disabled={!stripe || isLoading}
				className="bg-gradient-to-r from-blue-800 to-blue disabled:from-blue-800/50 disabled:to-blue/50 mb-3 inline-block  rounded p-3 my-3 w-full text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
				type="submit"
			>
				{!isLoading && "Submit"}
				{isLoading && <Spinner />}
			</button>

			{/* Show error message to your customers */}
			{errorMessage && <div className="text-red-500 font-medium text-md p-2 text-center">{errorMessage}</div>}
		</form>
	)
}
