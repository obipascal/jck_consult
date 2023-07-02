import classNames from "classnames"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNavMenuState, getTheme, setTheme } from "@JCKConsultant/redux/reducers/appSlice"
import IconLightUp from "../icons/IconLightUp"
import IconMoonFill from "../icons/IconMoonFill"

export default function NavMenu() {
	const dispatcher = useDispatch()
	const theme = useSelector(getTheme)
	const isMenuShown = useSelector(getNavMenuState)

	const darkMode = () => dispatcher(setTheme("dark"))
	const lightMode = () => dispatcher(setTheme("light"))
	return (
		// {/* Side bar */}
		<section
			className={classNames({
				"fixed h-screen top-0 bottom-0 shadow-xl shadow-slate-700 backdrop-blur z-40 left-0 right-auto lg:w-1/4 sm:w-1/2 xs:w-1/2 pt-20 animate__animated bg-slate-50/90 dark:bg-slate-900/90": true,
				"animate__slideInLeft visible": isMenuShown,
				"animate__slideOutLeft invisible": !isMenuShown
			})}
		>
			<div className="px-5 mb-2 flex">
				{theme === "dark" && <IconLightUp width="2em" height="2em" className="cursor-pointer" onClick={lightMode} />}
				{theme === "light" && <IconMoonFill width="2em" height="2em" className="cursor-pointer" onClick={darkMode} />}
				<small className="mr-2 capitalize pl-2 font-bold text-lg">{theme === "dark" ? "light" : "dark"}</small>
			</div>
			<hr className={classNames({ "w-full border-1.5": true, "border-slate-300": theme === "light", "border-zinc-500": theme === "dark" })} />
		</section>
	)
}
