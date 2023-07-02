import * as yup from "yup"

export const ReviewValidationSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	company: yup.string().required("Company is required"),
	position: yup.string().required("Position is required"),
	contact: yup.string().email("Conntact email is invalid."),
	message: yup.string().required("Review Message is required")
})
