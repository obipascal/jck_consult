import * as yup from "yup"

export const loginValidatorScheme = yup.object().shape({
	password: yup.string().required("Your password is required").trim("Your password never had empty space").min(8, "Passowrd must be at least 8 characters"),

	username: yup.string().email("Username must be an email.").required("Username is required")
})

export const signUpValidatorScheme = yup.object().shape({
	email: yup.string().email("Email must be a valid email address.").required("Email is required")
})

export const FgpwdValidatorScheme = yup.object().shape({
	email: yup.string().email("Invalid email address.").required("Email is required")
})

export const OTPCodeValidatorScheme = yup.object().shape({
	otp_code: yup.string().matches(/\d+/, "OTP must be a number.").required("OTP is required.")
})

export const changePasswordValidatorScheme = yup.object().shape({
	password: yup
		.string()
		.required("Password is required")
		.trim("Password must not have empty space")
		.matches(/\w*[a-z]\w*/, "Password must have a small letter")
		.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
		.matches(/\d/, "Password must have a number")
		.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
		.min(8, "Passowrd must be at least 8 characters long"),
	password_confirmation: yup
		.string()
		.required("Confirm password is required")
		.oneOf([yup.ref("password")], "Confirm password must match password.")
})
