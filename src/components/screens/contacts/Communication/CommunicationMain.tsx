import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import PopupBtn from '@/components/ui/PopupBtn/PopupBtn';

import { convertPhone } from '@/utils/data/convertPhone';

import styles from './Communication.module.scss';
import { ICommunicationMain } from './communication.interface';

const CommunicationMain: FC<ICommunicationMain> = ({
	isBlockHidden,
	title,
	phone,
	email,
	address,
	addressLink,
	youtube
}) => {
	const isContactsExist: boolean =
		!!phone?.length ||
		!!email?.length ||
		!!address?.length  ||
		!!youtube?.length;
	const cleanedPhoneNumber: string = convertPhone(phone || '');

	if (!isContactsExist || isBlockHidden) return;

	return (
			<div className={styles.block}>
				{title?.length ? (
					<Heading type="h1" className={styles.title}>
						{title}
					</Heading>
				) : null}
				<div className={styles.contacts}>
					{phone?.length ? (
						<a className={styles.contact} href={`tel:${cleanedPhoneNumber}`}>
							<FontAwesomeIcon name="FaPhoneAlt" />
							<div className={styles.subtitle}>Телефон</div>
							<div className={styles.text}>{phone}</div>
						</a>
					) : null}

					{email?.length ? (
						<a className={styles.contact} href={`mailto:${email}`}>
							<FontAwesomeIcon name="FaEnvelope" />
							<div className={styles.subtitle}>Почта</div>
							<div className={styles.text}>{email}</div>
						</a>
					) : null}

					{address?.length ? (
						<a
							className={styles.contact}
							href={addressLink || ''}
							target="_blank"
						>
							<FontAwesomeIcon name="FaLocationDot" />
							<div className={styles.subtitle}>Адрес</div>
							<div className={styles.text}>{address}</div>
						</a>
					) : null}

					{youtube?.length ? (
						<a className={styles.contact} href={youtube} target="_blank">
							<FontAwesomeIcon name="FaYoutube" />
							<div className={styles.subtitle}>Youtube</div>
						</a>
					) : null}

					<PopupBtn popupName='messenger' className={styles.contact}>
						<FontAwesomeIcon name="SiMessenger" />
						<div className={styles.subtitle}>Мессенджер</div>
					</PopupBtn>
				</div>
			</div>
	);
};

export default CommunicationMain;
