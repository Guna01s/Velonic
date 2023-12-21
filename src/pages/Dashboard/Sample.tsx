import Trial from './Trial'
import { Bchart } from './Bchart'
import Dummy from './dummy'
import { Card } from 'react-bootstrap'
import { Box } from '@mui/material'
import Pie from './Charts/Pie'

const Room = () => {
	// const deviceName = new URLSearchParams(location.search).get('deviceName')

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				// justifyContent: 'space-evenly',
			}}>
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 500,
				}}>
				<Pie />
			</div>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						// width: '270px',
					}}>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#da3333' }}>89w</Card.Title>
						</Card.Body>
					</Box>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#2ca32c' }}>89w</Card.Title>
						</Card.Body>
					</Box>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#da3333' }}>89w</Card.Title>
						</Card.Body>
					</Box>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#da3333' }}>89w</Card.Title>
						</Card.Body>
					</Box>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#2ca32c' }}>89w</Card.Title>
						</Card.Body>
					</Box>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							textAlign: 'center',
							height: '90px',
							width: '180px',
						}}>
						<Card.Body>
							<Card.Title>
								<h4>Current Usage</h4>
							</Card.Title>
							<Card.Title style={{ color: '#da3333' }}>89w</Card.Title>
						</Card.Body>
					</Box>
				</div>

				{/* </Card> */}

				{/* <h2 className=" mb-2 text-dark">{deviceName}</h2>
			<div className="mb-2">
				<Dummy />
			</div>
			<div
				className="mb-2"
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					fontWeight: 'bold',
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Current Usage</div>
					<div
						style={{
							fontSize: '18px',
							color: '#d33131',
						}}>
						89 W
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Daily Use</div>
					<div
						style={{
							fontSize: '18px',
							color: '#32a92d',
						}}>
						100 kWh
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Total</div>
					<div
						style={{
							fontSize: '18px',
							color: '#d33131',
						}}>
						189.98 kWh
					</div>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					fontWeight: 'bold',
					// marginRight: '15px',
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Current Cost</div>
					<div
						style={{
							fontSize: '18px',
							color: '#d33131',
						}}>
						$10.09
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Daily Cost</div>
					<div
						style={{
							fontSize: '18px',
							color: '#32a92d',
						}}>
						$20.45
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'space-evenly',
					}}>
					<div className="mb-1 text-dark">Total Cost</div>
					<div
						style={{
							fontSize: '18px',
							color: '#d33131',
						}}>
						$54.89
					</div>
				</div>
			</div> */}
				{/* <div
				style={{
					height: '25rem',
					width: '250rem',
					marginLeft: '4rem',
				}}>
				<Bchart />
			</div> */}
			</div>
		</div>
	)
}

export default Room
