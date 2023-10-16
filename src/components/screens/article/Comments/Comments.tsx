import { FC } from 'react'

import { IArticleComments } from '../article.interface'

import styles from './Comments.module.scss'
import CommentsForm from './CommentsForm/CommentsForm'
import CommentsItems from './CommentsItems/CommentsItems'

const Comments: FC<IArticleComments> = ({
	slug,
	postId,
	comments,
	hasNextPage,
	endCursor
}) => {
	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<CommentsForm postId={postId} />
				<CommentsItems
					slug={slug}
					comments={comments}
					hasNextPage={hasNextPage}
					endCursor={endCursor}
				/>
			</div>
		</section>
	)
}

export default Comments
