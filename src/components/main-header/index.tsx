import { useAppSelector } from '@/store'
import { Logout } from '@mui/icons-material'
import { Avatar, Box } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { shallowEqual } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const MainHeader: FC<IProps> = memo(() => {
	const { userInfo } = useAppSelector(
		(state) => ({
			userInfo: state.login.userInfo,
		}),
		shallowEqual
	)
	const [open, setOpen] = useState(false)
	const navigate = useNavigate()

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = (logout: boolean) => {
		setOpen(false)
		logout && navigate('/login')
	}
	return (
		<HeaderWrapper>
			<Box className="userinfo">
				<Avatar
					src="https://wenn.tech/static/img/logo.jpg"
					sx={{ cursor: 'pointer' }}
				/>
				<span>{userInfo?.name}</span>
				<span className="line"></span>
				<Logout sx={{ cursor: 'pointer' }} onClick={handleClickOpen} />
			</Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'确定选择退出?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Let Google help apps determine location. This means sending
						anonymous location data to Google, even when no apps are running.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleClose(false)}>Disagree</Button>
					<Button onClick={() => handleClose(true)} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</HeaderWrapper>
	)
})

export default MainHeader
