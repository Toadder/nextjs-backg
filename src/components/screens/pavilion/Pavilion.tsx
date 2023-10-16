import { FC, use } from 'react'

import SimilarObjects from '@/components/shared/SimilarLounges/SimilarObjects'

import AvailableEquipment from './AvailableEquipment/AvailableEquipment'
import BenefitSlider from './BenefitSlider/BenefitSlider'
import Main from './Main/Main'
import Rates from './Rates/Rates'
import pavilionService from './pavilion.service'

const Pavilion: FC<{ slug: string }> = ({ slug }) => {
	const { error, generalSettings, pavilionData } = use(
		pavilionService.getData(slug)
	)

	if (error) {
		console.error(error)
		return
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
	)
}

export default Pavilion
