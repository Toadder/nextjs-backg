import Image from 'next/image'
import { FC } from 'react'

import { IEventWaitingItem } from '../event.interface'

import styles from './Waiting.module.scss'

const WaitingItem: FC<IEventWaitingItem> = ({ icon, text }) => {
	if (!icon?.sourceUrl?.length || !text?.length) return

	return (
		<div className={styles.item}>
			<Image
				className={styles.icon}
				src={icon?.sourceUrl}
				width={48}
				height={48}
				alt={icon?.altText || ''}
			/>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default WaitingItem
