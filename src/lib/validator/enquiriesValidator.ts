import * as yup from "yup"

export const enquiryValidatorScheme = yup.object().shape({
	subject: yup.string().required("Subject is required."),
	first_name: yup.string().required("First Name is required."),
	last_name: yup.string().required("Last Name is required."),
	email: yup.string().email("Email must be a valid email address.").required("Email address is required"),
	phone_number: yup.string().required("Phone Number is required."),
	message: yup.string().required("Message is required.")
})
