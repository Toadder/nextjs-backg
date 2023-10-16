import { FC } from 'react'

import Description from '@/components/ui/Description/Description'
import Heading from '@/components/ui/Heading/Heading'

import { IDressingsContent } from '../dressings.interface'

import styles from './Content.module.scss'

const Content: FC<IDressingsContent> = ({ title, content }) => {
	return (
		<div className={styles.root}>
			{title?.length ? (
				<Heading className={styles.title} htmlContent={title} />
			) : null}
			{content?.length ? <Description htmlContent={content} /> : null}
		</div>
	)
}

export default Content
