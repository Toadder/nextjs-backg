import { FC, use } from 'react';

import { IGeneralSettings } from '@/shared/types/general.types';

import client from '@/config/apollo/client';
import { GET_CONDITIONS_DATA } from '@/config/apollo/queries/get-conditions-data';

import styles from './Conditions.module.scss';
import { IConditionsData } from './conditions.interface';

const getData = async () => {
	const { error, data } = await client.query({ query: GET_CONDITIONS_DATA });
	const generalSettings: IGeneralSettings = data?.generalSettings?.acfSettings;
	const conditionsData: IConditionsData = data?.page;
	return { error, generalSettings, conditionsData };
};

const Conditions: FC = () => {
	const { error, generalSettings, conditionsData } = use(getData());

	if (error) {
		console.error(error);
		return;
	}

	if (!conditionsData?.content?.length) return;

	return (
		<div className={styles.root}>
			<div className={styles.inner}>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: conditionsData?.content || '' }}
				/>
				{generalSettings?.bookingfile?.mediaItemUrl?.length ? (
					<a
						className={styles.btn}
						target="_blank"
						href={generalSettings?.bookingfile?.mediaItemUrl}
					>
						Полные условия
					</a>
				) : null}
			</div>
		</div>
	);
};

export default Conditions;
