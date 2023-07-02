import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTheme, setTheme, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"

export default function DarkModeHandler() {
	const dispatcher = useDispatch()
	const theme = useSelector(getTheme)

	React.useEffect(() => {
		if (localStorage?.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			dispatcher(setTheme("dark"))
		} else {
			if (localStorage?.theme) {
				dispatcher(setTheme(localStorage.getItem("theme")))
			}
		}

		switch (theme) {
			case "dark":
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("light")
				break

			case "light":
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("dark")
				break
			default:
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("dark")
		}
	}, [theme])

	return null
}
