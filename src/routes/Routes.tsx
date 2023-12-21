import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// All layouts containers
import DefaultLayout from '../Layouts/Default'
import VerticalLayout from '../Layouts/Vertical'
import HorizontalLayout from '../Layouts/Horizontal'

import Home from '../pages/Dashboard/index'
import Energy from '../pages/Dashboard/Energy/Energy'
import Room from '../pages/Dashboard/RoomIntex'
import Device from '../pages/Dashboard/DeviceIntex'
import Sample from '../pages/Dashboard/SampleIntex'

import {
	authProtectedFlattenRoutes,
	publicProtectedFlattenRoutes,
} from './index'
import {
	ThemeSettings,
	useAuthContext,
	useThemeContext,
} from '../common/context'
interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
	const { settings } = useThemeContext()

	const Layout =
		settings.layout.type === ThemeSettings.layout.type.vertical
			? VerticalLayout
			: HorizontalLayout
	// const api = new APICore()
	const { isAuthenticated } = useAuthContext()
	return (
		<React.Fragment>
			<Routes>
				<Route>
					{publicProtectedFlattenRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								<DefaultLayout {...props}>{route.element}</DefaultLayout>
							}
							key={idx}
						/>
					))}
				</Route>

				<Route
					path="/home"
					element={
						<Layout {...props}>
							<Home />
						</Layout>
					}>
					{' '}
				</Route>

				<Route
					path="/room"
					element={
						<Layout {...props}>
							<Room />
						</Layout>
					}></Route>

				<Route
					path="/device"
					element={
						<Layout {...props}>
							<Device />
						</Layout>
					}></Route>
				<Route
					path="/energy"
					element={
						<Layout {...props}>
							<Energy />
						</Layout>
					}></Route>
				<Route
					path="/sample"
					element={
						<Layout {...props}>
							<Sample />
						</Layout>
					}></Route>

				<Route>
					{authProtectedFlattenRoutes.map((route, idx) => (
						<Route
							path={route.path}
							element={
								isAuthenticated === false ? (
									<Navigate
										to={{
											pathname: '/auth/login',
											search: 'next=' + route.path,
										}}
									/>
								) : (
									<Layout {...props}>{route.element}</Layout>
								)
							}
							key={idx}
						/>
					))}
				</Route>
			</Routes>
		</React.Fragment>
	)
}

export default AllRoutes
