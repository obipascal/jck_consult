import * as yup from "yup"

export const accountValidatorScheme = yup.object().shape({
	first_name: yup.string().required("First Name is required"),
	last_name: yup.string().required("Last Name is required"),
	phone_number: yup.string().matches(/\d+/, "Phone Number must have be valid number").required("Phone Number is required"),
	email: yup.string().email("Invalid email address.").required("Email is required"),
	password: yup
		.string()
		.trim("Password must not have empty space")
		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
		.matches(/\d/, "Password must have a number")
		.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
		.min(8, "Passowrd must be at least 8 characters long"),
	password_confirmation: yup.string().oneOf([yup.ref("password")], "Confirm password must match password.")
})

export const onboardAccountValidatorScheme = yup.object().shape({
	first_name: yup.string().required("First Name is required"),
	last_name: yup.string().required("Last Name is required"),
	phone_number: yup.string().matches(/\d+/, "Phone Number must have be valid number").required("Phone Number is required"),
	gender: yup.string().oneOf(["male", "female", "others"], "Please select your gender.").required("Gender is required"),
	password: yup
		.string()
		.trim("Password must not have empty space")
		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
		.matches(/\d/, "Password must have a number")
		.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
		.min(8, "Passowrd must be at least 8 characters long"),
	password_confirmation: yup.string().oneOf([yup.ref("password")], "Confirm password must match password.")
})
