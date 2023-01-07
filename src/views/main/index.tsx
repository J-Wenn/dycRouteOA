import type { FC } from 'react'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

const Main: FC = memo(() => {
	return (
		<>
			<h1>Main</h1>
			<Outlet />
		</>
	)
})

export default Main
