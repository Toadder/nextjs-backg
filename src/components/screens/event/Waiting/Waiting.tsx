import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import { IEventWaiting } from '../event.interface'

import styles from './Waiting.module.scss'
import WaitingItem from './WaitingItem'

const Waiting: FC<IEventWaiting> = ({ isBlockHidden, title, items }) => {
	if (isBlockHidden || !items?.length) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}

				<div className={styles.items}>
					{items.map(item => (
						<WaitingItem
							key={item?.content}
							icon={item?.icon}
							text={item?.content}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Waiting
