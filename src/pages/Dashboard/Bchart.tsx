import React from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
// import faker from 'faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: '30Days Usage Cost',
		},
	},
}

const labels = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
]

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: [
				12, 34, 56, 87, 34, 87, 89, 56, 78, 96, 75, 45, 7, 8, 54, 33, 45, 67,
				34, 22,
			],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: [
				76, 77, 90, 32, 56, 78, 96, 12, 45, 67, 34, 56, 76, 21, 34, 23, 67, 91,
				32,
			],
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}

export function Bchart() {
	return <Bar options={options} data={data} />
}
