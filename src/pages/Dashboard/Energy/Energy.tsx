import React from 'react'

const Energy = () => {
	return (
		<div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					height: '100px',
					// width: '50px',
				}}>
				<div>Left</div>
				<div>Center</div>
				<div>Right</div>
			</div>
		</div>
	)
}

export default Energy
// import React from 'react'
// import { PieChart, Pie, Cell } from 'recharts'

// const data = [
// 	{ name: 'Group A', value: 400 },
// 	{ name: 'Group B', value: 300 },
// 	{ name: 'Group C', value: 300 },
// 	{ name: 'Group D', value: 200 },
// ]
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

// const Energy = () => {
// 	const onPieEnter = () => {
// 		// Define your onMouseEnter logic here if needed
// 	}

// 	return (
// 		<PieChart width={800} height={400}>
// 			<Pie
// 				data={data}
// 				cx={120}
// 				cy={200}
// 				innerRadius={60}
// 				outerRadius={80}
// 				fill="#8884d8"
// 				paddingAngle={5}
// 				dataKey="value">
// 				{data.map((entry, index) => (
// 					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// 				))}
// 			</Pie>
// 			<Pie
// 				data={data}
// 				cx={420}
// 				cy={200}
// 				startAngle={180}
// 				endAngle={0}
// 				innerRadius={60}
// 				outerRadius={80}
// 				fill="#8884d8"
// 				paddingAngle={5}
// 				dataKey="value">
// 				{data.map((entry, index) => (
// 					<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// 				))}
// 			</Pie>
// 		</PieChart>
// 	)
// }

// export default Energy

// // import React from 'react'

// // const Energy = () => {
// // 	return <div>Energy</div>
// // }

// // export default Energy

// import {
// 	BarChart,
// 	Bar,
// 	XAxis,
// 	YAxis,
// 	Tooltip,
// 	Legend,
// 	CartesianGrid,
// } from 'recharts'
// const data = [
// 	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
// 	{ name: 'Page B', uv: 400, pv: 2400, amt: 2400 },
// 	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
// 	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
// 	{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
// ]

// const Energy = () => {
// 	return (
// 		<div className="mt-4">
// 			<BarChart width={600} height={300} data={data}>
// 				<XAxis dataKey="name" stroke="#8884d8" />
// 				<YAxis />
// 				<Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
// 				<Legend
// 					width={100}
// 					wrapperStyle={{
// 						top: 40,
// 						right: 20,
// 						backgroundColor: '#f5f5f5',
// 						border: '1px solid #d5d5d5',
// 						borderRadius: 3,
// 						lineHeight: '40px',
// 					}}
// 				/>
// 				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 				<Bar dataKey="uv" fill="#8884d8" barSize={30} />
// 			</BarChart>
// 		</div>
// 	)
// }

// export default Energy
