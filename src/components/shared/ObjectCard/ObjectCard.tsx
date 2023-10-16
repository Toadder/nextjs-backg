import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Label from '@/components/ui/Label/Label'

import styles from './ObjectCard.module.scss'
import { IObjectCard } from './object-card.interface'

const ObjectCard: FC<IObjectCard> = ({
	link,
	title,
	image,
	imageSizes,
	excerpt,
	label,
	isImagePreloaded = false
}) => {
	return (
		<article className={styles.item}>
			<Link href={link || ''} className={styles.link}>
				{image?.sourceUrl?.length ? (
					<Image
						src={image?.sourceUrl}
						fill
						sizes={imageSizes}
						alt={image?.altText || ''}
						className={styles.image}
						priority={isImagePreloaded}
					/>
				) : null}
				<div className={styles.content}>
					{title?.length ? <div className={styles.title}>{title}</div> : null}
					{excerpt?.length ? <p className={styles.text}>{excerpt}</p> : null}
					<button className={styles.button} type="button">
						Подробнее
					</button>
				</div>
				{label ? <Label text={label} /> : null}
			</Link>
		</article>
	)
}

export default ObjectCard
