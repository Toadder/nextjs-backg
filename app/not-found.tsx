import { Metadata, NextPage } from 'next';

import NotFound from '@/components/screens/not-found/NotFound';

export const metadata: Metadata = {
	title: 'Страница не найдена',
	robots: { index: false, follow: false }
};

const NotFoundPage: NextPage = () => {
	return <NotFound />;
};

export default NotFoundPage;
