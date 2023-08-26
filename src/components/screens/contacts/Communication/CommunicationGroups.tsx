import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Communication.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const CommunicationGroups: FC = () => {
	return (
		<WithAnimation>
			<div className={styles.block}>
				<Heading className={styles.title}>Наши сообщества</Heading>
				<div className={styles.contacts}>
					<a className={styles.contact} href="" target="_blank">
						<FontAwesomeIcon name="FaVk" />
						<div className={styles.subtitle}>ВКонтакте</div>
					</a>
					<a className={styles.contact} href="" target="_blank">
						<FontAwesomeIcon name="FaTelegram" />
						<div className={styles.subtitle}>Telegram</div>
					</a>
					<a className={styles.contact} href="" target="_blank">
						<FontAwesomeIcon name="FaInstagram" />
						<div className={styles.subtitle}>Запрещённограм</div>
					</a>
				</div>
			</div>
		</WithAnimation>
	);
};

export default CommunicationGroups;
