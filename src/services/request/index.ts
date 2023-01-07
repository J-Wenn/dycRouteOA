import axios, { AxiosInstance } from 'axios'
import { IInterceptors, RequestConfig } from './type'

class Request {
	instance: AxiosInstance
	interceptors?: IInterceptors

	constructor(config: RequestConfig) {
		this.instance = axios.create(config)
		this.interceptors = config.interceptors

		this.instance.interceptors.request.use(
			(config) => config,
			(err) => err
		)
		this.instance.interceptors.response.use(
			(res) => res,
			(err) => err
		)
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch
		)
		this.instance.interceptors.response.use(
			this.interceptors?.responseInterceptor,
			this.interceptors?.responseInterceptorCatch
		)
	}

	request<T>(config: RequestConfig<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			if (config.interceptors?.requestInterceptor) {
				config = config.interceptors.requestInterceptor(config)
			}

			this.instance
				.request<any, T>(config)
				.then((res) => {
					if (config.interceptors?.responseInterceptor) {
						res = config.interceptors.responseInterceptor(res)
					}
					resolve(res)
				})
				.catch((err) => reject(err))
		})
	}

	get<T>(config: RequestConfig<T>): Promise<T> {
		return this.instance.request({ ...config, method: 'GET' })
	}
	post<T>(config: RequestConfig<T>): Promise<T> {
		return this.instance.request({ ...config, method: 'POST' })
	}
	delete<T>(config: RequestConfig<T>): Promise<T> {
		return this.instance.request({ ...config, method: 'DELETE' })
	}
	patch<T>(config: RequestConfig<T>): Promise<T> {
		return this.instance.request({ ...config, method: 'PATCH' })
	}
	put<T>(config: RequestConfig<T>): Promise<T> {
		return this.instance.request({ ...config, method: 'PUT' })
	}
}

export default Request
