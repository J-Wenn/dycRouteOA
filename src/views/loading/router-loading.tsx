import { Box } from '@mui/material'
import { memo } from 'react'

const RouterLoading = memo(() => {
	return (
		<Box
			sx={{
				width: '100%',
				height: 'inherit',
				display: 'flex',
				justifyContent: 'center',
				alignContent: 'center',
			}}
		>
			loading....
		</Box>
	)
})

export default RouterLoading
