import styled from '@emotion/styled'

export const MenuListWrapper = styled.div`
	display: flex;
	flex-direction: column;

	.first-menu {
		display: flex;
		justify-content: space-between;
		&:hover {
			color: #f0f;
		}
		cursor: pointer;
		.title {
			display: flex;
			align-items: center;
			> span {
				margin-left: 20px;
				font-weight: 700;
			}
		}
	}

	.second-menu {
		padding-left: 45px;
		padding-top: 10px;
		color: #333;
		display: flex;
		flex-direction: column;
		gap: 10px;
		&.none {
			display: none;
		}
	}
`

export const SecondMenuWrapper = styled.div`
	.three-menu {
		display: flex;
		align-items: center;
		cursor: pointer;
		> a:hover {
			color: #f0f;
		}
		.menu-link {
			&:hover {
				color: #f0f;
			}
		}
		.active {
			color: #fc011a;
		}
	}
`
