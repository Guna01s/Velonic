import { useEffect, useState } from 'react'
import { Card, Row, Col, Modal, Button } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '@/constants/API'
import axios from 'axios'

const userID = localStorage.getItem('userId')

const House = () => {
	const [showPopup, setShowPopup] = useState(false)
	const [houseName, setHouseName] = useState('')
	const [houseArray, setHouseArray] = useState<string[]>([])
	// const [houseArray, setHouseArray] = useState({})

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
		setHouseName(e.target.value)
	}

	const uploadHouse = async () => {
		try {
			const userId = localStorage.getItem('userId')
			console.log('user idd', userId)
			console.log('house name', houseName)
			const response = await axiosInstance.post(
				`${API_BASE_URL}/houses/`,
				{ name: houseName, user: userId },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			console.log('res', response)
			setHouseArray((prevHouses) => [...prevHouses, response.data])
		} catch (err) {
			console.error('Registration failed', err)
		}
	}

	// const fetchHouseData = async () => {
	// 	try {
	// 		const userID = localStorage.getItem('userId')

	// 		const response = await axiosInstance.get(
	// 			`${API_BASE_URL}/houses/user_houses/${userID}/`
	// 		)
	// 		console.log('res', response)
	// 		const res = await response.data
	// 		setHouseArray(res)
	// 	} catch (err) {
	// 		console.log('get error', err)
	// 	}
	// }

	useEffect(() => {
		fetch(`${API_BASE_URL}/houses/user_houses/${userID}`)
			.then((res) => {
				return res.json()
			})
			.then((resp) => {
				setHouseArray(resp)
				console.log('response from database:', resp)
			})
			.catch((err) => {
				console.log(err.message)
			})
	}, [])

	console.log('database house array:', houseArray)

	const addHouse = () => {
		uploadHouse()
		setHouseName('')
		setShowPopup(false)
	}

	// useEffect(() => {
	// 	fetchHouseData()
	// }, [])

	// useEffect(() => {
	// 	if (!showPopup) {
	// 		fetchHouseData()
	// 	}
	// }, [showPopup])

	return (
		<div
			style={{
				flexDirection: 'row',
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				// columnGap: '50px',
				// rowGap: '40px',
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
										title="House"
										style={{ fontSize: '16px' }}>
										Setup House
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
							Add House
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
							Enter the House name
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
							value={houseName}
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
							Add House
						</Button>
					</Modal.Footer>
				</div>
			</Modal>
			{houseArray.map((item, index) => (
				<div
					key={index}
					className="col-lg-4 col-md-6 mb-0 g-2"
					style={{
						marginLeft: '15px',
						width: '300px',
					}}>
					{/* <Link
						to={`/room/?index=${index}&item=${item}`}
						style={{ textDecoration: 'none' }}> */}
					<Link
						to={`/room?houseName=${item.name}&houseId=${item.id}`}
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
											<i className="bi bi-house-door-fill"></i>
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
													title="House"
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
	)
}

export default House
