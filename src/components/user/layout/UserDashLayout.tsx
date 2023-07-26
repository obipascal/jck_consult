import { WithChildren } from "@JCKConsultant/types"
import React from "react"

interface UserDashLayoutProps extends WithChildren {}
export default function UserDashLayout({ children }: UserDashLayoutProps) {
	return (
		<div className=" h-full xs:p-3 md:p-10">
			<div className=" w-full text-neutral-800">
				<div className="w-full">
					<div className="block rounded-lg bg-white shadow-lg ">
						<div className="grid grid-cols-1">
							{/* <!-- Left column container--> */}
							<div className="px-4 md:px-0">
								<div className="xs:mx-6 xs:py-10 md:p-12">{children}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
