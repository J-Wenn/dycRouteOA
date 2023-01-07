import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { memo } from 'react'

const Loading = memo(() => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress />
		</Box>
	)
})

export default Loading
