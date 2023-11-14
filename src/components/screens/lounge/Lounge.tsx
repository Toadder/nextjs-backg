import { FC, use } from 'react'

import IntroSlider from '@/components/screens/lounge/IntroSlider/IntroSlider'
import Booking from '@/components/shared/Booking/Booking'
import RentalWidget from '@/components/shared/RentalWidget/RentalWidget'
import SimilarObjects from '@/components/shared/SimilarLounges/SimilarObjects'

import ExampleSlider from '../../shared/ExampleSlider/ExampleSlider'

import Main from './Main/Main'
import loungeService from './lounge.service'

const Lounge: FC<{ slug: string }> = ({ slug }) => {
	const { error, loungeData } = use(loungeService.getData(slug))

	if (error) {
		console.error(error)
		return
	}

	return (
		<>
			<IntroSlider
				isBlockHidden={loungeData?.isintrohidden}
				introSlider={loungeData?.introslider}
			/>
			<Main
				isMainHidden={loungeData?.ismainhidden}
				title={loungeData?.maintitle}
				mainContent={loungeData?.maincontent}
				videoMp4={loungeData?.mainvideomp4}
				videoWebm={loungeData?.mainvideowebm}
				isLayoutHidden={loungeData?.islayouthidden}
				layout={loungeData?.layout}
				layoutContent={loungeData?.layoutcontent}
				properties={loungeData?.layoutproperties}
			/>
			<ExampleSlider
				isBlockHidden={loungeData?.isexamplehidden}
				exampleSlider={loungeData?.exampleslider}
			/>
			<SimilarObjects
				isBlockHidden={loungeData?.issimilarloungeshidden}
				title={loungeData?.titlesimilarlounges}
				similarObjects={loungeData?.similarlounges}
			/>
			<Booking />
			<RentalWidget
				isBlockHidden={loungeData?.isiframehidden}
				iframeSrc={loungeData?.iframesrc}
				iframeClass={loungeData?.iframeclass}
				iframeStyles={loungeData?.iframestyles}
			/>
		</>
	)
}

export default Lounge
