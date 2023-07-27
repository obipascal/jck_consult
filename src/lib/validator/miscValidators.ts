import * as yup from "yup"

export const promoCodeValidatorScheme = yup.object().shape({
	code: yup.string().required("Please provide a discount code.")
})
