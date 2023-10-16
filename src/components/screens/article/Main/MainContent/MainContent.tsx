import { FC } from 'react'

import { IArticleMainContent } from '../../article.interface'

import styles from './MainContent.module.scss'

const MainContent: FC<IArticleMainContent> = ({ content }) => {
	if (!content?.length) return

	return (
		<div className={styles.root}>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</div>
	)
}

export default MainContent
