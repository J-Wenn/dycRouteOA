import AccountCircle from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import { FC, memo, ReactNode, useState } from 'react'

interface IProps {
	children?: ReactNode
	name: string
	password: string
	handleFormChange: (type: string, value: string) => void
	handleKeepAlive: (isKeep: boolean) => void
}

const LoginForm: FC<IProps> = memo((props) => {
	const [showPwd, setShowPwd] = useState(false)

	function handleFormChange(type: string, value: string) {
		props.handleFormChange(type, value)
	}

	function handleKeepAlive(isKeep: boolean) {
		props.handleKeepAlive(isKeep)
	}

	return (
		<>
			<Box
				className="username"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<AccountCircle sx={{ color: 'action.active', mr: 2 }} />
				<TextField
					label="账号"
					variant="standard"
					sx={{ width: '240px' }}
					value={props.name}
					onChange={({ target }) => handleFormChange('name', target.value)}
				/>
			</Box>
			<Box
				className="password"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					mt: 2,
				}}
			>
				<LockIcon sx={{ color: 'action.active', mr: 2 }} />
				<FormControl variant="standard">
					<InputLabel htmlFor="adornment-password">密码</InputLabel>
					<Input
						id="adornment-password"
						type={showPwd ? 'text' : 'password'}
						value={props.password}
						onChange={({ target }) =>
							handleFormChange('password', target.value)
						}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={() => setShowPwd(!showPwd)}
								>
									{showPwd ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Box>
			<Box
				sx={{
					pl: 6,
					mt: 2,
				}}
			>
				<Checkbox onChange={({ target }) => handleKeepAlive(target.checked)} />
				<span>记住密码</span>
			</Box>
		</>
	)
})

export default LoginForm
