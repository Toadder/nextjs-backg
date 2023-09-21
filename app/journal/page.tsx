import { Metadata, NextPage } from 'next';
import { use } from 'react';

import Journal from '@/components/screens/journal/Journal';
import { getData } from '@/components/screens/journal/journal.requests';

import { getMetadata } from '@/utils/seo/getMetadata';

import { pagesUri } from '@/constants/pages';

export const dynamic = 'force-dynamic';

export const generateMetadata = (): Promise<Metadata> =>
	getMetadata(pagesUri.journal);

const JournalPage: NextPage = () => {
	const { error, journalData, hasNextPage, endCursor } = use(getData());

	if (error) {
		console.log(error);
		return;
	}

	return (
		<Journal
			items={journalData}
			hasNextPage={hasNextPage}
			endCursor={endCursor}
		/>
	);
};

export default JournalPage;
