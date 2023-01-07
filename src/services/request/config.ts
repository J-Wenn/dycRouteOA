export const TIME_OUT = 8000
let BASE_URL = ''

if (process.env.NODE_ENV === 'development') {
	BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
	BASE_URL = 'http://ihrm.itheima.net/prod-api'
} else {
	BASE_URL = 'http://ihrm.itheima.net/prod-api'
}

export { BASE_URL }
