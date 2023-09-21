import { FC } from 'react';

import { IArticleMainContentt } from '../../article.interface';

import styles from './MainContent.module.scss';
import { WithAnimation } from '@/hoc/WithAnimation';

const MainContent: FC<IArticleMainContentt> = ({ content }) => {
	if (!content?.length) return;

	return (
		<WithAnimation>
			<div className={styles.root}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content }}
				></div>
			</div>
		</WithAnimation>
	);
};

export default MainContent;
