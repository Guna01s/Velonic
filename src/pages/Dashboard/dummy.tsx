import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const Dummy = () => {
	const option = {
		color: ['var(--orange)'],

		toolbox: {
			feature: {
				saveAsImage: {},
			},
		},

		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
			},
			backgroundColor: 'rgba(0, 0, 0, 0.59)',
			borderWidth: 0,
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
			show: false,
		},

		xAxis: [
			{
				type: 'category',
				boundaryGap: false,
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			},
		],
		yAxis: [
			{
				type: 'value',
				splitLine: {
					show: false,
				},
			},
		],
		series: [
			{
				type: 'line',
				smooth: true,
				// lineStyle: {
				// 	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
				// 		{
				// 			offset: 0,
				// 			color: 'rgb(126, 48, 225)', // Adjusted opacity for line color
				// 		},
				// 		{
				// 			offset: 1,
				// 			color: '#7E30E1',
				// 		},
				// 	]),
				// 	width: 3,
				// },
				// areaStyle: {
				// 	opacity: 0.5,
				// 	color: new echarts.graphic.LinearGradient(0, 0, 0, 1.5, [
				// 		{
				// 			offset: 0,
				// 			color: 'rgb(73, 16, 139)', // Dark purple color with adjusted transparency
				// 		},
				// 		{
				// 			offset: 1,
				// 			color: 'transparent',
				// 		},
				// 	]),
				// },

				lineStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: 'rgb(255, 191, 0)',
						},
						// {
						// 	offset: 1,
						// 	color: '#F450D3',
						// },
					]),
					width: 2,
				},
				areaStyle: {
					opacity: 0.6,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1.2, [
						{
							offset: 0,
							color: '#FE4C00',
						},
						{
							offset: 1,
							color: 'rgba(255,144,70,0.1)',
						},
					]),
				},
				emphasis: {
					focus: 'series',
				},
				showSymbol: false,
				data: [28000, 19000, 32000, 18000, 41000, 30000, 26000],
			},
		],
	}

	return <ReactECharts option={option} />
}

export default Dummy
