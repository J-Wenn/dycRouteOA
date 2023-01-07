import { Cookies } from 'react-cookie'
const cookie = new Cookies()

export const setCache = (key: string, value: any) => {
	cookie.set(key, value)
}

export const getCache = (key: string) => {
	const value = cookie.get(key)
	if (value) return value
}

export const delCache = (key: string) => {
	cookie.remove(key)
}

class Local {
	setLocal(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}
	getLocal(key: string) {
		const value = window.localStorage.getItem(key)
		if (value && value !== 'undefined') return JSON.parse(value)
	}
	delLocal(key: string) {
		window.localStorage.removeItem(key)
	}
}

export default new Local()
