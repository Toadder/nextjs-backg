'use client'

import cn from 'clsx'
import { FC } from 'react'

import styles from './Journal.module.scss'
import { ARTICLES_FILTERS } from './journal.constant'
import { IJournalFilters } from './journal.interface'

const JournalFilter: FC<IJournalFilters> = ({
	currentFilter,
	updateFilterData
}) => {
	return (
		<div className={styles.filters}>
			<ul className={styles.filtersList}>
				{ARTICLES_FILTERS.map(filter => (
					<li
						key={filter.value}
						onClick={() => updateFilterData(filter.value)}
					>
						<button
							className={cn(styles.filtersButton, {
								[styles.active]: filter.value === currentFilter
							})}
							type="button"
						>
							{filter.label}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default JournalFilter
