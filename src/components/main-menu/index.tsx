import MenuList from './c-cpns/menu-list'

import { useAppSelector } from '@/store'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { Link } from 'react-router-dom'
import { MenuWrapper } from './style'

interface IProps {
	children?: ReactNode
}

const MainMenu: FC<IProps> = memo(() => {
	const { role } = useAppSelector(
		(state) => ({
			role: state.login.role,
		}),
		shallowEqual
	)
	return (
		<MenuWrapper>
			<Link className="logo" to={'/main'}>
				CustomOA
			</Link>
			<div className="menu-list">
				{role?.map((item: any) => {
					return <MenuList key={item.url} menu={item} />
				})}
			</div>
		</MenuWrapper>
	)
})

export default MainMenu
