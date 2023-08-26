import { FC } from 'react';

import Booking from '@/components/shared/Booking/Booking';
import RentalWidget from '@/components/shared/RentalWidget/RentalWidget';
import Main from './Main/Main'
import IntroSlider from '@/components/shared/IntroSlider/IntroSlider'
import ExampleSlider from './ExampleSlider/ExampleSlider'

const Lounge: FC = (params) => {
	return (
		<>
			<IntroSlider />
			<Main />
			<ExampleSlider />
			<Booking />
			<RentalWidget />
		</>
	);
};

export default Lounge;
