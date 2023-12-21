import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChart = (props) => {
	// Example static data for visualization
	const staticDates = [
		['2023-12-01', 3000000],
		['2023-12-02', 3200000],
		['2023-12-03', 2800000],
		['2023-12-04', 3300000],
		['2023-12-01', 3000000],
		['2023-12-02', 3200000],
		['2023-12-03', 2800000],
		['2023-12-04', 3300000],
		['2023-12-05', 3400000],
		['2023-12-06', 3300000],
		['2023-12-07', 3100000],
		['2023-12-08', 2900000],
		['2023-12-09', 3200000],
		['2023-12-10', 3100000],
		['2023-12-11', 3300000],
		['2023-12-12', 3400000],
		['2023-12-13', 3500000],
		['2023-12-14', 3300000],
		['2023-12-15', 3200000],
		['2023-12-16', 3100000],
		['2023-12-17', 3000000],
		['2023-12-18', 2900000],
		['2023-12-19', 2800000],
		['2023-12-20', 2700000],
		['2023-12-21', 2600000],
		['2023-12-22', 2800000],
		['2023-12-23', 2900000],
		['2023-12-24', 3100000],
		['2023-12-25', 3300000],
		['2023-12-26', 3400000],
		['2023-12-27', 3500000],
		['2023-12-28', 3300000],
		['2023-12-29', 3200000],
		['2023-12-30', 3100000],
		['2023-12-31', 3000000],
		// Add more data points as needed...
	]

	const [chartData, setChartData] = useState({
		series: [
			{
				name: 'XYZ MOTORS',
				data: staticDates.map(([date, value]) => ({
					x: new Date(date).getTime(),
					y: value,
				})),
			},
		],
		options: {
			chart: {
				type: 'area',
				stacked: false,
				height: 350,
				zoom: {
					type: 'x',
					enabled: true,
					autoScaleYaxis: true,
				},
				toolbar: {
					autoSelected: 'zoom',
				},
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 0,
			},
			title: {
				text: 'Stock Price Movement',
				align: 'left',
			},
			fill: {
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.5,
					opacityTo: 0,
					stops: [0, 90, 100],
				},
			},
			yaxis: {
				labels: {
					formatter: (val) => {
						return (val / 1000000).toFixed(0)
					},
				},
				title: {
					text: 'Price',
				},
			},
			xaxis: {
				type: 'datetime',
			},
			tooltip: {
				shared: false,
				y: {
					formatter: (val) => {
						return (val / 1000000).toFixed(0)
					},
				},
			},
		},
	})

	return (
		<div id="chart">
			<ReactApexChart
				options={chartData.options}
				series={chartData.series}
				type="area"
				height={300}
				width={900}
			/>
		</div>
	)
}

export default ApexChart
