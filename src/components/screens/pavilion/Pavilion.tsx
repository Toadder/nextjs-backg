import { FC } from 'react';

import AvailableEquipment from './AvailableEquipment/AvailableEquipment';
import BenefitSlider from './BenefitSlider/BenefitSlider';
import Rates from './Rates/Rates';
import SimilarLounges from './SimilarLounges/SimilarLounges';
import Main from './Main/Main'

const Pavilion: FC = () => {
	return (
		<>
			<BenefitSlider />
			<Main />
			<SimilarLounges />
			<AvailableEquipment />
			<Rates />
		</>
	);
};

export default Pavilion;
