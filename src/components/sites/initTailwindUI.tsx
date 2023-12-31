import React from "react"
import { Carousel, Ripple, Input, Dropdown, Collapse, Tab, Select, Datepicker, initTE } from "tw-elements"
// @ts-ignore

export default function InitTailwindUI() {
	React.useEffect(() => {
		initTE({ Carousel, Input, Dropdown, Collapse, Tab, Select, Datepicker, Ripple })
	}, [])

	return null
}
