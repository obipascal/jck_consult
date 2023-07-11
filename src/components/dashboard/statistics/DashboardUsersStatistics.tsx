import React from "react"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const
		},
		title: {
			display: true,
			text: "Revenue by users"
		}
	}
}

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const data = {
	labels,
	datasets: [
		{
			label: "Users",
			data: [10, 20, 500, 50, 60, 80, 90, 100, 150, 180, 200, 10000],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)"
		},
		{
			label: "Revenue",
			data: [1000, 3000, 20000, 50000, 20000, 10000, 2000, 200000, 100000, 1000, 5000, 300000],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)"
		}
	]
}

export default function DashboardUsersStatistics() {
	React.useEffect(() => {})

	return <Line options={options} data={data} />
}
