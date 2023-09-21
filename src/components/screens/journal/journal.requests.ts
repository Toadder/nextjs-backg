import client from '@/config/apollo/client';
import { GET_ARTICLES_DATA } from '@/config/apollo/queries/get-articles-data';

import { ARTICLES_TO_LOAD } from './journal.constants';
import { IJournalData } from './journal.interface';

export const getData = async (after: string | null = null) => {
	const { error, data } = await client.query({
		query: GET_ARTICLES_DATA,
		variables: { first: ARTICLES_TO_LOAD, after }
	});
	const journalData: IJournalData = data?.allJournal?.edges;
	const hasNextPage: boolean = data?.allJournal?.pageInfo?.hasNextPage;
	const endCursor: string | null = data?.allJournal?.pageInfo?.endCursor;
	return { error, journalData, hasNextPage, endCursor };
};
