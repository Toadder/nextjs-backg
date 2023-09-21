import { FC } from 'react';

import AnchorBtn from '@/components/ui/AnchorBtn/AnchorBtn';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import LazyVideo from '@/components/ui/LazyVideo/LazyVideo';

import { ILoungeTop } from '../../lounge.interface';

import styles from './MainTop.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const MainTop: FC<ILoungeTop> = ({ title, content, videoMp4, videoWebm }) => {
	if (!title?.length) return;

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div className={styles.content}>
					<Heading type="h1" className={styles.title} htmlContent={title} />
					<Description htmlContent={content || ''} />
				</div>
				{videoMp4?.mediaItemUrl?.length || videoWebm?.mediaItemUrl?.length ? (
					<div className={styles.media}>
						<LazyVideo
							videoMp4={videoMp4?.mediaItemUrl || ''}
							videoWebm={videoWebm?.mediaItemUrl || ''}
						/>
						<AnchorBtn
							selector="#booking"
							text="Забронировать"
							className={styles.btn}
						/>
					</div>
				) : null}
			</div>
		</WithAnimation>
	);
};

export default MainTop;
