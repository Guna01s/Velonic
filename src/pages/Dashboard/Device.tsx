/* eslint-disable no-inner-declarations */
import { useState } from 'react'
import { Card, Row, Col, Modal, Button, Alert } from 'react-bootstrap'
import './style.css'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { API_BASE_URL } from '@/constants/API'
import axios from 'axios'
import Dummy from './dummy'
import Lists from './Lists'
import Linne from './Charts/Guna'
import Guna from './Charts/Guna'
import Navin from './Charts/Navin'
import Livedata from './Charts/Livedata'
// import Trial from './Trial'

const userID = localStorage.getItem('userId')

const DetailsPopup = ({ handleClosePopup, item }) => {
	return (
		<div className="popup">
			{/* Add your detailed charts and information here */}
			<h2>{item.name} Details</h2>
			{/* Other details and charts */}
			<button onClick={handleClosePopup}>Close</button>
		</div>
	)
}

const deviceData = async () => {
	try {
		const response = await axios.get(`/network/P`)
		console.log('device dataaa', response)
	} catch (err) {
		console.error('device data getting failed', err)
	}
}

const House = () => {
	const [showPopup, setShowPopup] = useState(false)
	const [detailsPopup, setDetailsPopup] = useState(false)

	const [deviceName, setDeviceName] = useState('')
	const [deviceArray, setDeviceArray] = useState<string[]>([])
	const [dataChargeVisible, setDataChargeVisible] = useState(false)
	const [fetchData, setFetchData] = useState({})
	const [voltage, setVoltage] = useState(0)
	const [current, setCurrent] = useState(0)
	const [power, setPower] = useState(0)

	const location = useLocation()
	// const roomName = new URLSearchParams(location.search).get('roomName')
	const roomId = new URLSearchParams(location.search).get('roomId')

	console.log('room id--', roomId)
	const token = localStorage.getItem('token')
	const axiosInstance = axios.create({
		baseURL: API_BASE_URL,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})

	console.log('type of fetchdata:', typeof fetchData)
	console.log('check', fetchData)

	console.log(voltage / 10)
	console.log(current)
	console.log(power)
	console.log('response rom:', fetchData)

	useEffect(() => {
		fetch(`/network/P`)
			.then((res) => {
				return res.json()
			})
			.then((resp) => {
				setCurrent(resp.CURRENT)
				setVoltage(resp.VOLTAGE)
				setPower(resp.POWER)
				// console.log('Type:', typeof resp)
				console.log('response from:', resp)

				setFetchData(resp)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	// const openDetails = () => {
	// 	setDetailsPopup(true)
	// }

	const closeDetails = () => {
		setDetailsPopup(false)
	}

	const openPopup = () => {
		setShowPopup(true)
	}

	const closePopup = () => {
		setShowPopup(false)
	}

	const handleDeviceNameChange = (e) => {
		setDeviceName(e.target.value)
	}

	const uploadDevice = async () => {
		try {
			const userID = localStorage.getItem('userId')
			console.log('user--', userID)
			console.log('device name', deviceName)
			console.log('room id--', roomId)

			const response = await axiosInstance.post(
				`${API_BASE_URL}/devices/`,
				{ user: userID, name: deviceName, room: roomId },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			console.log('res', response)
			setDeviceArray((prevDevices) => [...prevDevices, response.data])
		} catch (err) {
			console.error('room upload failed', err)
		}
	}

	const handleToggleSwitch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const newAction = e.target.checked ? 'On' : 'Off'
		setAction(newAction)
		console.log(`You turned the device ${newAction}`)
		setShowAlert(true)
		setTimeout(() => {
			setShowAlert(false)
		}, 1000)
		if (newAction === 'On') {
			setDataChargeVisible(true)
			try {
				const res = await fetch('http://192.168.1.6/H', {
					method: 'GET',
				})
				if (res.ok) {
					console.log('response', res)
				} else {
					console.error('Toggle Switch Error:', res.status)
				}
			} catch (err) {
				console.error('Toggle Switch Error:', err)
			}
		} else {
			setDataChargeVisible(false)
			try {
				const res = await fetch('http://192.168.1.6/L', {
					method: 'GET',
				})
				if (res.ok) {
					//
				} else {
					console.error('Toggle Switch Error:', res.status)
				}
			} catch (err) {
				console.error('Toggle Switch Error:', err)
			}
		}
	}

	const fetchDeviceData = async () => {
		try {
			const userID = localStorage.getItem('userId')

			const response = await axiosInstance.get(
				`${API_BASE_URL}/rooms/${roomId}/devices/`
			)
			console.log('res', response)
			const res = await response.data
			setDeviceArray(res)
		} catch (err) {
			console.log('get error', err)
		}
	}

	const addHouse = () => {
		uploadDevice()
		setDeviceName('')
		setShowPopup(false)
	}

	useEffect(() => {
		fetchDeviceData()
	}, [])

	useEffect(() => {
		if (!showPopup) {
			fetchDeviceData()
		}
	}, [showPopup])

	// useEffect(() => {
	// 	if (!detailsPopup) {
	// 		fetchDeviceData()
	// 	}
	// }, [detailsPopup])

	const [action, setAction] = useState('Off')
	const [showAlert, setShowAlert] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const [selectedDevice, setSelectedDevice] = useState(null) // State to store selected device info

	// const openDetails = (device) => {
	// 	setSelectedDevice(device)
	// 	setShowModal(true)
	// }

	const openDetails = (itemName: string) => {
		const foundItem = deviceArray.find((item) => item.name === itemName)

		if (foundItem) {
			setSelectedDevice(foundItem.name) // Assuming `foundItem` has a `name` property of type string
			setShowModal(true)
		}
	}

	return (
		<div>
			<div>
				{/* <h3 className=" mb-2 font-weight-bold">{roomName}</h3> */}
				{/* <h4 className="text-black mb-3 font-weight-bold">Device</h4> */}
			</div>
			<div>
				{dataChargeVisible && (
					<div className="mb-4">
						<Row>
							<Col lg={10}>
								<h4 className="text-black mb-2 fs-14">
									Consumption forecaste for today
								</h4>
								{/* <Trial /> */}
								{/* <Dummy /> */}
								{/* <Guna /> */}
								{/* <Navin /> */}
								<Livedata />
							</Col>
						</Row>
					</div>
				)}

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
							height: '120px',
							width: '300px',
							background: '#f5ebff',
							alignContent: 'center',
							marginLeft: '5px',
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
											<h3 title="Device" style={{ fontSize: '16px' }}>
												Setup Device
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
									Add Device
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
									Enter the Device name
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
									value={deviceName}
									onChange={handleDeviceNameChange}
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
									Add Device
								</Button>
							</Modal.Footer>
						</div>
					</Modal>
					{deviceArray.map((item, index) => (
						<div
							key={index}
							className="col-lg-4 col-md-6 mb-0 g-2"
							style={{
								marginLeft: '15px',
								width: '290px',
							}}>
							<Card
								className={`widget-flat text-bg-white text-black rounded-3`}
								style={{ height: '120px' }}>
								<Alert
									show={showAlert}
									variant="text-bg-pink"
									onClose={() => setShowAlert(false)}
									dismissible
									style={{
										backgroundColor: '#f0f0ff',
										top: 15,
										position: 'fixed',
										left: '50%',
										transform: 'translateX(-50%)',
										zIndex: 9999,
									}}>
									You turned the device{' '}
									<span
										style={{
											marginLeft: '5px',
											fontWeight: '600',
											color: action === 'Off' ? 'red' : 'green',
										}}>
										{' '}
										{action}{' '}
									</span>
								</Alert>
								<Card.Body>
									<Row className="">
										<Card.Title
											className="col-auto font-weight-bold"
											style={
												{
													// padding: '13px',
													// background: '#edeaf6',
													// borderRadius: '50px',
												}
											}>
											<div
												className="mx-auto bold"
												style={{
													height: 50,
													width: 50,
													display: 'flex',
													flexDirection: 'row',
													background: '#d2d2f7',
													borderRadius: 50,
													alignItems: 'center',
													justifyContent: 'center',
													// fontSize: '20px',
													// color: '#bf55ec',
													// marginRight: '8px',
												}}>
												<Link
													to={`/sample?deviceName=${item.name}&deviceId=${item.id}`}
													style={{ textDecoration: 'none' }}>
													<i
														style={{
															fontSize: 25,
															color: '#bf55ec',
															fontWeight: 600,
															background: 'transparent',
														}}
														className="bi bi-router-fill"></i>
												</Link>{' '}
											</div>
										</Card.Title>
										<Col>
											<div
												style={{
													display: 'flex',
													alignItems: 'center',
													// flexDirection: 'row',
													// paddingRight: 'px',
												}}>
												<div>
													<h3
														className="my-2"
														title="Devices"
														style={{
															fontSize: '16px',
															marginRight: '8px',
															// padding: '2px',
															// marginRight: '0px',
														}}>
														{item.name}
													</h3>
												</div>
												<div
													style={{
														display: 'flex',
														flexDirection: 'row',
														// justifyContent: 'end',
														// marginLeft: '40%',
													}}>
													<label className="switch-toggle">
														<input
															type="checkbox"
															value={action}
															onChange={(e) => handleToggleSwitch(e)}
														/>
														<span className="slider-toggle"></span>
													</label>
												</div>
											</div>
											{/* <button onClick={() => openDetails(item.name)}>
												Details
											</button>{' '} */}
										</Col>
									</Row>
									<Row className="">
										<div
											style={{
												fontSize: '10px',
												marginLeft: '30px',
											}}>
											<div>
												<button
													className="me-2 bg-light p-1 ms-0 rounded-pill"
													style={{ border: 'none' }}>
													<i
														className="bi bi-fire font-weight-bold "
														style={{ color: '#bf55ec ' }}></i>{' '}
													&nbsp; {fetchData.POWER} W
												</button>
												&nbsp;
												<button
													className=" me-2  bg-light p-1 rounded-pill"
													style={{ border: 'none' }}>
													<i
														className="bi bi-tv font-weight-bold"
														style={{
															color: '#bf55ec ',
															border: 'none',
														}}></i>{' '}
													&nbsp;{voltage / 10} V
												</button>
												&nbsp;
												<button
													className="bg-light p-1 rounded-pill"
													style={{ border: 'none' }}>
													<i
														className="bi bi-lightbulb font-weight-bold"
														style={{ color: '#bf55ec ' }}></i>{' '}
													&nbsp; {fetchData.CURRENT} C
												</button>
											</div>
										</div>
									</Row>
								</Card.Body>
							</Card>

							<Modal
								show={showModal}
								onHide={() => setShowModal(false)}
								style={{
									height: '100%',
									width: '100%',
									display: 'flex',
									// marginLeft: '6rem',
									// marginTop: '3rem',
									borderRadius: '16px',
									border: '1px solid rgba(0, 0, 0, 0.10)',
								}}>
								<div
									style={{
										// display: 'flex',

										backgroundColor: 'white',
										height: '420px',
										width: '600px',
										// marginTop: '10rem',
									}}>
									<Modal.Header closeButton>
										<Modal.Title style={{ color: 'black' }}>
											{selectedDevice}
										</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										{selectedDevice && (
											<div
												style={{
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'space-evenly',
													gap: '8px',
												}}>
												<div
													style={{
														height: '10rem',
														width: '50rem',
													}}>
													{/* <Dummy /> */}
													<LineChart />
												</div>
												<div
													style={{
														display: 'flex',
														justifyContent: 'center',
														alignItems: 'center',
														width: '100%',
													}}>
													<Lists />
												</div>
											</div>
										)}
									</Modal.Body>
									{/* <Modal.Footer>
										<Button
											variant="secondary"
											onClick={() => setShowModal(false)}>
											Close
										</Button>
									</Modal.Footer> */}
								</div>
							</Modal>

							{/* <Modal show={showModal} onHide={() => setShowModal(false)}>
								<Modal.Header closeButton>
									<Modal.Title>{selectedDevice.name}</Modal.Title>
								</Modal.Header>
								<Modal.Body>{selectedDevice && <div></div>}</Modal.Body>
								<Modal.Footer>
									<Button
										variant="secondary"
										onClick={() => setShowModal(false)}>
										Close
									</Button>
								</Modal.Footer>
							</Modal> */}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default House
