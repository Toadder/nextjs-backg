'use client'

import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import styles from './Property.module.scss'
import { IProperty } from './property.interface'

const Property: FC<IProperty> = ({ icon, title, content, excerpt }) => {
	const isFieldsExists: boolean =
		!!icon?.sourceUrl?.length ||
		!!title?.length ||
		!!content?.length ||
		!!excerpt?.length

	if (!isFieldsExists) returnц

	const [isOpened, setIsOpened] = useState<boolean>(false)

	const toggleIsOpened = (): void => {
		setIsOpened(prevState => !prevState)
	}

	return (
		<div className={styles.property} onClick={toggleIsOpened}>
			<div className={styles.preview}>
				<Image
					className={styles.icon}
					src={icon?.sourceUrl || ''}
					width={48}
					height={48}
					alt={icon?.altText || ''}
				/>
				<div className={styles.title}>{title}</div>
				<p className={styles.text}>{excerpt}</p>
			</div>
			<div
				className={cn(styles.content, {
					[styles.active]: isOpened
				})}
			>
				<div className={styles.title}>{title}</div>
				<p className={styles.text}>{content}</p>
			</div>
		</div>
	)
}

export default Property
