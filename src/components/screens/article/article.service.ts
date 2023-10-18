import { notFound } from 'next/navigation'

import client from '@/config/apollo/client'
import { GET_ARTICLE_DATA } from '@/config/apollo/queries/get-article-data'

import { ARTICLES_TO_LOAD, COMMENTS_TO_SHOW } from './article.constant'
import {
	IArticleData,
	IArticleGetDataResponse,
	IArticleNode
} from './article.interface'

class ArticleService {
	async getData(
		slug: string,
		after: string | null = null
	): Promise<IArticleGetDataResponse> {
		const { error, data } = await client.query({
			query: GET_ARTICLE_DATA,
			variables: {
				slug,
				articlesQty: ARTICLES_TO_LOAD,
				commentsQty: COMMENTS_TO_SHOW,
				commentsCursor: after
			}
		})

		if (!data?.journal) notFound()

		const articleData: IArticleData = data?.journal
		const commentsHasNextPage: boolean =
			articleData?.comments?.pageInfo?.hasNextPage || false
		const commentsEndCursor: string | null =
			articleData?.comments?.pageInfo?.endCursor || null
		const otherArticles: IArticleNode[] = data?.allJournal?.edges

		return {
			error,
			articleData,
			commentsHasNextPage,
			commentsEndCursor,
			otherArticles
		}
	}
}

export default new ArticleService()
