import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
	children?: ReactNode
}

const NotFound: FC<IProps> = memo(() => {
	return <>NotFound</>
})

export default NotFound
