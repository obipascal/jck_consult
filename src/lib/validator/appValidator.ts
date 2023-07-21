import * as yup from "yup"

export const appValidatorScheme = yup.object().shape({
	name: yup.string().required("Website is required"),
	desc: yup.string().required("Please enter your website description."),
	phone_number: yup.string().matches(/\d+/, "Phone Number must have be valid number").required("Phone Number is required"),
	email: yup.string().email("Invalid email address.").required("Email is required"),
	line_address: yup.string().required("Line Address is required"),
	facebook_handle: yup.string().required("Please provide your facebook handle link."),
	instagram_handle: yup.string().required("Please provide your Instagram handle link."),
	twitter_handle: yup.string().required("Please provide your Twitter handle link."),
	linkedin_handle: yup.string().required("Please provide your LinkedIn handle link."),
	whatsapp_handle: yup.string().required("Please provide your WhatsApp link.")
})
