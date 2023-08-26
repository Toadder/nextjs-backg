import { FC } from 'react';

import styles from './Main.module.scss';
import MainBottom from './MainBottom/MainBottom';
import MainTop from './MainTop/MainTop';

const Main: FC = () => {
	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<MainTop />
				<MainBottom />
			</div>
		</section>
	);
};

export default Main;
