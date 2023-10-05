import { Metadata, NextPage } from 'next';

import Home from '@/components/screens/home/Home';

import { getMetadata } from '@/utils/seo/getMetadata';

import { pagesUri } from '@/constants/pages';
import { GET_OBJECTS_DATA } from '@/config/apollo/queries/get-objects-data'

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.home);

const HomePage: NextPage = () => {
	return <Home objectsQuery={GET_OBJECTS_DATA} page='home' />;
};

export default HomePage;
