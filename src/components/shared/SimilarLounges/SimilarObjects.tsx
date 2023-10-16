import { FC } from 'react'

import ObjectCard from '@/components/shared/ObjectCard/ObjectCard'
import Heading from '@/components/ui/Heading/Heading'

import { parseToObjectType } from '@/utils/data/parseToObjectType'

import styles from './SimilarObjects.module.scss'
import { ISimilarObjects } from './similar-objects.interface'

const SimilarObjects: FC<ISimilarObjects> = ({
	isBlockHidden,
	title,
	similarObjects
}) => {
	if (!similarObjects?.length || isBlockHidden) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}

				<div className={styles.items}>
					{similarObjects?.map(element => {
						if (!element) return

						const object = parseToObjectType(element)
						return (
							<ObjectCard
								key={object?.id}
								imageSizes="(max-width: 48em) 100vw, (max-width: 64em) 50vw, calc(75rem / 2)"
								image={object?.image}
								title={object?.title}
								excerpt={object?.excerpt}
								link={object?.link}
								label={object?.label}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default SimilarObjects
