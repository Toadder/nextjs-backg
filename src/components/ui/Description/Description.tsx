import cn from 'clsx'
import { FC } from 'react'

import styles from './Descripiton.module.scss'
import { IDescription } from './description.interface'

const Description: FC<IDescription> = ({
	children,
	htmlContent,
	className = ''
}) => {
	if (children)
		return <div className={cn(styles.description, className)}>{children}</div>

	if (!htmlContent?.length) return

	return (
		<div
			className={cn(styles.description, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	)
}

export default Description
