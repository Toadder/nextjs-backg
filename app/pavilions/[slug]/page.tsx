import { NextPage } from 'next';

import Pavilion from '@/components/screens/pavilion/Pavilion';

export const dynamicParams = false;

export const generateStaticParams = () => {
	return [
		{
			slug: 'cycle'
		},
		{
			slug: 'big-cycle'
		}
	];
};

const PavilionPage: NextPage = () => {
	return <Pavilion />;
};

export default PavilionPage;
