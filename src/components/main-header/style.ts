import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: inherit;

	.userinfo {
		display: flex;
		align-items: center;
		margin-right: 40px;
		gap: 20px;
		.line {
			display: block;
			height: 25px;
			width: 1px;
			background-color: #ddd;
			box-shadow: 0 0 0.5px 0.5px #ddd;
		}
	}
`
