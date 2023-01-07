import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import login from './modules/login'

const store = configureStore({
	reducer: {
		login,
	},
})

type StateType = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
