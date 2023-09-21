import Link from 'next/link';
import { FC, use } from 'react';

import Heading from '@/components/ui/Heading/Heading';

import client from '@/config/apollo/client';
import { GET_BOOKING_DATA } from '@/config/apollo/queries/get-booking-data';

import styles from './Booking.module.scss';
import { IBookingData } from './booking.interface';
import { pagesUri } from '@/constants/pages';
import { WithAnimation } from '@/hoc/WithAnimation';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_BOOKING_DATA });
	const bookingData: IBookingData = data?.fields?.acfSettings;
	return { error, bookingData };
};

const Booking: FC = () => {
	const { error, bookingData } = use(getData());
	const isFieldsExist: boolean =
		!!bookingData?.bookingtitle?.length ||
		!!bookingData?.bookingcontent?.length ||
		!!bookingData?.bookingfile?.mediaItemUrl?.length;

	if (error) {
		console.log(error);
		return;
	}

	if (!isFieldsExist) return;

	return (
		<WithAnimation>
			<section id="booking" className={styles.root}>
				<div className={styles.inner}>
					{bookingData?.bookingtitle?.length ? (
						<Heading className="text-center">
							{bookingData?.bookingtitle}
						</Heading>
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
		</WithAnimation>
	);
};

export default Booking;
