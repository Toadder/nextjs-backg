import { FC } from 'react'

import Content from './Content/Content'
import Intro from './Intro/Intro'
import styles from './Price.module.scss'
import { IPrice } from './price.interface'

const Price: FC<IPrice> = ({ title, content, image, file }) => (
	<section className={styles.root}>
		<div className={styles.inner}>
			<Intro title={title} image={image} />
			<Content content={content} file={file} />
		</div>
	</section>
)

export default Price
