'use client'

import { FC, useEffect, useRef, useState } from 'react'

import Spinner from '@/components/ui/Spinner/Spinner'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import styles from './Journal.module.scss'
import JournalGrid from './JournalGrid'
import { IJournal, IJournalNode } from './journal.interface'
import journalService from './journal.service'

const Journal: FC<IJournal> = ({
	items,
	articleCursor,
	eventCursor,
	isNextArticlesExist,
	isNextEventsExist
}) => {
	if (!items?.length) return

	const ref = useRef<HTMLDivElement | null>(null)
	const entry = useIntersectionObserver(ref, {
		freezeOnceVisible: false
	})
	const isVisible = Boolean(entry?.isIntersecting)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [articles, setArticles] = useState<IJournalNode[]>(items)

	const [lastArticleCursor, setLastArticleCursor] = useState<string | null>(
		articleCursor
	)
	const [lastEventCursor, setLastEventCursor] = useState<string | null>(
		eventCursor
	)

	const [isNextArticles, setIsNextArticles] =
		useState<boolean>(isNextArticlesExist)
	const [isNextEvents, setIsNextEvents] = useState<boolean>(isNextEventsExist)

	useEffect(() => {
		if (isVisible && !isLoading) {
			setIsLoading(true)

			journalService
				.getData(lastArticleCursor, lastEventCursor)
				.then(data => {
					const {
						items,
						articleCursor,
						eventCursor,
						isNextArticlesExist,
						isNextEventsExist
					} = data

					console.log(data)

					setArticles(prevData => [...prevData, ...items])

					setLastArticleCursor(articleCursor)
					setLastEventCursor(eventCursor)

					setIsNextArticles(isNextArticlesExist)
					setIsNextEvents(isNextEventsExist)
				})
				.catch(error => {
					console.error(error)

					alert('При загрузке данных произошла ошибка...')

					setIsNextArticles(false)
					setIsNextEvents(false)
				})
				.finally(() => setIsLoading(false))
		}
	}, [isVisible])

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<JournalGrid articles={articles} />
				{isNextArticles || isNextEvents ? (
					<div className={styles.spinnerContainer} ref={ref}>
						<Spinner />
					</div>
				) : null}
			</div>
		</div>
	)
}

export default Journal
