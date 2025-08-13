import type { ReactNode } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {
	children?: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const token = localStorage.getItem('token')

	if (!token) {
		return <Navigate to='/login' replace />
	}

	return <>{children || <Outlet />}</>
}

export default PrivateRoute
