'use client'

import { JournalContext } from 'context/JournalContext/JournalContext'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import Masonry from 'react-masonry-css'

import Spinner from '@/components/ui/Spinner/Spinner'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import styles from './Journal.module.scss'
import JournalItem from './JournalItem'
import { IJournal, IJournalData } from './journal.interface'
import journalService from './journal.service'

const Journal: FC<IJournal> = ({ items, hasNextPage, endCursor }) => {
	if (!items?.length) return

	const { isJournalLoaded, loadJournal } = useContext(JournalContext)

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: false
	})
	const isVisible = Boolean(entry?.isIntersecting)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [articles, setArticles] = useState<IJournalData>(items)

	const [morePagesAvailable, setMorePagesAvailable] =
		useState<boolean>(hasNextPage)
	const [lastItemCursor, setLastItemCursor] = useState<string | null>(endCursor)

	useEffect(() => {
		if (!isJournalLoaded) loadJournal()
	}, [])

	useEffect(() => {
		if (isVisible && !isLoading) {
			setIsLoading(true)
			journalService
				.getData(lastItemCursor)
				.then(data => {
					const { journalData, hasNextPage, endCursor } = data

					setArticles(prevData => [...prevData, ...journalData])
					setMorePagesAvailable(hasNextPage)
					setLastItemCursor(endCursor)
				})
				.catch(error => {
					console.error(error)
					setMorePagesAvailable(false)
					alert('При загрузке данных произошла ошибка...')
				})
				.finally(() => setIsLoading(false))
		}
	}, [isVisible])

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
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
						if (!node?.acfJournalData?.articlepreivewheight) return

						return (
							<JournalItem
								masonryHeight={node?.acfJournalData?.articlepreivewheight}
								index={index}
								key={node?.id}
								title={node?.title}
								link={node?.uri}
								excerpt={node?.acfJournalData?.previewcontent}
								image={node?.acfJournalData?.previewimage}
							/>
						)
					})}
				</Masonry>
				{morePagesAvailable && (
					<div className={styles.spinnerContainer} ref={ref}>
						<Spinner />
					</div>
				)}
			</div>
		</div>
	)
}

export default Journal
