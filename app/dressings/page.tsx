import { Metadata } from 'next';
import { use } from 'react';

import Dressings from '@/components/screens/dressings/Dressings';
import {
	IDressingsData,
	IDressingsItem,
	IDressingsNode
} from '@/components/screens/dressings/dressings.interface';

import { getMetadata } from '@/utils/seo/getMetadata';

import client from '@/config/apollo/client';
import { GET_DRESSINGS_DATA } from '@/config/apollo/queries/get-dressings-data';

import { pagesUri } from '@/constants/pages';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.dressings);

const getData = async () => {
	const { error, data } = await client.query({ query: GET_DRESSINGS_DATA });
	const dressingsData: IDressingsData = data?.dressings?.edges?.map(
		({ node }: { node: IDressingsNode }, index: number): IDressingsItem => ({
			id: node?.id,
			slug: node?.slug,
			title: node?.acfDressingFields?.maintitle,
			content: node?.acfDressingFields?.maincontent,
			slider: node?.acfDressingFields?.mainslider,
			itemIndex: index
		})
	);
	return { error, dressingsData };
};

const DressingsPage = () => {
	const { error, dressingsData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	return <Dressings items={dressingsData} />;
};

export default DressingsPage;
