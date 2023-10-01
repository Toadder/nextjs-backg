import { FC } from 'react';

import { IPavilionMain } from '../pavilion.interface';

import styles from './Main.module.scss';
import MainContent from './MainContent/MainContent';
import MainMedia from './MainMedia/MainMedia';

const Main: FC<IPavilionMain> = ({
	isBlockHidden,
	title,
	content,
	slider,
	layout,
	phone,
	whatsapp
}) => {
	if (isBlockHidden) return;

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<MainMedia slider={slider} layout={layout} />
				<MainContent
					title={title}
					content={content}
					phone={phone}
					whatsapp={whatsapp}
				/>
			</div>
		</section>
	);
};

export default Main;
