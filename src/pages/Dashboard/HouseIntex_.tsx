import { Row } from 'react-bootstrap'

import House from './House_'

const HouseDashboard = () => {
	return (
		<div className="mt-3">
			<h4 className="text-black mb-3 font-weight-bold">House</h4>
			<Row>
				<Row>
					<House />
				</Row>
			</Row>
		</div>
	)
}

export default HouseDashboard
