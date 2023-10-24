'use client'

import cn from 'clsx'
import { FC, useEffect, useRef, useState } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import styles from './Journal.module.scss'
import JournalFilters from './JournalFilters'
import JournalGrid from './JournalGrid'
import JournalLoaders from './JournalLoaders/JournalLoaders'
import { IJournal, IJournalNode, TFilterValue } from './journal.interface'
import journalService from './journal.service'

const Journal: FC<IJournal> = ({
	items,
	articleCursor,
	eventCursor,
	isNextArticlesExist,
	isNextEventsExist
}) => {
	if (!items?.length) return

	// Infinite scroll
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
	// /Infinite scroll

	// Filters
	const [currentFilter, setCurrentFilter] = useState<TFilterValue>('all')
	const [isArticlesLoading, setIsArticlesLoading] = useState<boolean>(false)
	// /Filters

	// Filters functionality
	const updateFilterData = async (value: TFilterValue) => {
		if (value === currentFilter) return

		setIsArticlesLoading(true)
		setCurrentFilter(value)

		try {
			const {
				error,
				items,
				isNextArticlesExist,
				isNextEventsExist,
				articleCursor,
				eventCursor
			} = await journalService.getData(value)

			if (error) throw new Error('Apollo Graphql Error')

			setArticles(items)

			setLastArticleCursor(articleCursor)
			setLastEventCursor(eventCursor)

			setIsNextArticles(isNextArticlesExist)
			setIsNextEvents(isNextEventsExist)
		} catch (error) {
			console.error(error)
			alert('При загрузке данных произошла ошибка...')

			setIsNextArticles(false)
			setIsNextEvents(false)
		} finally {
			setIsArticlesLoading(false)
		}
	}

	// Infinite scroll functionality
	useEffect(() => {
		if (!isNextArticles && !isNextEvents) return

		if (isVisible && !isLoading) {
			setIsLoading(true)

			journalService
				.getData(currentFilter, lastArticleCursor, lastEventCursor)
				.then(data => {
					const {
						error,
						items,
						articleCursor,
						eventCursor,
						isNextArticlesExist,
						isNextEventsExist
					} = data

					if (error) throw new Error('Apollo Graphql Error')

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
		<div
			className={cn(styles.root, {
				[styles.loading]: isArticlesLoading
			})}
		>
			<div className={styles.inner}>
				<JournalFilters
					currentFilter={currentFilter}
					updateFilterData={updateFilterData}
				/>

				{!isArticlesLoading && <JournalGrid articles={articles} />}

				<JournalLoaders.JournalLoadMore
					ref={ref}
					isDisabled={isArticlesLoading}
					isNextArticles={isNextArticles}
					isNextEvents={isNextEvents}
				/>

				<JournalLoaders.JournalLoadFilter isActive={isArticlesLoading} />
			</div>
		</div>
	)
}

export default Journal
