'use client'

import { JournalContext } from 'context/JournalContext/JournalContext'
import { FC, useContext, useEffect } from 'react'
import Masonry from 'react-masonry-css'

import EventsItem from '../events/EventsItem'

import styles from './Journal.module.scss'
import JournalItem from './JournalItem'
import { IJournalGrid } from './journal.interface'

const JournalGrid: FC<IJournalGrid> = ({ articles }) => {
	const { isJournalLoaded, loadJournal } = useContext(JournalContext)

	useEffect(() => {
		if (!isJournalLoaded) loadJournal()
	}, [])

	return (
		<Masonry
			style={{ opacity: Number(isJournalLoaded) }}
			breakpointCols={{
				default: 3,
				1024: 2,
				768: 1
			}}
			className={styles.masonryContainer}
			columnClassName={styles.masonryColumn}
		>
			{articles?.map(({ node }, index) => {
				if (node?.__typename === 'Event')
					return (
						<EventsItem
							masonryHeight={node?.acfEventData?.dynamicpreivewheight || 0}
							index={index}
							key={node?.id}
							title={node?.title || ''}
							link={node?.uri || ''}
							excerpt={node?.acfEventData?.previewcontent || ''}
							image={node?.acfEventData?.previewimage || null}
						/>
					)
				else if (node.__typename === 'Journal')
					return (
						<JournalItem
							masonryHeight={node?.acfJournalData?.dynamicpreivewheight || 0}
							index={index}
							key={node?.id}
							title={node?.title || ''}
							link={node?.uri || ''}
							excerpt={node?.acfJournalData?.previewcontent || ''}
							image={node?.acfJournalData?.previewimage || null}
						/>
					)
			})}
		</Masonry>
	)
}

export default JournalGrid
