import Link from 'next/link'
import { FC } from 'react'

import styles from './NotFound.module.scss'

const NotFound: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div className={styles.error}>404</div>
				<div className={styles.title}>Страница не найдена</div>
				<div className={styles.content}>
					К сожалению, запрашиваемая Вами страница не существует.
				</div>
				<Link href="/" className={styles.link}>
					На главную
				</Link>
			</div>
		</div>
	)
}

export default NotFound
