import { notFound } from 'next/navigation';
import { FC, use } from 'react';

import SimilarObjects from '@/components/shared/SimilarLounges/SimilarObjects';

import { IGeneralSettings } from '@/shared/types/general.types';

import client from '@/config/apollo/client';
import { GET_PAVILION_DATA } from '@/config/apollo/queries/get-pavilion-data';

import AvailableEquipment from './AvailableEquipment/AvailableEquipment';
import BenefitSlider from './BenefitSlider/BenefitSlider';
import Main from './Main/Main';
import Rates from './Rates/Rates';
import { IPavilionData } from './pavilion.interface';

const getData = async (slug: string) => {
	const { error, data } = await client.query({
		query: GET_PAVILION_DATA,
		variables: { slug }
	});

	if (!data?.pavilion) notFound();

	const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings;
	const pavilionData: IPavilionData = data?.pavilion?.acfPavilionFields;
	return { error, generalSettings, pavilionData };
};

const Pavilion: FC<{ slug: string }> = ({ slug }) => {
	const { error, generalSettings, pavilionData } = use(getData(slug));

	if (error) {
		console.error(error);
		return;
	}

	return (
		<>
			<BenefitSlider
				isBlockHidden={pavilionData?.isbenefithidden}
				benefitSlider={pavilionData?.benefitslider}
			/>
			<Main
				isBlockHidden={pavilionData?.ismainhidden}
				title={pavilionData?.maintitle}
				content={pavilionData?.maincontent}
				slider={pavilionData?.mainslider}
				layout={pavilionData?.mainlayout}
				phone={generalSettings?.phone}
				whatsapp={generalSettings?.whatsapp}
			/>
			<SimilarObjects
				isBlockHidden={pavilionData?.issimilarloungeshidden}
				title={pavilionData?.titlesimilarlounges}
				similarObjects={pavilionData?.similarlounges}
			/>
			<AvailableEquipment
				isBlockHidden={pavilionData?.isequipmenthidden}
				title={pavilionData?.titleequipment}
				equipmentItems={pavilionData?.equipment}
			/>
			<Rates
				isBlockHidden={pavilionData?.israteshidden}
				title={pavilionData?.titlerates}
				content={pavilionData?.contentrates}
				phone={generalSettings?.phone}
				rates={pavilionData?.rates}
			/>
		</>
	);
};

export default Pavilion;
