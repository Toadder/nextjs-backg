import {FC} from 'react'

import styles from './Examples.module.scss'
import Heading from '@/components/ui/Heading/Heading'
import ExamplesGrid from './ExamplesGrid'
import { IEventExamples } from '../event.interface'

const Examples: FC<IEventExamples> = ({
	isBlockHidden,
	title,
	items
}) => {
	if(isBlockHidden) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{
					title?.length ? (
						<Heading className={styles.title}>
						{title}
					</Heading>	
					) : null
				}
				<ExamplesGrid items={items} />
			</div>
		</section>
	)
}

export default Examples