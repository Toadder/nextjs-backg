import { Metadata } from 'next';

import { IMetadata } from '@/shared/types/seo.types';

import client from '@/config/apollo/client';
import { GET_PAGE_METADATA } from '@/config/apollo/queries/get-page-metadata';

export const getMetadata = async (path: string): Promise<Metadata> => {
	const { error, data } = await client.query({
		query: GET_PAGE_METADATA,
		variables: { id: path }
	});

	if (error) {
		console.error(error);
		return {};
	}

	if (!data?.page)
		return {
			title: 'Страница не найдена',
			robots: { index: false, follow: false }
		};

	const metadata: IMetadata = data?.page?.seo;

	return {
		title: metadata?.title,
		description: metadata?.metaDesc,
		keywords: metadata?.focuskw,
		robots: `${metadata?.metaRobotsNoindex}, ${metadata?.metaRobotsNofollow}`,
		metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
		alternates: { canonical: path },
		openGraph: {
			title: metadata?.opengraphTitle || '',
			siteName: metadata?.opengraphTitle || '',
			description: metadata?.opengraphDescription || '',
			images: metadata?.opengraphImage?.sourceUrl || '',
			url: metadata?.opengraphUrl || '',
			type: (metadata?.opengraphType as any) || 'article'
		}
	};
};
