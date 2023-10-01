import { FC, use } from 'react';

import client from '@/config/apollo/client';
import { GET_CONTACTS_DATA } from '@/config/apollo/queries/get-contacts-data';

import styles from './Communication.module.scss';
import CommunicationGroups from './CommunicationGroups';
import CommunicationMain from './CommunicationMain';
import { ICommunicationData } from './communication.interface';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_CONTACTS_DATA });

	const communicationData: ICommunicationData = {
		...data?.fields?.acfContactsFields,
		...data?.socials?.acfSettings
	};

	return { error, communicationData };
};

const Communication: FC = () => {
	const { error, communicationData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<CommunicationMain
					isBlockHidden={communicationData?.issocialhidden}
					title={communicationData?.socialtitle}
					phone={communicationData?.phone}
					email={communicationData?.email}
					address={communicationData?.address}
					addressLink={communicationData?.addresslink}
					youtube={communicationData?.youtube}
				/>
				<CommunicationGroups
					isBlockHidden={communicationData?.iscommunityhidden}
					title={communicationData?.communitytitle}
					vkGroup={communicationData?.vkgroup}
					tgChannel={communicationData?.tgchannel}
					instagramChannel={communicationData?.instagramchannel}
				/>
			</div>
		</section>
	);
};

export default Communication;
