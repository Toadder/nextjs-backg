import { FC } from 'react';

import styles from './RentalWidget.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const RentalWidget: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.inner}>Здесь будет виджет аренды зала.</div>
			</div>
		</WithAnimation>
	);
};

export default RentalWidget;
