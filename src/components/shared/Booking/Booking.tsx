import Link from 'next/link'
import { FC, use } from 'react'

import Heading from '@/components/ui/Heading/Heading'

import bookingService from '@/services/booking.service'

import styles from './Booking.module.scss'
import { pagesUri } from '@/constants/pages'

const Booking: FC = () => {
	const { error, bookingData } = use(bookingService.getData())

	const isFieldsExist: boolean =
		!!bookingData?.bookingtitle?.length ||
		!!bookingData?.bookingcontent?.length ||
		!!bookingData?.bookingfile?.mediaItemUrl?.length

	if (error) {
		console.error(error)
		return
	}

	if (!isFieldsExist || bookingData?.isbookinghidden) return

	return (
		<section id="booking" className={styles.root}>
			<div className={styles.inner}>
				{bookingData?.bookingtitle?.length ? (
					<Heading className="text-center">{bookingData?.bookingtitle}</Heading>
				) : null}
				<p className={styles.text}>
					{bookingData?.bookingcontent || ''}
					{bookingData?.bookingfile ? (
						<>
							Нажимая кнопку забронировать, вы соглашаетесь с{' '}
							<a
								href={bookingData?.bookingfile?.mediaItemUrl || ''}
								target="_blank"
							>
								общими условиями аренды.
							</a>
						</>
					) : null}
				</p>
				<Link href={pagesUri.conditions} className={styles.link}>
					Условия аренды
				</Link>
			</div>
		</section>
	)
}

export default Booking
