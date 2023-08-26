import { FC } from 'react';

import styles from './Communication.module.scss';
import CommunicationMain from './CommunicationMain';
import CommunicationGroups from './CommunicationGroups'

const Communication: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<CommunicationMain />
				<CommunicationGroups />
			</div>
		</section>
	);
};

export default Communication;
