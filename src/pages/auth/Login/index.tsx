import { Button, Col, Row } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import AuthLayout from '../AuthLayout'
import useLogin from './useLogin'
import jwtDecode from 'jwt-decode'

import { API_BASE_URL } from '@/constants/API'

// components
import { VerticalForm, FormInput, PageBreadcrumb } from '@/components'

import { ThemeSettings, useThemeContext } from '@/common'
import { useThemeCustomizer } from '@/components'
import { useViewport } from '@/hooks'

import axios from 'axios'
import React, { useState } from 'react'

interface UserData {
	email: string
	password: string
}

interface DecodedToken {
	id: number
	exp: number
	iat: number
}

const BottomLinks = () => {
	return (
		<Row>
			<Col xs={12} className="text-center">
				<p className="text-dark-emphasis">
					Don't have an account?{' '}
					<Link
						to="/auth/register"
						className="text-dark fw-bold ms-1 link-offset-3 text-decoration-underline">
						<b>Sign up</b>
					</Link>
				</p>
			</Col>
		</Row>
	)
}

const schemaResolver = yupResolver(
	yup.object().shape({
		email: yup.string().required('Please enter Username'),
		password: yup.string().required('Please enter Password'),
	})
)
const Login = () => {
	const navigate = useNavigate()

	// const { loading, login, redirectUrl, isAuthenticated } = useLogin()

	const { settings, updateSettings, updateSidebar } = useThemeContext()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}
	const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value)
	}

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault()
		try {
			const requestData = { email, password }

			// console.log('Request Data:', requestData)

			const response = await axios.post(
				// 'http://127.0.0.1:8000/api/login',
				`${API_BASE_URL}/login`,
				requestData,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const token = response.data.jwt

			console.log('response data -- ', response.data)
			console.log('token --- ', token)
			localStorage.setItem('token', JSON.stringify(token))
			console.log('getting token from local', localStorage.getItem('token'))

			// setIsSuccess(true);
			if (token) {
				const decodedToken = jwtDecode(token) as DecodedToken
				localStorage.setItem('userId', JSON.stringify(decodedToken.id))
				// localStorage.setItem('userName', JSON.stringify(decodedToken.name))
				console.log('Decoded token name', decodedToken.name)
				console.log('getting id from local ', localStorage.getItem('userId'))
			} else {
				console.log('nodecoded token')
			}

			navigate('/home')
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
	return (
		<>
			<PageBreadcrumb title="Log In" />

			{/* {isAuthenticated && <Navigate to={redirectUrl} replace />} */}

			<AuthLayout
				authTitle="Sign In"
				helpText="Enter your email address and password to access account."
				bottomLinks={<BottomLinks />}
				hasThirdPartyLogin>
				<li className="d-none d-sm-inline-block">
					<div
						className="nav-link"
						id="light-dark-mode"
						onClick={toggleDarkMode}>
						<i className="ri-moon-line fs-22" />
					</div>
				</li>
				{/* <VerticalForm<UserData>
					onSubmit={login}
					resolver={schemaResolver}
					defaultValues={{ email: 'velonic@techzaa.com', password: 'Velonic' }}
				> */}

				<form onSubmit={handleLogin}>
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
						onChange={(e) => handlePassword(e)}
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
						name="password"
						type="password"
						required
						id="password"
						placeholder="Enter your password"
						containerClass="mb-3"
						value={password}
						onChange={handlePassword}
					/> */}
					{/* <Link to="/auth/forgot-password" className="text-muted float-end">
							<small>Forgot your password?</small>
						</Link> */}
					{/* </FormInput> */}
					{/* <FormInput
						label="Remember me"
						type="checkbox"
						name="checkbox"
						containerClass={'mb-3'}
					/> */}
					<div className="mb-0 text-start">
						<Button
							variant="soft-primary"
							className="w-100"
							type="submit"
							// disabled={loading}
						>
							<i className="ri-login-circle-fill me-1" />{' '}
							<span className="fw-bold">Log In</span>{' '}
						</Button>
					</div>
				</form>
				{/* </VerticalForm> */}
				{/* <form onSubmit={handleLogin}>
					 <input type='text'
					placeholder='Enter your email'
					name='email'
					 value={email} 
					 onChange={handleEmail}
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
					 >
							Log In
					 </button>
				</form> */}
			</AuthLayout>
		</>
	)
}

export default Login
