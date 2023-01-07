import theme from '@/assets/theme/theme'
import { Dashboard, ExpandLess, ExpandMore } from '@mui/icons-material'
import { ThemeProvider, useTheme } from '@mui/material'
import classNames from 'classnames'
import { FC, memo, ReactNode, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuListWrapper, SecondMenuWrapper } from './styled'

interface IProps {
	children?: ReactNode
	menu: any
}

function SecondMenu(props: IProps) {
	const { menu } = props
	const location = useLocation()
	const theme = useTheme()
	return (
		<SecondMenuWrapper theme={theme}>
			<div className="three-menu">
				{menu.children ? (
					<NavLink to={menu.url}>{menu.name}</NavLink>
				) : (
					<NavLink to={menu.url}>{menu.name}</NavLink>
				)}
			</div>
		</SecondMenuWrapper>
	)
}

const MenuList: FC<IProps> = memo((props) => {
	const { menu } = props
	const location = useLocation()
	const [showChild, setShowChild] = useState(
		location.pathname.includes(menu.url)
	)
	return (
		<MenuListWrapper>
			<div className="first-menu" onClick={() => setShowChild(!showChild)}>
				<div className="title">
					<Dashboard />
					<span>{menu?.name}</span>
				</div>
				{showChild ? <ExpandLess /> : <ExpandMore />}
			</div>
			<ThemeProvider theme={theme}>
				{
					<div className={classNames('second-menu', { none: !showChild })}>
						{menu.children &&
							menu.children.map((item: any) => {
								return <SecondMenu key={item.url} menu={item} />
							})}
					</div>
				}
			</ThemeProvider>
		</MenuListWrapper>
	)
})

export default MenuList
