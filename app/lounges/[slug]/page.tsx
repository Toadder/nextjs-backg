import { NextPage } from 'next';

import Lounge from '@/components/screens/lounge/Lounge';

export const dynamicParams = false;

export const generateStaticParams = () => {
	return [
		{
			slug: 'podcast'
		},
		{
			slug: 'neon'
		},
		{
			slug: 'kuhnya'
		},
		{
			slug: 'zal-2'
		},
		{
			slug: 'gostinaya'
		}
	];
};

const LoungePage: NextPage = () => {
	return <Lounge />;
};

export default LoungePage;
