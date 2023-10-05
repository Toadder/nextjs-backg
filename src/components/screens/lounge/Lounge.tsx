import { notFound } from 'next/navigation';
import { FC, use } from 'react';

import IntroSlider from '@/components/screens/lounge/IntroSlider/IntroSlider';
import Booking from '@/components/shared/Booking/Booking';
import RentalWidget from '@/components/shared/RentalWidget/RentalWidget';
import SimilarObjects from '@/components/shared/SimilarLounges/SimilarObjects';

import client from '@/config/apollo/client';
import { GET_LOUNGE_DATA } from '@/config/apollo/queries/get-lounge-data';

import ExampleSlider from './ExampleSlider/ExampleSlider';
import Main from './Main/Main';
import { ILoungeData } from './lounge.interface';

const getData = async (slug: string) => {
	const { error, data } = await client.query({
		query: GET_LOUNGE_DATA,
		variables: { slug }
	});

	if (!data?.lounge) notFound();

	const loungeData: ILoungeData = data?.lounge?.acfLoungeFields;
	return { error, loungeData };
};

const Lounge: FC<{ slug: string }> = ({ slug }) => {
	const { error, loungeData } = use(getData(slug));

	if (error) {
		console.error(error);
		return;
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
	);
};

export default Lounge;
