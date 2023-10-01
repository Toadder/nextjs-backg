import Image from 'next/image';
import { FC, use } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import client from '@/config/apollo/client';
import { GET_TOUR_DATA } from '@/config/apollo/queries/get-tour-data';

import styles from './Tour.module.scss';
import { ITourData } from './tour.interface';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_TOUR_DATA });
	const tourData: ITourData = data?.fields?.acfSettings;
	return { error, tourData };
};

const Tour: FC = () => {
	const { error, tourData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	if (tourData?.istourhidden) return;

	return (
		<div className={styles.root}>
			<a href="/" className={styles.link}>
				<Image
					className={styles.bg}
					src="/static/shared/tour/main.webp"
					fill
					alt=""
					sizes="100vw"
				/>
				<div className={styles.inner}>
					<div className={styles.text}>360° ТУР</div>
					<FontAwesomeIcon name="FaHandPointUp" />
				</div>
			</a>
		</div>
	);
};

export default Tour;
