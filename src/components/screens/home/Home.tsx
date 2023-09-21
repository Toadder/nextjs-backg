import { FC } from 'react';

import Benefits from '@/components/screens/home/Benefits/Benefits';
import Booking from '@/components/shared/Booking/Booking';
import Tour from '@/components/shared/Tour/Tour';

import Objects from './Objects/Objects';

const Home: FC = () => {
	return (
		<>
			<Objects />
			<Benefits />
			<Tour />
			<Booking />
		</>
	);
};

export default Home;
