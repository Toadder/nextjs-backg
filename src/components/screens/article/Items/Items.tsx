import { FC } from 'react'

import JournalCard from '@/components/shared/JournalCard/JournalCard'
import Heading from '@/components/ui/Heading/Heading'

import { IArticleItems } from '../article.interface'

import styles from './Items.module.scss'

const Items: FC<IArticleItems> = ({ currentId, articles }) => {
	if (!articles?.length) return

	const filteredArticles = articles
		?.filter(({ node }) => node?.id !== currentId)
		.slice(0, 4)

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<Heading className={styles.title}>Недавно добавлено</Heading>
				<div className={styles.gridContainer}>
					{filteredArticles?.map(({ node }) => (
						<JournalCard
							key={node?.id}
							title={node?.title}
							excerpt={node?.acfJournalData?.previewcontent}
							link={node?.uri}
							image={node?.acfJournalData?.previewimage}
							imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, 18.3125rem"
							size="small"
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Items
