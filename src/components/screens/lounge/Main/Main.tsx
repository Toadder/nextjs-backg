import { FC } from 'react';

import { ILoungeMain } from '../lounge.interface';

import styles from './Main.module.scss';
import MainBottom from './MainBottom/MainBottom';
import MainTop from './MainTop/MainTop';

const Main: FC<ILoungeMain> = ({
	title,
	mainContent,
	videoMp4,
	videoWebm,
	layout,
	layoutContent,
	properties
}) => {
	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<MainTop
					title={title}
					content={mainContent}
					videoMp4={videoMp4}
					videoWebm={videoWebm}
				/>
				<MainBottom
					layout={layout}
					content={layoutContent}
					properties={properties}
				/>
			</div>
		</section>
	);
};

export default Main;
