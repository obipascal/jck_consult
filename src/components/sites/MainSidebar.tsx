import classNames from "classnames"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNavMenuState, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { navStyle } from "./MainNav"
import { waitUntil } from "@JCKConsultant/lib/utils"

export default function MainSidebar() {
	const isMenuShown = useSelector(getNavMenuState)
	const dispatcher = useDispatch()

	const toggleNavMenuVisibility = () => waitUntil(100).then(() => dispatcher(toggleNavMenu(false)))
	return (
		// {/* Side bar */}
		<section
			className={classNames({
				"fixed h-screen top-0 bottom-0 shadow-xl shadow-slate-700 backdrop-blur z-40 left-auto right-0 lg:w-1/4 sm:w-1/2 xs:w-1/2 pt-40 animate__animated bg-slate-50/90 dark:bg-slate-900/90": true,
				"animate__slideInRight visible": isMenuShown,
				"animate__slideOutRight invisible": !isMenuShown
			})}
		>
			<ul className="flex flex-col pl-3 ">
				<li className={`${navStyle.navItems} mb-4`} onClick={toggleNavMenuVisibility}>
					<Link
						className="font-semibold border-b-2 border-transparent transition-all dark:hover:border-secondary dark:hover:text-secondary hover:border-secondary hover:text-primary "
						href={ROUTES.home}
					>
						Home
					</Link>
				</li>
				<li className={`${`${navStyle.navItems} mb-4`} relative group/nav-dropdown`} onClick={toggleNavMenuVisibility}>
					<Link
						href={ROUTES.courses.index}
						className="font-semibold border-b-2 border-transparent  dark:hover:border-secondary dark:hover:text-secondary hover:border-secondary hover:text-primary flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
					>
						Courses
					</Link>
				</li>
				<li className={`${navStyle.navItems} mb-4`} onClick={toggleNavMenuVisibility}>
					<Link
						className="font-semibold border-b-2 border-transparent transition-all dark:hover:border-secondary dark:hover:text-secondary hover:border-secondary hover:text-primary "
						href={ROUTES.about}
					>
						About
					</Link>
				</li>
				<li className={`${navStyle.navItems} mb-4`} onClick={toggleNavMenuVisibility}>
					<Link
						className="font-semibold border-b-2 border-transparent transition-all dark:hover:border-secondary dark:hover:text-secondary hover:border-secondary hover:text-primary "
						href={ROUTES.contact}
					>
						Contact Us
					</Link>
				</li>

				<li className={`${navStyle.navItems} mb-4`} onClick={toggleNavMenuVisibility}>
					<Link className="font-semibold border-b-2 border-transparent transition-all dark:hover:border-secondary dark:hover:text-secondary hover:border-secondary hover:text-primary " href={"#faqs"}>
						FAQs
					</Link>
				</li>
			</ul>
		</section>
	)
}
