import { Col, Row } from 'react-bootstrap'
import Statistics from './Statistics'
import WeeklySelesChart from './WeeklySelesChart'
import YearlySelesChart from './YearlySelesChart'
import ChatList from './ChatList'
import Projects from './Projects'
// import HousePage from './House'
import House from './House_'

// componets
import { PageBreadcrumb } from '@/components'

// data
import { chatMessages, statistics, rooms } from './data'

const Home = () => {
	return (
		<>
			<PageBreadcrumb title="Welcome!" subName="Home" />
			{/* <Row>
				
				{(statistics || []).map((item, idx) => {
					return (
						<Col xxl={3} sm={6} key={idx}>
							<Statistics
								title={item.title}
								stats={item.stats}
								change={item.change}
								icon={item.icon}
								variant={item.variant}
							/>
						</Col>
					)
				})}
			</Row> */}
			<Row>
				<Col xxl={4} sm={4} md={3}>
					{/* <HousePage /> */}
					{/* <HouseDashboard /> */}
					{/* <HomePage /> */}
				</Col>
			</Row>

			<div className="mt-3">
				<h4 className="text-black mb-3 font-weight-bold">House</h4>
				<Row>
					<Row>
						<House />
					</Row>
				</Row>
			</div>

			{/* <Row>
				<Col lg={8}>
					<WeeklySelesChart />
				</Col>
				<Col lg={4}>
					<YearlySelesChart />
				</Col>
			</Row> */}

			{/* <Row>
				<Col xl={4}>
					<ChatList messages={chatMessages} />
				</Col>

				<Col xl={8}>
					<Projects />
				</Col>
			</Row> */}
		</>
	)
}

export default Home
