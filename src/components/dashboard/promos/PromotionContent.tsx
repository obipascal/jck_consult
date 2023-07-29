import TransactionsLoader from "@JCKConsultant/components/loaders/TransactionsLoader"
import LinkPagination from "@JCKConsultant/components/misc/LinkPagination"
import { ServerErrors } from "@JCKConsultant/lib/_toaster"
import { classNames, uniqueId } from "@JCKConsultant/lib/utils"
import { emitFetchPromotions, getPromotionEvents } from "@JCKConsultant/redux/reducers/appEventsSlice"
import { togglePromotionPanel } from "@JCKConsultant/redux/reducers/panelsSlice"
import { FetchPromoCodes } from "@JCKConsultant/services/promo/promo.apis"
import { LinksPaginationResponse, PromotionInterface, SiteConfigs } from "@JCKConsultant/types"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import React from "react"
import { useMutation } from "react-query"
import { useDispatch, useSelector } from "react-redux"
import PromotionPanel from "../panels/PromotionPanel"

export default function PromotionContent({ settings }: SiteConfigs) {
	const dispatcher = useDispatch()
	const [promotions, setPromotions] = React.useState<LinksPaginationResponse<PromotionInterface>>()
	const { canFetchPromotions } = useSelector(getPromotionEvents)

	const _openPanel = (param: any) => dispatcher(togglePromotionPanel({ status: true, params: param }))

	const fetchPromotionsApi = useMutation(FetchPromoCodes, {
		onSuccess: (res: any) => {
			setPromotions(res?.data)
			dispatcher(emitFetchPromotions(false))
		},
		onError: err => ServerErrors("Error", err)
	})
	const isLoading = fetchPromotionsApi?.isLoading

	React.useEffect(() => {
		if (settings?.site_id) fetchPromotionsApi?.mutateAsync({ perPage: 50, page: 1 })
	}, [settings?.site_id])

	React.useEffect(() => {
		if (canFetchPromotions) fetchPromotionsApi?.mutateAsync({ perPage: 50, page: 1 })
	}, [canFetchPromotions])
	const _data = promotions?.data

	return (
		<>
			<div className="bg-white shadow rounded-md p-3">
				{isLoading && <TransactionsLoader />}
				{!isLoading && (
					<>
						<ul role="list" className="divide-y divide-gray-100 mb-3">
							{_data && _data?.length > 0 && (
								<>
									{_data.map(promo => (
										<li key={uniqueId()} className="px-3 hover:shadow-lg">
											<Link onClick={() => _openPanel(promo?.promo_id)} className="flex justify-between gap-x-6 py-5" href={`#${promo?.promo_id}`}>
												<div className="flex gap-x-4 ">
													<div className="min-w-0 flex-auto">
														<p className="text-md font-semibold leading-7 text-gray-900">{promo?.promo_code}</p>
														<p className={classNames("mt-1 truncate text-xs leading-5 text-gray-500", promo?.expired ? "text-red-500" : "text-green-500")}>{promo?.expired ? "Inactive" : "Active"}</p>
													</div>
												</div>

												<div className="flex gap-x-4 items-center justify-between">
													<div className="hidden sm:flex sm:flex-col sm:items-end">
														<p className="text-sm leading-6 text-gray-900 mb-3">
															<span className="font-bold">From:</span> <span>{promo.starts}</span>
														</p>
														<p className="text-sm leading-6 text-gray-900 ">
															<span className="font-bold">Ends on:</span> <span>{promo.ends}</span>
														</p>
													</div>
													<ChevronRightIcon className="text-gray-500 -ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
												</div>
											</Link>
										</li>
									))}
								</>
							)}
						</ul>

						<LinkPagination pager={promotions} mutator={fetchPromotionsApi} isLoading={isLoading} />
					</>
				)}
			</div>

			<PromotionPanel />
		</>
	)
}
