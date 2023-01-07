import { imgRequire } from '@/utils/require'
import styled from '@emotion/styled'

export const LoginWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #fff;

	.login-panel {
		width: 958px;
		height: 516px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 20px rgb(93 93 93 / 33%);
		background-color: #fff;
		border-radius: 40px;
		display: flex;
		justify-content: space-between;

		.right {
			background-image: url(${imgRequire('loginbg')});
			background-position: 50%;
			background-repeat: no-repeat;
			background-size: cover;
			width: 560px;
			height: 516px;
		}

		.left {
			flex: 1;
			.logo-title {
				height: 160px;
				text-indent: -9999999px;
				background: url(${imgRequire('loginlogo')}) center center no-repeat;
				background-size: 160px;
			}

			.username,
			.password {
				height: 60px;
			}

			.login-btn {
				display: flex;
				justify-content: center;
				margin-top: 35px;
			}
		}
	}
`
