import { FC } from 'react';

import AnchorBtn from '@/components/ui/AnchorBtn/AnchorBtn';
import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import LazyVideo from '@/components/ui/LazyVideo/LazyVideo';
import PopupBtn from '@/components/ui/PopupBtn/PopupBtn';

import { ILoungeTop } from '../../lounge.interface';

import styles from './MainTop.module.scss';

const MainTop: FC<ILoungeTop> = ({
	isBlockHidden,
	title,
	content,
	videoMp4,
	videoWebm
}) => {
	if (!title?.length || isBlockHidden) return;

	return (
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
					<div className={styles.wrapper}>
						<div className={styles.links}>
							<AnchorBtn
								blockId="booking"
								text="Забронировать"
								className={styles.btn}
							/>
							<PopupBtn className={styles.link} popupName="messenger">
								Написать
							</PopupBtn>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default MainTop;
