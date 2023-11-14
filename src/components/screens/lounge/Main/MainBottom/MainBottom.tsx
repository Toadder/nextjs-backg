import Image from 'next/image'
import { FC } from 'react'

import Description from '@/components/ui/Description/Description'
import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'
import Property from '@/components/ui/Property/Property'

import { ILoungeBottom } from '../../lounge.interface'

import styles from './MainBottom.module.scss'

const MainBottom: FC<ILoungeBottom> = ({
	isBlockHidden,
	layout,
	content,
	properties
}) => {
	if (isBlockHidden) return

	return (
		<div className={styles.root}>
			{layout?.sourceUrl?.length ? (
				<FancyboxContainer className={styles.media}>
					<a
						className={styles.link}
						href={layout?.sourceUrl || ''}
						data-fancybox="mainBottomPlan"
					>
						<Image
							src={layout?.sourceUrl || ''}
							width={520}
							height={0}
							sizes="(max-width: 32.5em) 100vw, 32.5rem"
							alt={layout?.altText || ''}
						/>
					</a>
				</FancyboxContainer>
			) : null}

			{content?.length || properties?.length ? (
				<div className={styles.info}>
					<Description htmlContent={content || ''} />
					{properties?.length ? (
						<div className={styles.properties}>
							{properties?.map(property => (
								<Property
									key={property?.title}
									icon={property?.icon}
									title={property?.title}
									excerpt={property?.excerpt}
									content={property?.content}
								/>
							))}
						</div>
					) : null}
				</div>
			) : null}
		</div>
	)
}

export default MainBottom
