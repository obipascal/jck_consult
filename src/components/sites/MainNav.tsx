import Image from "next/image"
import React from "react"
import Logo from "@JCKConsultant/assets/img/logox180.png"
import { useDispatch, useSelector } from "react-redux"
import { getNavMenuState, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import classNames from "classnames"
import IconFilterRight from "../icons/IconFilterRight"
import IconCloseOutline from "../icons/IconCloseOutline"
import Link from "next/link"

import { capitalize, uniqueId } from "@JCKConsultant/lib/utils"
import { ROUTES } from "@JCKConsultant/configs/routes"
import MainSidebar from "./MainSidebar"
import { FetchPublishedCourses } from "@JCKConsultant/services/course/course.apis"
import { useMutation } from "react-query"
import { PaginationResponse } from "@JCKConsultant/types"
import { CourseInterface } from "@JCKConsultant/types/course"

export const AppLogo = Logo

export const navStyle = {
	navItems: "flex items-center"
}

type MainNavProps = {
	siteName?: string
	siteLogo?: string
	siteId?:string 
}
export default function MainNav(props: MainNavProps) {
	const dispatcher = useDispatch()
	const isNavMenuShown = useSelector(getNavMenuState)

	const toggleNavMenuVisibility = () => dispatcher(toggleNavMenu(!isNavMenuShown))


	const [courses, setCourses] = React.useState<PaginationResponse<CourseInterface>>()

	const fetchCourseApi = useMutation(FetchPublishedCourses, {
		onSuccess(res: any) {
			if (res?.status) setCourses(res?.data)
		}
	})

	const isFetching = fetchCourseApi.isLoading

	React.useEffect(() => {
		if (props?.siteId) {
			fetchCourseApi.mutateAsync({ perPage: 10, page: 1 })
		}
	}, [props?.siteId])

	const products = courses?.data


	return (
		<>
			{/* Nav menu */}
			<MainSidebar />
			{/*  Nav bar */}
			<nav
				className={classNames({
					"fixed top-0 left-0 right-0 backdrop-blur w-screen  shadow-lg  p-2 z-50 bg-slate-50/75 text-black": true
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
							<div className="absolute group-hover/nav-dropdown:visible  hover:visible flex flex-col top-[50px] bg-neutral-100 transition duration-150 ease-in-out invisible z-[1000] float-left overflow-hidden rounded-lg min-w-full">
								{products && (
									<>
										{products?.length > 0 && (
											<>
											{products?.map(product => (
												<Link
												key={uniqueId()}
												className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 "
												href={ROUTES.enroll.index(product?.course_id)}
												data-te-dropdown-item-ref
											>
												{product?.title}
											</Link>
											))}
											</>
										)}
									</>
								)}
							</div>
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
					</ul>

					<ul className="flex space-x-6 xs:flex md:hidden">
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
