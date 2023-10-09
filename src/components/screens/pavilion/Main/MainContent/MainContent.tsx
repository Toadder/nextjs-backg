import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';
import PopupBtn from '@/components/ui/PopupBtn/PopupBtn';

import { convertPhone } from '@/utils/data/convertPhone';

import { IPavilionMainContent } from '../../pavilion.interface';

import styles from './MainContent.module.scss';

const MainContent: FC<IPavilionMainContent> = ({ title, content, phone }) => {
	if (!title?.length) return;

	return (
		<div className={styles.root}>
			<Heading className={styles.title} type="h1" htmlContent={title} />
			<div className={styles.wrapper}>
				<div className={styles.links}>
					{phone?.length ? (
						<a href={`tel:${convertPhone(phone)}`} className={styles.btn}>
							Забронировать <br /> (звонок в студию)
						</a>
					) : null}
					<PopupBtn className={styles.link} popupName="messenger">
						Написать
					</PopupBtn>
				</div>
			</div>
			<Description htmlContent={content || ''} />
		</div>
	);
};

export default MainContent;
