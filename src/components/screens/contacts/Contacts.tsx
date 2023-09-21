import { FC } from 'react'

import Tour from '@/components/shared/Tour/Tour'

import Communication from './Communication/Communication'

const Contacts: FC = () => {
	return (
		<>
			<Communication />
			<Tour />
		</>
	);
};

export default Contacts;
