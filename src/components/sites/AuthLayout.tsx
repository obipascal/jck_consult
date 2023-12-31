import Head from "next/head"
import React from "react"

import type { Meta, SiteConfigs, WithChildren } from "@JCKConsultant/types"
import dynamic from "next/dynamic"
import Image from "next/image"
import { AppLogo } from "./MainNav"

const InitTailwindUI = dynamic(() => import("./initTailwindUI"), { ssr: false })

interface AuthLayoutProps extends WithChildren {
	meta?: Meta
	title?: string
	heading?: string
	siteConfigs?: SiteConfigs
}

export default function AuthLayout({ meta, children, title, heading, siteConfigs }: AuthLayoutProps) {
	return (
		<>
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
			<div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<Image width={100} height={100} className="mx-auto h-20 w-20 rounded-md" src={meta?.logo ? meta?.logo : AppLogo} alt={meta?.title as string} />
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{heading ? heading : "Administrator Console"}</h2>
				</div>
				{children}
			</div>
		</>
	)
}
