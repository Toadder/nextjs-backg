import { FC } from 'react';

import { IArticleComments } from '../article.interface';

import styles from './Comments.module.scss';
import CommentsForm from './CommentsForm/CommentsForm';
import CommentsItems from './CommentsItems/CommentsItems';
import { WithAnimation } from '@/hoc/WithAnimation';

const Comments: FC<IArticleComments> = ({
	slug,
	postId,
	comments,
	hasNextPage,
	endCursor
}) => {
	return (
		<WithAnimation>
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
		</WithAnimation>
	);
};

export default Comments;
