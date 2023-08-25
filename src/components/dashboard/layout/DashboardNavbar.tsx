import React, { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import Image from "next/image"
import { signOut } from "next-auth/react"
import { SiteConfigs } from "@JCKConsultant/types"
import { AppLogo } from "@JCKConsultant/components/sites/MainNav"
import { useUser } from "@JCKConsultant/hooks/useUser"

import FemaleAvatar from "@JCKConsultant/assets/img/avatar/femaile-avatar.jpg"
import MaleAvatar from "@JCKConsultant/assets/img/avatar/male-avatar.webp"

// @ts-ignore
function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

type NavigationProps = {
	name?: string
	href?: string
}
const isCurrentPage = (pageName: string, targetpage: string) => {
	return pageName?.toLowerCase() === targetpage?.toLowerCase()
}

type DashboardNavbarProps = {
	pageName?: string
	configs?: SiteConfigs
}

const navigation: Array<NavigationProps> = [
	{ name: "Dashboard", href: ROUTES?.dashboard.index },
	{ name: "Courses", href: ROUTES.dashboard.courses.index },
	{ name: "Users", href: ROUTES.dashboard.users.index },
	{ name: "Transactions", href: ROUTES.dashboard.transactions.index },
	{ name: "Promotions", href: ROUTES.dashboard.promotion.index },
	{ name: "Testimonies", href: ROUTES.dashboard.testimonies.index }
]

export default function DashboardNavbar({ pageName = "Dashboard", configs }: DashboardNavbarProps) {
	return (
		<Disclosure as="nav" className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg backdrop-blur">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary text-primary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<Image
										width={100}
										height={100}
										className="block h-10 rounded w-auto lg:hidden"
										src={(configs?.settings?.logo as string) ?? AppLogo}
										alt={(configs?.settings?.name as string) ?? ""}
									/>
									<Image
										width={100}
										height={100}
										className="hidden h-10 rounded w-auto lg:block"
										src={(configs?.settings?.logo as string) ?? AppLogo}
										alt={(configs?.settings?.name as string) ?? ""}
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map(item => (
											<Link
												key={item.name}
												href={item.href as string}
												className={classNames(
													isCurrentPage(pageName, item?.name as string) ? "bg-secondary text-primary text-gray-900" : "text-gray-300 border-2 border-transparent hover:border-yellow-300 ",
													"rounded-md px-3 py-2 text-sm font-medium"
												)}
												aria-current={isCurrentPage(pageName, item?.name as string) ? "page" : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="rounded-full bg-secondary text-primary p-1 text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<AdminDropdown />
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map(item => (
								<Link
									key={item.name}
									href={item.href as string}
									className={classNames(
										isCurrentPage(pageName, item?.name as string) ? "bg-secondary text-primary text-gray-900" : "text-gray-300 border-2 border-transparent hover:border-yellow-300 ",
										" block rounded-md px-3 py-2 text-sm font-medium"
									)}
									aria-current={isCurrentPage(pageName, item?.name as string) ? "page" : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export const AdminDropdown = () => {
	const user = useUser()

	const Avatar = user?.gender === "female" ? FemaleAvatar : MaleAvatar

	const _handleSignout = () => {
		sessionStorage.clear()
		signOut()
	}

	return (
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
							<Link href={`${ROUTES.dashboard.index}`} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
								Dashboard
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<Link href={`${ROUTES.dashboard.settings.index}`} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
								Your Profile
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<Link href={ROUTES.dashboard.settings.index} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
								Settings
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
	)
}
