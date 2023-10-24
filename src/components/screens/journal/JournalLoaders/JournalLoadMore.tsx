'use client'

import cn from 'clsx'
import { forwardRef } from 'react'

import Spinner from '@/components/ui/Spinner/Spinner'

import { IJournalLoadMore } from '../journal.interface'

import styles from './JournalLoaders.module.scss'

const JournalLoadMore = forwardRef<HTMLDivElement, IJournalLoadMore>(
	({ isDisabled, isNextArticles, isNextEvents }, ref) => {
		const isHidden: boolean = isDisabled || (!isNextArticles && !isNextEvents)

		return (
			<div
				className={cn(styles.loadMoreSpinner, {
					[styles.disabled]: isHidden
				})}
				ref={ref}
			>
				<Spinner />
			</div>
		)
	}
)

// isArticlesLoading || (!isNextArticles && !isNextEvents)

export default JournalLoadMore
