import React from 'react'
import Chart from 'react-apexcharts'
import { YAxis } from 'recharts'

const Guna = () => {
	const options = {
		// YAxis: {
		// 	labels: {
		// 		style: {
		// 			colors: 'red',
		// 		},
		// 	},
		// },
		dataLabels: {
			style: {
				colors: ['#F44336', '#E91E63', '#9C27B0'],
			},
		},
		chart: {
			id: 'basic-bar',
		},
		xaxis: {
			categories: new Date('2018-02-12').getTime(),
		},
		// YAxis: {
		// 	categories: [50, 100, 150, 400, 500],
		// },
		yaxis: {
			catogories: [50, 100, 150, 400, 500],
		},
		stroke: {
			curve: 'smooth',
		},

		colors: ['#FFFF00', '#FF0000', '#00FF00', '#0033FF', '#FF0099'],
	}

	const series = [
		{
			name: 'series-1',
			data: [30, 40, 45, 50, 49, 60, 70, 91],
		},
		{
			name: 'series-2',
			data: [12, 26, 56, 25, 70, 32, 19, 54],
		},
		{
			name: 'series-3',
			data: [1, 23, 67, 36, 20, 10, 45, 11],
		},
	]

	return (
		<div className="app">
			<div className="row">
				<div className="mixed-chart" style={{ width: '100%' }}>
					<Chart
						options={options}
						series={series}
						type="line"
						width="900"
						height="300"
					/>
				</div>
			</div>
		</div>
	)
}

export default Guna
