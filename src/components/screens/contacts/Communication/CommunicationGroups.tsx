import { FC } from 'react';

import Heading from '@/components/ui/Heading/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Communication.module.scss';
import { ICommunicationGroups } from './communication.interface';

const CommunicationGroups: FC<ICommunicationGroups> = ({
	isBlockHidden,
	title,
	vkGroup,
	tgChannel,
	instagramChannel
}) => {
	const isGroupsExist: boolean =
		!!vkGroup?.length || !!tgChannel?.length || !!instagramChannel?.length;

	if (!isGroupsExist || isBlockHidden) return;

	return (
			<div className={styles.block}>
				{title ? <Heading className={styles.title}>{title}</Heading> : null}

				<div className={styles.contacts}>
					{vkGroup?.length ? (
						<a className={styles.contact} href={vkGroup} target="_blank">
							<FontAwesomeIcon name="FaVk" />
							<div className={styles.subtitle}>ВКонтакте</div>
						</a>
					) : null}

					{tgChannel?.length ? (
						<a className={styles.contact} href={tgChannel} target="_blank">
							<FontAwesomeIcon name="FaTelegram" />
							<div className={styles.subtitle}>Telegram</div>
						</a>
					) : null}

					{instagramChannel?.length ? (
						<a
							className={styles.contact}
							href={instagramChannel}
							target="_blank"
						>
							<FontAwesomeIcon name="FaInstagram" />
							<div className={styles.subtitle}>Instagram</div>
						</a>
					) : null}
				</div>
			</div>
	);
};

export default CommunicationGroups;
