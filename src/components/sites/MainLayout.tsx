import Head from "next/head"
import React, { useState, useEffect, useCallback } from "react"

import type { Meta, SiteConfigs, WithChildren } from "@JCKConsultant/types"
import { useDispatch, useSelector } from "react-redux"
import { toggleNavMenu } from "@JCKConsultant/redux/reducers/appSlice"
import classNames from "classnames"
import dynamic from "next/dynamic"
import MainNav from "./MainNav"
import MainFooter from "./MainFooter"
import AOS from "aos"
import { loadStripe } from "@stripe/stripe-js"
import { getPayIntentClientSecret } from "@JCKConsultant/redux/reducers/checkoutFlowSlice"
import { StripeElementsOptions } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { useUser } from "@JCKConsultant/hooks/useUser"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY as string)

const InitTailwindUI = dynamic(() => import("./initTailwindUI"), { ssr: false })

interface LayoutProps extends WithChildren {
	meta?: Meta
	title?: string
	siteConfigs?: SiteConfigs
}

export default function MainLayout({ meta, children, title, siteConfigs }: LayoutProps) {
	const [scrolled, setScrolled] = useState(false)
	const payIntent = useSelector(getPayIntentClientSecret)
	const stripeOptions: StripeElementsOptions = {
		// passing the client secret obtained from the server
		clientSecret: payIntent
	}

	const dispatcher = useDispatch()

	React.useEffect(() => {
		AOS.init()
		AOS.refresh()
	})

	const User = useUser()

	React.useEffect(() => {
		if (User?.api_token) {
			sessionStorage.setItem("api_token", User?.api_token)
		}
	}, [User?.api_token])

	useEffect(() => {
		if (localStorage.getItem("navbarMenu")) {
			dispatcher(toggleNavMenu(localStorage.getItem("navbarMenu") == "true"))
		}
	})

	return (
		<>
			<Elements stripe={stripePromise} options={stripeOptions}>
				<MainNav siteId={siteConfigs?.settings?.site_id} siteName={meta?.title} siteLogo={meta?.logo} />
				<div className={classNames({ "h-full min-h-screen": true })}>
					<InitTailwindUI />
					<Head>
						<title>{title ? `${title} - ${meta?.title ? meta?.title : "JCK Consulting."}` : meta?.title ? meta?.title : "JCK Consulting."}</title>

						<meta name="theme-color" content="rgb(30 58 138)" />

						<meta charSet="utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />

						{/* Application configuration on how it will appear on mobile device */}
						<meta name="application-name" content={meta?.title ? meta?.title : "JCK Consulting."} />
						<meta name="apple-mobile-web-app-capable" content="yes" />
						<meta name="apple-mobile-web-app-status-bar-style" content="default" />
						<meta name="apple-mobile-web-app-title" content={meta?.title ? meta?.title : "JCK Consulting."} />
						<meta name="description" content={meta?.description} />
						<meta name="format-detection" content="telephone=no" />
						<meta name="mobile-web-app-capable" content="yes" />
						<meta name="msapplication-TileColor" content="rgb(30 58 138)" />
						<meta name="msapplication-tap-highlight" content="no" />
						<meta name="theme-color" content="rgb(30 58 138)" />
						{/* End */}

						{/* Apple touch configurations */}
						<link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />
						<link rel="apple-touch-icon" sizes="152x152" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/152.png`} />
						<link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />
						<link rel="apple-touch-icon" sizes="167x167" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/167.png`} />
						{/* End */}

						{/* App Icons configs */}
						<link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/32.png`} />
						<link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/16.png`} />
						<link rel="icon" href={`${process.env.NEXT_PUBLIC_URL}/favicon.ico`} />
						<link rel="shortcut icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />

						<link rel="manifest" href={`${process.env.NEXT_PUBLIC_URL}/manifest.json`} />
						{/* End */}

						<meta itemProp="name" content={meta?.title ? meta?.title : "JCK Consulting."} />
						<meta itemProp="description" content={meta?.description} />
						<meta itemProp="image" content={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />
						<meta name="description" content={meta?.description} />
						<meta property="og:title" content={meta?.title ? meta?.title : "JCK Consulting."} />
						<meta property="og:description" content={meta?.description} />
						<meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
						<meta property="og:image" content={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />
						<meta property="og:type" content="website" />

						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:site" content="@jckconsulting" />
						<meta name="twitter:creator" content="@jckconsulting" />
						<meta name="twitter:title" content={meta?.title ? meta?.title : "JCK Consulting."} />
						<meta name="twitter:description" content={meta?.description} />
						<meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_URL}/AppImages/ios/180.png`} />
					</Head>
					<section className="pt-[4rem]">{children}</section>
					<MainFooter settings={siteConfigs?.settings} />
				</div>
			</Elements>
		</>
	)
}
