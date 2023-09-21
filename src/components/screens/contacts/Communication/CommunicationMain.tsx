import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import { convertPhone } from '@/utils/data/convertPhone';

import styles from './Communication.module.scss';
import { ICommunicationMain } from './communication.interface';
import { WithAnimation } from '@/hoc/WithAnimation';

const CommunicationMain: FC<ICommunicationMain> = ({
	title,
	phone,
	email,
	address,
	addressLink,
	telegram,
	whatsapp
}) => {
	const isContactsExist: boolean =
		!!phone?.length ||
		!!email?.length ||
		!!address?.length ||
		!!telegram?.length ||
		!!whatsapp?.length;
	const cleanedPhoneNumber: string = convertPhone(phone || '');

	if (!isContactsExist) return;

	return (
		<WithAnimation>
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
						<a className={styles.contact} href={addressLink || ''} target="_blank">
							<FontAwesomeIcon name="FaLocationDot" />
							<div className={styles.subtitle}>Адрес</div>
							<div className={styles.text}>{address}</div>
						</a>
					) : null}

					{telegram?.length ? (
						<a className={styles.contact} href={telegram} target="_blank">
							<FontAwesomeIcon name="FaTelegram" />
							<div className={styles.subtitle}>Telegram</div>
						</a>
					) : null}

					{whatsapp?.length ? (
						<a className={styles.contact} href={whatsapp} target="_blank">
							<FontAwesomeIcon name="FaWhatsapp" />
							<div className={styles.subtitle}>WhatsApp</div>
						</a>
					) : null}
				</div>
			</div>
		</WithAnimation>
	);
};

export default CommunicationMain;
