import { FC } from 'react';

import Benefits from '@/components/screens/home/Benefits/Benefits';
import Booking from '@/components/shared/Booking/Booking';
import Tour from '@/components/shared/Tour/Tour';

import Lounges from './Lounges/Lounges';

const Home: FC = () => {
	return (
		<>
			<Lounges />
			<Benefits />
			<Tour />
			<Booking />
		</>
	);
};

export default Home;
