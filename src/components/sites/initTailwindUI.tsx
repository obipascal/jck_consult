import React from "react"
import { Carousel, Ripple, Input, initTE } from "tw-elements"

export default function InitTailwindUI() {
	React.useEffect(() => {
		initTE({ Carousel, Input, Ripple })
	})

	return null
}
