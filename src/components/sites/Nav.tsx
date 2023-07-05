import Image from "next/image"
import React from "react"
import Logo from "@JCKConsultant/assets/img/logo.png"
import IconCircleUser from "../icons/userIcon"
import { useDispatch, useSelector } from "react-redux"
import { getNavMenuState, getTheme, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import { getAuthStatus } from "@JCKConsultant/redux/reducers/AuthSlice"
import classNames from "classnames"
import IconFilterRight from "../icons/IconFilterRight"
import NavMenu from "./NavMenu"
import IconCloseOutline from "../icons/IconCloseOutline"
import IconSearch from "../icons/IconSearch"
import IconBxHomeAlt from "../icons/IconBxHomeAlt"
import Link from "next/link"

import { capitalize } from "@JCKConsultant/lib/utils"
import { ROUTES } from "@JCKConsultant/configs/routes"

export const BilmaStoreLogo = Logo

const navStyle = {
	navItems: "flex items-center"
}

type NavProps = {
	storeName?: string
}
export default function Nav(props: NavProps) {
	const themeMode = useSelector(getTheme)
	const isActive = useSelector(getAuthStatus)
	const dispatcher = useDispatch()
	const isNavMenuShown = useSelector(getNavMenuState)

	const toggleNavMenuVisibility = () => dispatcher(toggleNavMenu(!isNavMenuShown))

	return (
		<>
			{/* Nav menu */}
			<NavMenu />
			{/*  Nav bar */}
			<nav className={classNames({ "sticky top-0 left-0 right-0 backdrop-blur w-full  shadow-lg  p-2 z-50": true, "bg-slate-50/75": themeMode === "light", "bg-slate-900/75": themeMode === "dark" })}>
				{/* flex container */}
				<div className="flex item-center justify-between container">
					{/* Logo */}
					<Link href={ROUTES.home} className="flex items-center">
						<Image src={BilmaStoreLogo} className="w-50 mr-2" alt={props?.storeName ? props?.storeName : "Bilma Stores"} width={50} />
						<h5 className="font-bold xs:invisible md:visible text-ellipsis overflow-hidden">{props?.storeName ? capitalize(props?.storeName)?.split("-")?.join(" ") : "JCK Consultant"}</h5>
					</Link>
					{/* Nav Items */}
					<ul className="flex space-x-6">
						{/* Login  */}
						<li className={navStyle.navItems}>
							
						</li>
						<li className={navStyle.navItems}>
							{isActive && <IconCircleUser width="1.5em" height="1.5em" className="cursor-pointer" />}
							{!isActive && (
								<Link
									href={ROUTES.login}
									data-te-ripple-init
									data-te-ripple-color="light"
									className={classNames({ "shadow-sm text-white p-2 rounded-full flex items-center": true, "bg-primary": themeMode === "light", "bg-secondary": themeMode == "dark" })}
								>
									Login
								</Link>
							)}
						</li>

						{/* Register */}
						<li className={navStyle.navItems}>
							{!isActive && (
								<Link
									href={ROUTES.register}
									data-te-ripple-init
									data-te-ripple-color="light"
									className={classNames({ "shadow-sm text-white p-2 rounded-full flex items-center": true, "bg-primary": themeMode === "light", "bg-secondary": themeMode == "dark" })}
								>
									Sign Up
								</Link>
							)}
						</li>
						<li className={navStyle.navItems}>
							{isNavMenuShown && <IconCloseOutline onClick={toggleNavMenuVisibility} className={classNames({ "cursor-pointer animate__animated animate__fadeIn": true })} width="2em" height="2em" />}
							{!isNavMenuShown && <IconFilterRight onClick={toggleNavMenuVisibility} className={classNames({ "cursor-pointer animate__animated animate__fadeIn": true })} width="2em" height="2em" />}
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
