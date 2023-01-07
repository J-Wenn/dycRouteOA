import { loginAction } from '@/services/module/login'
import { useAppDispatch } from '@/store'
import { fetchUserData } from '@/store/modules/login'
import { delCache, getCache, setCache } from '@/utils/cookie'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import { FC, memo, useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from './c-cpns/login-form'
import { LoginWrapper } from './style'

const Login: FC = memo(() => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [name, setName] = useState<string>(getCache('login_user')?.name ?? '')
	const [password, setPassword] = useState<string>(
		getCache('login_user')?.password ?? ''
	)
	const [message, setMessage] = useState<string>('')
	const [toast, setToast] = useState<boolean>(false)

	const kepRef = useRef<boolean>(true)

	function handleLoginClick() {
		kepRef.current
			? setCache('login_user', { name, password })
			: delCache('login_user')
		loginAction({ name, password }).then((res) => {
			if (res) {
				dispatch(fetchUserData(res.data.id))
				setCache('user', res.data)
				navigate('/main')
			} else {
				setMessage('登陆错误,请重试')
				setToast(true)
			}
		})
	}

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}

		setToast(false)
	}

	const handleFormChange = useCallback((type: string, value: string) => {
		if (type === 'name') setName(value)
		if (type === 'password') setPassword(value)
	}, [])
	const handleKeepAlive = useCallback((isKeep: boolean) => {
		kepRef.current = isKeep
	}, [])

	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	)

	return (
		<LoginWrapper>
			<div className="login-panel">
				<div className="left">
					<div className="logo-title">元蜂仓储</div>
					<div className="login-form">
						<LoginForm
							name={name}
							password={password}
							handleFormChange={handleFormChange}
							handleKeepAlive={handleKeepAlive}
						/>
					</div>
					<div className="login-btn">
						<Button
							variant="contained"
							sx={{
								bgcolor: '#ffb200',
								color: '#000',
								width: '280px',
								height: '50px',
								fontWeight: 700,
								fontSize: '16px',
								'&:hover': {
									bgcolor: '#ffb200',
								},
								'&:active': {
									bgcolor: '#f00',
									color: '#fff',
								},
							}}
							onClick={handleLoginClick}
						>
							立即登录
						</Button>
					</div>
				</div>
				<div className="right"></div>
			</div>

			<Snackbar
				open={toast}
				autoHideDuration={3000}
				message={message}
				anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
				action={action}
				onClose={handleClose}
			/>
		</LoginWrapper>
	)
})

export default Login
