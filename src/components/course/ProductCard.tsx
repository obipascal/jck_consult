import { NAIRA_SIGN } from "@/lib/currency"
import { uniqueId } from "@/lib/utils"
import classNames from "classnames"
import { ROUTES } from "configs/approutes"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { getTheme } from "redux/reducers/appSlice"
import IconHeartFill from "../icons/IconHeartFill"
import IconStoreMarker from "../icons/IconStoreMarker"
import IconShoppingCart from "../icons/shoppingCart"
import { BilmaStoreLogo } from "../sites/Nav"
import ProductStoreOwner from "./ProductStoreOwner"

type ProductCardProps = {
	showOwner?: boolean
	showLocation?: boolean
}
export default function ProductCard({ showOwner = true, showLocation = true }: ProductCardProps) {
	const theme = useSelector(getTheme)
	return (
		<article className={classNames({ "relative p-3 shadow-md group/product rounded-lg": true, "bg-slate-800": theme === "dark", "bg-slate-50": theme === "light" })}>
			{/* product image */}
			<div className="relative">
				<div className="drop-shadow-2xl absolute top-0 bottom-0 left-0 right-0 h-full w-full p-3 flex items-end">
					<div className="p-1">
						<IconShoppingCart
							width={"2em"}
							height="2em"
							data-tooltip-id="bs-tooltip-info"
							data-tooltip-content="Add to cart"
							className={classNames({
								"border-0 lg:invisible lg:group-hover/product:visible text-danger transition-all cursor-pointer group-hover/product:bg-slate-50 group-hover/product:rounded-full group-hover/product:p-1 dark:group-hover/product:bg-slate-300 dark:group-hover/product:rounded-full dark:group-hover/product:p-1":
									true
							})}
						/>
					</div>
					<div className="p-1">
						<IconHeartFill
							data-tooltip-id="bs-tooltip-info"
							data-tooltip-content="Add to favorite"
							width={"2em"}
							height="2em"
							className={classNames({
								"border-0 lg:invisible lg:group-hover/product:visible text-danger transition-all cursor-pointer group-hover/product:bg-slate-50 group-hover/product:rounded-full group-hover/product:p-1 dark:group-hover/product:bg-slate-300 dark:group-hover/product:rounded-full dark:group-hover/product:p-1":
									true
							})}
						/>
					</div>
				</div>
				<div className="object-fill xs:h-40 md:h-60 lg:h-72 w-full rounded bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(https://picsum.photos/200)` }}></div>
			</div>
			{/* product body */}
			<div className="flex justify-between pt-2 mb-1.5">
				<h3 className="font-semibold truncate text-ellipsis p-1 sm-4:text-sm max-w-xs">
					<Link href={ROUTES.products.view(uniqueId())} className="hover:underline hover:decoration-cyan-500 hover:transition-all">
						Product Name
					</Link>
				</h3>{" "}
				<span className={classNames({ "font-bold rounded p-1 w-fit text-xs flex items-center": true, "bg-primary text-white": theme === "light", "bg-secondary": theme === "dark" })}>
					{NAIRA_SIGN}0.00
				</span>
			</div>

			<hr className={classNames({ "divide-y-2": true, "border-slate-600": theme === "dark", "border-slate-200": theme === "light" })} />

			<ProductStoreOwner showOwner={showOwner} showLocation={showLocation} />
		</article>
	)
}
