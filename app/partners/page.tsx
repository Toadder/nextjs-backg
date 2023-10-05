import { Metadata, NextPage } from 'next';
import { use } from 'react';

import Partners from '@/components/screens/partners/Partners';

import { getMetadata } from '@/utils/seo/getMetadata';

import client from '@/config/apollo/client';
import { GET_PARTNERS_DATA } from '@/config/apollo/queries/get-partners-data';

import { pagesUri } from '@/constants/pages';
import { IPartnersData, IPartnersNode } from '@/components/screens/partners/partners.interface'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.partners);

const getData = async () => {
	const { error, data } = await client.query({ query: GET_PARTNERS_DATA });

	const title: string = data?.fields?.acfPartnersFields?.title || '';
	const partners: IPartnersData = data?.partners?.edges?.map(
		({ node }: { node: IPartnersNode }) => ({
			id: node?.id,
			content: node?.acfPartnerFields?.content,
			image: node?.acfPartnerFields?.image
		})
	);

	return { error, title, partners };
};

const PartnersPage: NextPage = () => {
	const { error, title, partners } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	return <Partners title={title} partners={partners} />;
};

export default PartnersPage;
