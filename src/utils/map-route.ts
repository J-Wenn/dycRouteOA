import { RouteObject } from 'react-router-dom'

export function filterRoute(role: any, route: RouteObject[]) {
	const arr: RouteObject[] = []

	function _mapRoute(role: any) {
		role.forEach((item: any) => {
			const findRoute = route.find((iten) => iten.path === item.url)
			findRoute && arr.push(findRoute)
		})
	}
	role.forEach((item: any) => {
		if (item.children) {
			_mapRoute(item.children)
		}
	})
	return arr
}
