import { FC } from 'react';

import styles from './Lounges.module.scss';
import LoungesItem from './LoungesItem';
import { lounges } from './lounges.data';

const Lounges: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				{lounges.map((lounge, index) => (
					<LoungesItem key={lounge.title} index={index} {...lounge} />
				))}
			</div>
		</div>
	);
};

export default Lounges;
