import { FC } from 'react'

import Description from '@/components/ui/Description/Description'

import { IEventContent } from '../event.interface'

import styles from './Content.module.scss'

const Content: FC<IEventContent> = ({ isBlockHidden, content }) => {
	if (isBlockHidden || !content?.length) return

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<Description htmlContent={content} />
			</div>
		</div>
	)
}

export default Content
