import { uniqueId } from "@JCKConsultant/lib/utils"
import { LinksPaginationResponse, PaginationRequestParams, PaginationResponse } from "@JCKConsultant/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import { UseMutationResult } from "react-query"

export interface LinkPaginationProps<T = any> {
	mutator?: UseMutationResult<any, unknown, PaginationRequestParams, unknown>
	isLoading?: boolean
	pager?: LinksPaginationResponse<T>
}
export default function LinkPagination({ mutator, isLoading, pager }: LinkPaginationProps) {
	const links = pager?.links

	const _handleClick = (_perPage: any, _page: any) => mutator?.mutateAsync({ perPage: _perPage, page: _page })

	const linksComp = links?.map(link => {
		if (link) {
			if (link?.url) {
				const url = new URL(link?.url)
				const pageNumber: number = parseInt(url?.searchParams?.get("page") as string)

				return (
					<button
						type="button"
						disabled={link?.active || isLoading}
						aria-disabled={link?.active || isLoading}
						key={uniqueId()}
						onClick={() => _handleClick(pager?.per_page, pageNumber)}
						aria-current={link?.active}
						className="cursor-pointer relative z-10 inline-flex items-center bg-blue px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						{link?.label}
					</button>
				)
			}
		}
	})

	const _handleNext = () => {
		if (pager?.next_page_url) {
			const url = new URL(pager?.next_page_url)
			const pageNumber: number = parseInt(url?.searchParams?.get("page") as string)
			_handleClick(pager?.per_page, pageNumber)
		}
	}

	const _handlePrev = () => {
		if (pager?.prev_page_url) {
			const url = new URL(pager?.prev_page_url)
			const pageNumber: number = parseInt(url?.searchParams?.get("page") as string)
			_handleClick(pager?.per_page, pageNumber)
		}
	}
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="flex flex-1 justify-between sm:hidden">
				<a onClick={_handlePrev} className="cursor-pointer relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
					Previous
				</a>
				<a
					onClick={_handleNext}
					className="cursor-pointer relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">{pager?.from}</span> to <span className="font-medium">{pager?.to}</span> of <span className="font-medium">{pager?.total}</span> results
					</p>
				</div>
				<div>
					<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
						<a
							onClick={_handlePrev}
							className="cursor-pointer relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							<span className="sr-only">Previous</span>
							<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
						</a>
						{linksComp}
						<a
							onClick={_handleNext}
							className="cursor-pointer relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							<span className="sr-only">Next</span>
							<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
						</a>
					</nav>
				</div>
			</div>
		</div>
	)
}
