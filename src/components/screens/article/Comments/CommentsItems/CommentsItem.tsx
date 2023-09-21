import Image from 'next/image';
import { FC } from 'react';

import { COMMENT_NAME_LENGTH } from '../../article.constants';
import { IArticleCommentsItem } from '../../article.interface';

import styles from './CommentsItems.module.scss';

const CommentsItem: FC<IArticleCommentsItem> = ({ author, content, date }) => {
	if (!author?.node?.name?.length && !content?.length && !date?.length) return;

	const commentDate: Date = new Date(date || '1970-01-01');
	const day: string = `${commentDate.getDate()}`.padStart(2, '0');
	const month: string = `${commentDate.getMonth() + 1}`.padStart(2, '0');
	const year: string = `${commentDate.getFullYear()}`;

	const nameLength: number = Number(author?.node?.name?.length);
	const formattedName: string =
		nameLength > COMMENT_NAME_LENGTH
			? `${author?.node?.name?.slice(0, COMMENT_NAME_LENGTH).trim()}...`
			: String(author?.node?.name);
	const formattedDate: string = `${day}.${month}.${year}`;

	return (
		<div className={styles.comment}>
			<div className={styles.top}>
				<div className={styles.image}>
					<Image
						src="/logo.png"
						width={48}
						height={48}
						sizes="(max-width: 48em) 2.5rem, 3.5rem"
						alt=""
					/>
				</div>
				<div className={styles.info}>
					<div className={styles.name}>{formattedName}</div>
					<div className={styles.date}>{formattedDate}</div>
				</div>
			</div>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content || '' }}
			/>
		</div>
	);
};

export default CommentsItem;
