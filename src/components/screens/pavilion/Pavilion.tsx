import { FC } from 'react';

import BenefitSlider from './BenefitSlider/BenefitSlider';
import SimilarLounges from './SimilarLounges/SimilarLounges';
import AvailableEquipment from './AvailableEquipment/AvailableEquipment'
import Rates from './Rates/Rates'

const Pavilion: FC = () => {
	return (
		<>
			<BenefitSlider />
			<SimilarLounges />
			<AvailableEquipment />
			<Rates />
		</>
	);
};

export default Pavilion;
