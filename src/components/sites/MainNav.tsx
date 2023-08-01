import Image from "next/image"
import React, { Fragment } from "react"
import Logo from "@JCKConsultant/assets/img/logox180.png"
import { useDispatch, useSelector } from "react-redux"
import { getNavMenuState, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import classNames from "classnames"
import IconFilterRight from "../icons/IconFilterRight"
import IconCloseOutline from "../icons/IconCloseOutline"
import Link from "next/link"
import { capitalize } from "@JCKConsultant/lib/utils"
import { ROUTES } from "@JCKConsultant/configs/routes"
import MainSidebar from "./MainSidebar"
import { Menu, Transition } from "@headlessui/react"
import FemaleAvatar from "@JCKConsultant/assets/img/avatar/femaile-avatar.jpg"
import MaleAvatar from "@JCKConsultant/assets/img/avatar/male-avatar.webp"
import { useUser } from "@JCKConsultant/hooks/useUser"
import { signOut } from "next-auth/react"
import CourseNavDropdown from "../course/CourseNavDropdown"

export const AppLogo = Logo

export const navStyle = {
	navItems: "flex items-center"
}

type MainNavProps = {
	siteName?: string
	siteLogo?: string
	siteId?: string
	phone?: string
	email?: string
}

export default function MainNav(props: MainNavProps) {
	const dispatcher = useDispatch()
	const isNavMenuShown = useSelector(getNavMenuState)

	const user = useUser()

	const toggleNavMenuVisibility = () => dispatcher(toggleNavMenu(!isNavMenuShown))

	return (
		<>
			{/* Nav menu */}
			<MainSidebar />
			{/*  Nav bar */}
			<div className="fixed top-0 left-0 right-0 z-50">
				<div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-indigo-500 to-blue-900 sm:py-2 xs:px-5 md:px-10 text-secondary font-bold">
					<p className="flex items-center justify-center text-start">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
							<path
								fillRule="evenodd"
								d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
								clipRule="evenodd"
							/>
						</svg>
						<a href={`tel:${props?.phone}`}>{props?.phone}</a>
					</p>

					<p className="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5">
							<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
							<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
						</svg>
						<a href={`mailto:${props?.email}`}>{props?.email}</a>
					</p>
				</div>
				<nav
					className={classNames({
						"relative backdrop-blur w-screen  shadow-lg  p-2 bg-slate-50/75 text-black": true
					})}
				>
					{/* flex container */}
					<div className="flex item-center justify-between container">
						{/* Logo */}
						<Link href={ROUTES.home} className="flex items-center">
							<Image src={props?.siteLogo ? props?.siteLogo : AppLogo} height={100} width={100} className="h-16 w-16 mr-2 rounded-md" alt={props?.siteName ? props?.siteName : "JCK Consulting."} />
							<h5 className="font-bold xs:invisible md:visible text-ellipsis overflow-hidden">{props?.siteName ? capitalize(props?.siteName)?.split("-")?.join(" ") : "JCK Consulting."}</h5>
						</Link>
						{/* Nav Items */}
						<ul className="flex space-x-6 xs:hidden md:flex">
							<li className={navStyle.navItems}>
								<Link className="font-semibold border-b-2 border-transparent transition transition-transform ease-in-out   hover:border-secondary hover:text-primary " href={ROUTES.home}>
									Home
								</Link>
							</li>
							<li className={`${navStyle.navItems}  relative group/nav-dropdown`}>
								<Link
									href={ROUTES.courses.index}
									className="font-semibold border-b-2 border-transparent    hover:border-secondary hover:text-primary flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
								>
									Courses
									<span className="ml-2 w-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
											<path
												fillRule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clipRule="evenodd"
											/>
										</svg>
									</span>
								</Link>
								<CourseNavDropdown siteId={props?.siteId} />
							</li>
							<li className={navStyle.navItems}>
								<Link className="font-semibold border-b-2 border-transparent transition-all   hover:border-secondary hover:text-primary " href={ROUTES.about}>
									About
								</Link>
							</li>
							<li className={navStyle.navItems}>
								<Link className="font-semibold border-b-2 border-transparent transition-all   hover:border-secondary hover:text-primary " href={ROUTES.contact}>
									Contact Us
								</Link>
							</li>
							<li className={navStyle.navItems}>
								<Link className="font-semibold border-b-2 border-transparent transition-all   hover:border-secondary hover:text-primary " href={"#faqs"}>
									FAQs
								</Link>
							</li>

							{user && (
								<li className={navStyle.navItems}>
									<UserDropdown />
								</li>
							)}
						</ul>

						<ul className="flex space-x-6 xs:flex md:hidden">
							{user && (
								<li className={navStyle.navItems}>
									<UserDropdown />
								</li>
							)}
							<li className={navStyle.navItems}>
								{isNavMenuShown && <IconCloseOutline onClick={toggleNavMenuVisibility} className={classNames({ "cursor-pointer animate__animated animate__fadeIn": true })} width="2em" height="2em" />}
								{!isNavMenuShown && <IconFilterRight onClick={toggleNavMenuVisibility} className={classNames({ "cursor-pointer animate__animated animate__fadeIn": true })} width="2em" height="2em" />}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	)
}

const UserDropdown = () => {
	const user = useUser()

	const Avatar = user?.gender === "female" ? FemaleAvatar : MaleAvatar

	const _handleSignout = () => {
		sessionStorage.clear()
		signOut()
	}

	return (
		<div className="inset-y-0   flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			{/* Profile dropdown */}
			<Menu as="div" className="relative ml-3">
				<div>
					<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
						<span className="sr-only">Open user menu</span>
						<Image width={100} height={100} className="h-8 w-8 rounded-full" src={Avatar} alt={user?.first_name} />
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<Menu.Item>
							{({ active }) => (
								<Link href={`${ROUTES.user.dashboard}`} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
									Enrolled Courses
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link href={ROUTES.user.transactions} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
									Transactions
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Link onClick={_handleSignout} href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
									Sign out
								</Link>
							)}
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
