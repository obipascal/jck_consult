import React, { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"
import Image from "next/image"
import { signOut } from "next-auth/react"

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
}

const navigation: Array<NavigationProps> = [
	{ name: "Dashboard", href: ROUTES?.dashboard.index },
	{ name: "Courses", href: ROUTES.dashboard.courses.index },
	{ name: "Users", href: ROUTES.dashboard.users.index },
	{ name: "Transactions", href: ROUTES.dashboard.transactions.index }
]

export default function DashboardNavbar({ pageName = "Dashboard" }: DashboardNavbarProps) {
	const _handleSignout = () => {
		sessionStorage.clear()
		signOut()
	}
	return (
		<Disclosure as="nav" className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg backdrop-blur">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
									<img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map(item => (
											<Link
												key={item.name}
												href={item.href as string}
												className={classNames(
													isCurrentPage(pageName, item?.name as string) ? "bg-secondary text-gray-900" : "text-gray-300 border-2 border-transparent hover:border-yellow-300 ",
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
									className="rounded-full bg-secondary p-1 text-gray-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="sr-only">View notifications</span>
									<BellIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="relative ml-3">
									<div>
										<Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="sr-only">Open user menu</span>
											<Image
												width={100}
												height={100}
												className="h-8 w-8 rounded-full"
												src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
												alt=""
											/>
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
										isCurrentPage(pageName, item?.name as string) ? "bg-secondary text-gray-900" : "text-gray-300 border-2 border-transparent hover:border-yellow-300 ",
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