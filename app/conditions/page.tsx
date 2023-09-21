import Conditions from '@/components/screens/conditions/Conditions'
import { pagesUri } from '@/constants/pages'
import { getMetadata } from '@/utils/seo/getMetadata'
import { Metadata, NextPage } from 'next';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.conditions);

const ConditionsPage: NextPage = () => {
	return <Conditions />;
};

export default ConditionsPage;
