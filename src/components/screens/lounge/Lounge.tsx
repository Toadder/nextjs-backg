import { notFound } from 'next/navigation';
import { FC, use } from 'react';

import Booking from '@/components/shared/Booking/Booking';
import IntroSlider from '@/components/shared/IntroSlider/IntroSlider';
import RentalWidget from '@/components/shared/RentalWidget/RentalWidget';

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

	if(!data?.lounge) notFound();

	const loungeData: ILoungeData = data?.lounge?.acfLoungeFields;
	return { error, loungeData };
};

const Lounge: FC<{ slug: string }> = ({ slug }) => {
	const { error, loungeData } = use(getData(slug));

	if (error) {
		console.log(error);
		return;
	}

	return (
		<>
			<IntroSlider introSlider={loungeData?.introslider} />
			<Main
				title={loungeData?.maintitle}
				mainContent={loungeData?.maincontent}
				videoMp4={loungeData?.mainvideomp4}
				videoWebm={loungeData?.mainvideowebm}
				layout={loungeData?.layout}
				layoutContent={loungeData?.layoutcontent}
				properties={loungeData?.layoutproperties}
			/>
			<ExampleSlider exampleSlider={loungeData?.exampleslider} />
			<Booking />
			<RentalWidget
				iframeSrc={loungeData?.iframesrc}
				iframeClass={loungeData?.iframeclass}
				iframeStyles={loungeData?.iframestyles}
			/>
		</>
	);
};

export default Lounge;
