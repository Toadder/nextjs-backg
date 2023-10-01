import { FC } from 'react';

import { ILoungeMain } from '../lounge.interface';

import styles from './Main.module.scss';
import MainBottom from './MainBottom/MainBottom';
import MainTop from './MainTop/MainTop';

const Main: FC<ILoungeMain> = ({
	isMainHidden,
	title,
	mainContent,
	videoMp4,
	videoWebm,
	whatsapp,
	isLayoutHidden,
	layout,
	layoutContent,
	properties
}) => {
	if(isMainHidden && isLayoutHidden) return;

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<MainTop
					isBlockHidden={isMainHidden}
					title={title}
					content={mainContent}
					videoMp4={videoMp4}
					videoWebm={videoWebm}
					whatsapp={whatsapp}
				/>
				<MainBottom
					isBlockHidden={isLayoutHidden}
					layout={layout}
					content={layoutContent}
					properties={properties}
				/>
			</div>
		</section>
	);
};

export default Main;
