import Swal from "sweetalert2"

const toastInit = Swal.mixin({
	toast: true,
	showClass: {
		popup: "animate__animated animate__slideOutDown"
	},
	hideClass: {
		popup: "animate__animated animate__slideInUp"
	},
	timer: 30000,
	timerProgressBar: false,
	position: "top",
	showConfirmButton: false
})

export const Success = (title?: string, message?: string) => {
	toastInit.fire(title, message, "success")
}

export const Error = (title?: string, message?: string) => {
	toastInit.fire(title, message, "error")
}

export const ServerErrors = (title?: string, error?: any) => {
	if (!error?.status) {
		const messages: string[] = []
		if (error?.data) {
			error?.data?.map((message: string) => {
				messages.push(`<li class="text-danger">${message}</li>`)
			})

			const message: string = `<ul>${messages.join("")}</ul>`
			toastInit.fire(title, message, "error")
		} else toastInit.fire(title, error?.message, "error")
	} else {
		toastInit.fire(title, error?.message, "error")
	}
}

export const Info = (title?: string, message?: string) => {
	toastInit.fire(title, message, "info")
}

export const Warning = (title?: string, message?: string) => {
	toastInit.fire(title, message, "warning")
}

export const Question = (title?: string, message?: string) => {
	toastInit.fire(title, message, "question")
}
