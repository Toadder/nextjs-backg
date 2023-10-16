import { FC } from 'react'

import JournalCard from '@/components/shared/JournalCard/JournalCard'

import styles from './Journal.module.scss'
import { IJournalItem } from './journal.interface'

const JournalItem: FC<IJournalItem> = ({
	index,
	title,
	excerpt,
	link,
	image,
	masonryHeight
}) => {
	return (
		<div
			className={styles.wrapper}
			style={{
				minHeight: `${masonryHeight / 16}rem`
			}}
		>
			<JournalCard
				title={title}
				excerpt={excerpt}
				link={link}
				image={image}
				imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 25rem"
				isImagePreloaded={index < 6}
			/>
		</div>
	)
}

export default JournalItem
