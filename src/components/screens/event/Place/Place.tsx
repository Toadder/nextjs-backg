import { FC } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import { IEventPlace } from '../event.interface'

import styles from './Place.module.scss'
import PlaceSlider from './PlaceSlider'

const Place: FC<IEventPlace> = ({
	isBlockHidden,
	title,
	address,
	addressLink,
	place,
	slider,
	eventWidget
}) => {
	if (isBlockHidden) return

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				{title?.length ? (
					<Heading className={styles.title}>{title}</Heading>
				) : null}

				<div className={styles.info}>
					{address?.length && addressLink?.length ? (
						<div className={styles.address}>
							<span>Адрес:</span>
							<a href={addressLink} target="_blank">
								{address}
							</a>
						</div>
					) : null}

					{place?.length ? <div className={styles.place}>{place}</div> : null}
				</div>
			</div>
			<PlaceSlider slider={slider} />
			{eventWidget?.length ? (
				<div className={styles.inner}>
					<a href={eventWidget} target="_blank" className={styles.btn}>
						Зарегистрироваться
					</a>
				</div>
			) : null}
		</section>
	)
}

export default Place
