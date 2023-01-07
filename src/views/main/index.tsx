import MainHeader from '@/components/main-header'
import MainMenu from '@/components/main-menu'
import RouterLoading from '@/views/loading/router-loading'
import Box from '@mui/material/Box'
import type { FC } from 'react'
import { memo, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { MainWrapper } from './style'

const Main: FC = memo(() => {
	return (
		<MainWrapper>
			<Box className="main-left">
				<MainMenu />
			</Box>
			<Box className="main-right">
				<Box className="main-header">
					<MainHeader />
				</Box>
				<Box className="main-body">
					<Suspense fallback={<RouterLoading />}>
						<Outlet />
					</Suspense>
				</Box>
			</Box>
		</MainWrapper>
	)
})

export default Main
