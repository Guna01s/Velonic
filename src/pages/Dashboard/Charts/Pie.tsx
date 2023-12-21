import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Card, Col } from 'react-bootstrap'
import { SimpleDonutOpt } from '@/pages/charts/ApexCharts/data'

const Pie = () => {
	return (
		<div>
			<Col xl={10}>
				<Card>
					<Card.Body>
						{/* <h4 className="header-title">Simple Donut Chart</h4> */}
						<div>
							<ReactApexChart
								className="apex-charts"
								options={SimpleDonutOpt}
								height={250}
								series={SimpleDonutOpt.series}
								type="donut"
							/>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</div>
	)
}

export default Pie
