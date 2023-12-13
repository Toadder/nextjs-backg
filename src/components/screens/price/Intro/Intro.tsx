import Image from 'next/image'
import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import { IPriceIntro } from '../price.interface'

import styles from './Intro.module.scss'

const Intro: FC<IPriceIntro> = ({ title, image }) => {
	if (!image?.sourceUrl?.length) return

	return (
		<div className={styles.root}>
			<Image
				src={image.sourceUrl}
				fill
				sizes="(max-width: 80em) 100vw, 73.25rem"
				alt={image.altText || ''}
				className={styles.image}
				priority
			/>
			{title?.length ? (
				<Heading type="h1" className={styles.title}>
					{title}
				</Heading>
			) : null}
		</div>
	)
}

export default Intro
