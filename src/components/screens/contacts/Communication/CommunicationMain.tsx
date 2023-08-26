import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Communication.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const CommunicationMain: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.block}>
				<Heading type="h1" className={styles.title}>
					Наши контакты
				</Heading>
				<div className={styles.contacts}>
					<a className={styles.contact} href="tel:74994554504">
						<FontAwesomeIcon name="FaPhoneAlt" />
						<div className={styles.subtitle}>Телефон</div>
						<div className={styles.text}>+7 (499) 455-45-04</div>
					</a>
					<a className={styles.contact} href="mailto:info@backg.ru">
						<FontAwesomeIcon name="FaEnvelope" />
						<div className={styles.subtitle}>Почта</div>
						<div className={styles.text}>info@backg.ru</div>
					</a>
					<a className={styles.contact} href="" target="_blank">
						<FontAwesomeIcon name="FaLocationDot" />
						<div className={styles.subtitle}>Адрес</div>
						<div className={styles.text}>г. Москва, ул. Генерала Дорохова, 28А</div>
					</a>
					<a
						className={styles.contact}
						href="https://t.me/backgstudio"
						target="_blank"
					>
						<FontAwesomeIcon name="FaTelegram" />
						<div className={styles.subtitle}>Telegram</div>
					</a>
					<a className={styles.contact} href="" target="_blank">
						<FontAwesomeIcon name="FaWhatsapp" />
						<div className={styles.subtitle}>WhatsApp</div>
					</a>
				</div>
			</div>
		</WithAnimation>
	);
};

export default CommunicationMain;
