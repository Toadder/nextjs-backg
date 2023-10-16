import cn from 'clsx'
import { FC } from 'react'

import styles from './Heading.module.scss'
import { IHeading } from './heading.interface'

const Heading: FC<IHeading> = ({
	children,
	htmlContent,
	type = 'h2',
	className = ''
}) => {
	if (children) {
		return type === 'h1' ? (
			<h1 className={cn(styles.heading, className)}>{children}</h1>
		) : (
			<h2 className={cn(styles.heading, className)}>{children}</h2>
		)
	}

	if (!htmlContent?.length) return

	return type === 'h1' ? (
		<h1
			className={cn(styles.heading, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	) : (
		<h2
			className={cn(styles.heading, className)}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	)
}

export default Heading
