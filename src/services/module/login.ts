import request from '@/services'
import { IRoot, IUser } from '@/services/types'

enum LoginApi {
	AccountLogin = '/login',
	LoginUserInfo = '/users/',
	UserMenus = '/role/', //role下的id
}

interface ILoginUser {
	name: string
	password: string
}

export const loginAction = (data: ILoginUser) => {
	return request.post<IRoot<IUser>>({
		url: LoginApi.AccountLogin,
		data,
	})
}

export const fetchUserRoles = (id: number) => {
	return request.get<IRoot>({
		url: LoginApi.UserMenus + id + '/menu',
	})
}

export const fetchUserInfoById = (id: number) => {
	return request.get<IRoot>({
		url: LoginApi.LoginUserInfo + id,
	})
}
