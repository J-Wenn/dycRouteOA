export interface IUser {
	id: number
	name: string
	token: string
}

export interface IRoot<T = any> {
	code: number
	data: T
}
