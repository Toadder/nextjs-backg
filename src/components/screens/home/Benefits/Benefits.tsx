import { FC } from 'react';

import styles from './Benefits.module.scss';
import BenefitsItem from './BenefitsItem';
import { benefits } from './benefits.data';
import { WithAnimation } from '@/hoc/WithAnimation';

const Benefits: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.inner}>
					{benefits.map((benefit) => (
						<BenefitsItem key={benefit.title} {...benefit} />
					))}
				</div>
			</div>
		</WithAnimation>
	);
};

export default Benefits;
