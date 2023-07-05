import { getNavMenuState, getTheme, setTheme } from "@JCKConsultant/redux/reducers/appSlice"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import IconLightUp from "../icons/IconLightUp"
import IconMoonFill from "../icons/IconMoonFill"

export default function MainDarkmodeToggle() {
	const dispatcher = useDispatch()
	const theme = useSelector(getTheme)
	const isMenuShown = useSelector(getNavMenuState)

	const darkMode = () => dispatcher(setTheme("dark"))
	const lightMode = () => dispatcher(setTheme("light"))

	return (
		<>
			{theme === "dark" && <IconLightUp width="2em" height="2em" className="cursor-pointer" onClick={lightMode} />}
			{theme === "light" && <IconMoonFill width="2em" height="2em" className="cursor-pointer" onClick={darkMode} />}
		</>
	)
}
