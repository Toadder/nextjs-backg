import client from '@/config/apollo/client';
import { GET_ARTICLE_DATA } from '@/config/apollo/queries/get-article-data';

import { IJournalData } from '../journal/journal.interface';

import { ARTICLES_TO_LOAD, COMMENTS_TO_SHOW } from './article.constants';
import { IArticleData } from './article.interface';
import { notFound } from 'next/navigation'

export const getData = async (slug: string, after: string | null = null) => {
	const { error, data } = await client.query({
		query: GET_ARTICLE_DATA,
		variables: {
			slug,
			articlesQty: ARTICLES_TO_LOAD,
			commentsQty: COMMENTS_TO_SHOW,
			commentsCursor: after
		}
	});

	if(!data?.journal) notFound();

	const articleData: IArticleData = data?.journal;
	const commentsHasNextPage: boolean = articleData?.comments?.pageInfo?.hasNextPage;
	const commentsEndCursor: string | null = articleData?.comments?.pageInfo?.endCursor || null;
	const otherArticles: IJournalData = data?.allJournal?.edges;
	

	return { error, articleData, commentsHasNextPage, commentsEndCursor, otherArticles };
};
