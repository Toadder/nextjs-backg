import { Metadata } from 'next';

import Pavilion from '@/components/screens/pavilion/Pavilion';

import { INextContext } from '@/shared/types/next.types';

import { getMetadata } from '@/utils/seo/getMetadata';

import { pagesUri } from '@/constants/pages';

export const dynamic = 'force-dynamic';

export const generateMetadata = (context: INextContext): Promise<Metadata> => {
	const { slug } = context?.params;
	return getMetadata(`${pagesUri.pavilions}/${slug}`);
};

const PavilionPage = (content: INextContext) => {
	const slug = content?.params?.slug || '';
	return <Pavilion slug={slug} />;
};

export default PavilionPage;
