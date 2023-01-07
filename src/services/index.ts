import { AxiosRequestHeaders } from 'axios'
import { Cookies } from 'react-cookie'
import { getCache } from './../utils/cookie'
import Request from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const cookie = new Cookies()

const request = new Request({
	timeout: TIME_OUT,
	baseURL: BASE_URL,
	interceptors: {
		requestInterceptor(config) {
			const token = getCache('user')?.token
			!!token &&
				(config.headers as AxiosRequestHeaders).set(
					'Authorization',
					`Bearer ${token}`
				)
			return config
		},
		responseInterceptor(res) {
			return res.data
		},
	},
})

export default request
