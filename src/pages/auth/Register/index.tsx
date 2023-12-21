import { Button, Col, Row } from 'react-bootstrap'
import AuthLayout from '../AuthLayout'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import useRegister from './useRegister'
import { ThemeSettings, useThemeContext } from '@/common'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

// Components
import { VerticalForm, FormInput, PageBreadcrumb } from '@/components'

import { useThemeCustomizer } from '@/components'
import { useViewport } from '@/hooks'

import { API_BASE_URL } from '@/constants/API'

interface UserData {
	name: string
	email: string
	password: string
}

const BottomLink = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Already have account?{' '}
					<Link
						to="/auth/login"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline">
						<b>Log In</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}

const Register = () => {
	const navigate = useNavigate()

	// const { loading, register } = useRegister()

	const { settings, updateSettings, updateSidebar } = useThemeContext()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isSuccess, setIsSuccess] = useState(false)

	const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}
	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	// const handleRegister = async (event: React.FormEvent) => {
	// 	event.preventDefault()
	// 	try {
	// 		const requestData = { name, email, password }

	// 		console.log('Request Data:', requestData)

	// 		const response = await axios.post(
	// 			`${API_BASE_URL}/register`,
	// 			requestData,
	// 			{
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 				},
	// 			}
	// 		)

	// 		console.log('Response Data:', response.data)

	// 		// Navigate to the login page after successful registration
	// 		navigate('/auth/login')
	// 	} catch (error) {
	// 		console.error('Registration failed', error)
	// 	}
	// }                                                                    /// main///

	// const handleSubmit = async () => {
	// 	try {
	// 		if (!name) {
	// 			throw new Error('Please Enter the name')
	// 		}
	// 		if (!email) {
	// 			throw new Error('Please Enter the email') // altraiweb@gmail.com
	// 		}
	// 		if (!password) {
	// 			throw new Error('Please Enter the password') //sample
	// 		}
	// 		const payload = {
	// 			name: name,
	// 			email: email,
	// 			password: password,
	// 		}

	// 		const res = await fetch(`${API_BASE_URL}/register`, {
	// 			method: 'POST',
	// 			headers: {
	// 				Accept: 'application/json',
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(payload),
	// 		})
	// 		navigate('/auth/login')
	// 		const response = await res.json()
	// 		if (response.statusCode == 200) {
	// 			setName('')
	// 			setEmail('')
	// 			setPassword('')
	// 		}
	// 	} catch (erro) {
	// 		alert('Signup', err)
	// 	}
	// }

	const handleRegister = async (event: React.FormEvent) => {
		event.preventDefault()
		try {
			const requestData = { name, email, password }

			console.log('Request Data:', requestData)

			const response = await axios.post(
				// 'http://127.0.0.1:8000/api/register',
				`${API_BASE_URL}/register`,
				requestData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)

			console.log('Response Data:', response.data)
			navigate('/Login')
			navigate('/auth/login')
		} catch (error) {
			console.error('Registration failed', error)
		}
	}

	/**
	 * Toggle Dark Mode
	 */
	const toggleDarkMode = () => {
		if (settings.theme === 'dark') {
			updateSettings({ theme: ThemeSettings.theme.light })
		} else {
			updateSettings({ theme: ThemeSettings.theme.dark })
		}
	}

	/*
	 * form validation schema
	 */
	const schemaResolver = yupResolver(
		yup.object().shape({
			name: yup.string().required('Please enter Fullname'),
			email: yup
				.string()
				.required('Please enter Email')
				.email('Please enter valid Email'),
			password: yup.string().required('Please enter Password'),
		})
	)

	return (
		<>
			<PageBreadcrumb title="Register" />
			<AuthLayout
				authTitle=""
				helpText=""
				bottomLinks={<BottomLink />}
				hasThirdPartyLogin>
				{/* <VerticalForm<UserData> onSubmit={handleRegister} resolver={schemaResolver}> */}
				<li className="d-none d-sm-inline-block">
					<div
						className="nav-link"
						id="light-dark-mode"
						onClick={toggleDarkMode}>
						<i className="ri-moon-line fs-22" />
					</div>
				</li>
				{/* <form action="" onSubmit={handleRegister}> */}
				<form action="" onSubmit={handleRegister}>
					<FormInput
						label="Name"
						type="text"
						name="name"
						placeholder="Enter your name"
						containerClass="mb-3"
						value={name}
						onChange={handleName}
						required
					/>

					<FormInput
						label="Email address"
						type="text"
						name="email"
						placeholder="Enter your email"
						containerClass="mb-3"
						value={email}
						onChange={handleEmail}
						required
					/>

					<label style={{ marginBottom: '10px' }}>Password</label>
					<input
						type="password"
						placeholder="Enter your password"
						name="password"
						value={password}
						onChange={handlePassword}
						style={{
							marginBottom: '20px',
							width: '100%',
							padding: '8px 8px',
							borderRadius: '4px',
							borderWidth: '1px',
							borderColor: 'lightgray',
							borderStyle: 'solid',
						}}
						required
					/>
					{/* <FormInput
						label="Password"
						type="password"
						name="password"
						placeholder="Enter your password"
						containerClass="mb-3"
						value={password}
						onChange={handlePassword}
					/> */}

					{/* 
				<form onSubmit={handleRegister} style={{}}>
					<input type='text'
					placeholder='Enter your name'
					name='name'
					 value={name} 
					 onChange={handleName}
					 required
					 />
					 <input type='text'
					placeholder='Enter your email'
					name='email'
					 value={email} 
					 onChange={handleEmail}
					 style={{display:'block' }}
					 required
					 />
	
					<input type='password'
					placeholder='Enter your password'
					name='password'
					 value={password} 
					 onChange={handlePassword}
					 required
					 />
					 <button
					 type='submit'
					 style={{display:'block'}}
					 >
							Sign up
					 </button>
				</form>
					{/* <FormInput
						isTerms={true}
						type="checkbox"
						name="checkbox"
						containerClass={'mb-3'}
					/> */}
					<div className="mb-0 d-grid text-center">
						<Button
							variant="primary"
							// disabled={loading}
							className="fw-semibold"
							type="submit">
							Sign Up
						</Button>
					</div>
				</form>

				{/* </VerticalForm> */}
			</AuthLayout>
		</>
	)
}

export default Register
