import Image from 'next/image';
import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Tour.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const Tour: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.root}>
				<a href="" className={styles.link}>
					<Image
						className={styles.bg}
						src="/static/shared/tour/main.webp"
						fill
						alt=""
						sizes="100vw"
					/>
					<div className={styles.inner}>
						<div className={styles.text}>360° ТУР</div>
						<FontAwesomeIcon name="FaHandPointUp" />
					</div>
				</a>
			</div>
		</WithAnimation>
	);
};

export default Tour;
