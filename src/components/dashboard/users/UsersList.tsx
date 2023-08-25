import TransactionsLoader from "@JCKConsultant/components/loaders/TransactionsLoader"
import LinkPagination from "@JCKConsultant/components/misc/LinkPagination"
import { ROUTES } from "@JCKConsultant/configs/routes"
import { useUser } from "@JCKConsultant/hooks/useUser"
import { FemaleAvatar, MaleAvatar } from "@JCKConsultant/pages/dashboard/users/[userId]"
import { FetchAccounts } from "@JCKConsultant/services/account/account.apis"
import { LinksPaginationResponse, PaginationResponse } from "@JCKConsultant/types"
import { UserInterface } from "@JCKConsultant/types/user"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"

export default function UserList() {
	const activeUser = useUser()
	const [users, setUsers] = React.useState<LinksPaginationResponse<UserInterface>>()

	const fetchUserApi = useMutation(FetchAccounts, {
		onSuccess(res: any) {
			if (res?.status) setUsers(res?.data)
		}
	})
	const isLoading = fetchUserApi.isLoading

	React.useEffect(() => {
		if (activeUser?.account_id) fetchUserApi.mutateAsync({ perPage: 50, page: 1 })
	}, [activeUser?.account_id])

	const _data = users?.data

	return (
		<div className="  bg-white shadow rounded-md p-3">
			{isLoading && <TransactionsLoader />}
			{!isLoading && (
				<>
					<ul role="list" className="divide-y divide-gray-100 mb-3">
						{_data && _data?.length > 0 && (
							<>
								{_data?.map(user => (
									<li key={user?.email} className="px-3 hover:shadow-lg">
										<Link className="flex justify-between gap-x-6 py-5" href={ROUTES.dashboard.users.info(user?.account_id)}>
											<div className="flex gap-x-4">
												<Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={user?.gender === "female" ? FemaleAvatar : MaleAvatar} alt="" />
												<div className="min-w-0 flex-auto">
													<p className="text-sm font-semibold leading-6 text-gray-900">
														{user?.first_name} {user?.last_name}
													</p>
													<p className="mt-1 truncate text-xs leading-5 text-gray-500">{user?.email}</p>
												</div>
											</div>

											<div className="flex gap-x-4 items-center justify-between">
												<ChevronRightIcon className="text-gray-500 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
											</div>
										</Link>
									</li>
								))}
							</>
						)}
					</ul>
				</>
			)}

			<LinkPagination pager={users} mutator={fetchUserApi} isLoading={isLoading} />
		</div>
	)
}
