import { FC, use } from 'react';

import { IGeneralSettings } from '@/shared/types/general.types';

import client from '@/config/apollo/client';
import { GET_PAVILION_DATA } from '@/config/apollo/queries/get-pavilion-data';

import AvailableEquipment from './AvailableEquipment/AvailableEquipment';
import BenefitSlider from './BenefitSlider/BenefitSlider';
import Main from './Main/Main';
import Rates from './Rates/Rates';
import SimilarLounges from './SimilarLounges/SimilarLounges';
import { IPavilionData } from './pavilion.interface';
import { notFound } from 'next/navigation'

const getData = async (slug: string) => {
	const { error, data } = await client.query({
		query: GET_PAVILION_DATA,
		variables: { slug }
	});

	if(!data?.pavilion) notFound();

	const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings;
	const pavilionData: IPavilionData = data?.pavilion?.acfPavilionFields;
	return { error, generalSettings, pavilionData };
};

const Pavilion: FC<{ slug: string }> = ({ slug }) => {
	const { error, generalSettings, pavilionData } = use(getData(slug));

	if (error) {
		console.log(error);
		return;
	}

	return (
		<>
			<BenefitSlider benefitSlider={pavilionData?.benefitslider} />
			<Main
				title={pavilionData?.maintitle}
				content={pavilionData?.maincontent}
				slider={pavilionData?.mainslider}
				layout={pavilionData?.mainlayout}
				phone={generalSettings?.phone}
				whatsapp={generalSettings?.whatsapp}
			/>
			<SimilarLounges
				title={pavilionData?.titlesimilarlounges}
				similarLounges={pavilionData?.similarlounges}
			/>
			<AvailableEquipment
				title={pavilionData?.titleequipment}
				equipmentItems={pavilionData?.equipment}
			/>
			<Rates
				title={pavilionData?.titlerates}
				content={pavilionData?.contentrates}
				phone={generalSettings?.phone}
				rates={pavilionData?.rates}
			/>
		</>
	);
};

export default Pavilion;
