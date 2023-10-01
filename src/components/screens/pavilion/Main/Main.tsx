import { FC } from 'react';

import { IPavilionMain } from '../pavilion.interface';

import styles from './Main.module.scss';
import MainContent from './MainContent/MainContent';
import MainMedia from './MainMedia/MainMedia';
import { WithAnimation } from '@/hoc/WithAnimation';

const Main: FC<IPavilionMain> = ({
	isBlockHidden,
	title,
	content,
	slider,
	layout,
	phone,
	whatsapp
}) => {
	if(isBlockHidden) return;

	return (
		<WithAnimation>
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
		</WithAnimation>
	);
};

export default Main;
