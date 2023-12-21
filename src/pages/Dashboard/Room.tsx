import { useState } from 'react'
import { Card, Row, Col, Modal, Button } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '@/constants/API'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const userID = localStorage.getItem('userId')

const Room = () => {
	const [showPopup, setShowPopup] = useState(false)
	const [roomName, setroomName] = useState('')
	const [roomArray, setRoomArray] = useState<string[]>([])

	const location = useLocation()
	const houseName = new URLSearchParams(location.search).get('houseName')
	const houseId = new URLSearchParams(location.search).get('houseId')

	console.log('house name --', houseName)
	console.log('house Id--', houseId)

	// console.log('index is:', index)
	// console.log('items is:', item)

	const token = localStorage.getItem('token')
	const axiosInstance = axios.create({
		baseURL: API_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})

	const openPopup = () => {
		setShowPopup(true)
	}

	const closePopup = () => {
		setShowPopup(false)
	}

	const handleRoomNameChange = (e) => {
		setroomName(e.target.value)
	}

	const uploadRoom = async () => {
		try {
			const userId = localStorage.getItem('userId')
			console.log('room name', roomName)
			const response = await axiosInstance.post(
				`${API_BASE_URL}/rooms/`,
				{ name: roomName, user: userId, house: houseId },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			console.log('res', response)
			setRoomArray((prevRooms) => [...prevRooms, response.data])
		} catch (err) {
			console.error('room upload failed', err)
		}
	}

	const fetchRoomData = async () => {
		try {
			const userID = localStorage.getItem('userId')

			const response = await axiosInstance.get(
				`${API_BASE_URL}/houses/${houseId}/rooms/`
			)
			console.log('res', response)
			const res = await response.data
			setRoomArray(res)
		} catch (err) {
			console.log('get error', err)
		}
	}

	const addHouse = () => {
		uploadRoom()
		setroomName('')
		setShowPopup(false)
	}

	useEffect(() => {
		fetchRoomData()
	}, [])

	useEffect(() => {
		if (!showPopup) {
			fetchRoomData()
		}
	}, [showPopup])

	return (
		<div>
			<div>
				<h3 className="text-black mb-2 font-weight-bold">{houseName}</h3>
				<h4 className="text-black mb-3 font-weight-bold">Room</h4>
			</div>
			<div
				style={{
					flexDirection: 'row',
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
				}}>
				<Card
					className={`widget-flat text-bg-white text-black rounded-3`}
					style={{
						height: '100px',
						width: '300px',
						background: '#f5ebff',

						alignContent: 'center',
						marginLeft: '10px',
					}}>
					<Card.Body>
						<Row className="">
							<Card.Title
								className=" font-weight-bold"
								style={{
									height: 50,
									width: 50,
									display: 'flex',
									flexDirection: 'row',
									background: '#d2d2f7',
									borderRadius: 50,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<div
									className=" bold"
									style={{
										fontSize: 35,
										color: '#bf55ec',
										fontWeight: 600,
									}}>
									<button
										onClick={openPopup}
										style={{
											border: 'none',
											background: 'transparent',
											color: '#bf55ec',
										}}
										className="bi bi-plus"></button>
								</div>
							</Card.Title>
							<Col>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'row',
									}}>
									<div>
										<h3
											className="my-0"
											title="Customers"
											style={{ fontSize: '16px' }}>
											Setup Room
										</h3>
										<p className="mt-1">
											Make sure that the device is in the same room before
										</p>
									</div>
								</div>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				<Modal
					show={showPopup}
					onHide={closePopup}
					style={{
						display: 'flex',
					}}>
					<div>
						<div
							style={{
								background: '#2b3541',
								color: 'white',
								border: 'none',
								display: 'flex',
								alignItems: 'center',
								padding: 20,
							}}>
							<button
								onClick={closePopup}
								style={{
									height: 35,
									width: 35,
									backgroundColor: '#1b1f25',
									borderRadius: 50,
									justifyContent: 'center',
									alignItems: 'center',
									marginLeft: 10,
									color: 'white',
									border: 'none',
									fontWeight: 'bold',
								}}
								className="bi bi-x-lg"></button>

							<Modal.Title
								style={{
									padding: '10px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									flex: 1,
									marginRight: 30,
								}}>
								Add Room
							</Modal.Title>
						</div>
						<Modal.Body
							style={{
								border: 'white',
								background: '#2b3541',
								color: 'white',
							}}>
							<h5
								style={{
									paddingLeft: 20,
									marginLeft: 20,
								}}>
								Enter the Room name
							</h5>
							<input
								type="text"
								placeholder="Enter the room name"
								style={{
									marginTop: 10,
									borderRadius: 5,
									borderWidth: 1,
									borderColor: '#AAB8C5',
									backgroundColor: '#313A46',
									width: 380,
									height: 50,
									marginLeft: 40,
									justifyContent: 'center',
									paddingLeft: 20,
									color: '#AAB8C5',
								}}
								value={roomName}
								onChange={handleRoomNameChange}
							/>
						</Modal.Body>
						<Modal.Footer
							style={{
								background: '#2b3541',
								border: 'none',
							}}>
							<Button
								variant="primary"
								onClick={addHouse}
								style={{ background: '#bf55ec', border: 'none' }}>
								Add Room
							</Button>
						</Modal.Footer>
					</div>
				</Modal>

				{roomArray.map((item, index) => (
					<div
						key={index}
						className="col-lg-4 col-md-6 mb-0 g-2"
						style={{
							marginLeft: '15px',
							width: '300px',
						}}>
						<Link
							to={`/device?roomName=${item.name}&roomId=${item.id}`}
							style={{ textDecoration: 'none' }}>
							<Card
								className={`widget-flat text-bg-white text-black rounded-3`}
								style={{ height: '100px' }}>
								<Card.Body>
									<Row className="">
										<Card.Title
											className="col-auto font-weight-bold"
											style={{
												padding: '13px',
												background: '#edeaf6',
												borderRadius: '50px',
											}}>
											<div
												className="mx-auto bold"
												style={{
													fontSize: '20px',
													color: '#bf55ec',
													marginRight: '8px',
												}}>
												<i className="bi bi-door-open-fill"></i>
											</div>
										</Card.Title>
										<Col>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													flexDirection: 'row',
												}}>
												<div>
													<h3
														className="my-2"
														title="Customers"
														style={{
															fontSize: '16px',
															padding: '2px',
															marginRight: '0px',
														}}>
														{item.name}
													</h3>
												</div>
											</div>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Room
