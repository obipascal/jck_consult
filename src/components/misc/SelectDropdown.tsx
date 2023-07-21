import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { classNames, uniqueId } from "@JCKConsultant/lib/utils"
import { SelectDropdownProps } from "@JCKConsultant/types/selectDropdown"

type DropdownProps = {
	name?: string
	onSelect?: (item: string) => void
	onChange?: (e: React.ChangeEvent<HTMLElement>) => void
	data: Array<SelectDropdownProps>
	label?: string
	value?: string
}

export default function SelectDropdown({ value = "", name, onSelect, onChange, data, label = "Options" }: DropdownProps) {
	const [optionValue, setOptionValue] = React.useState<string>(value)
	const [optionName, setOptionName] = React.useState<string>()

	const _handleSelect = (name: string, value: string) => {
		setOptionValue(value)
		setOptionName(name)
		if (typeof onSelect === "function") onSelect(value)
	}

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					{optionName ? optionName : label}
					<ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1 pointer-events-auto ">
						<input type="hidden" name={name} value={optionValue} onChange={typeof onChange === "function" ? onChange : () => {}} />

						{data?.map(item => (
							<Menu.Item key={uniqueId()}>
								{({ active }) => (
									<span onClick={() => _handleSelect(item?.name, item?.value)} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
										{item?.name}
									</span>
								)}
							</Menu.Item>
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
