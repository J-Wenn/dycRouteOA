import styled from '@emotion/styled'

export const MainWrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	background-color: #fff;

	.main-left {
		min-width: 210px;
		box-shadow: 0 0 8px 1px #eee;
	}

	.main-right {
		flex: 1;
		min-width: 1000px;
		.main-header {
			height: 50px;
			box-shadow: 5px 0 10px 2px #eee;
			padding: 0 10px;
		}
		.main-body {
			margin: 10px 20px 0;
			box-shadow: 0 0 10px 1px #eee;
			height: calc(100vh - 65px);
			border-radius: 16px;
			padding: 10px;
			box-sizing: border-box;
		}
	}
`
