import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import AuthLayout from '../layouts/AuthLayout'
import Loader from '../components/ui/Loader'
import PrivateRoute from './PrivateRoute'

import {
	Login,
	Dashboard,
	Ministry,
	PrivateDepartments,
	RegionalBranches,
	Kindergartens,
	Schools,
	NationalOrganizations,
	Universities,
	Others,
} from '../pages'

export default function AppRouter() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path='/login' element={<Login />} />
				</Route>

				<Route
					path='/'
					element={
						<PrivateRoute>
							<AdminLayout />
						</PrivateRoute>
					}
				>
					<Route index element={<Dashboard />} />
					<Route path='ministry' element={<Ministry />} />
					<Route path='private-departments' element={<PrivateDepartments />} />
					<Route path='regional-branches' element={<RegionalBranches />} />
					<Route path='kindergartens' element={<Kindergartens />} />
					<Route path='schools' element={<Schools />} />
					<Route
						path='national-organizations'
						element={<NationalOrganizations />}
					/>
					<Route path='universities' element={<Universities />} />
					<Route path='others' element={<Others />} />
				</Route>
			</Routes>
		</Suspense>
	)
}
