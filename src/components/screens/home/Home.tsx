import { FC } from 'react';

import Benefits from '@/components/screens/home/Benefits/Benefits';
import Booking from '@/components/shared/Booking/Booking';
import Tour from '@/components/shared/Tour/Tour';

import Objects from './Objects/Objects';
import { DocumentNode } from 'graphql'
import { IObjectsQuery } from './Objects/objects.interface'

const Home: FC<IObjectsQuery> = ({ objectsQuery, page }) => {
	return (
		<>
			<Objects objectsQuery={objectsQuery} page={page} />
			<Benefits />
			<Tour />
			<Booking />
		</>
	);
};

export default Home;
