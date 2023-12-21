import { Card, Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const charts: ApexOptions = {
	chart: {
		height: 380,
		type: 'area',
		toolbar: { show: false },
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		width: 1,
		curve: 'smooth',
	},
	colors: ['#bf55ec'],
	series: [
		{
			name: 'Series 1',
			data: [40, 60, 44, 84, 64, 110, 95],
		},
	],
	legend: {
		offsetY: 5,
	},
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
	},
	tooltip: {
		fixed: {
			enabled: false,
			position: 'topRight',
		},
	},
	grid: {
		row: {
			colors: ['transparent', 'transparent'],
			opacity: 0.2,
		},
		borderColor: '#f1f3fa',
		padding: {
			bottom: 5,
		},
	},
}
const datacharts = () => {
	return (
		<>
			<Col>
				<Card>
					<Card.Body>
						<div
							className="border-bottom"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								color: 'black',
							}}>
							<div style={{ paddingRight: '25%' }}>
								<strong className="mb-0 fs-12" style={{ color: '#bf55ec' }}>
									Kilo
								</strong>
								<h2>
									88 kWh
									<strong
										className="text-danger mx-1 "
										style={{ fontSize: '14px', fontWeight: 'bold' }}>
										<i className="bi bi-arrow-up "></i> 15%
									</strong>
								</h2>
							</div>
							<div style={{ paddingLeft: '0', marginLeft: '0' }}>
								<strong className="mb-0 fs-12" style={{ color: '#bf55ec' }}>
									Total Expenses
								</strong>
								<h2>
									$10.52
									<strong
										className="text-danger mx-1 "
										style={{ fontSize: '14px', fontWeight: 'bold' }}>
										<i className="bi bi-arrow-up "></i> 25%
									</strong>
								</h2>
							</div>
						</div>

						<Row className="text-center">
							<div>
								<ReactApexChart
									className="apex-charts"
									options={charts}
									height={200}
									series={charts.series}
									type="area"
								/>
							</div>
						</Row>
					</Card.Body>
				</Card>
			</Col>

			{/* <UsChart /> */}
		</>
	)
}

export default datacharts
