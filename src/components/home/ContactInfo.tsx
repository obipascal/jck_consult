import Link from "next/link"
import React from "react"
import IconArrowRight from "../icons/IconArrowRight"
import IconTelephoneFill from "../icons/IconTelephoneFill"
import IconEnvelope from "../icons/IconEnvelope"
import IconMapMarkerRadius from "../icons/IconMapMarkerRadius"

export default function ContactInfo() {
	return (
		<section className="bg-white bg-no-repeat bg-cover bg-center">
			<div className="py-[50px] px-[25px] grid grid-cols-1 gap-6">
				<div data-aos="fade-up" className="flex items-center justify-start">
					<Link href="#" className="p-3 rounded-full w-fit bg-gradient-to-r from-indigo-500 to-blue text-white shadow-lg flex items-center" role="button">
						Contact Us <IconArrowRight className="ml-1" />
					</Link>
				</div>

				<div data-aos="fade-up" className="col-span-3 grid xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-between">
					{/* Phone number */}
					<div className="flex">
						<div className="w-fit flex items-center">
							<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue text-white mb-3">
								<IconTelephoneFill width={"2em"} height={"2em"} />
							</span>
							<div className="ml-3">
								<h1 className="font-bold text-blue">Phone Number</h1>
								<p className="font-normal ">+234 9125256272</p>
							</div>
						</div>
					</div>

					{/* Email */}
					<div className="flex">
						<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue text-white mb-3">
							<IconEnvelope width={"2em"} height={"2em"} />
						</span>

						<div className="ml-3">
							<h1 className="font-bold text-blue">Email</h1>
							<p className="font-normal ">support@jckconsulting.co.uk</p>
						</div>
					</div>

					{/* Address */}
					<div className="flex">
						<span className="p-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue text-white mb-3">
							<IconMapMarkerRadius width={"2em"} height={"2em"} />
						</span>

						<div className="ml-3">
							<h1 className="font-bold text-blue">Address</h1>
							<p className="font-normal ">No 26 Ebenezer street, Byazhin Across, Kubwa</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
