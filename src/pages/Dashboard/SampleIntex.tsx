import { Card, Col, Row } from 'react-bootstrap'
import Sample from './Sample'
import Livedata from './Charts/Livedata'
import Trial from './Trial'

import House from './House_'
import { Bchart } from './Bchart'

const SampleIndex = () => {
	const deviceName = new URLSearchParams(location.search).get('deviceName')

	return (
		<div className="mt-2">
			<div>
				<h2 className=" mb-2 text-dark">{deviceName}</h2>
			</div>
			<Row>
				<Row>
					<Col xl={12}>
						<Card style={{ borderRadius: '10px' }}>
							<Card.Body
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									borderRadius: '10px',
								}}>
								<Livedata />
							</Card.Body>
						</Card>
					</Col>
					<Sample />
				</Row>
			</Row>
		</div>
	)
}

export default SampleIndex
