import { FC, use } from 'react'

import articleService from '@/services/article.service'

import Comments from './Comments/Comments'
import Items from './Items/Items'
import Main from './Main/Main'

const Article: FC<{ slug: string }> = ({ slug }) => {
	const {
		error,
		articleData,
		commentsHasNextPage,
		commentsEndCursor,
		otherArticles
	} = use(articleService.getData(slug))

	if (error) {
		console.error(error)
		return
	}

	return (
		<>
			<Main
				title={articleData?.title}
				slider={articleData?.acfJournalData?.mainslider}
				date={articleData?.date}
				content={articleData?.content}
			/>
			<Items currentId={articleData?.id} articles={otherArticles} />
			<Comments
				slug={slug}
				postId={articleData?.databaseId}
				comments={articleData?.comments?.nodes}
				hasNextPage={commentsHasNextPage}
				endCursor={commentsEndCursor}
			/>
		</>
	)
}

export default Article
