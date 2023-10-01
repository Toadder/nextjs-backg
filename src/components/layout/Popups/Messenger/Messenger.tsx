import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import PopupCard from '@/components/ui/PopupCard/PopupCard';

import styles from './Messenger.module.scss';
import { IMessenger } from './messenger.interface';

const Messenger: FC<IMessenger> = ({ whatsapp, telegram }) => {
	if (!whatsapp?.length && !telegram?.length)
		return (
			<PopupCard currentPopup="messenger" className={styles.root}>
				<p className={styles.error}>
					К сожалению, мессенджеры отсутствуют...
				</p>
			</PopupCard>
		);

	return (
		<PopupCard currentPopup="messenger" className={styles.root}>
			<div className={styles.title}>Мессенджеры</div>
			<div className={styles.socials}>
				{telegram?.length ? (
					<a className={styles.social} href={telegram || ''}>
						<FontAwesomeIcon name="FaTelegram" />
					</a>
				) : null}

				{whatsapp?.length ? (
					<a className={styles.social} href={whatsapp || ''}>
						<FontAwesomeIcon name="FaWhatsapp" />
					</a>
				) : null}
			</div>
		</PopupCard>
	);
};

export default Messenger;
