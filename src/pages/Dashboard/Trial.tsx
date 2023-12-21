import React, { PureComponent } from 'react'
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts'

const chartData = [
	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]

const names = chartData.map((entry) => entry.name)
const uvData = chartData.map((entry) => entry.uv)
const pvData = chartData.map((entry) => entry.pv)

export default class AdvancedAreaChart extends PureComponent {
	render() {
		return (
			<div style={{ width: '100%' }}>
				<ResponsiveContainer width="100%" height={150}>
					<AreaChart
						data={chartData}
						syncId="anyId"
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
							</linearGradient>
						</defs>
						<Area
							type="monotone"
							dataKey="uv"
							name="UV"
							stroke="#8884d8"
							fill="url(#colorUv)"
						/>
						{/* <Area
							type="monotone"
							dataKey="pv"
							name="PV"
							stroke="#82ca9d"
							fill="url(#colorPv)"
						/> */}
					</AreaChart>
				</ResponsiveContainer>
			</div>
		)
	}
}
