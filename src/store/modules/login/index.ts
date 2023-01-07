import { fetchUserInfoById, fetchUserRoles } from '@/services/module/login'
import local, { getCache, setCache } from '@/utils/cookie'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUserData = createAsyncThunk(
	'login-user',
	async (id: number, { dispatch }) => {
		const { data: userInfo } = await fetchUserInfoById(id)
		const { data: role } = await fetchUserRoles(id)
		dispatch(changeUserInfoAction(userInfo))
		dispatch(changeRolesAction(role))
		setCache('userInfo', userInfo)
		local.setLocal('role', role)
	}
)

const initialState = {
	userInfo: getCache('userInfo') ?? {},
	role: local.getLocal('role') ?? {},
}

const login = createSlice({
	name: 'login',
	initialState,
	reducers: {
		changeUserInfoAction(state, { payload }) {
			state.userInfo = payload
		},
		changeRolesAction(state, { payload }) {
			state.role = payload
		},
	},
})

export const { changeUserInfoAction, changeRolesAction } = login.actions

export default login.reducer
