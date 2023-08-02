import * as yup from "yup"

export const promoCodeValidatorScheme = yup.object().shape({
	code: yup.string().required("Please provide a discount code.")
})

export const checkoutValidatorScheme = yup.object().shape({
	payment_type: yup.string().oneOf(["full", "partial"], "Invalid Payment Type.").required("Please select a payment type.")
})
export const promotionValidatorScheme = yup.object().shape({
	valid_from: yup.string().required("Please select a starting date."),
	valid_to: yup.string().required("Please select then ending date."),
	disc_percentage: yup.string().required("Please enter a percentage discount.")
})

export const reivewModerationValidatorScheme = yup.object().shape({
	reviewer_message: yup.string().required("Review Message is required.")
})
