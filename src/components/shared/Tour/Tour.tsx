import Image from 'next/image'
import { FC, use } from 'react'

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'

import tourService from '@/services/tour.service'

import styles from './Tour.module.scss'

const Tour: FC = () => {
	const { error, tourData } = use(tourService.getData())

	if (error) {
		console.error(error)
		return
	}

	if (tourData?.istourhidden) return

	return (
		<div className={styles.root}>
			<a href="/" className={styles.link}>
				<Image
					className={styles.bg}
					src={tourData?.tourimage?.sourceUrl || ''}
					fill
					alt={tourData?.tourimage?.altText || ''}
					sizes="100vw"
				/>
				<div className={styles.inner}>
					{tourData?.tourtitle?.length ? (
						<div className={styles.text}>{tourData?.tourtitle}</div>
					) : null}
					<FontAwesomeIcon name="FaHandPointUp" />
				</div>
			</a>
		</div>
	)
}

export default Tour
