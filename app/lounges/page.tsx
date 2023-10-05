import Home from '@/components/screens/home/Home'
import { GET_LOUNGES_OBJECTS_DATA } from '@/config/apollo/queries/get-objects-data'
import { pagesUri } from '@/constants/pages'
import { getMetadata } from '@/utils/seo/getMetadata'
import { Metadata, NextPage } from 'next';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.lounges);

const LoungesPage: NextPage = () => {
	return <Home objectsQuery={GET_LOUNGES_OBJECTS_DATA} page='lounges' />;
};

export default LoungesPage;
