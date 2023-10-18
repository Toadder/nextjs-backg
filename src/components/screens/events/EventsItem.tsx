import { FC, memo } from 'react'

import JournalCard from '@/components/shared/JournalCard/JournalCard'

import styles from './EventsItem.module.scss'
import { IEventsItem } from './events.interface'

const EventsItem: FC<IEventsItem> = ({
	index,
	masonryHeight,
	title,
	excerpt,
	link,
	image
}) => {
	if (!masonryHeight || !image) return

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
				label="Событие"
				imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 25rem"
				isImagePreloaded={index < 6}
			/>
		</div>
	)
}

export default memo(EventsItem)
