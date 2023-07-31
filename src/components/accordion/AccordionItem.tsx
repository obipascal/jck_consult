import React from "react"
import { TECollapse } from "tw-elements-react"

type AccordionItemProps = {
	title?: string
	content?: string
}

export default function AccordionItem({ title, content }: AccordionItemProps) {
	const [show, toggle] = React.useState<boolean>(false)

	const _handleToggle = () => toggle(!show)

	return (
		<div className="rounded-none border border-l-0 border-r-0 border-t-0 border-secondary bg-white">
			<h2 className="mb-0">
				<button
					onClick={_handleToggle}
					className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-blue font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] "
					type="button"
				>
					{title}
					<span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
						</svg>
					</span>
				</button>
			</h2>

			{/* collapse */}
			<TECollapse show={show}>
				<div className="px-5 py-4 text-black" dangerouslySetInnerHTML={{ __html: content as string }}></div>
			</TECollapse>
		</div>
	)
}
