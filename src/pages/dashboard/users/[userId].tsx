import DashboardContent from "@JCKConsultant/components/dashboard/layout/DashboardContent"
import DashboardLayout from "@JCKConsultant/components/dashboard/layout/DashboardLayout"
import React from "react"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

import Female from "@JCKConsultant/assets/img/avatar/femaile-avatar.jpg"
import Male from "@JCKConsultant/assets/img/avatar/male-avatar.webp"
import Image, { StaticImageData } from "next/image"
import CourseOfferedItem from "@JCKConsultant/components/dashboard/courses/CourseOfferedItem"
import { DashboardProps, Meta } from "@JCKConsultant/types"
import { authorizedOnly } from "@JCKConsultant/lib/authSession"
import { useRouter } from "next/router"
import { useMutation } from "react-query"
import { FetchProfile } from "@JCKConsultant/services/account/account.apis"
import { UserInterface } from "@JCKConsultant/types/user"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import Spinner from "@JCKConsultant/components/home/Spinner"

export const MaleAvatar = Male
export const FemaleAvatar = Female

type UserHeader = {
	image?: StaticImageData | string
	first_name?: string
	last_name?: string
	email?: string
	phone_number?: string
}
export const UserHeader: React.FC<UserHeader> = props => {
	return (
		<section className="p-3 shadow bg-white md:rounded-md xs:rounded-none mb-4 grid xs:grid-cols-1 md:grid-cols-3 gap-4 md:divide-x xs:divide-x-0 xs:divide-y md:divide-y-0">
			<div className="flex items-centner xs:flex-col xs:justify-center md:flex-row md:justify-start gap-x-1">
				<div className="basis-1/4 flex items-center justify-center">
					<Image src={props?.image as string} alt="" className="rounded-full h-[100px] w-[100px]" />
				</div>

				<div className="basis-1/1 flex flex-col md:items-start xs:items-center justify-center">
					<h1 className="font-bold text-2xl text-black">
						{props?.first_name} {props.last_name}
					</h1>
				</div>
			</div>

			<div className="col-span-2 flex flex-col gap-4 xs:py-3 md:py-0">
				<div className="flex items-center">
					<EnvelopeIcon className="text-gray-400 w-8 h-8 mx-3" />
					<span className="font-semibold text-black">{props.email}</span>
				</div>
				<div className="flex items-center">
					<PhoneIcon className="text-gray-400 w-8 h-8 mx-3" /> <span className="font-semibold text-black">{props?.phone_number}</span>
				</div>
			</div>
		</section>
	)
}
export default function UserInfoPage({ configs }: DashboardProps) {
	const router = useRouter()
	const [user, setUser] = React.useState<UserInterface>()
	const { userId } = router?.query

	const fetchUserApi = useMutation(FetchProfile, {
		onSuccess(res: any) {
			if (res?.status) setUser(res?.data)
		},
		onError(error, variables, context) {
			ServerErrors("Error", error)
		}
	})
	const isLoading = fetchUserApi.isLoading

	React.useEffect(() => {
		if (userId) fetchUserApi.mutateAsync(userId)
	}, [userId])

	const metaData: Meta = {
		title: configs?.settings?.name,
		description: configs?.settings?.desc,
		logo: configs?.settings?.logo
	}
	return (
		<DashboardLayout meta={metaData} pageName="Users" siteConfigs={configs}>
			<DashboardContent title="User Profile" type="nav">
				{isLoading && (
					<section className=" flex items-center justify-center min-h-[15vh]">
						<Spinner classes="text-3xl text-blue-500" />
					</section>
				)}

				{!isLoading && (
					<>
						<UserHeader
							image={user?.gender === "female" ? Female : Male}
							first_name={user?.first_name as string}
							last_name={user?.last_name as string}
							email={user?.email as string}
							phone_number={user?.phone_number as string}
						/>
						<section className="p-3 shadow bg-white md:rounded-md xs:rounded-none mb-4 ">
							<header className="border-b-2 border-b-gray-300">
								<h1 className="font-bold text-2xl">Courses Enrolled-In</h1>
							</header>

							<div className="grid grid-cols-1 divide-y">
								{user?.enrollments && (
									<>
										{user?.enrollments?.length > 0 && (
											<>
												{user?.enrollments?.map(enrolled => (
													<CourseOfferedItem key={enrolled?.enrollment_id} title={enrolled?.course?.title} date={enrolled?.created_at} />
												))}
											</>
										)}
									</>
								)}
							</div>
						</section>
					</>
				)}
			</DashboardContent>
		</DashboardLayout>
	)
}

// Session inspector
export async function getServerSideProps(context: any) {
	return authorizedOnly(context)
}
