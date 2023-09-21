import { Metadata, NextPage } from 'next';

import Home from '@/components/screens/home/Home';

import { getMetadata } from '@/utils/seo/getMetadata';

import { pagesUri } from '@/constants/pages';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.home);

const HomePage: NextPage = () => {
	return <Home />;
};

export default HomePage;
