import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Heading/Heading';

import { convertPhone } from '@/utils/data/convertPhone';

import { IPavilionMainContent } from '../../pavilion.interface';

import styles from './MainContent.module.scss';

const MainContent: FC<IPavilionMainContent> = ({
	title,
	content,
	phone,
	whatsapp
}) => {
	if (!title?.length) return;

	return (
		<div className={styles.root}>
			<Heading className={styles.title} type="h1" htmlContent={title} />
			<div className={styles.links}>
				{phone?.length ? (
					<a href={`tel:${convertPhone(phone)}`} className={styles.btn}>
						Забронировать
					</a>
				) : null}
				{whatsapp?.length ? (
					<div className={styles.link}>
						или в{' '}
						<a href={whatsapp || ''} target="_blank">
							WhatsApp
						</a>
					</div>
				) : null}
			</div>
			<Description htmlContent={content || ''} />
		</div>
	);
};

export default MainContent;
