import { NextPage } from 'next';
import { Metadata } from 'next';

import Equipment from '@/components/screens/equipment/Equipment';

import { getMetadata } from '@/utils/seo/getMetadata';

import { pagesUri } from '@/constants/pages';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.equipment);

const EquipmentPage: NextPage = () => {
	return <Equipment />;
};

export default EquipmentPage;
