import Head from "next/head"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

import type { Meta, WithChildren } from "@JCKConsultant/types"
import Nav, { BilmaStoreLogo } from "./Nav"
import { useDispatch, useSelector } from "react-redux"
import { getTheme, setTheme, toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import classNames from "classnames"
import IconShoppingCart from "../icons/shoppingCart"
import dynamic from "next/dynamic"

const InitTailwindUI = dynamic(() => import("./initTailwindUI"), { ssr: false })

interface LayoutProps extends WithChildren {
	meta?: Meta
	siteId?: string
	subdomain?: string
	showCart?: boolean
}

export default function Layout({ meta, children, subdomain, showCart = true }: LayoutProps) {
	const [scrolled, setScrolled] = useState(false)
	const dispatcher = useDispatch()
	const theme = useSelector(getTheme)

	const onScroll = useCallback(() => {
		setScrolled(window.pageYOffset > 20)
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", onScroll)
		return () => window.removeEventListener("scroll", onScroll)
	}, [onScroll])

	useEffect(() => {
		if (localStorage.getItem("navbarMenu")) {
			dispatcher(toggleNavMenu(localStorage.getItem("navbarMenu") == "true"))
		}
	})

	return (
		<div className={classNames({ "h-full min-h-screen pb-10": true, "bg-slate-900 text-dark-text": theme === "dark", "bg-light-bg text-light-text": theme === "light" })}>
			<InitTailwindUI />

			<Head>
				<title>{meta?.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" type="image/x-icon" href={meta?.logo} />
				<link rel="apple-touch-icon" sizes="180x180" href={meta?.logo} />
				<meta name="theme-color" content="#7b46f6" />

				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta itemProp="name" content={meta?.title} />
				<meta itemProp="description" content={meta?.description} />
				<meta itemProp="image" content={meta?.ogImage} />
				<meta name="description" content={meta?.description} />
				<meta property="og:title" content={meta?.title} />
				<meta property="og:description" content={meta?.description} />
				<meta property="og:url" content={meta?.ogUrl} />
				<meta property="og:image" content={meta?.ogImage} />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@Vercel" />
				<meta name="twitter:creator" content="@StevenTey" />
				<meta name="twitter:title" content={meta?.title} />
				<meta name="twitter:description" content={meta?.description} />
				<meta name="twitter:image" content={meta?.ogImage} />
				{/* {subdomain != "demo" && <meta name="robots" content="noindex" />} */}
			</Head>

			<Nav storeName={subdomain} />
			<section className="container m-auto mb-5 min-h-screen">{children}</section>

			{/* Footer */}
			<footer className="text-center mt-auto">
				<p className="md:font-bold text-sm xs:text-xs flex items-center w-full justify-center ">
					<Image src={BilmaStoreLogo} className="w-5 mx-2" alt="JCK Consultant" width={40} /> JCK Consultant &copy; {new Date().getFullYear()} All Right Reserved
				</p>
			</footer>
		</div>
	)
}
