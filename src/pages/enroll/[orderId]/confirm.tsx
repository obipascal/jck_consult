import React from "react"

import MainLayout from "@JCKConsultant/components/sites/MainLayout"

import Success from "@JCKConsultant/assets/img/icons/success-icon.png"
import Error from "@JCKConsultant/assets/img/icons/error-Icon.png"
import Pending from "@JCKConsultant/assets/img/icons/pending-icon.png"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "@JCKConsultant/configs/routes"

export const SuccessIcon = Success
export const ErrorIcon = Error
export const PendingIcon = Pending

export default function EnrollSuccess() {
	return (
		<MainLayout>
			<div className=" h-full xs:p-3 md:p-10">
				<div className=" w-full text-neutral-800">
					<div className="w-full flex justify-center items-center">
						<div className="block rounded-lg bg-white shadow-lg lg:w-6/12">
							<div className="">
								{/* <!-- Left column container--> */}
								<div className="px-4 md:px-0">
									<div className="xs:mx-6 xs:py-10 md:p-12  text-center">
										<Image src={SuccessIcon} alt="" className="m-auto mb-3 block" />
										<p className="mb-4 font-bold text-3xl">Your order was successful!</p>

										<p className="mb-4">
											Please check your email for a confirmation. An invoice will be emailed to you shortly after our staff must have approve your order so you can make payments. Thank you!
										</p>

										<Link
											href={ROUTES.courses.index}
											className="bg-gradient-to-r from-blue-800 to-blue mb-3 inline-block w-fit rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
											type="button"
											data-te-ripple-init
											data-te-ripple-color="light"
										>
											More Courses
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
