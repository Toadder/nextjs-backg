import { FC } from 'react';

import styles from './Main.module.scss';
import MainContent from './MainContent/MainContent';
import MainMedia from './MainMedia/MainMedia';
import { WithAnimation } from '@/hoc/WithAnimation';

const Main: FC = () => {
	return (
		<WithAnimation>
			<section className={styles.root}>
				<div className={styles.inner}>
					<MainMedia />
					<MainContent />
				</div>
			</section>
		</WithAnimation>
	);
};

export default Main;
