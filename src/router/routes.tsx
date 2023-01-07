import route from '@/router'
import { useAppSelector } from '@/store'
import { getCache } from '@/utils/cookie'
import { filterRoute } from '@/utils/map-route'
import Loading from '@/views/loading'
import { FC, lazy, memo, Suspense, useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import {
	Navigate,
	RouteObject,
	useLocation,
	useNavigate,
	useRoutes
} from 'react-router-dom'

function mapFileToRoute(pathname: string): RouteObject | undefined {
	const keys = pathname.split('/')
	const key = []
	if (keys[3] !== 'index.tsx') {
		key.push(keys[2])
		key.push(keys[3])
		key.push(keys[4])
	}
	if (key.length && keys.length > 4) {
		const Module = lazy(() => import(/* @vite-ignore */ pathname))
		return {
			path: '/' + key.join('/'),
			element: <Module />,
		}
	}
}

function useDycAddRoute(role: any) {
	useEffect(() => {
		const urls: RouteObject[] = []
		Object.keys(files).forEach((item) => {
			const route = mapFileToRoute(item)
			route && urls.push(route)
		})
		const dycRoute = filterRoute(role, urls)
		dycRoute.unshift({
			path: '',
			element: <Navigate to={'analysis/overview'} />,
		})
		route[route.findIndex((item) => item.path === 'main')].children = dycRoute
	}, [role])
}

function useTokenAuth() {
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const token: string = getCache('user')?.token
		// if (token) {
		// 	if (location.pathname === 'login') {
		// 		navigate('login')
		// 	} else {
		// 		navigate(location.pathname)
		// 	}
		// } else {
		// 	navigate('login')
		// }
		!token
			? navigate('login')
			: location.pathname === 'login'
			? navigate('login')
			: navigate(location.pathname)
	}, [navigate, location.pathname])
}

const files = import.meta.glob('../views/main/**/**.tsx', {
	eager: true,
})

const Router: FC = memo(() => {
	const { role } = useAppSelector(
		(state) => ({
			role: state.login.role,
		}),
		shallowEqual
	)

	role && useDycAddRoute(role)
	useTokenAuth()

	return <Suspense fallback={<Loading />}>{useRoutes(route)}</Suspense>
})

export default Router
