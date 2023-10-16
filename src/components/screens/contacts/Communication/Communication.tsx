import { FC, use } from 'react'

import styles from './Communication.module.scss'
import CommunicationGroups from './CommunicationGroups'
import CommunicationMain from './CommunicationMain'
import communicationService from './communication.service'

const Communication: FC = () => {
	const { error, communicationData } = use(communicationService.getData())

	if (error) {
		console.error(error)
		return
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
	)
}

export default Communication
