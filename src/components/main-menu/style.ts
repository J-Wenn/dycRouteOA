import { imgRequire } from '@/utils/require'
import styled from '@emotion/styled'

export const MenuWrapper = styled.div`
	.logo {
		display: block;
		width: 100%;
		height: 100px;
		background: url(${imgRequire('loginlogo')}) center center no-repeat;
		background-size: 80%;
		text-indent: -999999px;
	}

	.menu-list {
		display: flex;
		flex: 1;
		flex-direction: column;
		height: calc(100vh - 100px);
		gap: 20px;
		overflow-x: hidden;
		padding: 10px 20px 20px;
		box-sizing: border-box;
	}
`
