import { Row } from 'react-bootstrap'

import Room from './Room'
import { useLocation } from 'react-router-dom'
// import { useState } from 'react'

const RoomDashboard = () => {
	const location = useLocation()
	// const index = new URLSearchParams(location.search).get('index')
	// const item = new URLSearchParams(location.search).get('item')
	// const houseName = item.name
	// console.log('house name:', houseName)

	return (
		<div className="mt-3">
			{/* <h4 className="text-black mb-3 font-weight-bold">{houseName}</h4>
			<h4 className="text-black mb-3 font-weight-bold">Room</h4> */}
			<Row>
				<Row>
					<Room />
				</Row>
			</Row>
		</div>
	)
}

export default RoomDashboard
