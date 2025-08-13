import { lazy } from 'react'

export const Login = lazy(() => import('./Auth/Login'))
export const Dashboard = lazy(() => import('./Dashboard'))
export const Ministry = lazy(() => import('./Ministry'))
export const PrivateDepartments = lazy(() => import('./PrivateDepartments'))
export const RegionalBranches = lazy(() => import('./RegionalBranches'))
export const Kindergartens = lazy(() => import('./Kindergartens'))
export const Schools = lazy(() => import('./Schools'))
export const NationalOrganizations = lazy(
	() => import('./NationalOrganizations')
)
export const Universities = lazy(() => import('./Universities'))
export const Others = lazy(() => import('./Others'))
