import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Main = lazy(() => import('@/views/main'))
const NotFound = lazy(() => import('@/views/not-found'))
const Login = lazy(() => import('@/views/login'))

const route: RouteObject[] = [
	{
		path: '',
		element: <Navigate to={'main'} />,
	},
	{
		path: 'main',
		element: <Main />,
		children: [],
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]

export default route
