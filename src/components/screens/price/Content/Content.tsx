import { FC } from 'react'

import { IPriceContent } from '../price.interface'

import styles from './Content.module.scss'

const Content: FC<IPriceContent> = ({ content, file }) => {
	if (!content?.length && !file?.mediaItemUrl?.length) return

	return (
		<div className={styles.root}>
			{content?.length ? (
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			) : null}
			{file?.mediaItemUrl?.length ? (
				<a href={file.mediaItemUrl} target="_blank" className={styles.btn}>
					Смотреть цены
				</a>
			) : null}
		</div>
	)
}

export default Content
