import Image from 'next/image'
import { FC } from 'react'

import Description from '@/components/ui/Description/Description'
import Heading from '@/components/ui/Heading/Heading'

import { IEventSpeaker } from '../event.interface'

import styles from './Speaker.module.scss'

const Speaker: FC<IEventSpeaker> = ({
	isBlockHidden,
	title,
	image,
	content
}) => {
	if (isBlockHidden || !image?.sourceUrl?.length || !content?.length) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}

				<div className={styles.main}>
					<div className={styles.image}>
						<Image
							src={image?.sourceUrl}
							width={265}
							height={0}
							alt={image?.altText || ''}
							sizes="(max-width: 48em) 16.5625rem, 100vw"
						/>
					</div>
					<Description className={styles.content} htmlContent={content} />
				</div>
			</div>
		</section>
	)
}

export default Speaker
