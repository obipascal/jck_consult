import Image from "next/image"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { getTheme } from "redux/reducers/appSlice"
import IconStoreMarker from "../icons/IconStoreMarker"
import { BilmaStoreLogo } from "../sites/Nav"

type ProductStoreOwnerProps = {
	showOwner?: boolean
	showLocation?: boolean
	data?: any
}
export default function ProductStoreOwner({ showLocation = true, showOwner = true }: ProductStoreOwnerProps) {
	const subdomainUrl = process.env.NEXT_PUBLIC_SUBDOMAIN_URL as string
	return (
		<div className="p-1">
			{showOwner && (
				<p className="flex text-sm sm-4:text-xs mb-1 items-center">
					<Image className="rounded-circle w-7 h-7 mr-1" src={BilmaStoreLogo} alt="Avatar" width={50} height={50} /> <span className="mr-1 text-slate-400">by</span>{" "}
					<Link href={subdomainUrl?.replace(":site", "ladies-affires")} className="font-semibold">
						Bilma Provision Stores
					</Link>
				</p>
			)}

			{showLocation && (
				<p className="flex text-sm items-center">
					<span className="text-slate-400 mx-2 flex items-center">
						<IconStoreMarker className="mr-1" width={"1.5em"} height="1.5em" /> In
					</span>{" "}
					<Link href="#">Kubwa, near you.</Link>
				</p>
			)}
		</div>
	)
}
