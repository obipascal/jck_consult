import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import React from "react"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

import FemaleAvatar from "@JCKConsultant/assets/img/avatar/femaile-avatar.jpg"
import MaleAvatar from "@JCKConsultant/assets/img/avatar/male-avatar.webp"
import Image from "next/image"
import CourseListItem from "@JCKConsultant/components/dashboard/courses/CourseListItem"

export default function UserInfoPage() {
	return (
		<DashboardLayout pageName="Users">
			<DashboardContent title="User Profile" type="nav">
				<section className="p-3 shadow bg-white md:rounded-md xs:rounded-none mb-4 grid xs:grid-cols-1 md:grid-cols-3 gap-4 md:divide-x xs:divide-x-0 xs:divide-y md:divide-y-0">
					<div className="flex items-centner xs:flex-col xs:justify-center md:flex-row md:justify-start gap-x-1">
						<div className="basis-1/4 flex items-center justify-center">
							<Image src={MaleAvatar} alt="" className="rounded-full h-[100px] w-[100px]" />
						</div>

						<div className="basis-1/1 flex flex-col md:items-start xs:items-center justify-center">
							<h1 className="font-bold text-2xl">Obi, Pascal Banjuare</h1>
							<h2 className="font-semibold text-md text-gray-500">CEO/Software Developer</h2>
						</div>
					</div>

					<div className="col-span-2 flex flex-col gap-x-4 xs:py-3 md:py-0">
						<div className="flex items-center">
							<EnvelopeIcon className="text-gray-400 w-8 h-8 mx-3" />
							<span className="font-semibold">pascalobi83@gmail.com</span>
						</div>
						<div className="flex items-center">
							<PhoneIcon className="text-gray-400 w-8 h-8 mx-3" /> <span className="font-semibold">09125256272</span>
						</div>
					</div>
				</section>

				<section className="p-3 shadow bg-white md:rounded-md xs:rounded-none mb-4 ">
					<header className="border-b-2 border-b-gray-300">
						<h1 className="font-bold text-2xl">Courses Enrolled-in</h1>
					</header>

					<div className="grid grid-cols-1 divide-y">
						<CourseListItem courseName="Data Analysis" />
						<CourseListItem courseName="Scrum Master Class" />
					</div>
				</section>
			</DashboardContent>
		</DashboardLayout>
	)
}
