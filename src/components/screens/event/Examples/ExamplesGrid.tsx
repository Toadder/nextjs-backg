'use client'

import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'

import { IEventExamplesGrid } from '../event.interface'

import styles from './Examples.module.scss'

const ExamplesGrid: FC<IEventExamplesGrid> = ({ items }) => {
	if (!items?.length) return

	const [isLoaded, setIsLoaded] = useState<boolean>(false)

	useEffect(() => setIsLoaded(true), [])

	return (
		<FancyboxContainer>
			<Masonry
				style={{ opacity: Number(isLoaded) }}
				breakpointCols={{
					default: 4,
					1024: 3,
					768: 2
				}}
				className={styles.masonryContainer}
				columnClassName={styles.masonryColumn}
			>
				{items?.map(image => (
					<a
						key={image?.sourceUrl}
						href={image?.sourceUrl || ''}
						data-fancybox="examples"
					>
						<Image
							src={image?.sourceUrl || ''}
							width={276}
							height={0}
							alt={image?.altText || ''}
							sizes="(max-width: 48em) 50vw, (max-width: 64em) 33vw, 17.25rem"
						/>
					</a>
				))}
			</Masonry>
		</FancyboxContainer>
	)
}

export default ExamplesGrid
