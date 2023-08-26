import { FC } from 'react';

import styles from './Journal.module.scss';
import JournalItem from './JournalItem';
import { journalItems } from './journal.data';

const Journal: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{journalItems.map((journal) => (
					<JournalItem key={journal.title} {...journal} />
				))}
			</div>
		</div>
	);
};

export default Journal;
