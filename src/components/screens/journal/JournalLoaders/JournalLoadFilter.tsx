import { FC } from 'react'

import Spinner from '@/components/ui/Spinner/Spinner'

import { IJournalLoadFilter } from '../journal.interface'

import styles from './JournalLoaders.module.scss'

const JournalLoadFilter: FC<IJournalLoadFilter> = ({ isActive }) => {
	if (!isActive) return

	return (
		<div className={styles.loadFilterSpinner}>
			<Spinner />
		</div>
	)
}

export default JournalLoadFilter
