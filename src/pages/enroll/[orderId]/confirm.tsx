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
									<div className="xs:mx-6 xs:py-10 md:p-12  ">
										<Image src={SuccessIcon} alt="" className="m-auto mb-3 block" />
										<p className="mb-4 font-bold text-3xl text-center">Success!</p>

										<p className="mb-4">
											Thank you for expressing interest in our course. We appreciate your eagerness to learn and would like to inform you that your request has been forwarded to one of our staff
											members for confirmation.
											<br />
											<br />
											To ensure smooth communication, we kindly ask you to check your email for a confirmation regarding your interest in the course.
											<br />
											<br />
											A payment link will be communicated to you as soon as your request has been confirmed.
											<br />
											<br />
											If you have any further questions or require assistance, please do not hesitate to reach out to us via{" "}
											<Link href={ROUTES.contact} className="underline decoration-5 font-semibold decoration-transparent hover:decoration-yellow-300">
												Contact Us
											</Link>
											. We are here to help you through your learning journey.
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
