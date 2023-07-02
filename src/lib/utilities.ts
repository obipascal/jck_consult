import React from "react"
import { sleep } from "./_sleep"
import $ from "jquery"
import { shareContentProps } from "types"

export const extractToken = (token: string): string => {
	return token.split("|")[1]
}

export const generateRatings = (ratings: number): number[] => {
	let Rating = []
	/* Create rating base on rating value */
	if (ratings) {
		for (let index = 1; index <= ratings; index++) {
			Rating.push(index)
		}
	}

	return Rating
}

export const encryptString = (data: string | any): string | any => {
	return btoa(data)
}

export const decryptString = (encryptedString: string | any): string | any => {
	return atob(encryptedString)
}

export const toggleMarketplaceTab = (e: React.ChangeEvent<HTMLButtonElement> | any) => {
	const target = e.target

	document.querySelectorAll(".bk__tab-item").forEach(elem => {
		if (elem?.classList?.contains("active")) {
			elem.classList.remove("active")
		}
	})

	sleep(1000).then(() => {
		$(target).addClass("active")
		target.classList.add("active")
	})
}

export const reloadSession = () => {
	const event = new Event("visibilitychange")
	document.dispatchEvent(event)
}

export const shareContent = async (content: shareContentProps) => {
	if (typeof navigator?.share !== "undefined" && typeof navigator?.share === "function") {
		await navigator?.share(content)
	}
}

export const formatNumber = (num: any) => `${Intl.NumberFormat().format(parseInt(num))}.00`

export const calculateVAT = (amount: number) => (parseInt(process.env.NEXT_PUBLIC_APP_VAT as string) / 100) * amount
